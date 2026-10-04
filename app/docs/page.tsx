import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { docsNav, troubleshootingEntries } from "@/lib/docsNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export const metadata: Metadata = {
  title: "Modly docs",
  description:
    "Modly docs: install the free local AI 3D model generator on Windows, macOS and Linux, check system requirements, and fix the most common errors with step-by-step troubleshooting.",
  keywords: [
    "modly",
    "modly3d",
    "modly 3d docs",
    "how to install modly 3d",
    "modly 3d troubleshooting",
    "local ai 3d model generator",
    "3d model local generator",
  ],
  alternates: { canonical: "/docs" },
};

const quickStart = [
  { n: "01", label: "Download the installer" },
  { n: "02", label: "Run the setup wizard" },
  { n: "03", label: "Generate a 3D mesh offline" },
];

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          name: "Modly docs",
          headline: "Modly docs: install, configure and troubleshoot the free local 3D model generator",
          description:
            "Installation steps for Windows, macOS and Linux, system requirements, troubleshooting for GPU and memory errors, and answers to common questions about Modly.",
          url: `${siteUrl}/docs`,
          publisher: { "@type": "Organization", name: "Modly" },
        }}
      />

      <header>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Modly <span className="text-gradient">docs</span>
        </h1>
        <p className="mt-5 text-lg text-ink/70">
          Documentation for Modly, the free local AI 3D model generator. Every
          page on the left is self-contained: install the app, check the
          hardware you have, and fix the errors that show up most often — all
          without leaving your machine.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="start-heading">
        <h2 id="start-heading" className="text-xl font-bold text-ink">
          Quick start
        </h2>
        <ol className="mt-4 flex flex-wrap gap-3">
          {quickStart.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-cloud bg-white/70 px-5 py-4 text-sm text-ink/70"
            >
              <span className="mr-2 font-extrabold text-sun">{s.n}</span>
              {s.label}
            </li>
          ))}
        </ol>
        <Link
          href="/docs/install"
          className="mt-4 inline-block text-sm font-semibold text-brand hover:underline"
        >
          Full installation guide →
        </Link>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {docsNav.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
              {group.label}
            </p>
            <ul className="mt-3 space-y-3">
              {group.entries.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="block rounded-2xl border border-cloud bg-white/70 p-4 shadow-sm transition-colors hover:border-brand">
                    <span className="text-base font-semibold text-ink">{e.label}</span>
                    <span className="mt-1 block text-sm text-ink/70">{e.blurb}</span>
                  </Link>
                </li>
              ))}
              {group.label === "Troubleshooting" &&
                troubleshootingEntries.slice(0, 3).map((e) => (
                  <li key={e.href}>
                    <Link href={e.href} className="block rounded-2xl border border-cloud bg-white/70 p-4 shadow-sm transition-colors hover:border-brand">
                      <span className="text-base font-semibold text-ink">{e.label}</span>
                      <span className="mt-1 block text-sm text-ink/70">{e.blurb}</span>
                    </Link>
                  </li>
                ))}
              {group.label === "Troubleshooting" && (
                <li>
                  <Link
                    href="/docs/troubleshooting"
                    className="inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    All {troubleshootingEntries.length} issues →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-12" aria-labelledby="need-help">
        <h2 id="need-help" className="text-xl font-bold text-ink">
          Still stuck?
        </h2>
        <p className="mt-3 text-sm text-ink/70">
          The common questions page covers cost, offline use, export formats and
          privacy in more depth, and the FAQ has the short version.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/docs/faq"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Read the Modly FAQ
          </Link>
          <Link
            href="/download"
            className="rounded-full border border-cloud px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Download Modly
          </Link>
        </div>
      </section>
    </div>
  );
}
