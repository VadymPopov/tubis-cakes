import {
  PiFacebookLogoThin,
  PiGithubLogoThin,
  PiInstagramLogoThin,
} from 'react-icons/pi';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between border-t-[1px] border-t-cardColor px-4 py-3 text-sm md:flex-row lg:px-5 lg:py-4 xl:px-6 xl:py-5 bg-mint">
      <div className="order-3 flex items-center justify-center text-center md:order-1">
        <span className="text-base lg:text-lg">Developed by</span>
        <Link
          href="https://github.com/VadymPopov"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="frontend-developer-github"
          className="inline-block p-1.5 sm:p-2.5 hover:scale-110"
        >
          <PiGithubLogoThin className="text-2xl text-mainDarkColor transition-colors " />
        </Link>
      </div>
      <span className="order-1 mb-4 text-base md:order-2 md:mb-0 lg:text-lg flex  flex-col justify-center items-center">
        <Link href="/">
          <Image
            src="/circle-logo.svg"
            alt="logo"
            width="200"
            height="200"
            className="max-w-52 max-h-52"
          />
        </Link>
        &copy; 2024, Tubi&apos;s Cakes.
      </span>
      <div className="order-2 mb-4 flex md:order-3 md:mb-0 gap-2.5 pl-[92px]">
        <Link
          href="https://www.instagram.com/tubiscakes.toronto/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram-page"
          className="list-none text-justify text-lg tracking-wide hover:scale-110"
        >
          <PiInstagramLogoThin className="text-2xl text-mainDarkColor transition-colors " />
        </Link>
        <Link
          href="https://www.facebook.com/tubiscakestoronto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram-page"
          className="list-none text-justify text-lg tracking-wide hover:scale-110"
        >
          <PiFacebookLogoThin className="text-2xl text-mainDarkColor transition-colors " />
        </Link>
      </div>
    </footer>
  );
}
