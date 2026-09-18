"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ViewerFlags = {
  autoRotate: boolean;
  wireframe: boolean;
  animate: boolean;
};

type ViewerApi = {
  setFlags: (flags: ViewerFlags) => void;
  reset: () => void;
};

type ViewerMaterial = import("three").Material & {
  wireframe?: boolean;
  color?: import("three").Color;
};

export type ModelViewerProps = {
  /** URL of the .glb file to inspect. */
  src: string;
  /** Name shown in the top-right badge, e.g. "pet-dog.glb". */
  fileName: string;
  /** Reference image shown in the bottom-left "input image" card. */
  inputImage: string;
  inputAlt: string;
  inputFormat?: string;
  /** Still frame used when WebGL is unavailable or the model fails to load. */
  fallbackImage: string;
  fallbackAlt: string;
  /** Yaw applied to the mesh so it faces the camera on first paint. */
  modelYaw?: number;
};

const DEFAULT_FLAGS: ViewerFlags = {
  autoRotate: true,
  wireframe: false,
  animate: true,
};

/** Longest side of the mesh once normalised, in world units. */
const MODEL_SPAN = 1;
/** Camera distance from the model centre, in world units. */
const CAMERA_DISTANCE = 1.95;
/** Vertical camera angle, in radians above the horizon. */
const CAMERA_PITCH = 0.26;
/** Horizontal camera angle, in radians. */
const CAMERA_YAW = 0.6;

export default function ModelViewer({
  src,
  fileName,
  inputImage,
  inputAlt,
  inputFormat = "png",
  fallbackImage,
  fallbackAlt,
  modelYaw = 0,
}: ModelViewerProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const apiRef = useRef<ViewerApi | null>(null);
  const latestFlags = useRef<ViewerFlags>(DEFAULT_FLAGS);
  const [inView, setInView] = useState(false);
  const [flags, setFlags] = useState<ViewerFlags>(DEFAULT_FLAGS);
  const [phase, setPhase] = useState<"waiting" | "loading" | "ready" | "error">(
    "waiting",
  );
  const [progress, setProgress] = useState(0);
  const [triangles, setTriangles] = useState<number | null>(null);

  // Only spin up a WebGL context once the viewer scrolls close to the viewport.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let teardown: (() => void) | null = null;

    const boot = async () => {
      try {
        const THREE = await import("three");
        const { GLTFLoader } = await import(
          "three/examples/jsm/loaders/GLTFLoader.js"
        );
        const { OrbitControls } = await import(
          "three/examples/jsm/controls/OrbitControls.js"
        );
        const { RoomEnvironment } = await import(
          "three/examples/jsm/environments/RoomEnvironment.js"
        );
        if (disposed) return;

        setPhase("loading");

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(host.clientWidth, host.clientHeight, false);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.06;
        const canvas = renderer.domElement;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.display = "block";
        // Keep vertical page scrolling usable on touch devices.
        canvas.style.touchAction = "pan-y";
        host.appendChild(canvas);

        const scene = new THREE.Scene();

        // Image-based lighting keeps the PBR materials from reading as mud.
        const pmrem = new THREE.PMREMGenerator(renderer);
        const room = new RoomEnvironment();
        const envTarget = pmrem.fromScene(room, 0.04);
        scene.environment = envTarget.texture;
        scene.environmentIntensity = 0.85;
        room.dispose();
        pmrem.dispose();

        const key = new THREE.DirectionalLight(0xfff1de, 2.4);
        key.position.set(3.4, 4.6, 3.2);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x9fe3e0, 1.3);
        rim.position.set(-3.6, 1.8, -3.4);
        scene.add(rim);
        scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7f6d, 0.55));

        const camera = new THREE.PerspectiveCamera(
          36,
          Math.max(host.clientWidth, 1) / Math.max(host.clientHeight, 1),
          0.01,
          200,
        );

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.dampingFactor = 0.075;
        controls.enablePan = false;
        controls.rotateSpeed = 0.85;
        controls.zoomSpeed = 0.7;
        controls.minPolarAngle = 0.32;
        controls.maxPolarAngle = 1.92;
        controls.autoRotateSpeed = 1.5;
        controls.minDistance = CAMERA_DISTANCE * 0.62;
        controls.maxDistance = CAMERA_DISTANCE * 1.9;

        // Assigned early so an early failure still releases GPU resources.
        teardown = () => {
          controls.dispose();
          envTarget.dispose();
          renderer.dispose();
          if (canvas.parentNode === host) host.removeChild(canvas);
        };

        const flags: ViewerFlags = { ...latestFlags.current };
        const pivot = new THREE.Group();
        scene.add(pivot);

        // Materials rewritten when the wireframe toggle flips.
        const paintable: { material: ViewerMaterial; color: number | null }[] =
          [];

        const home = {
          position: new THREE.Vector3(
            CAMERA_DISTANCE * Math.cos(CAMERA_PITCH) * Math.sin(CAMERA_YAW),
            CAMERA_DISTANCE * Math.sin(CAMERA_PITCH),
            CAMERA_DISTANCE * Math.cos(CAMERA_PITCH) * Math.cos(CAMERA_YAW),
          ),
          target: new THREE.Vector3(0, 0, 0),
          yaw: modelYaw,
        };
        camera.position.copy(home.position);
        controls.target.copy(home.target);
        controls.update();

        const applyFlags = () => {
          controls.autoRotate = flags.autoRotate;
          paintable.forEach(({ material, color }) => {
            material.wireframe = flags.wireframe;
            if (!material.color) return;
            if (flags.wireframe) material.color.set(0xffffff);
            else if (color !== null) material.color.setHex(color);
          });
        };

        const reduced =
          typeof window.matchMedia === "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
          flags.autoRotate = false;
          flags.animate = false;
          setFlags({ ...flags });
        }
        applyFlags();

        controls.addEventListener("start", () => {
          controls.autoRotate = false;
        });
        controls.addEventListener("end", () => {
          controls.autoRotate = flags.autoRotate;
        });

        let mixer: import("three").AnimationMixer | null = null;
        let action: import("three").AnimationAction | null = null;
        let frame = 0;
        let resizeObserver: ResizeObserver | null = null;

        const loader = new GLTFLoader();
        loader.load(
          src,
          (gltf) => {
            if (disposed) return;

            const model = gltf.scene;
            let total = 0;

            model.traverse((object) => {
              const mesh = object as import("three").Mesh;
              if (!mesh.isMesh) return;
              // Skinned bounds drift while animating; skip culling entirely.
              mesh.frustumCulled = false;

              const geometry = mesh.geometry;
              if (geometry?.index) total += geometry.index.count / 3;
              else if (geometry?.attributes.position) {
                total += geometry.attributes.position.count / 3;
              }

              const materials = Array.isArray(mesh.material)
                ? mesh.material
                : [mesh.material];
              materials.forEach((raw) => {
                const material = raw as ViewerMaterial | null;
                if (!material) return;
                const standard = material as ViewerMaterial & {
                  metalness?: number;
                  roughness?: number;
                  envMapIntensity?: number;
                };
                // Metalness without a matching environment reads as mud.
                if (typeof standard.metalness === "number") {
                  standard.metalness = Math.min(standard.metalness, 0.12);
                }
                if (typeof standard.roughness === "number") {
                  standard.roughness = Math.min(
                    Math.max(standard.roughness, 0.35),
                    0.85,
                  );
                }
                standard.envMapIntensity = 1.05;
                if (material.wireframe !== undefined) {
                  paintable.push({
                    material,
                    color: material.color ? material.color.getHex() : null,
                  });
                }
              });
            });

            if (gltf.animations.length) {
              mixer = new THREE.AnimationMixer(model);
              const clip =
                gltf.animations.find((c) => /idle/i.test(c.name)) ??
                gltf.animations[0];
              action = mixer.clipAction(clip);
              action.play();
            }

            // Normalise scale and centre so any asset frames the same way.
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const centre = box.getCenter(new THREE.Vector3());
            const span = Math.max(size.x, size.y, size.z) || 1;

            const holder = new THREE.Group();
            holder.add(model);
            holder.position.set(-centre.x, -centre.y, -centre.z);
            pivot.add(holder);
            pivot.scale.setScalar(MODEL_SPAN / span);
            pivot.rotation.y = modelYaw;

            setTriangles(Math.round(total));
            setProgress(100);
            setPhase("ready");
            applyFlags();

            const clock = new THREE.Clock();
            const tick = () => {
              const delta = clock.getDelta();
              if (mixer && flags.animate) mixer.update(delta);
              controls.update();
              renderer.render(scene, camera);
              frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);

            const resize = () => {
              const width = Math.max(host.clientWidth, 1);
              const height = Math.max(host.clientHeight, 1);
              camera.aspect = width / height;
              camera.updateProjectionMatrix();
              renderer.setSize(width, height, false);
            };
            resizeObserver = new ResizeObserver(resize);
            resizeObserver.observe(host);
            resize();

            apiRef.current = {
              setFlags: (next) => {
                Object.assign(flags, next);
                applyFlags();
              },
              reset: () => {
                pivot.rotation.y = home.yaw;
                camera.position.copy(home.position);
                controls.target.copy(home.target);
                controls.update();
              },
            };

            teardown = () => {
              cancelAnimationFrame(frame);
              resizeObserver?.disconnect();
              apiRef.current = null;
              action?.stop();
              mixer?.stopAllAction();
              controls.dispose();
              scene.traverse((object) => {
                const mesh = object as import("three").Mesh;
                if (!mesh.isMesh) return;
                mesh.geometry?.dispose();
                const materials = Array.isArray(mesh.material)
                  ? mesh.material
                  : [mesh.material];
                materials.forEach((material) => material?.dispose());
              });
              envTarget.dispose();
              renderer.dispose();
              if (canvas.parentNode === host) host.removeChild(canvas);
            };
          },
          (event) => {
            if (disposed) return;
            if (event.total) {
              setProgress(
                Math.min(99, Math.round((event.loaded / event.total) * 100)),
              );
            } else {
              setProgress((current) => (current > 10 ? current : 10));
            }
          },
          () => {
            if (!disposed) setPhase("error");
          },
        );
      } catch {
        if (!disposed) setPhase("error");
      }
    };

    void boot();

    return () => {
      disposed = true;
      teardown?.();
      apiRef.current = null;
      hostRef.current?.replaceChildren();
    };
  }, [inView, src, modelYaw]);

  // Push toggle changes into the live scene.
  useEffect(() => {
    latestFlags.current = flags;
    apiRef.current?.setFlags(flags);
  }, [flags]);

  const toggle = useCallback((key: keyof ViewerFlags) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  }, []);

  const reset = useCallback(() => {
    apiRef.current?.reset();
  }, []);

  const failed = phase === "error";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#0a1120] ring-1 ring-ink/10">
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 130% at 50% -10%, #182742 0%, #0d1626 52%, #070b14 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(46% 42% at 76% 14%, rgba(255,122,69,0.22), transparent 72%), radial-gradient(40% 40% at 12% 88%, rgba(14,165,164,0.20), transparent 74%)",
          }}
          aria-hidden="true"
        />

        {failed ? (
          <img
            src={fallbackImage}
            alt={fallbackAlt}
            title={fallbackAlt}
            className="absolute inset-0 h-full w-full object-contain p-8"
          />
        ) : (
          <div
            ref={hostRef}
            role="img"
            aria-label={`${fileName} — interactive 3D mesh preview in Modly3D`}
            className="absolute inset-0"
            style={{
              opacity: phase === "ready" ? 1 : 0,
              transition: "opacity 500ms ease",
            }}
          />
        )}

        {/* Mesh info badges */}
        <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-2 sm:right-4 sm:top-4">
          {triangles !== null && (
            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/85 ring-1 ring-white/15 backdrop-blur">
              {triangles.toLocaleString("en-US")} tris
            </span>
          )}
          <span className="rounded-full bg-brand/90 px-3 py-1 text-[11px] font-semibold text-white ring-1 ring-white/20 backdrop-blur">
            {fileName}
          </span>
        </div>

        {/* Viewer controls */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 sm:left-4 sm:top-4">
          {(
            [
              ["autoRotate", "Auto-rotate"],
              ["wireframe", "Mesh"],
              ["animate", "Animate"],
            ] as [keyof ViewerFlags, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              aria-pressed={flags[key]}
              className={
                "rounded-full px-3 py-1 text-[11px] font-semibold transition-colors " +
                (flags[key]
                  ? "bg-brand text-white shadow-sm"
                  : "bg-white/10 text-white/70 ring-1 ring-white/15 hover:bg-white/20 hover:text-white")
              }
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/70 ring-1 ring-white/15 transition-colors hover:bg-white/20 hover:text-white"
          >
            Reset view
          </button>
        </div>

        {/* Input image */}
        <div className="pointer-events-none absolute bottom-3 left-3 w-24 rounded-2xl border border-white/15 bg-white/10 p-2.5 backdrop-blur sm:bottom-4 sm:left-4 sm:w-36">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Input image
            </span>
            <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[9px] font-semibold text-white/70">
              {inputFormat}
            </span>
          </div>
          <img
            src={inputImage}
            alt={inputAlt}
            title={inputAlt}
            className="mt-2 aspect-square w-full rounded-xl object-cover ring-1 ring-white/10"
          />
        </div>

        {/* Interaction hint */}
        <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/75 ring-1 ring-white/15 backdrop-blur sm:bottom-4 sm:right-4">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
            <path d="M12 3v4M21 12h-4" strokeLinecap="round" />
          </svg>
          Drag to rotate
        </div>

        {/* Loading state */}
        {phase !== "ready" && !failed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#070b14]/55">
            <span
              className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-brand"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-white/70">
              {phase === "waiting"
                ? "Preparing preview"
                : `Loading 3D model ${progress}%`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
