import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jacob Haile - Web Developer",
  description: "Portfolio of Jacob Haile, a software engineer with 10+ years of experience building performant, scalable applications.",
  metadataBase: new URL('https://jacobhaile.com'),
  openGraph: {
    title: "Jacob Haile - Web Developer",
    description: "Software engineer with 10+ years of experience building performant, scalable applications.",
    url: 'https://jacobhaile.com',
    siteName: "Jacob Haile Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jacob Haile - Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jacob Haile - Web Developer",
    description: "Software engineer with 10+ years of experience building performant, scalable applications.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

