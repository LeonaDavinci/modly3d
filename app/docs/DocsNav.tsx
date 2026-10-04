"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav, troubleshootingEntries } from "@/lib/docsNav";

export default function DocsNav() {
  const path = usePathname();
  const isActive = (href: string) => path === href;

  const linkClass = (href: string, indent = false) =>
    [
      "block rounded-lg px-3 py-2 text-sm transition-colors",
      indent ? "pl-6 text-[13px]" : "",
      isActive(href)
        ? "bg-brand/10 font-semibold text-brand"
        : "text-ink/70 hover:bg-cloud/60 hover:text-brand",
    ].join(" ");

  return (
    <>
      {/* Sidebar — desktop */}
      <nav
        aria-label="Docs navigation"
        className="sticky top-20 hidden max-h-[calc(100vh-6rem)] overflow-y-auto pb-10 lg:block"
      >
        {docsNav.map((group) => (
          <div key={group.label} className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
              {group.label}
            </p>
            <ul className="mt-2 space-y-1">
              {group.entries.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} aria-current={isActive(e.href) ? "page" : undefined} className={linkClass(e.href)}>
                    {e.label}
                  </Link>
                </li>
              ))}
              {group.label === "Troubleshooting" &&
                troubleshootingEntries.map((e) => (
                  <li key={e.href}>
                    <Link href={e.href} aria-current={isActive(e.href) ? "page" : undefined} className={linkClass(e.href, true)}>
                      {e.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Collapsible — mobile */}
      <details className="mb-8 rounded-2xl border border-cloud bg-white/70 p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-semibold text-ink">
          Browse the Modly docs
        </summary>
        {docsNav.map((group) => (
          <div key={group.label} className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
              {group.label}
            </p>
            <ul className="mt-2 space-y-1">
              {group.entries.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="block px-3 py-2 text-sm text-ink/70">
                    {e.label}
                  </Link>
                </li>
              ))}
              {group.label === "Troubleshooting" &&
                troubleshootingEntries.map((e) => (
                  <li key={e.href}>
                    <Link href={e.href} className="block px-3 py-2 pl-6 text-[13px] text-ink/70">
                      {e.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </details>
    </>
  );
}
