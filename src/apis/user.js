import { userClient } from './userClient';

export const signInApi = ({ email, password }) => {
  return userClient.post('/login', { email, password });
};

export const signUpApi = ({ name, email, password }) => {
  return userClient.post('/register', { name, email, password });
};

export const editPasswordApi = ({ id, newPassword }) => {
  return userClient.patch(`/users/${id}`, { password: newPassword });
};

export const editProfileApi = ({ id, email, name }) => {
  console.log(email, name);
  return userClient.patch(`/users/${id}`, { email, name });
};