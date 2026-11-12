import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import { SidebarProvider } from "@/components/layout/SidebarContext";

export const metadata = {
  title: { default: "SADE INVESTMENT | Private Investment Firm in Dubai", template: "%s | SADE INVESTMENT" },
  description: "SADE INVESTMENT is a private investment firm in Dubai, UAE, making strategic investments and partnerships for long-term value creation.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: "SADE INVESTMENT",
    title: "SADE INVESTMENT | Private Investment Firm in Dubai",
    description: "SADE INVESTMENT is a private investment firm in Dubai, UAE, making strategic investments and partnerships for long-term value creation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SADE INVESTMENT | Private Investment Firm in Dubai",
    description: "SADE INVESTMENT is a private investment firm in Dubai, UAE, making strategic investments and partnerships for long-term value creation.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white">
        <SidebarProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#0d1740] focus:text-white focus:text-sm focus:font-semibold focus:rounded-full focus:shadow-lg">
            Skip to content
          </a>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </SidebarProvider>
      </body>
    </html>
  );
}

