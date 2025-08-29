import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nextzenith Ventures Mi Room - UI/UX & IT Development Studio",
  description: "Professional UI/UX design studio and IT development company specializing in cyber security, business solutions, and individual projects. Transform your digital presence with cutting-edge design and technology.",
  keywords: "UI/UX design, IT development, cyber security, business solutions, web development, mobile apps, digital transformation",
  authors: [{ name: "Nextzenith Ventures Mi Room" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextzenith.com",
    title: "Nextzenith Ventures Mi Room - UI/UX & IT Development Studio",
    description: "Professional UI/UX design studio and IT development company specializing in cyber security, business solutions, and individual projects.",
    siteName: "Nextzenith Ventures Mi Room",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextzenith Ventures Mi Room - UI/UX & IT Development Studio",
    description: "Professional UI/UX design studio and IT development company specializing in cyber security, business solutions, and individual projects.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0F23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-inter antialiased bg-gray-900 text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
