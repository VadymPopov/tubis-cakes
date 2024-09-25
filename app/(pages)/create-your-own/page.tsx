import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create your own cake',
  description: 'Create your own cake.',
  openGraph: {
    title: 'Create your own cake',
    description: 'Create your own cake.',
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

export default function CreateYourOwn() {
  return (
    <>
      <section className="">CreateYourOwn</section>
    </>
  );
}
