import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

import { SingleLoader } from "../loading/listLoading";
import { pages } from "@/utils/pages";

export const SidebarUserAccountDisplay = ({
  name,
  businessName,
  isLoading,
}: {
  name: string;
  businessName: string;
  isLoading: boolean;
}) => {
  const router = useRouter();

  const logOut = () => {
    router.push(pages.home);
  };

  const LogoutButton = ({ logOut }: { logOut: () => void }) => (
    <button
      onClick={logOut}
      className=" py-2 sm:py-3 opacity-60 hover:opacity-100  flex px-4 items-start text-sm sm:text-base font-medium"
    >
      Log out
    </button>
  );

  const SettingsLink = () => (
    <Link
      href="/dashboard/settings"
      prefetch={true}
      className="py-2 sm:py-3 px-4 opacity-60 hover:opacity-100 text-sm sm:text-base font-medium "
    >
      Settings
    </Link>
  );

  return (
    <div className="bottom-6 px-4 pr-5 lg:pr-6 xl:pr-10  pb-8 sm:py-5 flex gap-4 rounded-3xl items-center ">
      {!isLoading ? (
        <>
          <div className="flex justify-between flex-1 items-center ">
            <div className="text-white">
              <h3 className="font-bold capitalize text-sm sm:text-base">{`${
                name ?? ""
              }`}</h3>
              <p className="mt-1 text-xs  sm:text-sm capitalize">{`${
                businessName ?? ""
              }`}</p>
            </div>
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button className={"relative ml-2"}>
                    {open ? (
                      <PiCaretUpBold className="text-white w-4 h-4" />
                    ) : (
                      <PiCaretDownBold className="text-white w-4 h-4" />
                    )}
                  </Popover.Button>

                  <Popover.Panel className=" text-white bottom-24  left-0 absolute bg-dark sm:bg-transparent w-32 rounded-md overflow-hidden z-10">
                    <div className="grid ">
                      <SettingsLink />
                      <LogoutButton logOut={logOut} />
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </div>
        </>
      ) : (
        <SingleLoader />
      )}
    </div>
  );
};
