import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Control, Controller } from 'react-hook-form';

import clsx from 'clsx';

import { FormValues } from './OrderForm';

interface DatePickerInputProps {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  error?: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  name,
  control,
  label,
  error,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className=" date flex flex-col md:w-96 sm:w-80 w-full">
        <label className="text-start mb-1 text-base" htmlFor={name}>
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              selected={value as Date}
              onChange={onChange}
              placeholderText="Select a date"
              dateFormat="yyyy-MM-dd"
              className={clsx(
                error ? 'border-error' : 'border-primary',
                'flex text-lg md:text-xl rounded-xl border-2 focus:border-accentColor hover:border-accentColor px-4 py-2.5 w-full outline-accentColor font-light',
              )}
            />
          )}
        />
        <span className="my-1 text-error text-sm h-5">{error}</span>
      </div>
    </div>
  );
};

export default DatePickerInput;
