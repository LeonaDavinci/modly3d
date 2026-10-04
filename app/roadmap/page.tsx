import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export const metadata: Metadata = {
  title: "Modly 3D roadmap",
  description:
    "The Modly 3D roadmap: shipped local 3D generation, in-progress features, and what is planned next for the free offline 3D model generator.",
  keywords: [
    "modly",
    "modly3d",
    "modly 3d roadmap",
    "modly 3d features",
    "local ai 3d model generator",
    "open source image to 3d model",
    "3d model local generator",
  ],
  alternates: { canonical: "/roadmap" },
};

type Status = "shipped" | "doing" | "planned";

const statusLabel: Record<Status, string> = {
  shipped: "Shipped",
  doing: "In progress",
  planned: "Planned",
};

const statusClass: Record<Status, string> = {
  shipped: "bg-teal-600 text-white",
  doing: "bg-brand text-white",
  planned: "bg-cloud text-ink/70 ring-1 ring-cloud",
};

const roadmap: { title: string; status: Status; body: string }[] = [
  {
    title: "Local image-to-3D generation",
    status: "shipped",
    body: "Turn a single photo into a textured 3D mesh entirely on your own PC, with no cloud and no upload.",
  },
  {
    title: "Local text-to-3D generation",
    status: "shipped",
    body: "Describe a concept in plain language and generate a 3D model for rapid ideation and placeholders.",
  },
  {
    title: "Multi-format export",
    status: "shipped",
    body: "Export your finished mesh as GLB, OBJ, STL, or PLY for Blender, Unity, Unreal, Godot, and 3D printers.",
  },
  {
    title: "Private, offline workspace",
    status: "shipped",
    body: "Collections, history, and model files stay on your device. No account, no telemetry, no per-image credits.",
  },
  {
    title: "Modly 3D model marketplace",
    status: "doing",
    body: "One-click install for community and official checkpoints, plus a documented plugin API for custom pipelines.",
  },
  {
    title: "Natural-language mesh editing",
    status: "doing",
    body: "Select part of a Modly 3D mesh and describe the change you want — retopo, smooth, or re-pose it in plain words.",
  },
  {
    title: "Smarter AI copilot",
    status: "doing",
    body: "Context-aware guidance inside the workspace: input tips, model suggestions, and export presets tuned to your engine.",
  },
  {
    title: "Extensible editor & plugins",
    status: "planned",
    body: "A public plugin SDK so scan tools, retopo helpers, and render presets plug into Modly 3D without forking.",
  },
  {
    title: "Visual diagnostics",
    status: "planned",
    body: "Built-in topology, UV, and triangle-budget overlays so you can see mesh quality before you export.",
  },
  {
    title: "Generation provenance",
    status: "planned",
    body: "Every Modly 3D model keeps a local record of the model, input, and settings used to create it.",
  },
  {
    title: "Real-world scale & measurement",
    status: "planned",
    body: "Reference-scale presets so assets land at real-world dimensions instead of arbitrary units.",
  },
  {
    title: "Optional portable workspace",
    status: "planned",
    body: "Move your Modly 3D collections and models between machines with a single portable profile on a USB drive.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Modly 3D roadmap",
          description:
            "What has shipped, what is in progress, and what is planned next for Modly 3D, the free offline local 3D model generator.",
          url: `${siteUrl}/roadmap`,
        }}
      />

      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Modly 3D <span className="text-gradient">roadmap</span>
        </h1>
        <p className="mt-5 text-lg text-ink/70">
          Modly stays free, local, and open source. This is what has shipped,
          what is being built right now, and where the local AI 3D model
          generator goes next — driven by what creators ask for.
        </p>
      </section>

      {/* Legend + list */}
      <section className="mt-12" aria-labelledby="roadmap-heading">
        <h2 id="roadmap-heading" className="sr-only">
          Modly roadmap by status
        </h2>
        <ol className="mt-2 space-y-4">
          {roadmap.map((item, i) => (
            <li
              key={item.title}
              className="flex flex-col gap-3 rounded-3xl border border-cloud bg-white/70 p-6 shadow-sm sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="flex items-center gap-3 sm:w-32 sm:shrink-0">
                <span className="text-2xl font-extrabold text-sun">
                  {String(Math.floor(i / 4) + 1).padStart(2, "0")}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass[item.status]}`}
                >
                  {statusLabel[item.status]}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* How we build */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-cloud bg-cloud/30 p-6">
          <h2 className="text-lg font-semibold text-ink">
            Built in the open
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Every Modly 3D release is public. You can read the plan, test the
            builds, and open an issue before a feature lands.
          </p>
        </div>
        <div className="rounded-3xl border border-cloud bg-cloud/30 p-6">
          <h2 className="text-lg font-semibold text-ink">
            Free on modest hardware
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            New Modly 3D features are optimized for everyday laptops and
            integrated graphics, not rented GPUs.
          </p>
        </div>
        <div className="rounded-3xl border border-cloud bg-cloud/30 p-6">
          <h2 className="text-lg font-semibold text-ink">
            Privacy stays local
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Roadmap items never add a required cloud round-trip. Modly 3D keeps
            generating on your machine.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-ink">
          Want a feature in Modly?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Tell us what slows you down today — the Modly 3D roadmap is shaped by
          real creator workflows, and marketplace plugins can land before core
          support does.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/marketplace"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Browse the Modly 3D marketplace
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Read the Modly 3D FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}
