import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers"; // 確保內部不重複包含 ThemeProvider
import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/inter-var-latin.woff2",
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "台灣123導航 | TW123",
    template: "%s - 台灣123導航 | TW123",
  },
  description: "台灣人最愛的免費線上工具箱！收錄 AI 工具、影片下載、縮短網址等上百個實用網站。",
  keywords: "台灣123導航, TW123, 免費工具箱, AI工具台灣",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "台灣123導航 | TW123",
    description: "台灣人最愛的免費線上工具箱與導航站",
    url: "https://tw123.eu.cc",
    siteName: "TW123",
    images: [{ url: "https://i.postimg.cc/s29MWj9m/Gemini-Generated-Image.png", width: 1200, height: 630 }],
    locale: "zh_TW",
    type: "website",
  },
  // 將預連接移至此處（選擇性，Next.js 會處理大多數情況）
  alternates: {
    canonical: "https://tw123.eu.cc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      {/* 注意：這裡移除了手動 <head>，Next.js 會自動注入 metadata */}
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased", 
          inter.variable
        )}
        suppressHydrationWarning
      >
        {/* Google Analytics 放在 body 內也是可行的，Next.js Script 會處理掛載位置 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QG9PGG4K13"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QG9PGG4K13');
            `,
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
