import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  car_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
