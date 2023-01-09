import { object, string } from 'yup';

export default object({
  body: object({
    fullUrl: string().url('Must be a valid URL').required('fullUrl is required'),
  }),
});

export const shortUrlQuery = object({
  params: object({
    urlId: string().required('URL Id is required'),
  }),
});
