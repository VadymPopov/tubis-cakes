import { InputHTMLAttributes } from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

import clsx from 'clsx';

import { FormValues } from './OrderForm';

interface Option {
  value: string;
  label: string;
}

interface GroupedOption {
  label: string;
  options: Option[];
}

interface InputFieldProps
  extends InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > {
  options?: Option[] | GroupedOption[];
  title?: string;
  placeholder?: string;
  label: string;
  type?: string;
  name: keyof FormValues;
  optional?: boolean;
  error?: string;
  textarea?: boolean;
  select?: boolean;
  control?: Control<FormValues>;
}

export default function InputField({
  options,
  title,
  placeholder,
  label,
  type,
  name,
  optional,
  error,
  textarea,
  select,
  control,
  ...props
}: InputFieldProps) {
  const methods = useFormContext();
  const registeredProps = methods.register(name);

  return (
    <div className="flex  items-center justify-center">
      <div className="flex flex-col md:w-96 sm:w-80 w-full ">
        <label className="text-start mb-1 text-base" htmlFor={name}>
          {label}{' '}
          {optional && <span className="text-gray-500">(Optional)</span>}
        </label>
        {textarea ? (
          <textarea
            rows={4}
            cols={20}
            title={title}
            placeholder={placeholder}
            id={name}
            {...props}
            {...registeredProps}
            className={clsx(
              'text-lg md:text-xl rounded-xl border border-primary focus:border-accentColor hover:border-accentColor px-4 py-2.5  resize-none w-full h-[200px] font-light',
            )}
          />
        ) : select ? (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                id={name}
                isClearable={true}
                options={options}
                onChange={(selectedOption) => onChange(selectedOption?.value)}
                onBlur={onBlur}
                value={
                  options
                    ?.flatMap((group) =>
                      'options' in group ? group.options : [group],
                    )
                    .find((option) => option.value === value) || null
                }
                classNamePrefix="react-select"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    cursor: 'pointer',
                    borderColor: error ? '#D2042D' : '#efc3ff',
                    borderWidth: '2px',
                    borderRadius: '12px',
                    padding: '6px 16px',
                    boxShadow: 'none',
                    '&:hover': {
                      borderColor: '#ff74b1',
                    },
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999,
                    backgroundColor: '#fff',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                      ? '#ff74b1'
                      : state.isFocused
                        ? '#efc3ff'
                        : '#fff',
                    color: state.isSelected ? '#fff' : 'black',
                    padding: '10px',
                    cursor: 'pointer',
                  }),
                }}
              />
            )}
          />
        ) : (
          <input
            autoComplete="true"
            title={title}
            placeholder={placeholder}
            id={name}
            type={type}
            {...props}
            {...registeredProps}
            className={clsx(
              error ? 'border-error' : 'border-primary',
              'flex text-lg md:text-xl rounded-xl border-2  focus:border-accentColor hover:border-accentColor px-4 py-2.5 w-full outline-accentColor font-light',

              type === 'checkbox' && 'w-5 h-5 mr-5',
            )}
          />
        )}
        <span className="my-1 text-error text-sm h-5">{error}</span>
      </div>
    </div>
  );
}
