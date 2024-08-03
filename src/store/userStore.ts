import { create } from "zustand";
import { persist } from "zustand/middleware";

// export interface IUser {
//   firstName: string;
//   lastName: string;
//   hasVirtualAccount: boolean;
//   businessName: string;
//   fundAccountStatus: boolean;
//   payoutStatus: boolean;
//   isPinSet: boolean;
// }

export type UserStore = {
  auth?: any;
  // isPinSet?: boolean;
  setAuth: (user: any) => void;
  // setPinStatus: (isPinSet: boolean) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: undefined,
      // isPinSet: undefined,
      setAuth: (values: any) => set({ auth: values }),
      // setPinStatus: (isPinSet: boolean) => set({ isPinSet }),
    }),
    {
      name: "userState",
    },
  ),
);


// import create from 'zustand';

// const useAuthStore = create((set) => ({
//     auth: {},
//     setAuth: (auth) => set({ auth }),
// }));

// export default useAuthStore;



