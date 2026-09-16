import { faqs as allFaqs } from "@/lib/faqs";

export default function Faq({ limit }: { limit?: number }) {
  const items = limit ? allFaqs.slice(0, limit) : allFaqs;
  return (
    <div className="mx-auto max-w-3xl divide-y divide-cloud rounded-2xl border border-cloud bg-white/60 p-2">
      {items.map((item) => (
        <details key={item.q} className="group p-4">
          <summary className="cursor-pointer list-none text-base font-semibold text-ink marker:hidden">
            <span className="flex items-center justify-between">
              {item.q}
              <span className="ml-4 text-brand transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
