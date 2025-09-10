import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { APP_CONFIG } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${APP_CONFIG.name} - Learn Multiplication Tables`,
    template: `%s | ${APP_CONFIG.name}`
  },
  description: 'Help kids ages 6-10 learn multiplication tables from 0 to 12 in a fun, safe, and simple way. No ads, no tracking, just pure learning.',
  keywords: [
    'multiplication tables',
    'times tables',
    'kids math',
    'elementary math',
    'learning games',
    'educational website',
    'COPPA safe',
    'no tracking'
  ],
  authors: [{ name: APP_CONFIG.name }],
  creator: APP_CONFIG.name,
  publisher: APP_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${APP_CONFIG.domain}`,
    siteName: APP_CONFIG.name,
    title: `${APP_CONFIG.name} - Learn Multiplication Tables`,
    description: 'Help kids learn multiplication tables in a fun, safe environment. No ads, no tracking, just learning.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${APP_CONFIG.name} - Educational multiplication tables for kids`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_CONFIG.name} - Learn Multiplication Tables`,
    description: 'Help kids learn multiplication tables in a fun, safe environment.',
    images: ['/og-image.png'],
  },
  verification: {
    // Add verification tokens here when ready for production
  },
  alternates: {
    canonical: `https://${APP_CONFIG.domain}`,
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main id="main-content" className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}