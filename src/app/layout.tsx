import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const jt_mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edi Kurniawan",
  description: "A Web Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jt_mono.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto flex min-h-dvh max-w-6xl flex-col text-base">
            <Header />
            <div className="flex h-full grow flex-col overflow-hidden">
              <div className="mx-14 h-full grow border-x border-dashed px-10 py-5">{children}</div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
