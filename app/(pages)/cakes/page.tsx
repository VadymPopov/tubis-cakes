import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cakes',
  description: 'Your favorite Cakes',
  openGraph: {
    title: 'Cakes',
    description: 'Your favorite Cakes',
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

export default function Cakes() {
  return (
    <>
      <section className="">Cakes</section>
    </>
  );
}
