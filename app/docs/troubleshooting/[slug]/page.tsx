import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { issues } from "@/lib/docsTroubleshooting";
import { troubleshootingEntries } from "@/lib/docsNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export function generateStaticParams() {
  return issues.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = issues.find((i) => i.slug === slug);
  if (!issue) return { title: "Modly docs — troubleshooting" };
  return {
    title: `Modly docs — ${issue.title}`,
    description: issue.summary,
    alternates: { canonical: `/docs/troubleshooting/${slug}` },
  };
}

export default async function IssuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = issues.findIndex((i) => i.slug === slug);
  if (index === -1) notFound();

  const issue = issues[index];
  const prev = index > 0 ? issues[index - 1] : null;
  const next = index < issues.length - 1 ? issues[index + 1] : null;

  return (
    <article className="max-w-3xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          name: issue.title,
          headline: issue.title,
          description: issue.summary,
          url: `${siteUrl}/docs/troubleshooting/${slug}`,
          publisher: { "@type": "Organization", name: "Modly" },
        }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink/50">
        <Link href="/docs" className="hover:text-brand">
          Docs
        </Link>
        <span className="mx-2">/</span>
        <Link href="/docs/troubleshooting" className="hover:text-brand">
          Troubleshooting
        </Link>
      </nav>

      <header className="mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {issue.title}
        </h1>
        <p className="mt-4 text-lg text-ink/70">{issue.summary}</p>
      </header>

      <section className="mt-8" aria-labelledby="fix-heading">
        <h2 id="fix-heading" className="text-xl font-bold text-ink">
          How to fix it
        </h2>
        <ol className="mt-4 space-y-3">
          {issue.steps.map((s, i) => (
            <li
              key={s}
              className="flex gap-4 rounded-2xl border border-cloud bg-white/70 p-5 shadow-sm"
            >
              <span className="shrink-0 text-lg font-extrabold text-sun">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-ink/70">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <aside className="mt-8 rounded-2xl border border-brand/30 bg-brand/5 p-5">
        <h2 className="text-sm font-bold text-ink">Why this happens</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{issue.tip}</p>
      </aside>

      <nav aria-label="Issue navigation" className="mt-10 flex flex-wrap justify-between gap-4 border-t border-cloud pt-6">
        {prev ? (
          <Link href={`/docs/troubleshooting/${prev.slug}`} className="max-w-[45%] text-sm text-ink/70 hover:text-brand">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/docs/troubleshooting/${next.slug}`} className="max-w-[45%] text-right text-sm text-ink/70 hover:text-brand">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/download"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Download Modly
        </Link>
        <Link
          href={troubleshootingEntries[0]}
          className="rounded-full border border-cloud px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          Back to all issues
        </Link>
      </div>
    </article>
  );
}
