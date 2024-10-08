import * as Yup from 'yup';

export const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const validationSchemaPromo = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(emailRegExp, 'Please enter a valid email'),
});
