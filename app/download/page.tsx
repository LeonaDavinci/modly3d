import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const latestRelease = "https://github.com/lightningpixel/modly/releases/latest";
const allReleases = "https://github.com/lightningpixel/modly/releases";

export const metadata: Metadata = {
  title: "Modly 3D — Download for Windows, macOS & Linux",
  description:
    "Download Modly 3D, the free local AI 3D model generator. Get installers for Windows, macOS (Apple Silicon M-series and Intel), and Linux. Turn images or text into 3D meshes offline — unlimited, no GPU required.",
  keywords: [
    "modly",
    "modly3d",
    "download modly 3d",
    "modly 3d for windows",
    "modly 3d for mac",
    "modly 3d for linux",
    "local 3d model ai download",
    "free 3d model generator download",
    "3d model local generator",
  ],
  alternates: { canonical: "/download" },
};

const appLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Modly3D",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows, macOS, Linux",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: latestRelease,
  url: `${siteUrl}/download`,
};

const platforms = [
  {
    name: "Modly 3D for Windows",
    meta: "Windows 10 / 11 (64-bit) · .exe",
    cta: "Download for Windows",
  },
  {
    name: "Modly 3D for macOS",
    meta: "macOS 11+ · Apple Silicon (M-series) & Intel · .dmg",
    cta: "Download for macOS",
  },
  {
    name: "Modly 3D for Linux",
    meta: "Ubuntu 20.04+ / Fedora / Arch · .AppImage / .deb",
    cta: "Download for Linux",
  },
];

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <JsonLd data={appLd} />

      {/* Hero */}
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Free Download
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Download <span className="text-gradient">Modly 3D</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
          The free, local AI 3D model generator. Grab the installer for your system and start turning
          images or text into 3D meshes offline — unlimited generations, no GPU, no cloud. Modly
          runs entirely on your PC, so your work stays private.
        </p>
      </section>

      {/* Primary download cards */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="flex flex-col rounded-3xl border border-cloud bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-ink">{p.name}</h2>
            <p className="mt-2 flex-1 text-sm text-ink/60">{p.meta}</p>
            <a
              href={latestRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
            >
              {p.cta}
            </a>
          </div>
        ))}
      </section>

      {/* All versions */}
      <div className="mt-6 text-center">
        <a
          href={allReleases}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          View all versions on GitHub Releases
        </a>
        <p className="mt-3 text-xs text-ink/50">
          Each release bundles Windows, macOS (Apple Silicon &amp; Intel), and Linux builds.
        </p>
      </div>

      {/* System requirements */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-cloud bg-cloud/30 p-8">
          <h2 className="text-xl font-bold text-ink">Modly 3D system requirements</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>
              <span className="font-semibold text-ink">Windows:</span> 10 / 11, 64-bit, 4 GB RAM,
              500 MB disk.
            </li>
            <li>
              <span className="font-semibold text-ink">macOS:</span> 11 Big Sur or newer. Optimized
              for Apple Silicon M-series; Intel Macs also supported, 4 GB RAM.
            </li>
            <li>
              <span className="font-semibold text-ink">Linux:</span> Ubuntu 20.04+, Fedora, or Arch;
              4 GB RAM, 500 MB disk.
            </li>
            <li>
              <span className="font-semibold text-ink">No GPU required:</span> runs on integrated
              graphics. Modly is built as a low hardware 3d model local generator.
            </li>
            <li>
              <span className="font-semibold text-ink">Internet:</span> only needed for the first
              install. Generation is fully offline.
            </li>
          </ul>
        </div>

        {/* Install steps */}
        <div className="rounded-3xl border border-cloud bg-cloud/30 p-8">
          <h2 className="text-xl font-bold text-ink">Install Modly 3D in three steps</h2>
          <ol className="mt-4 space-y-3 text-sm text-ink/70">
            <li>
              <span className="font-semibold text-brand">1.</span> Download the installer for your
              system above.
            </li>
            <li>
              <span className="font-semibold text-brand">2.</span> Run it and follow the setup
              wizard — no account needed.
            </li>
            <li>
              <span className="font-semibold text-brand">3.</span> Open Modly, drop in an image or
              prompt, and generate your first 3D model.
            </li>
          </ol>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 rounded-3xl bg-brand/5 p-10 text-center">
        <h2 className="text-2xl font-bold text-ink">Ready to make 3D models locally with Modly 3D?</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Modly is free forever, works offline, and needs no expensive hardware. See what it can do
          before you install.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/features"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Explore features
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            How it works
          </Link>
        </div>
      </section>
    </div>
  );
}
