import Link from "next/link";

const nav = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cloud bg-mist/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Modly 3D home">
          <img src="/images/logo.png" alt="Modly 3D logo" className="h-9 w-9" />
          <span className="text-lg font-bold tracking-tight text-ink">
            Modly <span className="text-brand">3D</span>
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-brand"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/download"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
        >
          Download Free
        </Link>
      </div>
    </header>
  );
}
