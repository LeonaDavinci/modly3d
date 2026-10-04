export type DocsEntry = {
  href: string;
  label: string;
  blurb: string;
};

export type DocsGroup = {
  label: string;
  entries: DocsEntry[];
};

export const docsNav: DocsGroup[] = [
  {
    label: "Get started",
    entries: [
      { href: "/docs", label: "Documentation overview", blurb: "What Modly is and where to start" },
      { href: "/docs/install", label: "Installation", blurb: "Install on Windows, macOS or Linux" },
      { href: "/docs/requirements", label: "System requirements", blurb: "Hardware and OS minimums" },
    ],
  },
  {
    label: "Troubleshooting",
    entries: [
      { href: "/docs/troubleshooting", label: "All issues", blurb: "Browse every known problem" },
    ],
  },
  {
    label: "FAQ",
    entries: [{ href: "/docs/faq", label: "Common questions", blurb: "Answers people ask before installing" }],
  },
];

export const troubleshootingEntries: DocsEntry[] = [
  { href: "/docs/troubleshooting/windows-defender-smartscreen", label: "Windows Defender blocks the installer", blurb: "SmartScreen shows a blue warning" },
  { href: "/docs/troubleshooting/mac-app-damaged", label: "“App is damaged” on macOS", blurb: "Gatekeeper first-launch check" },
  { href: "/docs/troubleshooting/cuda-out-of-memory", label: "CUDA out of memory", blurb: "Not enough VRAM for the model" },
  { href: "/docs/troubleshooting/slow-integrated-gpu", label: "Generation is very slow", blurb: "Slow turns on integrated graphics" },
  { href: "/docs/troubleshooting/amd-intel-unsupported", label: "AMD or Intel GPU unsupported", blurb: "Operator not supported errors" },
  { href: "/docs/troubleshooting/appimage-wont-start", label: "AppImage will not start", blurb: "Linux loader and GLIBC errors" },
  { href: "/docs/troubleshooting/import-fails", label: "Image import fails", blurb: "Blank mesh or unreadable file" },
  { href: "/docs/troubleshooting/export-disabled", label: "Export is disabled", blurb: "Nothing to export yet" },
  { href: "/docs/troubleshooting/model-download-stalls", label: "Model download stalls", blurb: "One-time weight download issue" },
];
