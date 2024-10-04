'use client';

import {
  PiDeviceMobileCameraThin,
  PiFacebookLogoThin,
  PiInstagramLogoThin,
} from 'react-icons/pi';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between isolate z-50 w-full px-3 py-2.5 bg-peach ">
      <div className="flex gap-2.5 ">
        <Link
          href="https://www.instagram.com/tubiscakes.toronto/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram-page"
          className="list-none text-justify text-lg tracking-wide text-mainLightColor hover:scale-110"
        >
          <PiInstagramLogoThin className="text-2xl text-mainLightColor" />
        </Link>
        <Link
          href="https://www.facebook.com/tubiscakestoronto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram-page"
          className="list-none text-justify text-lg tracking-wide text-mainLightColor hover:scale-110"
        >
          <PiFacebookLogoThin className="text-2xl text-mainLightColor" />
        </Link>
      </div>

      <Link
        href="shop"
        className="ml-2.5 text-xs text-mainLightColor hover:underline"
      >
        Delivery is available in Toronto/GTA
      </Link>

      <Link
        href="tel:+12345678900"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="telephone"
        className="flex items-center gap-1 list-none text-justify text-xs tracking-wide text-mainLightColor group"
      >
        <PiDeviceMobileCameraThin className="text-2xl text-mainLightColor group-hover:scale-110" />
        <span className="group-hover:underline hidden sm:block">
          +1 (234) 567-8900
        </span>
      </Link>
    </header>
  );
}
