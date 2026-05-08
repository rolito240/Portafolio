import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const interDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.local"),
  title: {
    default: "Daniel Martinez | Web, Data & AI Automation",
    template: "%s | Daniel Martinez",
  },
  description:
    "English-first bilingual portfolio for Daniel Martinez, focused on front-end development, data analysis, and AI automation workflows.",
  openGraph: {
    title: "Daniel Martinez | Web, Data & AI Automation",
    description:
      "A professional portfolio for front-end development, analytics, and agentic AI automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmMono.variable} ${interDisplay.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
