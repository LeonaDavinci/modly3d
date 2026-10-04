import type { Metadata } from "next";
import Link from "next/link";
import Faq from "../components/Faq";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const latestRelease = "https://github.com/lightningpixel/modly/releases/latest";
const issues = "https://github.com/lightningpixel/modly/issues";

export const metadata: Metadata = {
  title: "Modly docs",
  description:
    "Modly docs: install steps for Windows, macOS and Linux, troubleshooting for GPU and low-VRAM errors, and answers to the most common questions about the free local AI 3D model generator.",
  keywords: [
    "modly",
    "modly3d",
    "modly 3d docs",
    "modly 3d installation",
    "modly 3d troubleshooting",
    "how to install modly 3d",
    "local ai 3d model generator",
    "3d model local generator",
  ],
  alternates: { canonical: "/docs" },
};

const installSteps = [
  {
    n: "01",
    title: "Download the installer",
    body: "Open the Modly download page and pick your platform — Windows .exe, Linux .AppImage/.deb/.rpm, or macOS .dmg. The installer is free, and no account is needed.",
  },
  {
    n: "02",
    title: "Run the setup",
    body: "Follow the setup wizard. On Windows the bundled .NET 8 runtime installs automatically; on macOS you may need one right-click open the first time; on Linux just mark the AppImage executable.",
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
    note: "Windows 10 or 11, 64-bit. If SmartScreen blocks the installer, choose “More info → Run anyway” — the app is unsigned but not harmful.",
  },
  {
    os: "macOS",
    note: "macOS 12 or newer, on Apple Silicon or Intel. First launch: right-click the app and choose “Open”, then confirm.",
  },
  {
    os: "Linux",
    note: "Ubuntu 20.04+, Fedora 38+, or Arch. Run chmod +x on the AppImage before launching it, or install the .deb/.rpm package instead.",
  },
];

const troubleshooting = [
  {
    q: "Windows Defender SmartScreen blocks the Modly installer",
    a: "The desktop build is not code-signed yet, so SmartScreen shows a blue warning. Click “More info”, then “Run anyway” to continue. The installer is open source and published on the public GitHub releases page.",
  },
  {
    q: "macOS says the app is damaged and will not open",
    a: "This is the macOS Gatekeeper first-launch check, not a corrupted file. Open System Settings → Privacy & Security, then accept “Open anyway” for Modly, or right-click the app in Finder and choose “Open”.",
  },
  {
    q: "Out of memory or CUDA out of memory errors",
    a: "Close other GPU-heavy apps, drop to a smaller model variant, or pick a low-VRAM build. On 8 GB machines the lightweight image-to-3D model is usually the right default; bigger checkpoints need 12 GB+ of VRAM.",
  },
  {
    q: "Generation is very slow on an integrated GPU",
    a: "Expect slower turns on integrated graphics — that is the low-hardware trade-off, not a bug. Use a small model variant, reduce resolution before generation, and keep the Modly window focused so the GPU is not shared with a browser tab.",
  },
  {
    q: "AMD or Intel GPU runs out of supported operations",
    a: "Local inference is built around CUDA. On AMD and Intel GPUs, run the CPU fallback or a GGUF/ONNX checkpoint in the Modly model list instead of the CUDA build.",
  },
  {
    q: "The AppImage will not start on Linux",
    a: "Mark it executable first: chmod +x Modly-3D-*.AppImage, then run it. If the loader complains about GLIBC, your distribution is too old — try the .deb or .rpm package, or upgrade to a recent release.",
  },
  {
    q: "The image import fails or produces a blank mesh",
    a: "Use a single crisp photo of one object on a plain background, at 512–1024 px. Avoid long screenshots, panoramas, and heavily cropped photos — the local model needs a clear silhouette.",
  },
  {
    q: "The export button is greyed out",
    a: "Export unlocks once a mesh exists in the current session. If the preview is empty, wait for generation to finish; if the mesh failed, check the message in the status bar and try a different input.",
  },
  {
    q: "Model weights download slowly or stall",
    a: "The first run downloads model weights only, which is a one-time cost. Switch to a smaller variant if you are on metered data, and keep the app open until the download finishes.",
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          name: "Modly docs",
          headline: "Modly docs: install, troubleshoot and answer common questions",
          description:
            "Installation steps for Windows, macOS and Linux, troubleshooting for GPU, memory and export issues, and answers to common questions about Modly, the free local AI 3D model generator.",
          url: `${siteUrl}/docs`,
          publisher: { "@type": "Organization", name: "Modly" },
        }}
      />

      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Modly <span className="text-gradient">docs</span>
        </h1>
        <p className="mt-5 text-lg text-ink/70">
          Everything you need to get Modly running and keep it running: step-by-step
          installation, fixes for the errors people hit most, and answers to the
          questions we get asked most. Modly is the free local AI 3D model
          generator that keeps every generation on your own machine.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/download"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Download Modly
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Browse the full FAQ
          </Link>
        </div>
      </section>

      {/* Installation */}
      <section className="mt-16" aria-labelledby="install-heading">
        <h2
          id="install-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Modly 3D installation steps
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Three steps, about five minutes, no account required.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {installSteps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-cloud bg-white/70 p-6 shadow-sm"
            >
              <div className="text-3xl font-extrabold text-sun">{s.n}</div>
              <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {perOs.map((o) => (
            <div
              key={o.os}
              className="rounded-2xl border border-cloud bg-cloud/30 p-5 text-sm text-ink/70"
            >
              <span className="font-semibold text-ink">{o.os}:</span> {o.note}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink/70">
          Need the exact hardware list?{" "}
          <Link
            href="/download"
            className="font-semibold text-brand hover:underline"
          >
            See Modly system and hardware requirements →
          </Link>
        </p>
      </section>

      {/* Troubleshooting */}
      <section className="mt-16" aria-labelledby="troubleshooting-heading">
        <h2
          id="troubleshooting-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Modly 3D troubleshooting
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          The errors that show up most often, and what actually fixes them.
        </p>
        <div className="mt-6 divide-y divide-cloud rounded-2xl border border-cloud bg-white/60 p-2">
          {troubleshooting.map((t) => (
            <details key={t.q} className="group p-4">
              <summary className="cursor-pointer list-none text-base font-semibold text-ink marker:hidden">
                <span className="flex items-center justify-between">
                  {t.q}
                  <span className="ml-4 text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{t.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Common questions */}
      <section className="mt-16" aria-labelledby="common-heading">
        <h2
          id="common-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Modly 3D common questions
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          What people ask before they install Modly.
        </p>
        <div className="mt-6">
          <Faq />
        </div>
      </section>

      {/* Support */}
      <section className="mt-16" aria-labelledby="support-heading">
        <h2
          id="support-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Answers you did not find here
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-cloud bg-white/70 p-6">
            <h3 className="text-base font-semibold text-ink">
              Read the full FAQ
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Eleven answers covering what a 3d model local generator is, cost,
              offline use, formats, and privacy.
            </p>
            <Link
              href="/faq"
              className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
            >
              Open the Modly FAQ →
            </Link>
          </div>
          <div className="rounded-3xl border border-cloud bg-white/70 p-6">
            <h3 className="text-base font-semibold text-ink">
              Report a bug on GitHub
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Found a crash or a wrong export? Open an issue with your OS, GPU,
              and the model you used.
            </p>
            <a
              href={issues}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
            >
              Open a Modly issue →
            </a>
          </div>
          <div className="rounded-3xl border border-cloud bg-white/70 p-6">
            <h3 className="text-base font-semibold text-ink">
              Grab the latest build
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Every release bundles Windows, macOS, and Linux builds of Modly.
            </p>
            <a
              href={latestRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
            >
              See the latest release →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
