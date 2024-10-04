'use client';

import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

import clsx from 'clsx';

import Button from './Button';

const validateEmail = (email: FormDataEntryValue) => {
  const RegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return RegEx.test(String(email).toLowerCase());
};

export async function FormSubmit(prevState: string, formData: FormData) {
  const email = formData.get('email');

  if (!email) {
    return { status: 'error', message: 'Email is required' };
  }

  if (email && !validateEmail(email)) {
    return { status: 'error', message: 'Invalid email address' };
  }

  const response = await fetch('/api', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data;
}

export default function GiftForm({ second }: { second?: boolean }) {
  const [state, FormAction] = useFormState(FormSubmit, '');
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 200) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form
      ref={ref}
      className={clsx(
        'mb-6 max-w-[432px] rounded-lg border border-accentColor bg-mainLightColor px-4 py-2 lg:mb-10',
        second ? '' : 'mx-auto',
      )}
      action={(formData) => {
        FormAction(formData);
        if (state.status === 200) {
          ref.current && ref.current.reset();
        }
      }}
    >
      <div className="flex justify-between">
        <input
          name="email"
          className="w-48 p-2 text-sm outline-none sm:text-base"
          placeholder="Enter your email"
        />
        <Button type="button" label="Get Offer" />
      </div>
    </form>
  );
}
