import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...rest }: IButtonProps) {
  return (
    <button
      {...rest}
      className="transition-colors border rounded-lg text-lg hover:bg-accentColor  border-accentColor bg-peach text-mainLightColor px-4 py-2 "
    >
      {label}
    </button>
  );
}
