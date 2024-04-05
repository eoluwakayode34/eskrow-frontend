import {
  PiHandshakeLight,
  PiHeartStraightBreakDuotone,
  PiLinkSimpleBold,
  PiShoppingCartSimpleDuotone,
} from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import {
  IoWalletOutline,
  IoReceiptOutline,
  IoStorefrontOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { TbCashBanknote } from "react-icons/tb";

export const renderSidebarIcon = (icon: string) => {
  switch (icon) {
    case "overview":
      return <LuLayoutDashboard className="w-6 h-6 text-inherit" />;
    case "eskrow":
      return <CiCreditCard1 className="w-6 h-6 text-inherit" />;
    case "wallet":
      return <IoWalletOutline className="w-6 h-6 text-inherit" />;
    case "transactions":
      return <IoReceiptOutline className="w-6 h-6 text-inherit" />;
    case "merchants":
      return <IoStorefrontOutline className="w-6 h-6 text-inherit" />;
    case "settings":
      return <IoSettingsOutline className="w-6 h-6 text-inherit" />;
    case "paymentLinks":
      return <PiLinkSimpleBold className="w-6 h-6 text-inherit" />;
    case "purchases":
      return <PiShoppingCartSimpleDuotone className="w-6 h-6 text-inherit" />;
    case "payouts":
      return <TbCashBanknote className="w-6 h-6 text-inherit" />;
    case "disputes":
      return <PiHeartStraightBreakDuotone className="w-6 h-6 text-inherit" />;
  }
  return null;
};
