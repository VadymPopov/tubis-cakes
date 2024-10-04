import type { Metadata } from 'next';
import { Comfortaa, Roboto, Roboto_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tubi's cakes",
    default: "Tubi's cakes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${comfortaa.variable} ${roboto_mono.variable}`}>
      <body className="bg-secondary">
        <NextTopLoader
          color="#2c0ce2"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="easeIn"
          speed={200}
          shadow="0 0 10px #303030, 0 0 5px #303030"
        />
        <Header />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
