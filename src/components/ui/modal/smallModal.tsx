import { CloseIcon } from "@/svgs";
import { cn } from "@/utils/cn";
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
  title,
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
          " h-screen z-[9999] bg-[rgba(117,117,117,0.61)] p-3  w-full absolute top-0 flex flex-col justify-center"
        }
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Panel
          className={`bg-white relative  font-sans rounded-lg sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 ml-auto p-3 min-[415px]:p-5  sm:px-4 sm:py-6 md:px-10 md:py-9 overflow-y-auto scrollbar-hide 
        outline-8 outline outline-[#ffffff57]
            ${center && "mx-auto "}`}
        >
          {showCloseIcon && !title && (
            <CloseIcon
              className="absolute right-5 top-5 cursor-pointer p-1 w-6 h-6"
              onClick={setIsOpen}
            />
          )}

          {title && (
            <div className="flex pb-2 border-b border-[#E2E8F0] justify-between">
              <p
                className={cn("text-sm text-primary text-center font-semibold")}
              >
                {title}
              </p>

              {showCloseIcon && (
                <CloseIcon
                  className=" cursor-pointer p-1 w-5 h-5"
                  onClick={setIsOpen}
                />
              )}
            </div>
          )}
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export const SmallModal = React.memo(Modal);
