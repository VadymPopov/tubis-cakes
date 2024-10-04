import { ReactNode } from 'react';

import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={clsx(
        'px-3 py-8 sm:px-4 sm:py-10 xl:px-16 lg:px-10',
        `${className}`,
      )}
    >
      {children}
    </section>
  );
}
