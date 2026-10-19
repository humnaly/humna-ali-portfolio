import type { Metadata } from "next";
import "./globals.css";

const domain = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  ...(domain ? { metadataBase: new URL(domain), alternates: { canonical: "/" } } : {}),
  title: "Humna Ali | Digital Marketing Executive & SEO Specialist",
  description: "Explore Humna Ali's digital marketing portfolio, including SEO, local SEO, social media management, content strategy, graphic design, and selected projects.",
  applicationName: "Humna Ali Portfolio",
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    title: "Humna Ali | Digital Marketing & Creative Portfolio",
    description: "SEO, Digital Marketing, Social Media Content And Creative Design Portfolio.",
    images: domain ? [{ url: `${domain}/images/workspace.png`, width: 1254, height: 1254, alt: "Emerald Glass AI Portfolio Artwork" }] : [],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
