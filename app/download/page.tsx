import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const latestRelease = "https://github.com/lightningpixel/modly/releases/latest";
const allReleases = "https://github.com/lightningpixel/modly/releases";

export const metadata: Metadata = {
  title: "Modly Download for Windows, macOS & Linux",
  description:
    "Download Modly 3D for Windows, macOS and Linux — a free local AI 3D model generator. Turn images or text into 3D meshes offline, unlimited.",
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

// The three primary installers shown in the hero panel.
const platforms = [
  {
    id: "windows",
    name: "Windows",
    cta: "Download for Windows",
    file: "Modly-3D-1.0.0-win-x64.exe",
    size: "≈ 140 MB",
    detail: "Windows 10 / 11, 64-bit",
  },
  {
    id: "linux",
    name: "Linux",
    cta: "Download for Linux",
    file: "Modly-3D-1.0.0-x64.AppImage",
    size: "≈ 160 MB",
    detail: "Ubuntu 20.04+ / Fedora / Arch",
  },
  {
    id: "macos",
    name: "macOS",
    cta: "Download for macOS",
    file: "Modly-3D-1.0.0-universal.dmg",
    size: "≈ 150 MB",
    detail: "macOS 12+, Apple Silicon & Intel",
  },
];

// System + hardware requirements, grouped for quick scanning.
const requirements = [
  {
    label: "Operating system",
    min: "Windows 10 / 11 (64-bit) · macOS 12 Monterey+ · Ubuntu 20.04+, Fedora 38+, Arch",
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
    min: "Only to download the installer and model packs",
    rec: "Broadband for faster model downloads",
  },
];

const perOs = [
  {
    os: "Modly 3D for Windows",
    items: [
      "Windows 10 64-bit (build 19041+) or Windows 11",
      "Installer: Modly-3D-1.0.0-win-x64.exe",
      "Needs .NET 8 runtime — bundled in the installer",
      "Microsoft Defender may flag the installer once: choose “Run anyway”",
    ],
  },
  {
    os: "Modly 3D for macOS",
    items: [
      "macOS 12 Monterey or newer",
      "Universal build: Apple Silicon (M-series) and Intel both supported",
      "Installer: Modly-3D-1.0.0-universal.dmg",
      "First launch needs a one-time right-click open (Gatekeeper quirk, no account)",
    ],
  },
  {
    os: "Modly 3D for Linux",
    items: [
      "Ubuntu 20.04+, Fedora 38+, or Arch with glibc 2.31+",
      "Formats: .AppImage (recommended), .deb, .rpm",
      "Run the AppImage with: chmod +x Modly-3D-1.0.0-x64.AppImage",
      "Optional: Kernel driver access for GPU acceleration — works without it",
    ],
  },
];

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <JsonLd data={appLd} />

      {/* Hero — download panel */}
      <section aria-labelledby="download-heading">
        <div className="rounded-[28px] bg-gradient-to-br from-[#ff6a2b] via-[#ff8a3d] to-[#ffc53d] px-6 py-14 text-center shadow-[0_20px_45px_-20px_rgba(255,106,43,0.55)] sm:px-12">
          <h1
            id="download-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Download Modly 3D — 100% Free
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Local, unlimited, offline 3D generation. Pick your platform and start
            creating.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <a
                key={p.id}
                href={latestRelease}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                {p.cta}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/80">
            Free and open. No account required.
          </p>
        </div>
      </section>

      {/* Standalone download links, one per system */}
      <section className="mt-16" aria-labelledby="platform-heading">
        <h2
          id="platform-heading"
          className="text-center text-2xl font-bold text-ink sm:text-3xl"
        >
          Modly 3D download links for every system
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-3xl border border-cloud bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-ink">Modly 3D for {p.name}</h3>
              <p className="mt-2 text-sm text-ink/60">{p.detail}</p>
              <dl className="mt-4 flex-1 space-y-1 text-sm text-ink/70">
                <div className="flex justify-between gap-3">
                  <dt className="text-ink/50">File</dt>
                  <dd className="truncate" title={p.file}>
                    {p.file}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink/50">Size</dt>
                  <dd>{p.size}</dd>
                </div>
              </dl>
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
        </div>
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
            Each release bundles Windows, macOS (Apple Silicon &amp; Intel), and
            Linux builds.
          </p>
        </div>
      </section>

      {/* System & hardware requirements */}
      <section className="mt-16" aria-labelledby="requirements-heading">
        <h2
          id="requirements-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Modly 3D system and hardware requirements
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          Modly 3D is built as a low hardware 3d model local generator: no GPU
          farm, no cloud, no render queue. Integrated graphics are enough to run
          every workflow.
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl border border-cloud bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Modly 3D minimum and recommended system requirements
            </caption>
            <thead className="bg-cloud/60 text-ink/70">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Requirement
                </th>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Minimum
                </th>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Recommended
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cloud text-ink/70">
              {requirements.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="px-5 py-4 font-semibold text-ink">
                    {r.label}
                  </th>
                  <td className="px-5 py-4">{r.min}</td>
                  <td className="px-5 py-4">{r.rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Per-OS notes */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {perOs.map((o) => (
            <div
              key={o.os}
              className="rounded-3xl border border-cloud bg-cloud/30 p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{o.os}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/70">
                {o.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Install steps */}
      <section className="mt-16 rounded-3xl border border-cloud bg-cloud/30 p-8">
        <h2 className="text-xl font-bold text-ink">
          Install Modly 3D in three steps
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-ink/70">
          <li>
            <span className="font-semibold text-brand">1.</span> Download the
            installer for your system above.
          </li>
          <li>
            <span className="font-semibold text-brand">2.</span> Run it and follow
            the setup wizard — no account needed.
          </li>
          <li>
            <span className="font-semibold text-brand">3.</span> Open Modly, drop
            in an image or prompt, and generate your first 3D model.
          </li>
        </ol>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 rounded-3xl bg-brand/5 p-10 text-center">
        <h2 className="text-2xl font-bold text-ink">
          Ready to make 3D models locally with Modly 3D?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Modly is free forever, works offline, and needs no expensive hardware.
          See what it can do before you install.
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
