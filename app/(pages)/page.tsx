'use client';

import Image from 'next/image';

import Button from '../components/Button';
import CardList from '../components/CardList';
import GiftForm from '../components/GiftForm';
import Section from '../components/Section';
import SwiperHero from '../components/SwiperHero';
import SwiperReviews from '../components/SwiperReviews';
import Title from '../components/Title';

export default function Home() {
  return (
    <>
      <Section className="bg-secondary justify-center xl:justify-around items-center gap-10 flex flex-col-reverse lg:flex-row-reverse">
        <div className="mb-5 text-center">
          <Title level="h1">
            For a cake that&apos;s truly meant to be, order with Tubi.
          </Title>
          <Button type="button" label="Order now" />
        </div>

        <div className="sm:h-[500px] lg:w-[600px] xl:w-[800px]  max-w-full max-h-full h-[300px]">
          <SwiperHero />
        </div>
      </Section>

      <Section className="bg-third md:flex gap-16 justify-center items-center ">
        <div>
          <Title level="h2" className="mb-5 md:mb-10">
            Custom cake studio based in Toronto.
          </Title>
          <p className="text-lg text-justify mb-5">
            At Tubi’s Cakes, we are a boutique operation without a storefront.
            Every product and service is highly customized and made to order
            with love and care, ensuring your special occasion is as unique as
            you are.
          </p>
        </div>

        <Image
          src="/images/cake-about.jpg"
          alt="about"
          width={600}
          height={380}
          className="object-cover w-full h-72 lg:h-96 rounded-2xl"
        />
      </Section>

      <Section className="bg-secondary">
        <div className=" mb-5 text-justify">
          <Title level="h2" className="mb-5 md:mb-10">
            For cake&apos;s sake, choose Tubi for the perfect bake!
          </Title>
          <p className="text-lg text-justify">Most popular products</p>
          <CardList />
        </div>
      </Section>

      <Section className="bg-third md:flex gap-16 justify-center items-center ">
        <Image
          src="/images/promo.jpg"
          alt="about"
          width={600}
          height={380}
          className="object-cover w-full md:w-80 h-96 rounded-2xl mb-5"
        />
        <div className="max-w-96">
          <Title level="h2" className="mb-5 md:mb-10 text-mainLightColor">
            Get 10% Off Your First Order!
          </Title>
          <span className="text-mainLightColor text-lg text-justify mb-5">
            Sign up with your email below to receive 10% off your first
            Tubi&apos;s Cakes order.{' '}
          </span>
          <span className="block text-mainLightColor text-lg text-justify mb-5 font-bold">
            Don&apos;t miss out on sweet savings!
          </span>

          <GiftForm />
        </div>
      </Section>
      <Section className="bg-secondary ">
        <Title level="h2" className="mb-5 md:mb-10">
          Clients Reviews
        </Title>
        <SwiperReviews />
      </Section>
    </>
  );
}
