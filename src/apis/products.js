import { userClient } from './userClient';

export const getProductListApi = () => {
  return userClient.get('/products');
};

export const getEventListApi = () => {
  return userClient.get('/events');
};