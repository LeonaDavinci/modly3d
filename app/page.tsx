import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import Faq from "./components/Faq";
import ModelViewer from "./components/ModelViewer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const latestRelease = "https://github.com/lightningpixel/modly/releases/latest";

export const metadata: Metadata = {
  // absolute so the root title keeps the "| Modly" suffix without the
  // layout template being applied twice.
  title: {
    absolute: "Modly 3D — Free Local 3D Model Generator | Modly",
  },
  alternates: { canonical: "/" },
};

const appLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Modly3D",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows, Linux, macOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: latestRelease,
  description:
    "Modly3D is a free local AI 3D model generator that turns images or text into 3D meshes offline with unlimited generations and low hardware requirements.",
  url: siteUrl,
  image: `${siteUrl}/images/demo-hero.png`,
};

// Structured data for the interactive sample asset, so the mesh itself is
// indexable and machine-readable.
const modelLd = {
  "@context": "https://schema.org",
  "@type": "3DModel",
  name: "Modly3D sample low-poly game pet dog",
  description:
    "A 1,950 triangle low-poly game pet dog rendered in the Modly3D in-app 3D viewer. Use it to inspect the mesh, switch to a white wireframe, and check topology before exporting.",
  encodingFormat: "model/gltf-binary",
  contentUrl: `${siteUrl}/models/dog.glb`,
  thumbnailUrl: `${siteUrl}/images/demo-pet-dog.png`,
  isAccessibleForFree: true,
  license: "https://creativecommons.org/publicdomain/zero/1.0/",
  creator: { "@type": "Organization", name: "Quaternius" },
};

const values = [
  {
    title: "Modly 3D is 100% Free Forever",
    body: "No subscriptions, no per-image credits, no hidden limits. Cloud services charge $20–$60/month — Modly3D is free and always will be.",
  },
  {
    title: "Modly 3D is Local & Private",
    body: "Everything runs on your PC. Your images and prompts never leave your device. A true 3d model local generator with zero uploads.",
  },
  {
    title: "Modly 3D Unlimited Generations",
    body: "Generate as many 3D models as you want. No queues, no rate limits, no credits to top up.",
  },
  {
    title: "Modly 3D Low Hardware Requirements",
    body: "Optimized to run on everyday laptops. No expensive GPU farm, no data center — just your machine.",
  },
];

const spotlights = [
  {
    img: "/images/feature-local.png",
    alt: "Modly 3D generating a 3D mesh on an everyday laptop",
    title: "Modly 3D runs on your PC",
    body: "Local AI inference means no cloud, no queues. Your hardware does the work, so generation is fast and free.",
  },
  {
    img: "/images/feature-privacy.png",
    alt: "Modly 3D keeps your data private: a laptop protected by a privacy shield, no data uploaded",
    title: "Modly 3D keeps your data private",
    body: "Nothing is uploaded, ever. Unlike cloud services, Modly3D runs entirely offline — your photos never touch a server.",
  },
  {
    img: "/images/feature-export.png",
    alt: "Modly 3D exports a 3D model into multiple file formats (GLB, OBJ, STL, PLY)",
    title: "Modly 3D exports everywhere",
    body: "Export as GLB, OBJ, STL, or PLY — compatible with Blender, Unity, Unreal, Godot, and most 3D printers.",
  },
];

const steps = [
  {
    n: "01",
    title: "Import an image or prompt into Modly 3D",
    body: "Drop in a photo of an object, character, or concept — or just describe it with a text prompt. A clean input gives the best results.",
  },
  {
    n: "02",
    title: "Pick a Modly 3D local model",
    body: "Choose a built-in model tuned for speed or fidelity. All models run locally and are optimized for low hardware.",
  },
  {
    n: "03",
    title: "Generate & export with Modly 3D",
    body: "Modly3D produces a textured mesh on your PC. Preview it, then export to your favorite tools.",
  },
];

const formats = ["GLB", "OBJ", "STL", "PLY"];

export default function Home() {
  return (
    <>
      <JsonLd data={appLd} />
      <JsonLd data={modelLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {["100% Free", "Unlimited", "Offline", "Low Hardware"].map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-sun/20 px-3 py-1 text-xs font-semibold text-brand-600"
                >
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              <span className="block text-brand">Modly</span>
              <span className="block">
                3D <span className="text-gradient">— Free Local 3D Model Generator</span>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">
              Modly turns any image or text prompt into a detailed 3D mesh
              right on your computer — unlimited, offline, and built for low
              hardware. No cloud, no credits, 100% free. The best local 3D model
              AI for creators who want an open-source image-to-3D model pipeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
              >
                Download Free
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-cloud bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                See how it works
              </Link>
            </div>
            <p className="mt-4 text-sm text-ink/50">
              No account. No credit card. Runs on your PC.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/demo-hero.png"
              alt="Modly 3D generating a 3D model from a photo on a laptop"
              title="Modly 3D — free local AI 3D model generator for unlimited offline generation"
              className="w-full rounded-3xl shadow-xl ring-1 ring-cloud"
            />
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          Why creators choose Modly 3D
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-cloud bg-white/70 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-600">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature spotlights */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          Everything you need for local AI 3D generation with Modly 3D
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {spotlights.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-2xl border border-cloud bg-white/70 shadow-sm"
            >
              <img src={s.img} alt={s.alt} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink/60">
          Plus image-to-3D, text-to-3D, collections &amp; workspace, and an
          open model marketplace. <Link href="/features" className="font-semibold text-brand hover:underline">See all features →</Link>
        </p>
      </section>

      {/* User showcase / demo cases */}
      <section id="use-cases" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          Modly 3D showcase: from a game image to a 3D mesh
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
          Drop in any image — a screenshot, a game asset, a photo — and Modly3D
          reconstructs it as a clean 3D wireframe mesh with crisp white edges,
          right on your PC. Here are real example workflows.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-cloud bg-white/70 shadow-sm">
            <img
              src="/images/demo-pet-dog.png"
              alt="Modly 3D turned a game pet dog photo into a 3D wireframe mesh with white edges"
              title="Modly 3D: turn a game pet dog image into a 3D wireframe mesh"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-5">
              <h3 className="text-base font-semibold text-ink">Modly 3D: game pet → 3D mesh</h3>
              <p className="mt-1 text-sm text-ink/70">
                A cartoon pet dog from a game becomes a textured 3D model with a
                white wireframe overlay, ready to animate.
              </p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-cloud bg-white/70 shadow-sm">
            <img
              src="/images/hero.png"
              alt="Modly 3D turned a game hero character reference into a 3D wireframe mesh with white edges"
              title="Modly 3D: turn a game hero reference into a 3D wireframe mesh"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-5">
              <h3 className="text-base font-semibold text-ink">Modly 3D: game hero → 3D mesh</h3>
              <p className="mt-1 text-sm text-ink/70">
                A hero character reference turns into an editable 3D mesh, perfect
                for rigging and game pipelines.
              </p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-cloud bg-white/70 shadow-sm">
            <img
              src="/images/demo-sword.png"
              alt="Modly 3D turned a fantasy game sword asset into a 3D wireframe mesh with white edges"
              title="Modly 3D: turn a fantasy game sword into a 3D wireframe mesh"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="p-5">
              <h3 className="text-base font-semibold text-ink">Modly 3D: game prop → 3D mesh</h3>
              <p className="mt-1 text-sm text-ink/70">
                A fantasy sword asset becomes a clean 3D model you can export
                straight into your engine.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Live Three.js mesh preview */}
      <section id="preview" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          Inspect the Modly 3D mesh in your browser
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
          This is the same viewer Modly3D opens after a local generation. Load a pet
          image, get a low-poly mesh back, then orbit it, flip on a white wireframe to
          check topology, and export it as GLB, OBJ, STL or PLY. Every step runs on
          your own machine — a true 3d model local generator never uploads your
          assets to a cloud queue.
        </p>
        <div className="mt-8">
          <ModelViewer
            src="/models/dog.glb"
            fileName="pet-dog.glb"
            inputImage="/images/inpute-yellow-dog.png"
            inputAlt="Modly 3D input image: a low-poly yellow game pet dog reference before local 3D generation"
            inputFormat="png"
            fallbackImage="/images/inpute-yellow-dog.png"
            fallbackAlt="Modly 3D low-poly yellow game pet dog mesh preview"
          />
        </div>
        <p className="mt-4 text-center text-sm text-ink/60">
          Sample asset: a CC0 low-poly game pet dog — 1,950 triangles, 274 KB, rendered
          live in the Modly3D viewer. Drag to orbit, scroll to zoom, and press Mesh for
          the wireframe.
        </p>
      </section>

      {/* Long-tail SEO section: best local 3D model AI + open source */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-cloud bg-white/70 p-8">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Modly 3D: the best local 3D model AI — open source and free
          </h2>
          <p className="mt-4 text-ink/70">
            Modly3D is built to be the best local 3D model AI for creators who
            want offline generation without a monthly bill. Unlike cloud tools, it
            runs an open-source 3D AI entirely on your machine, so your assets
            never leave your PC and you get unlimited generations.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-brand-600">
                Modly 3D open-source image-to-3D model
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                Feed a single image into an open-source image-to-3D model pipeline
                and get a textured mesh with white wireframe edges in seconds.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-600">
                Modly 3D is the best local 3D model AI, no cloud
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                All inference runs locally. No API keys, no queues, no per-image
                credits — just your hardware doing the work.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-600">
                Modly 3D open weights, fully hackable
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                As an open-source 3D AI, Modly3D ships open weights and a
                plugin-ready architecture you can extend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          From image or prompt to Modly 3D mesh in three steps
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-cloud bg-white/70 p-6">
              <div className="text-3xl font-extrabold text-sun">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Export formats */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-cloud bg-cloud/40 p-8 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Modly 3D exports in multiple formats
          </h2>
          <p className="mt-3 text-ink/70">
            Ready for any 3D tool or game engine, straight out of the box.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {formats.map((f) => (
              <span
                key={f}
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-600 shadow-sm ring-1 ring-cloud"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace teaser */}
      <section id="extensions" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid items-center gap-8 rounded-3xl border border-cloud bg-white/70 p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              A growing Modly 3D model marketplace
            </h2>
            <p className="mt-3 text-ink/70">
              Install community and official models in one click. Swap the model,
              modify the pipeline, and extend Modly3D with your own tools — no
              black boxes.
            </p>
            <Link
              href="/features"
              className="mt-5 inline-block rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Explore models
            </Link>
          </div>
          <ul className="space-y-3 text-sm text-ink/70">
            {[
              "One-click model installation",
              "Open weights, fully hackable",
              "Community-contributed pipelines",
              "Plugin-ready architecture",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1 text-teal-600">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap teaser */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          What&apos;s coming next for Modly 3D
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Natural-language mesh editing",
            "Smarter AI copilot",
            "Extensible editor & plugins",
            "Visual diagnostics",
            "Generation provenance",
            "Real-world scale & measurement",
          ].map((r) => (
            <div key={r} className="rounded-2xl border border-dashed border-cloud bg-white/50 p-5 text-sm text-ink/70">
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          Frequently asked questions about Modly 3D
        </h2>
        <div className="mt-8">
          <Faq limit={4} />
        </div>
        <p className="mt-4 text-center text-sm text-ink/60">
          More questions? <Link href="/faq" className="font-semibold text-brand hover:underline">Read the full FAQ →</Link>
        </p>
      </section>

      {/* Download */}
      <section id="download" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-sun p-10 text-center text-white shadow-lg">
          <h2 className="text-3xl font-extrabold">Download Modly 3D — 100% Free</h2>
          <p className="mt-3 text-white/90">
            Local, unlimited, offline 3D generation. Pick your platform and start
            creating.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Windows", "Linux", "macOS"].map((p) => (
              <Link
                key={p}
                href="/download"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Download for {p}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/80">
            Free and open. No account required.
          </p>
        </div>
      </section>
    </>
  );
}
