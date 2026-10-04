import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-cloud bg-cloud/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Modly 3D" className="h-8 w-8" />
              <span className="text-base font-bold text-ink">Modly</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink/60">
              Free, local AI 3D model generator. Unlimited generations, offline,
              low hardware requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-ink">Product</h3>
              <ul className="mt-2 space-y-1 text-ink/60">
                <li>
                  <Link href="/features" className="transition-colors hover:text-brand">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="transition-colors hover:text-brand">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/extensions" className="transition-colors hover:text-brand">
                    Extensions
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="transition-colors hover:text-brand">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ink">Resources</h3>
              <ul className="mt-2 space-y-1 text-ink/60">
                <li>
                  <Link href="/download" className="transition-colors hover:text-brand">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="transition-colors hover:text-brand">
                    Model marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="transition-colors hover:text-brand">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="transition-colors hover:text-brand">
                    Docs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-ink/50">
          © 2026 Modly 3D. Free for everyone. Modly 3D is an independent project.
        </p>
      </div>
    </footer>
  );
}
