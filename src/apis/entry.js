import { userClient } from './userClient';

export const getIsEntryApi = ({ userId }) => {
  return userClient.get(`/entry?userId=${userId}&isEntry=true`);
};

export const entryApi = ({ userId, date }) => {
  return userClient.post('/entry', { userId, entryDate: date, isEntry: true });
};

export const exitApi = ({ userId, date }) => {
  return userClient.put('/entry', { userId, exitDate: date, isEntry: false });
};

export const qrCodeApi = ({ userId, date }) => {
  const isEntry = getIsEntryApi({ userId }).then(res => res.data.);
}