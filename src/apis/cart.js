import { userClient } from './userClient';

export const addCartApi = ({ productId, quantity }) => {
  return userClient.post('/carts', { productId, quantity })
}

export const getCartApi = ({ userId }) => {
  return userClient.get(`/carts?userId=${userId}`)
}

export const deleteCartApi = ({ CartId }) => {
  return userClient.delete(`/carts/${CartId}`)
}