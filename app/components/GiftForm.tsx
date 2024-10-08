'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { yupResolver } from '@hookform/resolvers/yup';

import { handlePromoEmailSubmit } from '../actions/promo';
import { validationSchemaPromo } from '../schemas';
import Button from './Button';

export default function GiftForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaPromo),
    mode: 'onBlur',
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: { email: string }) => {
    startTransition(async () => {
      const result = await handlePromoEmailSubmit(data);
      reset();

      if (result?.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <div className="mb-6 lg:mb-10">
      <form
        className=" mb-2 max-w-[432px] rounded-lg border border-accentColor bg-mainLightColor px-4 py-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <input
            {...register('email')}
            placeholder="Enter your email"
            className="w-48 p-2 text-sm outline-none sm:text-base"
          />

          <Button
            type="submit"
            label={isPending ? 'Sending...' : 'Get Offer'}
            disabled={isPending}
          />
        </div>
      </form>
      <div className="h-2 text-center">
        <span className="text-error  ">
          {errors.email && errors.email.message}
        </span>
      </div>
    </div>
  );
}
