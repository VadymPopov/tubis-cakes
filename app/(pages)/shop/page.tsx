import OrderForm from '@/app/components/OrderForm';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop.',
  openGraph: {
    title: 'Shop',
    description: 'Shop.',
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

export default function Shop() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-full bg-mint">
        <div className="pb-5">
          <p>
            For all Custom Order inquiries, please fill out the form below. We
            will review the submissions and reach out to you directly. Due to
            the high number of inquiries that we receive, please allow between 2
            to 5 business days for us to get back to you Note:
          </p>
          <p>Minimum 7- to 10-days notice required for custom orders.</p>
        </div>
        <OrderForm />
      </section>
    </>
  );
}
