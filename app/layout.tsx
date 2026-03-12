import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "@/components/theme-toggle";
import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";

// 載入自訂字型
const inter = localFont({
  src: "./fonts/inter-var-latin.woff2",
  display: "swap",
  variable: "--font-inter",
});

// 全站 Metadata（只定義一次）
export const metadata: Metadata = {
  title: {
    default: "台灣123導航 | TW123",
    template: "%s - 台灣123導航 | TW123",
  },
  description:
    "台灣123導航（TW123）是台灣人最愛的免費線上工具箱！收錄 AI 工具、影片下載、縮短網址、投資理財、購物優惠、開發者工具等上百個實用網站。快速找到你需要的工具，一站式導航超方便！",
  keywords:
    "台灣123導航, TW123, 免費工具箱, AI工具台灣, 線上工具, 投資理財, 影音娛樂, 購物網拍",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "台灣123導航 | TW123",
    description: "台灣人最愛的免費線上工具箱與導航站",
    url: "https://tw123.eu.cc",
    siteName: "TW123",
    images: [
      {
        url: "https://i.postimg.cc/s29MWj9m/Gemini-Generated-Image-2qh6f52qh6f52qh6.png", // 已修正路徑
        width: 1200,
        height: 630,
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-TW"
      suppressHydrationWarning
      className={inter.variable}
    >
      <head>
        {/* 預連接 Google Tag Manager，提升 GA 載入速度 */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Google Analytics */}
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
      </head>

      <body suppressHydrationWarning>
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
