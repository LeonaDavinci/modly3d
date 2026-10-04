import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const catalog = "https://modly3d.app/extensions";

export const metadata: Metadata = {
  title: "Modly 3D extensions",
  description:
    "Browse Modly 3D extensions: install community model and process extensions into your local 3D generator with one GitHub URL, and generate 3D from an image or prompt offline.",
  keywords: [
    "modly",
    "modly3d",
    "modly 3d extensions",
    "modly 3d extension",
    "image to 3d",
    "text to 3d",
    "local ai 3d model generator",
    "3d model local generator",
  ],
  alternates: { canonical: "/extensions" },
};

type Ext = {
  name: string;
  author: string;
  date: string;
  body: string;
  slug: string;
};

const modelExtensions: Ext[] = [
  {
    name: "SenseNova Vision 7B MoT",
    author: "@DrHepa",
    date: "Sep 2026",
    body: "Run SenseNova Vision 7B MoT locally for image understanding, segmentation, OCR, point clouds, and camera pose estimation.",
    slug: "sensenova-vision-7b-mot",
  },
  {
    name: "PartCrafter",
    author: "@DrHepa",
    date: "Sep 2026",
    body: "Generate structured, separately editable 3D object parts from a single image, with optional background removal.",
    slug: "partcrafter",
  },
  {
    name: "PESZzzz-Modly-hunyuan3d-2.1",
    author: "@PESZzzz",
    date: "Aug 2026",
    body: "Hunyuan3D 2.1 patched for Windows with AMD GPUs and modest desktop PCs.",
    slug: "peszzzz-modly-hunyuan3d-2-1",
  },
  {
    name: "TripoSG",
    author: "@lightningpixel",
    date: "Aug 2026",
    body: "Flow-matching diffusion from a single image, with sharper geometry and finer details than TripoSR.",
    slug: "triposg",
  },
  {
    name: "Hunyuan3d mini Turbo",
    author: "@lightningpixel",
    date: "Aug 2026",
    body: "Tencent's lightweight image-to-3D pipeline, tuned for fast turns on a small GPU.",
    slug: "hunyuan3d-mini-turbo",
  },
  {
    name: "TRELLIS2 GGUF (with texture)",
    author: "@lightningpixel",
    date: "Aug 2026",
    body: "Convert one image into a textured 3D mesh in a single pass using the Trellis.2 GGUF model.",
    slug: "trellis2-gguf-with-texture",
  },
  {
    name: "TripoSplat",
    author: "@lightningpixel",
    date: "Aug 2026",
    body: "Single image to 3D with TripoSplat, wired into Modly as a standard image-to-mesh model.",
    slug: "triposplat",
  },
  {
    name: "Hunyuan3d mini",
    author: "@lightningpixel",
    date: "Aug 2026",
    body: "Hunyuan3D 2 Mini — the lightweight Tencent image-to-3D pipeline for everyday laptops.",
    slug: "hunyuan3d-mini",
  },
  {
    name: "Hunyuan3D 2.1 Full - Low VRAM",
    author: "AlefK1708",
    date: "Aug 2026",
    body: "Native Hunyuan3D 2.1 Full image-to-mesh, optimized for low-VRAM NVIDIA GPUs with INT8, FP8 and FP16 inference.",
    slug: "hunyuan3d-2-1-full-low-vram",
  },
  {
    name: "Pixal3D",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Turns a single input image into a textured GLB mesh with a compact local pipeline.",
    slug: "pixal3d",
  },
  {
    name: "Trellis Text",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Generate textured 3D meshes straight from a text prompt using Microsoft's TRELLIS text models.",
    slug: "trellis-text",
  },
  {
    name: "Shap-E",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "OpenAI Shap-E text-to-3D generation with GLB mesh output and PLY sidecars.",
    slug: "shap-e",
  },
  {
    name: "Cube3d",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Research-only Cube3D INT4 text-to-mesh generation with UI-managed weights and GLB output.",
    slug: "cube3d",
  },
  {
    name: "DreamCube",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "DreamCube RGB-D panorama and navigable scene generation with UI-managed weights.",
    slug: "dreamcube",
  },
  {
    name: "Codex-Image (GPT image 2.0)",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "AI image generation and image editing inside your Modly workflow.",
    slug: "codex-image-gpt-image-2-0",
  },
  {
    name: "Kimodo",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "KIMODO motion generation, kinematic motion diffusion, and GLB rig retargeting workflows.",
    slug: "kimodo",
  },
  {
    name: "Pi3 and Pi3X",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Pi3 single-image and Pi3X multi-view 3D reconstruction with GLB/PLY point clouds and structured sidecar outputs.",
    slug: "pi3-and-pi3x",
  },
  {
    name: "Hunyuan3d- Part",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Hunyuan3D Part workflows for AI-powered 3D asset generation.",
    slug: "hunyuan3d-part",
  },
  {
    name: "Wan22-TI2V-5B",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Wan2.2 TI2V 5B image-to-video extension for motion reference clips.",
    slug: "wan22-ti2v-5b",
  },
];

const processExtensions: Ext[] = [
  {
    name: "YUE2",
    author: "@DrHepa",
    date: "Sep 2026",
    body: "Local Python process extension for full-song generation, editable musical plans and ABC-based covers.",
    slug: "yue2",
  },
  {
    name: "ACE-Step 1.5",
    author: "@DrHepa",
    date: "Sep 2026",
    body: "A highly efficient open-source music foundation model that brings commercial-grade music generation to consumer hardware.",
    slug: "ace-step-1-5",
  },
  {
    name: "AnyTop",
    author: "@DrHepa",
    date: "Sep 2026",
    body: "Prepare arbitrary BVH skeletons, generate or edit motion, and extract AnyTop DIFT correspondences inside Modly.",
    slug: "anytop",
  },
  {
    name: "LATO.2",
    author: "@DrHepa",
    date: "Sep 2026",
    body: "Generate topology-aware meshes from input geometry with the full voxel, topology, VAE and T-Flow pipeline.",
    slug: "lato-2",
  },
  {
    name: "Qwen3-TTS CustomVoice",
    author: "@DrHepa",
    date: "Sep 2026",
    body: "Generate multilingual 24 kHz speech with the built-in CustomVoice speakers from Qwen3-TTS 1.7B.",
    slug: "qwen3-tts-customvoice",
  },
  {
    name: "Kokoro-ONNX",
    author: "@DrHepa",
    date: "Aug 2026",
    body: "CPU-only multilingual text-to-speech process extension using Kokoro ONNX.",
    slug: "kokoro-onnx",
  },
  {
    name: "modly-pymeshlab",
    author: "Lorchie",
    date: "Jul 2026",
    body: "Mesh post-processing through PyMeshLab — clean, simplify, repair, and prepare meshes for the web, low-poly use, or 3D printing.",
    slug: "modly-pymeshlab",
  },
  {
    name: "modly-sprite-pipeline",
    author: "Lorchie",
    date: "Jul 2026",
    body: "One extension, six nodes: turn a Modly 3D generation into game-ready pixel-art sprites.",
    slug: "modly-sprite-pipeline",
  },
  {
    name: "modly-comfyUI",
    author: "@Lorchie",
    date: "Jul 2026",
    body: "Run any ComfyUI workflow from inside a Modly workflow.",
    slug: "modly-comfyui",
  },
  {
    name: "SkinTokens",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Mesh auto-rigging, skin weight generation, and rigged GLB workflow output.",
    slug: "skintokens",
  },
  {
    name: "UniRig",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "Automatic rigging and character rig preparation for exported 3D models.",
    slug: "unirig",
  },
  {
    name: "MOSS-SoundEffect",
    author: "@DrHepa",
    date: "Jul 2026",
    body: "MOSS-SoundEffect v2 text-to-audio sound effect generation with WAV workflow output.",
    slug: "moss-soundeffect",
  },
];

export default function ExtensionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Modly 3D extensions",
          description:
            "Browse Modly 3D model and process extensions, install them from a GitHub URL, and generate 3D offline on your own PC.",
          url: `${siteUrl}/extensions`,
        }}
      />

      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Modly 3D <span className="text-gradient">extensions</span>
        </h1>
        <p className="mt-5 text-lg text-ink/70">
          Every extension adds an AI model to Modly, so you can generate 3D
          from an image or a prompt. Model extensions handle reconstruction and
          generation; process extensions run post-workflow steps such as rigging,
          audio, or mesh cleanup. All of them install by pasting a GitHub
          repository URL in the app.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/download"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Download Modly 3D free
          </Link>
          <a
            href={catalog}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Full extension catalog ↗
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-cloud bg-white/70 p-6 text-center">
          <div className="text-3xl font-extrabold text-brand">
            {modelExtensions.length + processExtensions.length}
          </div>
          <p className="mt-1 text-sm text-ink/70">Modly 3D extensions published</p>
        </div>
        <div className="rounded-3xl border border-cloud bg-white/70 p-6 text-center">
          <div className="text-3xl font-extrabold text-brand">2</div>
          <p className="mt-1 text-sm text-ink/70">Extension types: model &amp; process</p>
        </div>
        <div className="rounded-3xl border border-cloud bg-white/70 p-6 text-center">
          <div className="text-3xl font-extrabold text-brand">0</div>
          <p className="mt-1 text-sm text-ink/70">Cloud credits, everything local</p>
        </div>
      </section>

      {/* Model extensions */}
      <section className="mt-16" aria-labelledby="model-extensions">
        <h2
          id="model-extensions"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Model extensions for Modly
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Each one plugs a new generator into Modly, so you can drop in an image
          or a prompt and get a textured mesh.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {modelExtensions.map((e) => (
            <article
              key={e.slug}
              className="rounded-3xl border border-cloud bg-white/70 p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-ink">{e.name}</h3>
                <span className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-ink/70">
                  Model
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{e.body}</p>
              <p className="mt-3 text-xs text-ink/50">
                {e.author} · {e.date}
              </p>
              <a
                href={`${catalog}/${e.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
              >
                View in the catalog →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Process extensions */}
      <section className="mt-16" aria-labelledby="process-extensions">
        <h2
          id="process-extensions"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Process extensions for Modly
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Post-generation steps — rigging, cleaning, audio, and external tooling —
          run as nodes inside a Modly workflow.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {processExtensions.map((e) => (
            <article
              key={e.slug}
              className="flex flex-col rounded-3xl border border-cloud bg-cloud/30 p-6"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-ink">{e.name}</h3>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-600 ring-1 ring-cloud">
                  Process
                </span>
              </div>
              <p className="mt-2 flex-1 text-sm text-ink/70">{e.body}</p>
              <p className="mt-3 text-xs text-ink/50">
                {e.author} · {e.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Install steps */}
      <section className="mt-16 rounded-3xl border border-cloud bg-cloud/30 p-8">
        <h2 className="text-xl font-bold text-ink">
          Install a Modly extension in three steps
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-ink/70">
          <li>
            <span className="font-semibold text-brand">01</span> In the app, open
            Models and click <span className="font-semibold">Install from GitHub</span>.
          </li>
          <li>
            <span className="font-semibold text-brand">02</span> Paste the HTTPS
            URL of the extension repository, then confirm the installation.
          </li>
          <li>
            <span className="font-semibold text-brand">03</span> Download the
            model or one of its variants, and use it from the Modly model list.
          </li>
        </ol>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-ink">Ready to extend Modly?</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Grab the free desktop app, install your first extension, and generate a
          3D model offline — the whole loop stays on your machine.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/download"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Download Modly 3D
          </Link>
          <Link
            href="/marketplace"
            className="rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Browse the model marketplace
          </Link>
        </div>
      </section>
    </div>
  );
}
