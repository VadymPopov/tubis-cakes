import FAQ from '@/app/components/FAQ';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'FAQ.',
  openGraph: {
    title: 'FAQ',
    description: 'FAQ.',
    url: 'https://tubiscakes.com/',
    siteName: 'tubiscakes.com',
    images: [
      {
        url: 'https://tubiscakes.com/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQ />
    </>
  );
}
