import { atom } from "recoil";

export const UserState = atom({
  key: "UserState",
  default: {
    name: '',
    userId: '',
    email: '',
    password: '',
    accessToken: '',
  },
})