import type { Metadata } from "next";
import Link from "next/link";
import Faq from "../../components/Faq";
import JsonLd from "../../components/JsonLd";
import { faqs } from "@/lib/faqs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export const metadata: Metadata = {
  title: "Modly docs — common questions",
  description:
    "Answers to the most common questions about Modly: cost, offline generation, hardware, export formats, privacy, and supported platforms.",
  alternates: { canonical: "/docs/faq" },
};

const support = [
  {
    title: "Report a bug",
    body: "Open an issue on GitHub with your OS, GPU, and the model you used.",
    href: "https://github.com/lightningpixel/modly/issues",
    external: true,
  },
  {
    title: "Read the short FAQ",
    body: "The same questions in a single page, without the documentation layout.",
    href: "/faq",
    external: false,
  },
  {
    title: "Browse the docs",
    body: "Installation, system requirements and troubleshooting guides.",
    href: "/docs",
    external: false,
  },
];

export default function DocsFaqPage() {
  return (
    <div className="max-w-3xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
          FAQ
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Modly common questions
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          What people ask before they install Modly — answered in full.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="questions">
        <h2 id="questions" className="text-xl font-bold text-ink">
          Frequently asked questions
        </h2>
        <div className="mt-4">
          <Faq />
        </div>
      </section>

      <section className="mt-12" aria-labelledby="answers">
        <h2 id="answers" className="text-xl font-bold text-ink">
          Answers you did not find here
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {support.map((s) => (
            <div key={s.title} className="rounded-3xl border border-cloud bg-white/70 p-5">
              <h3 className="text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.body}</p>
              {s.external ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
                >
                  Open →
                </a>
              ) : (
                <Link
                  href={s.href}
                  className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
                >
                  Open →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
