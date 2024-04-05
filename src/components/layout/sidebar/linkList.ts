
export interface NavLink {
  name: string;
  url?: string;
  icon: string;
  activeIcon?: string;
  roles: string[];
  subNav?: SubNavLink[];
}

interface SubNavLink {
  name: string;
  url: string;
  activeIcon: string;
  roles: string[];
}

const verifiedNavLinks: NavLink[] = [
  {
    name: "Overview",
    icon: "overview",
    url: "/dashboard/user",
    roles: ["user"],
 
  },
  {
    name: "Eskrow",
    icon: "eskrow",
    url: "/dashboard/get-started",
    roles: ["user"],
  
  },
  {
    name: "Wallet",
    icon: "wallet",
    url: "/dashboard/get-started",
    roles: ["user"],
   
  },
  {
    name: "Transactions",
    icon: "transactions",
    url: "/dashboard/get-started",
    roles: ["user"],
   
  },
  {
    name: "Merchants",
    icon: "merchants",
    url: "/dashboard/get-started",
    roles: ["user"],
   
  },
  {
    name: "Overview",
    icon: "overview",
    url: "/dashboard/merchant",
    roles: ["merchant"],
 
  },
  {
    name: "Payment Links",
    icon: "paymentLinks",
    url: "/dashboard/merchant/payment-links",
    roles: ["merchant"],
  
  },
  {
    name: "Purchases",
    icon: "purchases",
    url: "/dashboard/merchant/purchases",
    roles: ["merchant"],
   
  },
  {
    name: "Payouts",
    icon: "payouts",
    url: "/dashboard/merchant/payouts",
    roles: ["merchant"],
   
  },
  {
    name: "Disputes",
    icon: "disputes",
    url: "/dashboard/merchant/disputes",
    roles: ["merchant"],
   
  },
];

const navLinks: NavLink[] = [
 
  ...verifiedNavLinks,
];

export { navLinks, verifiedNavLinks };
