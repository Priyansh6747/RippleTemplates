import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ShiftingDropDown } from "@/components/Custom/ShiftingDropdown";
import { DockDemo } from "@/components/Custom/DockDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SaaS Template — Ship Faster",
  description: "A production-grade, theme-driven SaaS frontend template using beautiful animations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative pb-28`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <div className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <ShiftingDropDown />
            </div>
            <main className="flex-1">{children}</main>
          </div>
          <DockDemo />
        </ThemeProvider>
      </body>
    </html>
  );
}
