import Section from '@/app/components/Section';
import Title from '@/app/components/Title';

import { Metadata } from 'next';
import Image from 'next/image';

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
      <Section className="bg-secondary justify-center xl:justify-around lg:items-center sm:gap-4 lg:gap-16 sm:flex">
        <Image
          src="/images/my-story.jpg"
          alt="about"
          width={600}
          height={600}
          className="object-cover w-full  flex-1 lg:flex-[0.4]  h-[500px] rounded-2xl mb-5"
        />
        <div className=" mb-5 text-center flex-1">
          <Title level="h2">Pricing</Title>
          <p className="text-lg text-justify">
            Made to order and handcrafted with remarkable artistic care, Tubi’s
            Cakes creates highly customized designs just for you. We are known
            for our tall layer cakes, baked using premium ingredients. Each tier
            has 4-6 layers of moist cake with swiss meringue buttercream, and an
            optional filling of your choice – not too sweet, and just the right
            balance of flavour and texture. Below are starting base prices for
            cakes, cupcakes, cakepops and more. Final pricing depends on size,
            flavour and design complexity.
          </p>
          <br />
          <div>
            <Title level="h3" className="text-lg text-justify mb-5">
              SINGLE TIER CAKES
            </Title>
            <ul className="text-justify">
              <li className="font-bold text-base">5” (serves 10-12 ): $180+</li>
              <li className="font-bold text-base">6” (serves 12-15 ): $200+</li>
              <li className="font-bold text-base">7” (serves 15-25): $240+</li>
              <li className="font-bold text-base">8” (serves 30-40): $320+</li>
            </ul>
          </div>
          <br />
          <div>
            <Title level="h3" className="text-lg text-justify mb-5">
              MULTI-TIER CAKES
            </Title>
            <ul className="text-justify">
              <li className="font-bold text-base">
                4” + 6” (serves 25-30): $300+
              </li>
              <li className="font-bold text-base">
                5“ + 7” (serves 35-40): $350+
              </li>
              <li className="font-bold text-base">
                6” + 8” (serves 45-60): $400+
              </li>
              <li className="font-bold text-base">
                4“ + 6” + 8” (serves 55-80): $500+
              </li>
              <li className="font-bold text-base">
                6″ + 8″ + 10″ (serves 85-100): $650+
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-mainLightColor xl:justify-around lg:items-center sm:gap-4 lg:gap-16 sm:flex">
        <div className=" mb-5 text-center flex-1">
          <Title level="h2">Flavour Menu</Title>
          <p className="text-lg text-justify">
            All Tubi’s Cakes products are made from scratch with premium
            ingredients. Cakes include layers of moist sponge, with optional
            fillings, not too sweet and all sorts of delicious. Swiss meringue
            buttercream or custard cream and ready to celebrate with a
            completely customized elegant or whimsical design.
          </p>
          <br />
          <ul className="text-justify space-y-4">
            <li className="font-bold text-base">
              <p className="uppercase">vanilla + vanilla</p>
              <p>
                a light and moist vanilla sponge cake with a swiss meringue
                buttercream
              </p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">chocolate + chocolate</p>
              <p>
                a light and moist chocolate sponge cake with a swiss meringue
                buttercream
              </p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">red velvet + cream cheese</p>
              <p>red velvet sponge cake with cream cheese cream</p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">lemon + raspberry</p>
              <p>lemon or vanilla sponge cake with raspberry buttercream</p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">strawberry short cake</p>
              <p>
                vanilla sponge cake with custard cream or swiss meringue + fresh
                strawberries
              </p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">vanilla + caramel</p>
              <p>vanilla sponge cake with caramel buttercream</p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">chocolate + caramel</p>
              <p>chocolate sponge cake with caramel buttercream</p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">chocolate + oreo cookies cream</p>
              <p>chocolate sponge cake with oreo buttercream</p>
            </li>
            <li className="font-bold text-base">
              <p className="uppercase">birthday cake + vanilla</p>
              <p>vanilla sponge cake with colorful sprinkles</p>
            </li>
          </ul>
        </div>
        <Image
          src="/images/my-story-two.jpg"
          alt="about"
          width={600}
          height={600}
          className="object-cover w-full  flex-1 lg:flex-[0.4]  h-[500px] rounded-2xl mb-5"
        />
      </Section>
    </>
  );
}
