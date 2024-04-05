import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUser {
  firstName: string;
  lastName: string;
  hasVirtualAccount: boolean;
  businessName: string;
  fundAccountStatus: boolean;
  payoutStatus: boolean;
  isPinSet: boolean;
}

export type UserStore = {
  user?: IUser;
  isPinSet?: boolean;
  setUser: (user: any) => void;
  setPinStatus: (isPinSet: boolean) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: undefined,
      isPinSet: undefined,
      setUser: (values: IUser) => set({ user: values }),
      setPinStatus: (isPinSet: boolean) => set({ isPinSet }),
    }),
    {
      name: "userState",
    },
  ),
);
