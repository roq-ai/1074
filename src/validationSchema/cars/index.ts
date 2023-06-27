import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  price: yup.number().integer().required(),
  availability: yup.boolean().required(),
  company_id: yup.string().nullable(),
});
