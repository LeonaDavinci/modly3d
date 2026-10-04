import DocsNav from "./DocsNav";

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="lg:grid lg:grid-cols-[236px_minmax(0,1fr)] lg:gap-12">
        <DocsNav />
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
