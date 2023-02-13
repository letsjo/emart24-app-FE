import { atom } from "recoil";

export const UserState = atom({
  key: "UserState",
  default: {
    email: '',
    password: '',
    accessToken: '',
  },
})