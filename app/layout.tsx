import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://modly3d.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Modly3D — Free Local 3D Model Generator | Unlimited, Offline, Low Hardware",
    template: "%s | Modly3D",
  },
  description:
    "Modly3D is a free local AI 3D model generator. Turn images or text into 3D meshes offline with unlimited generations and low hardware requirements. Export GLB, OBJ, STL, PLY.",
  keywords: [
    "modly",
    "modly3d",
    "3d model local generator",
    "local ai 3d model generator",
    "free 3d model generator",
    "offline 3d generator",
    "image to 3d",
    "text to 3d",
    "GLB OBJ STL PLY",
  ],
  authors: [{ name: "Modly3D" }],
  applicationName: "Modly3D",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Modly3D",
    title: "Modly3D — Free Local 3D Model Generator",
    description:
      "Free, offline AI 3D model generation. Unlimited generations, low hardware requirements. Export GLB, OBJ, STL, PLY.",
    url: siteUrl,
    images: [
      {
        url: "/images/hero.png",
        width: 1536,
        height: 1024,
        alt: "Modly3D turns a photo into a 3D model on your PC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modly3D — Free Local 3D Model Generator",
    description:
      "Free, offline AI 3D model generation. Unlimited, low hardware. Export GLB/OBJ/STL/PLY.",
    images: ["/images/hero.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/favicon.png", apple: "/images/favicon.png" },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Modly3D",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist text-ink">
        <JsonLd data={orgLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
