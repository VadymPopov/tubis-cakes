'use client';

import React, { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchemaOrder } from '../schemas';
import Button from './Button';
import DatePickerInput from './DatePicker';
import FileInput from './FileInput';
import InputField from './InputField';

const singleTierOptions = [
  { value: '5in', label: '5” (serves 10-12): $180+' },
  { value: '6in', label: '6” (serves 12-15): $200+' },
  { value: '7in', label: '7” (serves 15-25): $240+' },
  { value: '8in', label: '8” (serves 30-40): $320+' },
];

const multiTierOptions = [
  { value: '4in-6in', label: '4” + 6” (serves 25-30): $300+' },
  { value: '5in-7in', label: '5” + 7” (serves 35-40): $350+' },
  { value: '6in-8in', label: '6” + 8” (serves 45-60): $400+' },
  { value: '4in-6in-8in', label: '4” + 6” + 8” (serves 55-80): $500+' },
  { value: '6in-8in-10in', label: '6” + 8” + 10” (serves 85-100): $650+' },
];

const cakeOptions = [
  { label: 'Single-Tier Cakes', options: singleTierOptions },
  { label: 'Multi-Tier Cakes', options: multiTierOptions },
];

const cakeFlavorOptions = [
  {
    value: 'vanilla-vanilla',
    label:
      'Vanilla + Vanilla: A light and moist vanilla sponge cake with Swiss meringue buttercream',
  },
  {
    value: 'chocolate-chocolate',
    label:
      'Chocolate + Chocolate: A light and moist chocolate sponge cake with Swiss meringue buttercream',
  },
  {
    value: 'red-velvet-cream-cheese',
    label:
      'Red Velvet + Cream Cheese: Red velvet sponge cake with cream cheese frosting',
  },
  {
    value: 'lemon-raspberry',
    label:
      'Lemon + Raspberry: Lemon or vanilla sponge cake with raspberry buttercream',
  },
  {
    value: 'strawberry-shortcake',
    label:
      'Strawberry Shortcake: Vanilla sponge cake with custard cream or Swiss meringue + fresh strawberries',
  },
  {
    value: 'vanilla-caramel',
    label: 'Vanilla + Caramel: Vanilla sponge cake with caramel buttercream',
  },
  {
    value: 'chocolate-caramel',
    label:
      'Chocolate + Caramel: Chocolate sponge cake with caramel buttercream',
  },
  {
    value: 'chocolate-oreo',
    label:
      'Chocolate + Oreo Cookies Cream: Chocolate sponge cake with Oreo buttercream',
  },
  {
    value: 'birthday-vanilla',
    label:
      'Birthday Cake + Vanilla: Vanilla sponge cake with colorful sprinkles and vanilla buttercream',
  },
];

export interface FormValues {
  message?: string;
  phone?: string;
  instagram?: string;
  address?: string;
  images?: File[];
  promocode?: string;
  name: string;
  email: string;
  transportation: string;
  date: Date;
  occasion: string;
  servings: string;
  flavour: string;
  description?: string;
}

export default function OrderForm() {
  const methods = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(validationSchemaOrder),
  });

  const {
    handleSubmit,
    setFocus,
    formState: { errors },
    control,
  } = methods;

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const onSubmitHandler = async (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...methods}>
      <form className="text-center" onSubmit={handleSubmit(onSubmitHandler)}>
        <InputField
          name="name"
          label="Full Name"
          type="text"
          placeholder="Enter First and Last Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          error={errors.name?.message || ''}
        />
        <InputField
          name="email"
          type="email"
          placeholder="Enter Email"
          title="Email must contain an “@” symbol before the domain"
          label="Email"
          error={errors.email?.message || ''}
        />
        <InputField
          name="phone"
          type="tel"
          placeholder="Enter phone number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          label="Phone number"
          optional={true}
          error={errors.phone?.message || ''}
        />
        <InputField
          name="instagram"
          type="text"
          placeholder="Enter instagram @username"
          label="Instagram"
          title="Instagram username"
          optional={true}
          error={errors.instagram?.message || ''}
        />
        <InputField
          name="transportation"
          id="transportation"
          placeholder="Select option"
          label="Delivery or Pick-up"
          title="Delivery or Pick-up option"
          select
          error={errors.transportation?.message || ''}
          options={[
            { value: 'delivery', label: 'Delivery' },
            { value: 'pick-up', label: 'Pick-up' },
          ]}
        />

        <DatePickerInput
          name="date"
          control={control}
          label="Delivery/Pick-up date"
          error={errors.date?.message}
        />

        <InputField
          name="address"
          type="text"
          placeholder="Enter address"
          label="Delivery address"
          title="Customer delivery address"
          error={errors.address?.message || ''}
        />
        <InputField
          name="occasion"
          type="text"
          placeholder="Enter the occasion"
          title="Occasion"
          label="What is the Occasion?"
          error={errors.occasion?.message || ''}
        />

        <InputField
          name="servings"
          id="servings"
          placeholder="Enter number of servings"
          title="Select the number of servings"
          label="Number of servings"
          control={control}
          options={cakeOptions}
          error={errors.servings?.message}
          select
        />

        <InputField
          name="flavour"
          id="flavour"
          placeholder="Select option"
          title="Pick one of our flavour options"
          label="What flavor would you like?"
          select
          control={control}
          options={cakeFlavorOptions}
          error={errors.flavour?.message || ''}
        />
        <InputField
          name="message"
          type="text"
          placeholder="Enter your message"
          title="Message on Cake or Toppers"
          label="Any messages on Cake?"
          optional={true}
          error={errors.message?.message || ''}
        />
        <InputField
          name="promocode"
          type="text"
          placeholder="Enter promocode"
          title="Promocode for first-time online users"
          label="Promocode"
          optional={true}
          error={errors.promocode?.message || ''}
        />
        <FileInput
          name="images"
          type="file"
          accept="image/*"
          label="Please upload any inspiration pictures"
          multiple={true}
          optional={true}
          error={errors.images?.message || ''}
        />
        <InputField
          name="description"
          placeholder="Enter description"
          label="Provide brief description of your idea or any additional details"
          type="text"
          optional={true}
          textarea={true}
          control={control}
        />
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            disabled={Object.keys(errors).length !== 0}
            label="Submit"
          />
        </div>
      </form>
    </FormProvider>
  );
}
