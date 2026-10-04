import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { troubleshootingEntries } from "@/lib/docsNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export const metadata: Metadata = {
  title: "Modly docs — troubleshooting",
  description:
    "Browse every documented Modly issue: install blockers, CUDA out of memory, unsupported GPUs, AppImage errors, failed imports and stalled model downloads.",
  alternates: { canonical: "/docs/troubleshooting" },
};

export default function TroubleshootingPage() {
  return (
    <div className="max-w-3xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          name: "Modly troubleshooting",
          headline: "Modly troubleshooting: every documented issue and its fix",
          url: `${siteUrl}/docs/troubleshooting`,
          publisher: { "@type": "Organization", name: "Modly" },
        }}
      />

      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
          Troubleshooting
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Modly troubleshooting
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          {troubleshootingEntries.length} documented issues with the exact fix
          for each one — install blockers, GPU and memory errors, Linux loader
          problems, bad inputs and stalled downloads. Open any entry from the
          list on the left.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="issue-list">
        <h2 id="issue-list" className="text-xl font-bold text-ink">
          All issues
        </h2>
        <ul className="mt-4 space-y-3">
          {troubleshootingEntries.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className="block rounded-2xl border border-cloud bg-white/70 p-5 shadow-sm transition-colors hover:border-brand"
              >
                <span className="text-base font-semibold text-ink">{e.label}</span>
                <span className="mt-1 block text-sm text-ink/70">{e.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-3xl border border-cloud bg-cloud/30 p-6">
        <h2 className="text-lg font-bold text-ink">Still broken?</h2>
        <p className="mt-2 text-sm text-ink/70">
          Open an issue on GitHub with your OS, your GPU, and the model you
          used — that is everything needed to reproduce the problem.
        </p>
        <Link
          href="/docs/faq"
          className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
        >
          Or read the common questions →
        </Link>
      </section>
    </div>
  );
}
