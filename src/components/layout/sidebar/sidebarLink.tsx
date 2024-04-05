import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { renderSidebarIcon } from "./sidebarIcons";
import { SubNavLink } from "./subNavLink";
import { cn } from "@/utils/cn";

interface ISidebar {
  active: boolean;
  href: string;
  icon: any;
  activeIcon: any;
  name: string;
}

interface ISidebarLink {
  active: boolean;
  href?: string;
  icon: any;
  activeIcon: any;
  name: string;
  subNav?: ISidebar[] | any[];
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarLink = ({
  active,
  href,
  icon,
  activeIcon,
  name,
  subNav,
  setShowSidebar,
}: ISidebarLink) => {
  const [hovering, setHovering] = useState(false);

  const shouldShowActive = hovering || active;

  return (
    <ul>
      {href ? (
        <li
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseOut={() => setHovering(false)}
          className={cn(
            "mb-2 hover:transition ease-in-out   hover:text-brand  hover:bg-[rgba(0,106,255,0.15)]",
            shouldShowActive
              ? "text-brand bg-[rgba(0,105,255,0.15)] font-medium  border-l-4 border-l-brand"
              : "text-primary "
          )}
        >
          <Link
            className="flex px-2 md:px-5 py-2 text-[14.5px] md:text-base md:py-3 gap-2 md:gap-4"
            href={href}
            onClick={() => setShowSidebar(false)}
          >
            {renderSidebarIcon(icon)}
            {name}
          </Link>
        </li>
      ) : (
        <SubNavLink
          active={active}
          icon={icon}
          activeIcon={activeIcon}
          name={name}
          subNav={subNav}
          setShowSidebar={setShowSidebar}
        />
      )}
    </ul>
  );
};
