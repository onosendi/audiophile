import axios from 'axios';

const api = async (descriptor) => {
  const { data } = await axios(descriptor);
  return data;
};

export const descriptors = {
  postCheckout: ({ data }) => ({
    data,
    method: 'post',
    url: '/api/checkout',
  }),
};

export default api;
