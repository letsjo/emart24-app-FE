import { userClient } from './userClient';

export const signInApi = ({ email, password }) => {
  return userClient.post('/login', { email, password });
};

export const signUpApi = ({ name, email, password }) => {
  console.log(name, email, password, userClient);
  return userClient.post('/register', { name, email, password });
};
