import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...rest }: IButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'transition-colors border rounded-lg sm:text-lg hover:bg-accentColor  border-accentColor bg-peach text-mainLightColor px-4 py-2 disabled:hover:bg-peach disabled:bg-peach disabled:cursor-not-allowed',
      )}
    >
      {label}
    </button>
  );
}
