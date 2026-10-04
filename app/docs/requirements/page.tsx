import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export const metadata: Metadata = {
  title: "Modly docs — system requirements",
  description:
    "Modly system and hardware requirements: minimum and recommended CPU, RAM, GPU, disk and network for the free local AI 3D model generator.",
  alternates: { canonical: "/docs/requirements" },
};

const rows = [
  {
    label: "Operating system",
    min: "Windows 10 / 11 (64-bit) · macOS 12+ · Ubuntu 20.04+, Fedora 38+, Arch",
    rec: "Windows 11 · macOS 13+ · latest Ubuntu LTS",
  },
  {
    label: "Processor (CPU)",
    min: "4-core 64-bit CPU (x86-64 or Apple M-series)",
    rec: "8-core CPU with AVX2 support",
  },
  {
    label: "Memory (RAM)",
    min: "8 GB",
    rec: "16 GB",
  },
  {
    label: "Graphics (GPU)",
    min: "Any DirectX 12 / Metal 2 GPU — integrated graphics work",
    rec: "Discrete GPU with 4 GB VRAM or more",
  },
  {
    label: "Disk space",
    min: "4 GB free (installer + built-in model packs)",
    rec: "20 GB free on an SSD",
  },
  {
    label: "Internet",
    min: "Only to download the installer and model weights",
    rec: "Broadband for faster model downloads",
  },
];

const notes = [
  "No GPU is required: Modly runs on integrated graphics, which is the whole point of a low hardware 3d model local generator.",
  "Model weights are downloaded once, on first use. Generation itself is fully offline.",
  "If your VRAM is under 8 GB, choose a small model variant — see the troubleshooting entry for memory errors.",
];

export default function RequirementsPage() {
  return (
    <div className="max-w-3xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          name: "Modly system requirements",
          headline: "Modly system and hardware requirements",
          url: `${siteUrl}/docs/requirements`,
          publisher: { "@type": "Organization", name: "Modly" },
        }}
      />

      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
          Get started
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Modly system requirements
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Modly is built for everyday laptops. These are the minimums to run
          every workflow, and the recommended set for comfortably fast
          generation.
        </p>
      </header>

      <section className="mt-10 overflow-hidden rounded-3xl border border-cloud bg-white shadow-sm">
        <table className="w-full table-fixed text-left text-sm">
          <caption className="sr-only">
            Modly minimum and recommended system requirements
          </caption>
          <thead className="bg-cloud/60 text-ink/70">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold">Requirement</th>
              <th scope="col" className="px-5 py-3 font-semibold">Minimum</th>
              <th scope="col" className="px-5 py-3 font-semibold">Recommended</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cloud text-ink/70">
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="px-5 py-4 font-semibold text-ink">{r.label}</th>
                <td className="px-5 py-4 align-top">{r.min}</td>
                <td className="px-5 py-4 align-top">{r.rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8" aria-labelledby="notes-heading">
        <h2 id="notes-heading" className="text-xl font-bold text-ink">
          What this means in practice
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/70">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/docs/install"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Installation guide
        </Link>
        <Link
          href="/docs/faq"
          className="rounded-full border border-cloud px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          Common questions
        </Link>
      </section>
    </div>
  );
}
