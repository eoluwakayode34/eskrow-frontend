import { ReactNode } from "react";

const WelcomeButton = ({ children, onClick }: { children: ReactNode, onClick?: () => void }) => (
  <button onClick={onClick} className="border-primary-300 hover:border-brand  border hover:text-brand text-primary-300 relative  px-10 py-5 rounded-xl  text-3xl">
    <div className="w-5 h-5 rounded-full border border-inherit absolute left-2 top-2 " />
    {children}
  </button>
);

export default WelcomeButton;
