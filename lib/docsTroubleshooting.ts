export type DocsIssue = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
  tip: string;
};

export const issues: DocsIssue[] = [
  {
    slug: "windows-defender-smartscreen",
    title: "Windows Defender SmartScreen blocks the Modly installer",
    summary:
      "The desktop build is not code-signed yet, so SmartScreen shows a blue “Windows protected your PC” warning.",
    steps: [
      "On the SmartScreen window, click “More info” at the bottom of the panel.",
      "Click “Run anyway” and confirm with your administrator password if prompted.",
      "If the installer still refuses, right-click the .exe, choose Properties, then unblock the file under the General tab and run it again.",
    ],
    tip: "The installer is open source and every build is published on the public GitHub releases page — you can inspect the file before running it.",
  },
  {
    slug: "mac-app-damaged",
    title: "“App is damaged and can’t be opened” on macOS",
    summary:
      "This is the macOS Gatekeeper first-launch check, not a corrupted download.",
    steps: [
      "Open System Settings → Privacy & Security and scroll to “Open anyway” for Modly, then confirm.",
      "Or open Finder, right-click Modly, and choose “Open” from the context menu, then confirm the dialog.",
      "On macOS 15 and newer, repeat the right-click once per version upgrade — each new build is checked separately.",
    ],
    tip: "If the download was re-saved by a mail client or archive tool, download it again from the releases page and keep it outside your Downloads folder.",
  },
  {
    slug: "cuda-out-of-memory",
    title: "CUDA out of memory",
    summary:
      "The model checkpoint needs more VRAM than the card currently has free.",
    steps: [
      "Close other GPU-heavy apps (browser tabs with WebGL, game launchers, other AI tools) and retry the generation.",
      "Switch to a smaller model variant in the model list — the lightweight image-to-3D model fits in about 4 GB of VRAM.",
      "If you are on a low-VRAM build such as “Hunyuan3D 2.1 Full - Low VRAM”, confirm INT8 or FP8 inference is selected.",
      "On laptops with hybrid graphics, set the app to use the discrete GPU if the model keeps failing on the integrated one.",
    ],
    tip: "Memory errors are a model-size problem, not a Modly bug. On 8 GB systems the small variant plus a 512 px input is the reliable combination.",
  },
  {
    slug: "slow-integrated-gpu",
    title: "Generation is very slow on integrated graphics",
    summary:
      "Integrated GPUs share system memory and run at much lower throughput than a discrete card.",
    steps: [
      "Use the fastest small model variant instead of the fidelity-tuned one.",
      "Import a smaller image (512–1024 px is plenty) and skip upsampling before generation.",
      "Keep Modly focused in the foreground — a background tab can steal GPU time.",
      "Expect 2–5× longer turnaround than a discrete 6 GB card; that is the low-hardware trade-off the app is built around.",
    ],
    tip: "If a single turn takes more than a few minutes on an old laptop, check that the machine is not throttling on thermals — on a fanless laptop, a cooling break speeds up the next run.",
  },
  {
    slug: "amd-intel-unsupported",
    title: "AMD or Intel GPU reports unsupported operations",
    summary:
      "Local inference is built around CUDA, so non-NVIDIA GPUs need a different checkpoint.",
    steps: [
      "In the model list, pick a GGUF or ONNX variant — these run on CPU and on AMD/Intel accelerations.",
      "For AMD Radeon on Windows, use the CPU fallback build if the ONNX provider fails to load.",
      "Update your GPU driver to the latest version from the vendor, not from Windows Update.",
      "If you are on an older Integrated Intel generation, expect CPU-speed generation only.",
    ],
    tip: "The extension catalog also hosts community builds patched for specific hardware, for example AMD-tuned Hunyuan3D checkpoints.",
  },
  {
    slug: "appimage-wont-start",
    title: "The AppImage will not start on Linux",
    summary:
      "Most AppImage launch failures are a missing execute bit or an old glibc.",
    steps: [
      "Run chmod +x Modly-3D-*.AppImage in the terminal, then start it from the same directory.",
      "If the shell reports “version GLIBC_2.xx not found”, your distribution is too old — install the .deb or .rpm build instead.",
      "On immutable systems (Steam Deck desktop mode, Fedora Silverblue), copy the AppImage to ~/Applications and run it there.",
      "Connect the first run to the internet once so the app can fetch its manifest and model metadata.",
    ],
    tip: "Fuse2 failures (“FUSE not supported”) usually mean a container or a locked-down distro — unpack the AppImage with --appimage-extract and run the extracted binary.",
  },
  {
    slug: "import-fails",
    title: "Image import fails or produces a blank mesh",
    summary:
      "Single-image models need a clear silhouette; busy or cropped photos reconstruct poorly.",
    steps: [
      "Use one object centred in frame against a plain background, lit from the front.",
      "Resize to 512–1024 px and keep the file as PNG or JPEG — avoid long screenshots, panoramas, and collages.",
      "Try the text-to-3D path for abstract references, then refine with an image.",
      "If you import multiple views, use a multi-view model such as Pi3X instead of a single-image model.",
    ],
    tip: "A flat grey backdrop gives the best first result. The model needs to know where the horizon is, or it guesses and produces a flat disc.",
  },
  {
    slug: "export-disabled",
    title: "The export button is greyed out",
    summary:
      "Export only unlocks once a mesh exists in the current session.",
    steps: [
      "Check the status bar — if generation is still running, wait for it to finish.",
      "If the preview is empty, import a new image or prompt and generate again.",
      "If an error is shown in the status bar, fix that error first; export does not run on a failed generate.",
      "Once a mesh exists, GLB, OBJ, STL and PLY all become selectable.",
    ],
    tip: "STL export for very high-poly meshes can take a few seconds — give it a moment rather than restarting the app.",
  },
  {
    slug: "model-download-stalls",
    title: "The model weight download stalls",
    summary:
      "Weights are downloaded once on first use, not at install time.",
    steps: [
      "Leave the app open until the download completes — closing it mid-transfer restarts the whole file.",
      "Switch to a smaller variant if you are on a metered or flaky connection.",
      "Check free disk space: model packs commonly need 2–6 GB.",
      "Retry once; if it keeps failing at the same percentage, restart the app and choose “Re-download”.",
    ],
    tip: "Generation itself is fully offline — the network is only needed for that first weight download and for updating the app.",
  },
];

export const issueBySlug = (slug: string) => issues.find((i) => i.slug === slug);
