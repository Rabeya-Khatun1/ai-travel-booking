import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PublicNavbar, PublicFooter } from "@/components/LayoutControls";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Travel Planner",
  description: "Plan your travel easily with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <PublicNavbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <PublicFooter />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
