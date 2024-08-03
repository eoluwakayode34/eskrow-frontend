import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink, navLinks, verifiedNavLinks } from "./linkList";
import { SidebarLink } from "./sidebarLink";
import { SingleLoader } from "../loading/listLoading";
import { useUserStore } from "@/store/userStore";
import { BiLogOutCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { pages } from "@/utils/pages";

interface ISidebar {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  type: "merchant" | "user";
}

const DashboardSidebar = React.memo(function Sidebar({
  showSidebar,
  setShowSidebar,
  loading,
  type,
}: ISidebar) {
  const pathname = usePathname();
  const router = useRouter();
  const setAuth = useUserStore((state) => state.setAuth);

  const logOut = () => {
    setAuth(null);
    if (type === "user") {
      router.push(pages.userLogin);
    }
    if (type === "merchant") {
      router.push(pages.merchantLogin);
    }
  };

  const linksToDisplay = verifiedNavLinks;

  const renderSidebarLink = (link: NavLink, _index: number) => {
    if (link.roles.includes(type)) {
      return (
        <div key={_index}>
          {loading ? (
            <SingleLoader className="h-5 " />
          ) : (
            <SidebarLink
              key={link.name}
              name={link.name}
              href={link.url ?? ""}
              icon={link.icon}
              activeIcon={link.activeIcon}
              subNav={link.subNav ?? []}
              active={pathname?.includes(link.url ?? "")}
              setShowSidebar={setShowSidebar}
            />
          )}
        </div>
      );
    }
  };

  return (
    <div
      className={`bg-dark overflow-y-auto overflow-x-hidden scrollbar-hide before:bg-black before:opacity-80 before:w-screen before:h-screen before:lg:hidden before:absolute before:-z-10 relative lg:z-50 h-screen  md:col-span-1 min-[320px]:w-[302px]  lg:flex lg:w-[302px] pb-10  shadow-sm  flex-col justify-between ${
        showSidebar ? "flex" : "hidden"
      }`}
    >
      <div className="p-3 flex justify-between items-center  mt-5  w-full">
        <Link href={`/dashboard/${type}`} className="px-9">
          <Image
            src={
              type === "merchant"
                ? "/eskrowLogoMerchant.svg"
                : "/eskrowLogoUser.svg"
            }
            alt={`${type} header`}
            width={224}
            height={43.22}
          />
        </Link>

        <button
          onClick={() => setShowSidebar(false)}
          className="lg:hidden mr-4"
        >
          <IoClose className="text-white w-6 h-6" />
        </button>
      </div>

      <ul className="mt-16 mb-auto pr-6">
        {linksToDisplay.map(renderSidebarLink)}
      </ul>

      <div className="mt-auto">
        <ul className="mt-16 mb-auto pr-6">
          {[
            {
              name: "Settings",
              icon: "settings",
              url: "/dashboard/settings",
              roles: ["merchant", "user"],
            },
          ].map(renderSidebarLink)}
        </ul>
        <div className="p-5 w-full">
          <button
            onClick={logOut}
            className="flex w-full items-center justify-center gap-1 bg-[#FF3366] text-white px-10 py-3 rounded-md "
          >
            <div className="text-[19px]">Log Out</div>
            <BiLogOutCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
});

export default DashboardSidebar;
