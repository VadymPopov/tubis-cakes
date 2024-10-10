import * as Yup from 'yup';

export const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const nameRegExp = /^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)/;
export const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const validationSchemaPromo = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(emailRegExp, 'Please enter a valid email'),
});

export const validationSchemaOrder = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .matches(nameRegExp, 'Please enter a valid name'),
  email: Yup.string()
    .required('Email is required')
    .matches(emailRegExp, 'Please enter a valid email'),

  phone: Yup.string()
    .trim()
    .optional()

    .test(
      'is-valid-phone',
      'Please enter a valid phone number',
      (value) => !value || phoneRegExp.test(value),
    ),
  instagram: Yup.string()
    .trim()
    .optional()
    .test(
      'is-valid-instagram',
      'Please enter a valid Instagram username',
      (value) => {
        if (!value) return true;
        const regex = /^@?(\w){1,15}$/;
        return regex.test(value);
      },
    ),

  message: Yup.string().trim().optional(),
  address: Yup.string().when('transportation', {
    is: (val: string) =>
      Array.isArray(val) ? val.includes('delivery') : val === 'delivery',
    then: (schema) => schema.required('Delivery address is required'),
    otherwise: (schema) => schema.nullable(),
  }),
  images: Yup.mixed<File[]>()
    .test('fileSize', 'Each file should not exceed 2MB', (value) => {
      if (!value || !Array.isArray(value)) return true;
      return value.every((file: File) => file.size <= 2000000);
    })
    .test(
      'fileType',
      'Unsupported file format. Only images are allowed.',
      (value) => {
        if (!value || !Array.isArray(value)) return true;
        return value.every((file: File) =>
          /image\/(jpeg|png|gif|webp)/.test(file.type),
        );
      },
    ),
  promocode: Yup.string().trim().optional(),
  transportation: Yup.string().required('Please select Delivery or Pick-up'),
  date: Yup.date()
    .required('Please select a valid date')
    .min(new Date(), 'The date cannot be in the past'),
  occasion: Yup.string().required('Please specify the occasion'),

  servings: Yup.string().required('Please select the number of servings'),

  flavour: Yup.string().required('Please select a flavor'),
  description: Yup.string().optional(),
});
