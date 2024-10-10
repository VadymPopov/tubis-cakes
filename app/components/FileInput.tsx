import { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { SlCloudUpload } from 'react-icons/sl';

import clsx from 'clsx';

import { useFileUpload } from '../hooks/useFileUpload';
import ImagesPreview from './ImagesPreview';

interface FileInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type: string;
  name: string;
  optional?: boolean;
  error?: string;
  OnChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function FileInput({
  label,
  type,
  name,
  optional,
  error,
  ...props
}: FileInputProps) {
  const methods = useFormContext();
  const registeredProps = methods.register(name);
  const { selectedFiles, handleFileChange, handleDelete } = useFileUpload();

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="md:w-96 sm:w-80 w-full text-start mb-1">
          <span className="">{label}</span>{' '}
          {optional && <span className="text-gray-500">(Optional)</span>}
        </div>

        <div className="flex flex-col md:w-96 sm:w-80 w-full ">
          <label
            className={clsx(
              error ? 'border-error' : 'border-primary',
              'group flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:border-accentColor bg-bgColor transition-all',
            )}
            htmlFor={name}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <SlCloudUpload className="h-8 w-8 fill-mainDarkColor group-hover:fill-accentColor" />
              <p className="mb-2 text-sm">
                <span className="font-semibold">Click to upload</span> or drag
                and drop{' '}
              </p>
              <p className="text-xs">JPG, PNG, or GIF (MAX. 2MB)</p>
            </div>
            <input
              id={name}
              type={type}
              {...props}
              {...registeredProps}
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <span className="my-1 text-error text-sm h-5">{error}</span>
        </div>
      </div>
      <ImagesPreview
        selectedFiles={selectedFiles}
        handleDelete={handleDelete}
      />
    </>
  );
}
