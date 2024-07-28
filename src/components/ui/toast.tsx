import Image from "next/image";
import { toast } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

type toastPosition = "top-right";
interface ICustomToast {
  message: string;
  position?: toastPosition;
  type?: "success" | "error" | "warning";
}

const showToast = ({ message, position, type = "success" }: ICustomToast) => {
  toast.custom(
    (t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"}
        ${
          type === "success"
            ? "border-2 border-brand-400"
            : type === "error"
              ? "border-2 border-red-300"
              : "border-2 border-[rgba(235,211,0,0.50)]"
        }
        bg-white flex max-w-sm m-4 p-4 rounded-lg border shadow-lg mt-10 Z-[9999]`}
      >
        <div className="ml-3">
          <p className="text-sm sm:text-base font-semibold text-gray-900">
            {type === "success" ? "Success \n" : type === "error" ? "Error \n" : "⚠️ Notice️ "}
          </p>
          <p className="mt-1 text-sm">{message}</p>
        </div>

        <div className="  sm:ml-10 pl-3">
          <button onClick={() => toast.dismiss(t.id)}>
            <IoMdClose className="h-5 w-5 text-dark hover:text-gray-500 cursor-pointer" />
          </button>
        </div>
      </div>
    ),
    {
      position: position || "top-right",
    },
  );
};

export default showToast;
