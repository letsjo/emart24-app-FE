import { userClient } from './userClient';

export const getProductListApi = () => {
  return userClient.get('/products');
};

export const getEventListApi = () => {
  return userClient.get('/events');
};

export const getProductDetailApi = ({ productId }) => {
  return userClient.get(`/products/${productId}`);
}