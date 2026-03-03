import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Fallback for Custom "Tobias" Heading Font
const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

// Fallback for "Oldschool Grotesk" Paragraph Font
const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invest in Hemut",
  description: "Friends & Family Round - Hemut RUV",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased text-foreground bg-background selection:bg-brand-500 selection:text-brand-dark`}>
        {children}
      </body>
    </html>
  );
}
