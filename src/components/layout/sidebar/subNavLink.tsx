import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { renderSidebarIcon } from "./sidebarIcons";

interface ISidebar {
  active: boolean;
  href: string;
  icon: any;
  activeIcon: any;
  name: string;
}

interface ISubNavLink {
  active: boolean;
  name: string;
  icon: any;
  activeIcon: any;
  subNav?: ISidebar[] | any[];
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SubNavLink = ({
  name,
  subNav,
  activeIcon,
  icon,
  setShowSidebar,
}: ISubNavLink) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setShowDropDown((prev) => !prev)}
        className={` pr-3 w-full mb-2 flex items-center justify-between hover:transition ease-in-out  rounded-[4px] hover:bg-[#272927] ${
          showDropDown
            ? "bg-[#272927] font-medium text-white"
            : "text-[#89998E] hover:text-white"
        }`}
      >
        <div className="flex px-2 md:px-5 py-2 text-[14.5px] items-center md:text-base md:py-3 gap-2 md:gap-4">
          {renderSidebarIcon(icon)}
          {name}
        </div>

        {showDropDown ? (
          <FiChevronUp width={16} height={16} fill="white" />
        ) : (
          <FiChevronDown width={16} height={16} fill="#89998E" />
        )}
      </button>

      {showDropDown ? (
        <>
          {subNav &&
            subNav?.map((item, index) => (
              <Link
                key={index}
                className={`flex ml-5 items-center  px-2 md:px-7 py-2 text-xs md:text-base md:py-3 gap-2 md:gap-4
                ${
                  pathname === item.url
                    ? "text-white"
                    : "text-[#89998E] hover:text-white hover:opacity-70"
                } `}
                href={item.url}
                onClick={() => setShowSidebar(false)}
              >
                {item?.name ?? ""}
                {pathname === item?.url ? (
                  <div className="active-dot"></div>
                ) : null}
              </Link>
            ))}
        </>
      ) : null}
    </>
  );
};
