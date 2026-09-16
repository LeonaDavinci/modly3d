import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import Faq from "../components/Faq";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Modly3D: what a 3d model local generator is, whether it is free, how it works offline, hardware requirements, export formats, and privacy.",
  alternates: { canonical: "/faq" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <JsonLd data={faqLd} />
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">
          Frequently asked questions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink/70">
          Everything you need to know about Modly3D before you download.
        </p>
      </header>
      <div className="mt-10">
        <Faq />
      </div>
    </div>
  );
}
