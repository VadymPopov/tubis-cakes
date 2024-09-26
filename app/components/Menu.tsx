'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menu = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/shop',
    label: 'Shop',
  },
  {
    path: '/create-your-own',
    label: 'Create Your Own',
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
  },
  {
    path: '/policies',
    label: 'Policies',
  },
  {
    path: '/faq',
    label: 'FAQ',
  },
];

type MenuProps = {
  onClick?: () => void;
};

export default function Menu({ onClick }: MenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <ul className="flex flex-col md:flex-row list-none justify-center md:items-center">
      {menu.slice(0, 3).map(({ path, label }) => (
        <li
          key={label}
          className={clsx(
            path === '/' && 'md:hidden',
            isActive(path) ? 'text-mainLightColor' : 'text-mainDarkColor',
            'py-2.5 sm:py-5 px-6 sm:px-4 hover:text-mainLightColor md:hover:text-mainDarkColor hover:bg-peach md:hover:bg-transparent  block whitespace-nowrap text-xl font-medium md:font-normal tracking-wide no-underline transition-colors duration-300 sm:text-2xl md:text-xl uppercase cursor-pointer hover:border-mainDarkColor hover:border-y border-y-transparent',
          )}
          onClick={onClick}
        >
          <Link href={path}>{label}</Link>
        </li>
      ))}

      <li className=" hidden md:block">
        <Link href="/">
          <Image
            src="/logotype.svg"
            alt="logo"
            width="200"
            height="200"
            className="min-h-32 min-w-32"
          />
        </Link>
      </li>

      {menu.slice(3).map(({ path, label }) => (
        <li
          key={label}
          className={clsx(
            isActive(path) ? 'text-mainLightColor' : 'text-mainDarkColor',
            'py-2.5 sm:py-5 px-6 sm:px-4 hover:text-mainLightColor md:hover:text-mainDarkColor hover:bg-peach md:hover:bg-transparent  block whitespace-nowrap text-xl font-medium md:font-normal tracking-wide no-underline transition-colors duration-300 sm:text-2xl md:text-xl uppercase cursor-pointer hover:border-mainDarkColor hover:border-y border-y-transparent',
          )}
          onClick={onClick}
        >
          <Link href={path}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
