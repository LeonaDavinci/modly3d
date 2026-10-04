import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const latestRelease = "https://github.com/lightningpixel/modly/releases/latest";

export const metadata: Metadata = {
  title: "Modly 3D model marketplace",
  description:
    "Browse the Modly 3D model marketplace: install community and official models in one click, swap pipelines, and extend your local 3D generator with open weights.",
  keywords: [
    "modly",
    "modly3d",
    "modly 3d marketplace",
    "3d model marketplace",
    "open source image to 3d model",
    "local ai 3d model generator",
    "modly 3d models",
    "3d model local generator",
  ],
  alternates: { canonical: "/marketplace" },
};

const highlights = [
  {
    title: "Modly 3D one-click model install",
    body: "Find a model, click install, and it is ready inside Modly. No manual weights juggling, no version conflicts.",
  },
  {
    title: "Open weights, fully hackable",
    body: "Every model in the Modly 3D marketplace ships open weights. Inspect them, fork them, and tune them for your own GPU.",
  },
  {
    title: "Community-contributed pipelines",
    body: "Share your image-to-3D or text-to-3D pipeline with other creators, and pull in the ones that work best for your hardware.",
  },
  {
    title: "Plugin-ready architecture",
    body: "The Modly 3D marketplace is built on a documented plugin API, so your own tools plug in without forking the app.",
  },
];

const categories = [
  {
    name: "Image-to-3D base models",
    body: "Single-image reconstruction tuned for detail. The default choice when you start from a product shot or character reference.",
    tags: ["Base · Open weights"],
  },
  {
    name: "Text-to-3D models",
    body: "Prompt-to-mesh models for rapid ideation and placeholder assets. Fast, stylized, and great for blocking out a scene.",
    tags: ["Fast · Low VRAM"],
  },
  {
    name: "Mesh refinement & upsampling",
    body: "Post-process a coarse mesh into a denser, cleaner topology with better edge flow for animation and printing.",
    tags: ["Refine · Top topology"],
  },
  {
    name: "Texture & PBR models",
    body: "Albedo, normal, and roughness passes that pair cleanly with exported GLB, OBJ, STL, and PLY meshes.",
    tags: ["PBR · Textured"],
  },
  {
    name: "Low-poly game-asset models",
    body: "Small, art-directable models tuned for real-time engines — ideal when draw calls and triangle budget matter.",
    tags: ["Game-ready · Low poly"],
  },
  {
    name: "Fine-tune & style models",
    body: "Style-locked checkpoints for a consistent look across a whole project, from stylized to photoreal.",
    tags: ["Style · Fine-tuned"],
  },
];

export default function MarketplacePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Modly 3D model marketplace",
          description:
            "Install community and official models into Modly 3D in one click and extend your local AI 3D model generator with open weights.",
          url: `${siteUrl}/marketplace`,
        }}
      />

      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Modly 3D <span className="text-gradient">model marketplace</span>
        </h1>
        <p className="mt-5 text-lg text-ink/70">
          Install community and official models into Modly 3D in one click. Swap
          the model, modify the pipeline, and extend your local AI 3D model
          generator with open weights — no black boxes.
        </p>
      </section>

      {/* Highlights */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-3xl border border-cloud bg-white/70 p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-ink">{h.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{h.body}</p>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="mt-16" aria-labelledby="categories-heading">
        <h2
          id="categories-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          What you can install from the Modly 3D marketplace
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.name}
              className="flex flex-col rounded-3xl border border-cloud bg-cloud/30 p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{c.name}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/70">{c.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-600 ring-1 ring-cloud"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Install steps */}
      <section className="mt-16 rounded-3xl border border-cloud bg-cloud/30 p-8">
        <h2 className="text-xl font-bold text-ink">
          How to install a model from the Modly 3D marketplace
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-ink/70">
          <li>
            <span className="font-semibold text-brand">1.</span> Download and open
            Modly 3D — it is free and needs no account.
          </li>
          <li>
            <span className="font-semibold text-brand">2.</span> Open the
            marketplace tab, pick a model, and click install.
          </li>
          <li>
            <span className="font-semibold text-brand">3.</span> Set it as
            default, drop in an image or prompt, and generate a 3D mesh offline.
          </li>
        </ol>
      </section>

      {/* Publish */}
      <section className="mt-16" aria-labelledby="publish-heading">
        <h2
          id="publish-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Publish your own Modly 3D model
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          Trained something that works well on modest hardware? The Modly 3D
          marketplace accepts community checkpoints with open weights, and the
          plugin API lets you ship a full pipeline rather than just weights.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/download"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Download Modly 3D free
          </Link>
          <Link
            href="/features"
            className="rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            See Modly 3D features
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 text-center">
        <p className="text-sm text-ink/60">
          Plan something bigger for your Modly 3D pipeline?{" "}
          <Link
            href="/roadmap"
            className="font-semibold text-brand hover:underline"
          >
            Read the Modly 3D roadmap →
          </Link>
        </p>
        <p className="mt-4 text-xs text-ink/50">
          Looking for the installer instead?{" "}
          <a
            href={latestRelease}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand hover:underline"
          >
            Get Modly 3D on GitHub →
          </a>
        </p>
      </section>
    </div>
  );
}
