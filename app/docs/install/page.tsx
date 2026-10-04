import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export const metadata: Metadata = {
  title: "Modly docs — installation",
  description:
    "How to install Modly on Windows, macOS and Linux in three steps, including the SmartScreen and Gatekeeper workarounds for each platform.",
  alternates: { canonical: "/docs/install" },
};

const steps = [
  {
    n: "01",
    title: "Download the installer",
    body: "Open the download page and pick your platform: Windows .exe, macOS .dmg, or Linux .AppImage / .deb / .rpm. Modly is free and needs no account.",
  },
  {
    n: "02",
    title: "Run the setup",
    body: "Follow the wizard. On Windows the bundled .NET 8 runtime installs with it; on macOS the first launch asks for a one-time approval; on Linux mark the AppImage executable.",
  },
  {
    n: "03",
    title: "Generate your first mesh",
    body: "Drop in an image or type a prompt, choose a local model, and let your PC do the work. Then export as GLB, OBJ, STL, or PLY.",
  },
];

const perOs = [
  {
    os: "Windows",
    note: "Windows 10 or 11, 64-bit. If SmartScreen blocks the installer, click “More info” then “Run anyway” — the build is unsigned while the code signing is pending.",
  },
  {
    os: "macOS",
    note: "macOS 12 Monterey or newer, on Apple Silicon or Intel. First launch: right-click the app in Finder and choose “Open”, then confirm in System Settings → Privacy & Security.",
  },
  {
    os: "Linux",
    note: "Ubuntu 20.04+, Fedora 38+, or Arch with glibc 2.31+. Run chmod +x Modly-3D-*.AppImage, or install the .deb/.rpm package instead.",
  },
];

export default function InstallPage() {
  return (
    <div className="max-w-3xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          name: "Installing Modly",
          headline: "How to install Modly on Windows, macOS and Linux",
          url: `${siteUrl}/docs/install`,
          publisher: { "@type": "Organization", name: "Modly" },
        }}
      />

      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
          Get started
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Modly installation
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Three steps, about five minutes, and nothing leaves your computer.
          Pick your platform below if a specific case is tripping you up.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="text-xl font-bold text-ink">
          Install in three steps
        </h2>
        <ol className="mt-4 space-y-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-cloud bg-white/70 p-6 shadow-sm"
            >
              <div className="text-3xl font-extrabold text-sun">{s.n}</div>
              <h3 className="mt-2 text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10" aria-labelledby="per-os">
        <h2 id="per-os" className="text-xl font-bold text-ink">
          Per-platform notes
        </h2>
        <div className="mt-4 space-y-3">
          {perOs.map((o) => (
            <div
              key={o.os}
              className="rounded-2xl border border-cloud bg-cloud/30 p-5 text-sm text-ink/70"
            >
              <span className="font-semibold text-ink">{o.os}:</span> {o.note}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="after-install">
        <h2 id="after-install" className="text-xl font-bold text-ink">
          After installation
        </h2>
        <p className="mt-3 text-sm text-ink/70">
          Check that your machine meets the minimums, then install an extra
          model if you want more variety.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/docs/requirements"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            System requirements
          </Link>
          <Link
            href="/docs/troubleshooting"
            className="rounded-full border border-cloud px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Troubleshooting
          </Link>
        </div>
      </section>
    </div>
  );
}
