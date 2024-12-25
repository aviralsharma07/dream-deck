import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/themeProvider";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Dream Deck",
  description: "Share your New Year's resolutions with the world and inspire others. Create beautiful goal cards and join a community of dreamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
