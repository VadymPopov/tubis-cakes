import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies',
  description: 'Policies.',
  openGraph: {
    title: 'Policies',
    description: 'Policies.',
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

export default function Policies() {
  return (
    <>
      <section className="">Policies</section>
    </>
  );
}
