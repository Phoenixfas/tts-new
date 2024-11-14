import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProviderWrapper from "./ProviderWrapper";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Trade Show",
  description: "Join us for the Tech Trade Show, where the latest innovations in technology and cutting-edge products are showcased. Connect with industry leaders, attend insightful presentations, and explore new tech solutions.",
  keywords: "Tech Trade Show, technology conference, tech innovations, industry leaders, tech products, technology expo",
  authors: [{ name: "Tech Trade Show" }],
  robots: "index, follow",
  openGraph: {
    title: "Tech Trade Show",
    description: "Discover the future of technology at the Tech Trade Show. Network with experts, experience the latest tech, and participate in exclusive sessions and demos.",
    url: "https://www.techtradeshow2024.com",
    siteName: "Tech Trade Show",
    images: [
      {
        url: "https://iili.io/dOszAF9.png",
        width: 1200,
        height: 630,
        alt: "Tech Trade Show - Event Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TechTradeShow",
    title: "Tech Trade Show",
    description: "Explore the latest in technology at the Tech Trade Show. Join industry leaders, discover new innovations, and more.",
    images: "https://iili.io/dOszAF9.png",
  },
  icons: "https://iili.io/dOszAF9.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ProviderWrapper>
    </html>
  );
}
