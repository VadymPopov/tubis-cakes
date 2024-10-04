import Section from '@/app/components/Section';
import Title from '@/app/components/Title';

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
    <Section className="">
      <Title level="h2">Policies</Title>
      <div className="mb-5">
        <Title level="h3" className="mb-2.5 text-start text-xl">
          Signature Orders – Cancellation
        </Title>
        <p className="text-lg text-justify">
          72 hours notice is required for cancellations/rescheduling and fees
          may be applied for materials & progress already completed. If you are
          rescheduling outside of the 72 hour window then there is a re-bake fee
          that starts at $20. If an order is cancelled & refunded, the 3%
          processing fee is non refundable. If you are unable to pickup your
          order then no refund shall be issued.
        </p>
      </div>
      <div className="mb-5">
        <Title level="h3" className="mb-2.5 text-start text-xl">
          Custom orders – Cancellation
        </Title>
        <p className="text-lg text-justify">
          72 hours notice is required to cancel any custom order. We reserve the
          right to only refund 50% if your order is already in production.
          Cancellations made in under 72 hours will not be refunded. If you need
          to reschedule your order, a re-bake fee will apply if production has
          started. If an order is cancelled & refunded, the 3% processing fee is
          non refundable.
        </p>
      </div>
      <div className="mb-5">
        <Title level="h3" className="mb-2.5 text-start text-xl">
          Transportation
        </Title>
        <p className="text-lg text-justify">
          Tubi’s Cakes assumes no responsibility to damages once the order
          leaves our premises. It is the customers responsibility to handle the
          order with care during transport and when unboxing.
        </p>
      </div>
      <div className="mb-5">
        <Title level="h3" className="mb-2.5 text-start text-xl">
          Cake Flavour
        </Title>
        <p className="text-lg text-justify">
          At Tubi’s Cakes, we stand by the quality and integrity of our
          products. As artisans dedicated to crafting delectable confections, we
          prioritize using the finest, locally-sourced ingredients, steering
          clear of preservatives and artificial additives. We believe that every
          cake is a masterpiece, meticulously crafted with our unique blend of
          ingredients and techniques. In alignment with our commitment to
          excellence, we do not offer refunds on cakes due to personal flavour
          preferences. However, we understand the importance of finding the
          perfect match for your taste buds. That’s why we encourage our valued
          customers to explore our tasting boxes and single serving
          cupcakes/cake cups available in-store. These options provide an ideal
          opportunity to sample our array of flavours, ensuring that Tubi’s
          Cakes is the right choice for you. We appreciate your understanding
          and support as we continue to uphold our unwavering standards of
          quality and craftsmanship. Thank you for being a part of the Tubi’s
          Cakes experience!
        </p>
      </div>
    </Section>
  );
}
