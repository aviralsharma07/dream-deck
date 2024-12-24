import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/themeProvider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Goal Wall 2025",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
