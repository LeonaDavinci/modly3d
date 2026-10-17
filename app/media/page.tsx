import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";
const reviewUrl =
  "https://firethering.com/modly-local-ai-image-to-3d-model-generator/";
const repoUrl = "https://github.com/lightningpixel/modly";

export const metadata: Metadata = {
  title: "Modly media coverage & press reviews",
  description:
    "Independent media coverage of Modly, the free open-source local AI image-to-3D model generator — specs, screenshots and hands-on impressions.",
  keywords: [
    "modly",
    "modly3d",
    "modly review",
    "modly press",
    "modly media coverage",
    "local ai image to 3d model generator",
    "open source image to 3d",
    "offline 3d model generator",
  ],
  alternates: { canonical: "/media" },
};

/** Facts the outlet recorded about the release it reviewed. */
const facts = [
  { label: "Reviewed release", value: "Modly v0.2.0" },
  { label: "Reviewed by", value: "Firethering Team" },
  { label: "Published", value: "March 25, 2026" },
  { label: "Category", value: "Software review · desktop tool" },
  { label: "License noted", value: "MIT (open source)" },
  { label: "Source", value: "github.com/lightningpixel/modly" },
];

/** What the review singled out, rewritten for this page. */
const highlights = [
  {
    title: "Modly runs every step on your own GPU",
    body: "The review notes that all AI processing happens locally on an NVIDIA GPU — nothing is uploaded, so the image you drop in never leaves your machine.",
  },
  {
    title: "Modly turns one photo into a usable mesh",
    body: "Image in, mesh out: Modly reconstructs geometry from a single photo using open-source AI models, ready for Blender, Unity or Unreal.",
  },
  {
    title: "Modly removes backgrounds automatically",
    body: "No manual masking step — Modly strips the background before generation, so a phone snap is enough to start.",
  },
  {
    title: "Modly previews the model before export",
    body: "A built-in 3D viewer lets you inspect the generated mesh inside the app before you commit to exporting it.",
  },
  {
    title: "Modly exports GLB, OBJ, STL and PLY",
    body: "Every export drops straight into the format your pipeline already speaks, whether that is a game engine or a slicer.",
  },
  {
    title: "Modly extensions install straight from GitHub",
    body: "Swap or upgrade the pipeline by installing external model extensions from a repository URL — no forking, no manual weight juggling.",
  },
  {
    title: "Modly keeps generations organised",
    body: "Collections and a workspace view group every generated model, so a session of experiments is still searchable afterwards.",
  },
  {
    title: "Modly works fully offline, at zero cost",
    body: "After setup Modly needs no account, no cloud and no credits — unlimited local generations for free under an open-source licence.",
  },
];

/** Screenshots that accompany the coverage. */
const screenshots = [
  {
    src: "/images/media/app-screenshot.png",
    alt: "Modly 3D app screenshot: the local AI image-to-3D model generator interface running offline on a desktop GPU",
    caption: "Modly's workspace: generate, preview and export without ever leaving the app.",
  },
  {
    src: "/images/media/install-extension.png",
    alt: "Modly 3D install from GitHub: entering an extension repository URL to swap the local AI model",
    caption: "Installing a Modly extension from a GitHub repository URL.",
  },
  {
    src: "/images/media/install-models.png",
    alt: "Modly 3D models page: downloading an installed AI model variant for offline image-to-3D generation",
    caption: "The Modly models page, where a downloaded variant becomes the active pipeline.",
  },
  {
    src: "/images/media/install-from-github.png",
    alt: "Modly 3D install from GitHub button inside the local AI 3D model generator",
    caption: "The Install from GitHub entry point in Modly's Models page.",
  },
];

const requirements = [
  { label: "Operating system", value: "Windows 10+ · modern Linux distros" },
  { label: "GPU", value: "NVIDIA GPU (required for local inference)" },
  { label: "Memory", value: "8 GB minimum · 16 GB recommended" },
  { label: "Storage", value: "~500 MB for the app, plus space for model extensions" },
  { label: "Internet", value: "Only needed to download model extensions" },
];

/** The install walkthrough the coverage published, condensed. */
const installSteps = [
  {
    title: "Modly for Windows (.exe)",
    body: "141 MB",
    steps: [
      "Download the .exe installer and double-click it.",
      "Follow the on-screen setup instructions.",
      "Launch Modly from the Start Menu or a desktop shortcut.",
      "Open the Models page, click Install from GitHub, and add a model extension.",
    ],
  },
  {
    title: "Modly for Linux (.AppImage)",
    body: "152 MB",
    steps: [
      "Download the .AppImage file.",
      "Right-click it and mark it as executable.",
      "Double-click to launch the app.",
      "Open the Models page, click Install from GitHub, and add a model extension.",
    ],
  },
  {
    title: "Modly model extensions",
    body: "GitHub install",
    steps: [
      "Go to the Models page inside Modly.",
      "Click Install from GitHub and paste a repository URL.",
      "Pick a variant and download the model weights.",
      "Start generating — the new pipeline is active immediately.",
    ],
  },
];

const extensionUrl =
  "https://github.com/lightningpixel/modly-hunyuan3d-mini-extension";

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Modly media coverage & press reviews",
          description:
            "Independent press coverage of Modly, the free open-source local AI image-to-3D model generator that runs on your own GPU.",
          url: `${siteUrl}/media`,
          about: {
            "@type": "SoftwareApplication",
            name: "Modly",
            applicationCategory: "DesktopApplication",
            operatingSystem: "Windows, Linux",
            license: "https://opensource.org/licenses/MIT",
            isAccessibleForFree: true,
          },
          mentions: reviewUrl,
        }}
      />

      {/* Hero */}
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          Press & media
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Modly <span className="text-gradient">media coverage</span>
        </h1>
        <p className="mt-5 text-lg text-ink/70">
          Independent publications have reviewed Modly, the free open-source
          local AI image-to-3D model generator that runs entirely on your own
          GPU. Below is what the press covered, the specs they recorded, and the
          screenshots they used.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Read the review on Firethering ↗
          </a>
          <Link
            href="/download"
            className="rounded-full border border-cloud bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Download Modly free
          </Link>
        </div>
      </section>

      {/* Featured coverage */}
      <section className="mt-14" aria-labelledby="featured-heading">
        <h2
          id="featured-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Featured: Firethering reviews Modly
        </h2>

        <article className="mt-6 overflow-hidden rounded-3xl border border-cloud bg-white/70 shadow-sm">
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">
                  Firethering
                </span>
                <span className="rounded-full bg-teal/10 px-3 py-1 text-teal">
                  Hands-on review
                </span>
                <span className="rounded-full bg-cloud px-3 py-1 text-ink/60">
                  March 25, 2026
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">
                Modly: Open Source Local AI Image-to-3D Model Generator
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Firethering approached Modly as a working tool rather than a
                demo. Its verdict centres on the fact that a photo becomes a
                usable 3D mesh with no cloud step, no account and no
                per-generation fee — and that every layer underneath is open, so
                the AI model, the pipeline and the extensions can all be swapped
                by the user.
              </p>
              <blockquote className="mt-5 border-l-2 border-brand/40 pl-4 text-sm italic leading-relaxed text-ink/80">
                &ldquo;Drop an image in, the AI handles background removal
                automatically, reconstructs the geometry, and hands you a model
                ready to open in Blender, Unity, Unreal, or whatever you&rsquo;re
                working in.&rdquo;
                <footer className="mt-2 text-xs font-semibold not-italic text-ink/50">
                  — Firethering Team, March 25, 2026
                </footer>
              </blockquote>
              <p className="mt-5 text-sm leading-relaxed text-ink/70">
                The write-up is candid about the trade-offs as well: Modly needs
                a capable NVIDIA GPU, and final quality tracks the input photo.
                For indie developers, 3D artists who want a quick base mesh, or
                anyone curious what local AI can actually do, the review
                recommends it.
              </p>
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-600"
              >
                Read the full article on firethering.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <figure className="w-full shrink-0 sm:w-72">
              <img
                src="/images/media/app-screenshot.png"
                alt="Modly 3D app screenshot reviewed by Firethering: the local AI image-to-3D model generator interface on Windows"
                width={2556}
                height={1390}
                className="w-full rounded-2xl border border-cloud object-cover"
              />
              <figcaption className="mt-2 text-xs text-ink/50">
                The Modly desktop app, as shown in the coverage.
              </figcaption>
            </figure>
          </div>
        </article>
      </section>

      {/* Coverage facts */}
      <section className="mt-14" aria-labelledby="facts-heading">
        <h2 id="facts-heading" className="text-2xl font-bold text-ink sm:text-3xl">
          What the coverage recorded about Modly
        </h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-cloud bg-white/70 p-5 shadow-sm"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Highlights */}
      <section className="mt-16" aria-labelledby="highlights-heading">
        <h2
          id="highlights-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          Eight things the review highlighted in Modly
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-cloud bg-white/70 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="mt-16" aria-labelledby="shots-heading">
        <h2 id="shots-heading" className="text-2xl font-bold text-ink sm:text-3xl">
          Modly screenshots from the coverage
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-ink/70">
          The images below are the ones published alongside the Modly review.
          Run the same workflow yourself with the free download — nothing is
          uploaded, so what you generate stays on your machine.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {screenshots.map((shot) => (
            <figure
              key={shot.src}
              className="overflow-hidden rounded-3xl border border-cloud bg-white/70 p-3 shadow-sm"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="h-full w-full rounded-2xl border border-cloud object-cover"
              />
              <figcaption className="mt-2 px-2 pb-1 text-xs text-ink/55">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Requirements noted */}
      <section className="mt-16" aria-labelledby="req-heading">
        <h2 id="req-heading" className="text-2xl font-bold text-ink sm:text-3xl">
          Modly requirements, as reported
        </h2>
        <div className="mt-6 overflow-hidden rounded-3xl border border-cloud bg-white/70 shadow-sm">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-cloud">
              {requirements.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="w-56 px-5 py-4 align-top font-semibold text-ink"
                  >
                    {row.label}
                  </th>
                  <td className="px-5 py-4 text-ink/70">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink/50">
          Full details, including troubleshooting for every requirement, live in
          the{" "}
          <Link href="/docs/requirements" className="text-brand hover:underline">
            Modly system requirements doc
          </Link>
          .
        </p>
      </section>

      {/* Install walkthrough */}
      <section className="mt-16" aria-labelledby="install-heading">
        <h2
          id="install-heading"
          className="text-2xl font-bold text-ink sm:text-3xl"
        >
          The install path the Modly coverage describes
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-ink/70">
          Firethering walked through setup end to end: install the app, then
          install a model extension from GitHub. The three routes below are the
          same steps, recorded against the release it reviewed.
        </p>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {installSteps.map((group) => (
            <div
              key={group.title}
              className="flex flex-col rounded-3xl border border-cloud bg-white/70 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-ink">
                {group.title}
              </h3>
              <span className="mt-1 inline-flex w-fit rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                {group.body}
              </span>
              <ol className="mt-4 space-y-2 text-sm leading-relaxed text-ink/70">
                {group.steps.map((step, i) => (
                  <li key={step} className="flex gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cloud text-[11px] font-bold text-ink/70">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink/55">
          The extension repository the review used as its example:{" "}
          <a
            href={extensionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-medium text-brand hover:underline"
          >
            {extensionUrl}
          </a>
          . More options in the{" "}
          <Link href="/extensions" className="text-brand hover:underline">
            Modly extensions list
          </Link>
          .
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mt-16 rounded-3xl border border-brand/20 bg-brand/5 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Try the Modly build the review covered
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Where cloud services charge per generation and upload your images to
          remote servers, Modly gives you unlimited runs, full model access and
          total data ownership. For game developers, 3D artists, designers and
          researchers who want a fast, local and open alternative to paid 3D
          generation tools, that is exactly what it delivers.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          Free, MIT-licensed, unlimited offline generations. Start from one
          photo, preview the mesh in Modly&rsquo;s built-in viewer, and export
          GLB, OBJ, STL or PLY for Blender, Unity or Unreal.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/download"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Download Modly free
          </Link>
          <Link
            href="/extensions"
            className="rounded-full border border-cloud bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Browse Modly extensions
          </Link>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cloud bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            View the source on GitHub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
