'use client';

import { useEffect, useState } from 'react';
import React, { useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash.throttle';
import Image from 'next/image';

import Menu from './Menu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleMenuItemClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY.current);
      lastScrollY.current = currentScrollY;
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <div
      className={clsx(
        'bg-primary bg-contain bg-center w-full h-40 md:h-full md:block flex justify-between items-center transition duration-500 ease-in-out z-[100]',
        isVisible ? 'sticky top-0 opacity-100' : 'opacity-70',
      )}
    >
      <div className="hidden md:block">
        <Menu />
      </div>

      <label
        className="md:hidden sticky z-40 cursor-pointer  p-6 flex-grow-0"
        htmlFor="mobile-menu"
        onClick={() => setIsOpen((prevState) => !prevState)}
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
          <nav className="float-right min-h-full w-full pt-14 sm:pt-10 shadow-2xl">
            <Menu handleClick={handleMenuItemClick} />
          </nav>
        </div>
      </label>
      <div className="sticky z-50 group md:hidden px-6">
        <Image
          src="/logotype.svg"
          alt="logo"
          width="150"
          height="150"
          className="max-w-52 max-h-52"
        />
      </div>
    </div>
  );
}
