import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Modly 3D features: free local AI 3D generation, image-to-3D, text-to-3D, offline privacy, multi-format export (GLB, OBJ, STL, PLY) and collections.",
  alternates: { canonical: "/features" },
};

const features = [
  {
    title: "Modly 3D Image to 3D",
    body: "Turn any photo into a detailed, textured 3D mesh. Drop in a product shot, character reference, or concept art and get a ready-to-use model.",
    img: "/images/feature-local.png",
    alt: "Modly 3D generating a 3D mesh from an image on a laptop",
  },
  {
    title: "Modly 3D Text to 3D",
    body: "Describe a concept in plain language and Modly3D generates a 3D model locally. Great for rapid ideation and placeholders.",
    img: "/images/feature-export.png",
    alt: "Modly 3D exporting a 3D model into multiple formats",
  },
  {
    title: "Modly 3D is private by design",
    body: "All inference runs on your PC. Your images and prompts are never uploaded, making Modly3D a true 3d model local generator.",
    img: "/images/feature-privacy.png",
    alt: "Modly 3D keeps your data private: a laptop protected by a privacy shield, no data uploaded",
  },
  {
    title: "Modly 3D low hardware requirements",
    body: "Optimized models run on everyday laptops. No GPU farm, no data center — just your machine, fast and free.",
    img: "/images/feature-local.png",
    alt: "Modly 3D local generation on a standard laptop",
  },
  {
    title: "Modly 3D multiple export formats",
    body: "Export as GLB, OBJ, STL, and PLY for Blender, Unity, Unreal, Godot, and most 3D printers and slicers.",
    img: "/images/feature-export.png",
    alt: "Modly 3D model exported into GLB, OBJ, STL, PLY formats",
  },
  {
    title: "Modly 3D collections & workspace",
    body: "Organize every generation into collections so your models stay accessible and easy to manage.",
    img: "/images/feature-privacy.png",
    alt: "Modly 3D keeps your generations private and organized on your device",
  },
  {
    title: "Modly 3D is open source & hackable",
    body: "Modly3D is an open-source 3D AI with open weights and a plugin-ready architecture. Extend the pipeline, swap models, and self-host without black boxes — a transparent open-source image-to-3D model workflow.",
    img: "/images/feature-local.png",
    alt: "Modly 3D: an open, hackable local 3D model AI pipeline",
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">
          Modly3D Features
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
          A free, local AI 3D model generator and the best local 3D model AI for
          creators who want unlimited, offline generation with low hardware
          requirements. Includes an open-source image-to-3D model pipeline.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <article
            key={f.title}
            className="flex gap-5 rounded-2xl border border-cloud bg-white/70 p-6 shadow-sm"
          >
            <img
              src={f.img}
              alt={f.alt}
              className="h-20 w-20 shrink-0 rounded-xl object-cover ring-1 ring-cloud"
            />
            <div>
              <h2 className="text-lg font-semibold text-ink">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-cloud bg-cloud/40 p-8 text-center">
        <h2 className="text-2xl font-bold text-ink">Open Modly 3D model marketplace</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Install official and community models in one click, swap the pipeline,
          and extend Modly3D with your own tools. Open weights, no black boxes.
        </p>
        <Link
          href="/download"
          className="mt-5 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Download Free
        </Link>
      </div>
    </div>
  );
}
