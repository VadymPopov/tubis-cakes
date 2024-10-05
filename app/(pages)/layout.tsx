import type { Metadata } from 'next';
import { Comfortaa, Roboto_Mono } from 'next/font/google';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import TopLoader from '../components/TopLoader';
import '../globals.css';

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
        <TopLoader />
        <Header />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
