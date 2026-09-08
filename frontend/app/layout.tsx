import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MetricsProvider } from "@/components/MetricsProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_TITLE = "David Shaevel – Platform & Developer Infrastructure Engineer";
const SITE_DESCRIPTION =
  "Platform & Developer Infrastructure Engineer in Austin, Texas. Building reliable cloud platforms (AWS, Azure, GCP, Terraform, Kubernetes, CI/CD, observability) and the developer infrastructure that makes AI-assisted software development safer, faster, and observable.";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidshaevel.com"),
  title: {
    default: SITE_TITLE,
    template: "%s | David Shaevel",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Platform Engineer",
    "Developer Experience Engineer",
    "DevEx Engineer",
    "AI Developer Tooling",
    "AI Platform Engineer",
    "Staff SRE",
    "Site Reliability Engineer",
    "Platform & Developer Infrastructure Engineer",
    "AI Developer Infrastructure",
    "Coding-Agent Orchestration",
    "Claude Code",
    "OpenAI Codex",
    "MCP",
    "DevOps",
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "Kubernetes",
    "Infrastructure as Code",
    "CI/CD",
    "Observability",
    "Cloud Architecture",
    "Austin, Texas",
  ],
  authors: [{ name: "David Shaevel" }],
  creator: "David Shaevel",
  openGraph: {
    type: "website",
    url: "https://davidshaevel.com",
    siteName: "David Shaevel",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <MetricsProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </MetricsProvider>
      </body>
    </html>
  );
}
