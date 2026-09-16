export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is a 3d model local generator?",
    a: "A 3d model local generator is software that creates 3D meshes from images or text prompts directly on your own computer, without sending your data to the cloud. Modly3D is a free local 3D model generator: it runs the AI models on your PC, so your images never leave your device and you get unlimited generations with no credits or subscriptions.",
  },
  {
    q: "Is Modly3D really free?",
    a: "Yes. Modly3D is 100% free, with unlimited generations and no account required. There are no subscriptions, no per-image credits, and no hidden limits.",
  },
  {
    q: "Does Modly3D work offline?",
    a: "Yes. All generation runs locally on your PC. After installation, no internet connection is required to turn an image or prompt into a 3D model.",
  },
  {
    q: "What hardware do I need?",
    a: "Modly3D is optimized for low hardware requirements and runs on everyday laptops. You do not need an expensive GPU farm or a data center — a typical modern PC is enough for fast, high-quality results.",
  },
  {
    q: "What file formats can I export?",
    a: "You can export your generated meshes as GLB, OBJ, STL, and PLY, which work in Blender, Unity, Unreal Engine, Godot, and most 3D printers and slicers.",
  },
  {
    q: "Is my image uploaded anywhere?",
    a: "No. Your images stay on your device. Modly3D is a local AI 3D model generator, so nothing is sent to a server — your photos and prompts remain private.",
  },
  {
    q: "Can I generate from text, not just images?",
    a: "Yes. Modly3D supports both image-to-3D and text-to-3D. Describe a concept in a prompt, or drop in a photo, and the local model produces a textured 3D mesh.",
  },
  {
    q: "Which platforms are supported?",
    a: "Modly3D provides installers for Windows, Linux, and macOS. Download the build that matches your operating system from the download section.",
  },
];
