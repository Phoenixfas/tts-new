import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Trade Show 2024",
  description: "Join us for the Tech Trade Show 2024, where the latest innovations in technology and cutting-edge products are showcased. Connect with industry leaders, attend insightful presentations, and explore new tech solutions.",
  keywords: "Tech Trade Show, technology conference, tech innovations, industry leaders, tech products, technology expo",
  authors: [{ name: "Tech Trade Show Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Tech Trade Show 2024",
    description: "Discover the future of technology at the Tech Trade Show 2024. Network with experts, experience the latest tech, and participate in exclusive sessions and demos.",
    url: "https://www.techtradeshow2024.com",
    siteName: "Tech Trade Show 2024",
    images: [
      {
        url: "https://iili.io/dOszAF9.png",
        width: 1200,
        height: 630,
        alt: "Tech Trade Show 2024 - Event Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TechTradeShow",
    title: "Tech Trade Show 2024",
    description: "Explore the latest in technology at the Tech Trade Show 2024. Join industry leaders, discover new innovations, and more.",
    images: "https://iili.io/dOszAF9.png",
  },
  // canonical: "https://www.techtradeshow2024.com",
  // additionalMetaTags: [
  //   {
  //     name: "theme-color",
  //     content: "#0044cc",
  //   },
  //   {
  //     name: "apple-mobile-web-app-title",
  //     content: "Tech Trade Show 2024",
  //   },
  //   {
  //     name: "application-name",
  //     content: "Tech Trade Show 2024",
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
