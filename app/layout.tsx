import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GeistSans, GeistMono } from 'geist/font';

// Configuration
const SITE_DATA = {
  title: "AIALCHEMIST",
  description:
    "AIALCHEMIST is a next-gen student-led global platform empowering students to learn AI, Web3, Problem Solving, and Open Source through hands-on projects, research, and community-driven innovation.",
  url: "https://aialchemist.vercel.app",
  logoPath: "/logo.ico",
  author: "AIALCHEMIST",
  social: {
    twitter: "@aialchemistorg",
    github: "aialchemistorg",
    linkedin: "company/aialchemistorg",
  },
};

// Font setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Enhanced Metadata for AIALCHEMIST
export const metadata: Metadata = {
  title: {
    default: SITE_DATA.title,
    template: `%s | ${SITE_DATA.title}`,
  },
  description: SITE_DATA.description,
  metadataBase: new URL(SITE_DATA.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Artificial Intelligence",
    "Web3",
    "Blockchain",
    "Open Source",
    "Student Innovation",
    "Hackathons",
    "CTF",
    "Hacking",
    "Cyber Security",
    "Web Development",
    "Machine Learning",
    "AIALCHEMIST",
    "Global Community",
    "Next.js",
    "React",
    "Education",
    "Research",
    "Technology Platform",
  ],
  authors: [{ name: SITE_DATA.author, url: SITE_DATA.url }],
  creator: SITE_DATA.author,
  publisher: SITE_DATA.author,
  verification: {
    google: "",
    yandex: "",
    other: {
      "msvalidate.01": "",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: SITE_DATA.logoPath, sizes: "512x512", type: "image/webp" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: SITE_DATA.logoPath, sizes: "512x512", type: "image/webp" },
    ],
    shortcut: [SITE_DATA.logoPath],
  },
  openGraph: {
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    url: SITE_DATA.url,
    type: "website",
    siteName: SITE_DATA.title,
    locale: "en_IN",
    images: [
      {
        url: SITE_DATA.logoPath,
        width: 512,
        height: 512,
        alt: `${SITE_DATA.title} Logo`,
      },
      {
        url: "/aialchemist-banner.png",
        width: 1200,
        height: 630,
        alt: "AIALCHEMIST Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    creator: SITE_DATA.social.twitter,
    site: SITE_DATA.social.twitter,
    images: [SITE_DATA.logoPath, "/aialchemist-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.placename": "Global",
    "geo.region": "IN",
    "dc.language": "en",
    "dc.source": SITE_DATA.url,
    "twitter:dnt": "on",
    "fb:pages": "aialchemistorg",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

// JSON-LD structured data for AIALCHEMIST (Organization)
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIALCHEMIST",
    url: SITE_DATA.url,
    logo: `${SITE_DATA.url}${SITE_DATA.logoPath}`,
    description: SITE_DATA.description,
    sameAs: [
      `https://twitter.com/${SITE_DATA.social.twitter.replace("@", "")}`,
      `https://github.com/${SITE_DATA.social.github}`,
      `https://linkedin.com/${SITE_DATA.social.linkedin}`,
    ],
    foundingDate: "2024",
    location: {
      "@type": "Place",
      name: "India",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    keywords: [
      "AI",
      "Machine Learning",
      "Web3",
      "Open Source",
      "Hackathons",
      "Education",
      "Technology Community",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_DATA.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
};

// Enhanced PWA manifest for AIALCHEMIST
const generateManifest = () => ({
  name: SITE_DATA.title,
  short_name: "AIALCHEMIST",
  description: SITE_DATA.description,
  start_url: "/",
  display: "standalone",
  orientation: "portrait",
  background_color: "#000000",
  theme_color: "#000000",
  icons: [
    {
      src: SITE_DATA.logoPath,
      sizes: "512x512",
      type: "image/webp",
      purpose: "any maskable",
    },
    {
      src: "/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  categories: ["technology", "education", "community"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = generateStructuredData();
  const manifestContent = generateManifest();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable}`}
    >
      <head>
        {/* PWA manifest */}
        <link
          rel="manifest"
          href={`data:application/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(manifestContent)
          )}`}
        />
        <meta name="theme-color" content="#000000" />

        {/* SEO verification codes */}
        <meta name="yandex-verification" content="YANDEX_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />

        {/* Mobile meta */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={SITE_DATA.title} />
        <meta name="application-name" content={SITE_DATA.title} />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <header className=" bg-gray-800">
          <img
            src="/logo.png"
            alt="AIALCHEMIST Logo"
            className="h-10"
          />
        </header>

        <main className="flex-grow container">
          {children}
        </main>

        <footer className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AIALCHEMIST. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
