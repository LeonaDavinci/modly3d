import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const GA_ID = "G-0RP8Y09NZ2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.modly3d.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Modly 3D — Free Local 3D Model Generator",
    template: "%s | Modly 3D",
  },
  description:
    "Modly 3D: free offline AI 3D model generator. Turn images or text into 3D meshes on your PC — unlimited generations, low hardware. Export GLB, OBJ, STL, PLY.",
  keywords: [
    "modly",
    "modly3d",
    "modly 3d",
    "3d model local generator",
    "local ai 3d model generator",
    "free 3d model generator",
    "offline 3d generator",
    "best local 3d model ai",
    "open source image to 3d model",
    "open source 3d ai",
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
    title: "Modly 3D — Free Local 3D Model Generator",
    description:
      "Free, offline AI 3D model generation. Unlimited generations, low hardware requirements. Export GLB, OBJ, STL, PLY.",
    url: siteUrl,
    images: [
      {
        url: "/images/demo-hero.png",
        width: 1536,
        height: 1024,
        alt: "Modly3D turns a photo into a 3D model on your PC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modly 3D — Free Local 3D Model Generator",
    description:
      "Free, offline AI 3D model generation. Unlimited, low hardware. Export GLB/OBJ/STL/PLY.",
    images: ["/images/demo-hero.png"],
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

        {/* Google tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
