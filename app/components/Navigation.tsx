'use client';

import { useEffect, useState } from 'react';
import React, { useRef } from 'react';

import clsx from 'clsx';
import throttle from 'lodash.throttle';
import Image from 'next/image';
import Link from 'next/link';

import Menu from './Menu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleMenuItemClick = () => {
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
    document.body.classList.toggle('no-scroll', isOpen);
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

      <button
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="md:hidden sticky z-50 cursor-pointer p-6 flex-grow-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={clsx('hamburger', isOpen && 'menu-open')}></div>
      </button>
      <div
        className={clsx(
          'fixed inset-0 z-40 h-full w-full backdrop-blur-3xl transition-opacity duration-500',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      ></div>

      <div
        className={clsx(
          'fixed top-[202px] right-0 z-40 h-full w-full overflow-y-auto overscroll-y-none transition-transform duration-500',
          isOpen ? 'translate-x-0' : 'translate-x-[-100%]',
        )}
      >
        <nav className="float-right min-h-full w-full pt-14 sm:pt-10 shadow-2xl">
          <Menu handleClick={handleMenuItemClick} />
        </nav>
      </div>

      <Link
        href="/"
        className="sticky z-50 group md:hidden px-6"
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
    </div>
  );
}
