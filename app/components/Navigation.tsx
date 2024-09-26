'use client';

import { useRef } from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import Menu from './Menu';

export default function Navigation() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const handleMenuItemClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <div className="bg-primary w-full h-40 md:h-full">
      <Link
        href="/"
        className="fixed top-12 right-6 z-50  group md:hidden"
        onClick={handleMenuItemClick}
      >
        <Image
          src="/logotype.svg"
          alt="logo"
          width="150"
          height="150"
          className="max-w-52 max-h-52"
        />
      </Link>
      <div className="hidden md:block">
        <Menu />
      </div>

      <label
        className="md:hidden fixed top-24 left-3 z-40 cursor-pointer px-3 py-6"
        htmlFor="mobile-menu"
      >
        <input
          className="peer hidden"
          type="checkbox"
          id="mobile-menu"
          ref={checkboxRef}
        />
        <div className="relative z-50 block h-[2px] w-6 bg-mainDarkColor bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-mainDarkColor before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-mainDarkColor after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
        <div className="fixed inset-0 z-40 hidden h-full w-full backdrop-blur-3xl peer-checked:block">
          &nbsp;
        </div>

        <div className="fixed top-[202px] right-0 z-40 h-full w-full translate-x-[-100%] overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
          <nav className="float-right min-h-full w-full pt-14 sm:pt-20 shadow-2xl">
            <Menu onClick={handleMenuItemClick} />
          </nav>
        </div>
      </label>
    </div>
  );
}
