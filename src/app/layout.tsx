import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/Layout/NavBar/NavBar';
import Footer from '@/components/Layout/Footer/Footer';
import StoreProvider from '@/lib/StoreProvider';
import { Toaster } from 'sonner';
import ThemeScript from '@/components/ThemeScript';
import AIChat from '@/components/Products/AIChat';
import { montFont } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Nice Gadgets',
    default: 'Nice Gadgets - Your Online Store for Phones & Accessories',
  },
  description:
    'Shop the latest gadgets: smartphones, tablets, and accessories at the Nice Gadgets online store. Fast shipping and the best prices.',
  keywords: [
    'smartphones',
    'tablets',
    'accessories',
    'gadgets',
    'online store',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={montFont.className}
    >
      <body
        className={`antialiased dark:bg-dark-theme-bg 
        min-h-screen flex flex-col `}
      >
        <ThemeScript />
        <div className="z-50">
          <AIChat />
        </div>
        <StoreProvider>
          <Toaster
            richColors
            position="top-center"
            duration={4000}
            toastOptions={{
              style: {
                background: 'var(--color-light-theme-btn-product-bg)',
                border: 'var(--color-light-theme-border-color)',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '12px',
                padding: '12px 24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              },
            }}
          />
          <div
            className="sticky bg-white top-0 z-50 w-full 
          border-b border-light-theme-border-color dark:border-dark-theme-border-color dark:bg-dark-theme-bg "
          >
            <div className="max-w-[1920px] mx-auto">
              <NavBar />
            </div>
          </div>
          <main className="flex-grow max-w-[1200px] mx-auto w-full">
            {children}
          </main>
          <div
            className="w-full
          border-t border-light-theme-border-color dark:border-dark-theme-border-color dark:bg-dark-theme-bg"
          >
            <div className="max-w-[1200px] mx-auto">
              <Footer />
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
