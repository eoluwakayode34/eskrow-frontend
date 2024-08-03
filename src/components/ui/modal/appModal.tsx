import { Dialog, Transition } from "@headlessui/react";

import React, { Dispatch, Fragment, ReactNode } from "react";

interface IAppModal {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  center?: boolean;
  title?: string;
  showCloseIcon?: boolean;
}
export const Modal = ({
  isOpen,
  setIsOpen,
  children,
  center = true,
  showCloseIcon = true,
}: IAppModal) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        className={
          " h-screen z-[9999] bg-[rgba(38,38,38,0.80)] p-3  w-full absolute top-0 flex flex-col justify-center"
        }
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Panel
          className={`bg-white   font-sans rounded-lg sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 ml-auto p-3 min-[415px]:p-5  sm:px-4 sm:py-6 md:px-10 md:py-9 overflow-y-auto scrollbar-hide  ${
            center && "mx-auto "
          }`}
        >
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export const AppModal = React.memo(Modal);
