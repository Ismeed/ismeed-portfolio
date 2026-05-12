import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ismailsaid.com"),
  title: {
    default: "Isma'il Sa'id — Founder/CEO, Swifter Ventures",
    template: "%s | Isma'il Sa'id",
  },
  description:
    "Isma'il Sa'id is a Nigerian technology founder, public speaker, and youth innovation leader building scalable digital solutions for healthcare, mobility, and inclusion across Africa.",
  keywords: [
    "Isma'il Sa'id",
    "Swifter Ventures",
    "African tech founder",
    "Nigerian startup",
    "UNDP Innovation",
    "Secure Pass",
    "Swifter",
    "Katsina founder",
    "Africa innovation",
  ],
  authors: [{ name: "Isma'il Sa'id" }],
  creator: "Isma'il Sa'id",
  openGraph: {
    title: "Isma'il Sa'id — Founder/CEO, Swifter Ventures",
    description:
      "Building scalable technology solutions for underserved communities across Africa.",
    type: "website",
    locale: "en_US",
    siteName: "Isma'il Sa'id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isma'il Sa'id — Founder/CEO, Swifter Ventures",
    description:
      "Building scalable technology solutions for underserved communities across Africa.",
    creator: "@Ismeed3213",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${space.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
