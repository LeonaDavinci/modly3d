import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const version = "1.0.0";

export const metadata: Metadata = {
  title: "Modly 3D — Download for Windows & Mac",
  description:
    "Download Modly 3D, the free local AI 3D model generator. Get the Windows and macOS installers and turn images or text into 3D meshes offline. Unlimited, no GPU required, a true 3d model local generator.",
  keywords: [
    "modly",
    "modly3d",
    "download modly 3d",
    "modly 3d for windows",
    "modly 3d for mac",
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
  operatingSystem: "Windows, macOS",
  softwareVersion: version,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: `${siteUrl}/downloads/Modly3D-${version}-Windows.exe`,
  url: `${siteUrl}/download`,
};

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
          The free, local AI 3D model generator. Grab the installer for your system and start
          turning images or text into 3D meshes offline — unlimited generations, no GPU, no cloud.
          Modly runs entirely on your PC, so your work stays private.
        </p>
      </section>

      {/* Primary download cards */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-cloud bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-ink">Windows</h2>
            <span className="rounded-full bg-cloud px-3 py-1 text-xs font-medium text-ink/60">
              v{version}
            </span>
          </div>
          <p className="mt-2 text-sm text-ink/60">Windows 10 / 11 (64-bit) · .exe installer</p>
          <a
            href={`/downloads/Modly3D-${version}-Windows.exe`}
            download
            className="mt-6 block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Download for Windows
          </a>
        </div>

        <div className="rounded-3xl border border-cloud bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-ink">macOS</h2>
            <span className="rounded-full bg-cloud px-3 py-1 text-xs font-medium text-ink/60">
              v{version}
            </span>
          </div>
          <p className="mt-2 text-sm text-ink/60">macOS 11+ (Apple Silicon &amp; Intel) · .dmg installer</p>
          <a
            href={`/downloads/Modly3D-${version}-macOS.dmg`}
            download
            className="mt-6 block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Download for macOS
          </a>
        </div>
      </section>

      {/* All versions */}
      <div className="mt-6 text-center">
        <a
          href="https://github.com/LeonaDavinci/modly3d/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          View all versions on GitHub Releases
        </a>
        <p className="mt-3 text-xs text-ink/50">
          Linux builds and portable editions are published on GitHub Releases.
        </p>
      </div>

      {/* System requirements */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-cloud bg-cloud/30 p-8">
          <h2 className="text-xl font-bold text-ink">System requirements</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>
              <span className="font-semibold text-ink">Windows:</span> 10 / 11, 64-bit, 4 GB RAM,
              500 MB disk.
            </li>
            <li>
              <span className="font-semibold text-ink">macOS:</span> 11 Big Sur or newer, Apple
              Silicon or Intel, 4 GB RAM.
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
          <h2 className="text-xl font-bold text-ink">Install in three steps</h2>
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
        <h2 className="text-2xl font-bold text-ink">Ready to make 3D models locally?</h2>
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
