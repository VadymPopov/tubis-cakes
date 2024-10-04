import { ReactNode } from 'react';

import clsx from 'clsx';

interface TitleProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export default function Title({
  children,
  level = 'h2',
  className,
}: TitleProps) {
  const Heading = level;
  return (
    <Heading
      className={clsx(
        'text-3xl text-center mb-10 font-extrabold tracking-tight font-comfortaa',
        `${className}`,
      )}
    >
      {children}
    </Heading>
  );
}
