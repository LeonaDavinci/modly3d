import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Modly 3D works: import an image or prompt, pick a local model, then export a 3D mesh — all offline, on your own PC.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    n: "01",
    title: "Import an image or prompt into Modly 3D",
    body: "Drop in a photo of an object, character, or concept — or describe it with a text prompt. A clean input gives the best results.",
    img: "/images/feature-local.png",
    alt: "Modly 3D importing an image or prompt before local 3D generation",
  },
  {
    n: "02",
    title: "Pick a Modly 3D local model",
    body: "Choose a built-in model tuned for speed or fidelity. Every model runs locally and is optimized for low hardware.",
    img: "/images/feature-privacy.png",
    alt: "Modly 3D local model selection that runs on your PC",
  },
  {
    n: "03",
    title: "Generate & export your Modly 3D mesh",
    body: "Modly3D produces a textured mesh on your PC. Preview it in the built-in viewer, then export as GLB, OBJ, STL, or PLY.",
    img: "/images/feature-export.png",
    alt: "Modly 3D generating and exporting a 3D model",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">
          How Modly3D works
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
          From image or prompt to a 3D mesh in three steps — entirely on your
          computer, with no cloud and no credits.
        </p>
      </header>

      <ol className="mt-12 space-y-8">
        {steps.map((s) => (
          <li
            key={s.n}
            className="grid items-center gap-6 rounded-3xl border border-cloud bg-white/70 p-6 shadow-sm sm:grid-cols-[200px_1fr]"
          >
            <img
              src={s.img}
              alt={s.alt}
              className="mx-auto h-40 w-56 rounded-2xl object-cover ring-1 ring-cloud"
            />
            <div>
              <div className="text-2xl font-extrabold text-sun">{s.n}</div>
              <h2 className="mt-1 text-xl font-semibold text-ink">{s.title}</h2>
              <p className="mt-2 text-ink/70">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <Link
          href="/#download"
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Download Free
        </Link>
      </div>
    </div>
  );
}
