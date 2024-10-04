import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

export default function MyStory() {
  return (
    <>
      <section className="">
        <div className="bg-secondary px-3 py-8 sm:px-4 sm:py-10 lg:px-10 lg:py-16 lg:flex xl:px-16 justify-center xl:justify-around items-center sm:gap-4 lg:gap-16 sm:flex">
          <Image
            src="/images/my-story.jpg"
            alt="about"
            width={600}
            height={600}
            className="object-cover w-full  flex-1 lg:flex-[0.4]  h-[500px] rounded-2xl mb-5"
          />
          <div className=" mb-5 text-center flex-1">
            <h1 className="text-3xl text-center  mb-10 font-normal ">
              Hi, there!
            </h1>
            <p className="text-lg text-justify">
              I’m Tubi, a self-taught baker, cake artist, and the proud owner of{' '}
              <b>Tubi’s Cakes</b>. Growing up, I spent my days painting and
              drawing, and I learned to bake from my dad, a pastry chef, at an
              early age. Following in his footsteps, I discovered cake
              decorating about 10 years ago and instantly fell in love with the
              idea of using cake as my new canvas.
            </p>
            <br />
            <p className="text-lg text-justify">
              Tubi’s Cakes officially launched in <b>June 2016</b>, and I’ve
              been creating memories and bringing smiles to people’s faces
              through my cakes ever since. Every cake is filled with love at
              every step and designed with attention to detail.
            </p>
          </div>
        </div>

        <div className="bg-mainLightColor px-3 py-8 sm:px-4 sm:py-10 lg:px-10 lg:py-16 lg:flex xl:px-16 justify-center xl:justify-around items-center sm:gap-4 lg:gap-16 sm:flex">
          <div className=" mb-5 text-center flex-1">
            <h1 className="text-3xl text-center  mb-10 font-normal ">
              Custom cake studio based in Toronto.
            </h1>
            <p className="text-lg text-justify">
              I’m committed to building a reputation for incredible cakes and
              outstanding customer service. I can’t wait to handcraft a
              beautiful cake for you and make your celebration truly special.
            </p>
            <br />
            <p className="text-lg text-justify">
              Find me on{' '}
              <Link
                href="https://www.instagram.com/tubiscakes.toronto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram-page"
                className="underline"
              >
                Instagram
              </Link>{' '}
              to see my work and watch videos of my creative process! Thank you
              for supporting my small business and{' '}
              <b>making my dream come true</b>.
            </p>
          </div>
          <Image
            src="/images/my-story-two.jpg"
            alt="about"
            width={600}
            height={600}
            className="object-cover w-full  flex-1 lg:flex-[0.4]  h-[500px] rounded-2xl mb-5"
          />
        </div>
      </section>
    </>
  );
}
