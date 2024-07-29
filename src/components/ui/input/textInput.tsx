import { cn } from "@/utils/cn";
import { Field } from "formik";
import { ReactNode, useId, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { twMerge } from "tailwind-merge";

interface IFormInput {
  placeholder: string;
  label?: string;
  type?: "text" | "password" | "phoneNumber" | "date" | "number";
  name: string;
  error?: string | null;
  disabled?: boolean;
  className?: string;
  capitalise?: boolean;
  onBlur?: (e: any) => void;
  onFocus?: () => void;
  onChange?: any;
  value?: string;
  size?: "small" | "base" | "medium";
  rightElement?: ReactNode;
  leftElement?: ReactNode;
  [x: string]: any;
  readOnlyInput?: boolean;
  pattern?: string;
  id?: string;
  mt?: "mt-[30px]" | "mt-4";
}

function PhoneNumberInput({ size, ...props }: IFormInput) {
  return (
    <div className={"mt-[30px] w-full "}>
      <label htmlFor={props.id}>
        <p
          className={`${
            size == "base"
              ? "text-sm mb-1 sm:mb-3 font-medium"
              : "text-sm mb-[5px] sm:mb-[10px]  font-medium"
          } `}
        >
          {props.label}
        </p>
        <PhoneInput
          placeholder={props.placeholder}
          inputStyle={{
            width: "100%",
            color: "black",
            background: "#fff",
            paddingTop: 19,
            paddingBottom: 19,
            border: "1px solid #1E1E1E80",
            height: 50,
          }}
          value={props.capitalisevalue}
          onChange={props.onChange}
          onBlur={props.onBlur}
          country="ng"
          dropdownStyle={{ color: "black" }}
        />
      </label>
      {props.error && renderError(props.error)}
    </div>
  );
}

function DefaultInput({
  size = "base",
  leftElement,
  rightElement,
  className,
  capitalise,
  readOnlyInput,
  error,
  id,
  name,
  label,
  placeholder,
  mt = "mt-[30px]",
  showPassword,
  ...props
}: IFormInput) {
  return (
    <div className={` w-full ${mt} `}>
      <label className="relative" htmlFor={id}>
        {label && (
          <p
            className={`text-sm ${
              size === "base" ? "mb-1" : "mb-[5px] sm:mb-[10px]"
            } font-medium`}
          >
            {label}
          </p>
        )}
        {leftElement && (
          <div className="absolute -bottom-[3px] left-3">{leftElement}</div>
        )}

        <Field
          id={id}
          name={name}
          placeholder={placeholder}
          className={cn(
            `py-[14px]  font-medium px-[18px] text-primary placeholder:text-primary-300 text-sm w-full outline-0 border-[1px] border-[#8a95bfc0] rounded-[4px] focus:border-brand 
           ${capitalise && "capitalize"}  
           ${rightElement && "pr-10"} 
           ${leftElement && "pl-8"}
          ${readOnlyInput && "border-black"}
          ${error && "border-red-500 focus:border-red-500"} 
          `,
            className
          )}
          {...props}
          type={showPassword ? "password" : "text"}
        />
        {rightElement ? (
          <div
            className={cn(
              `absolute  ${
                size == "medium" ? " -bottom-0 right-5" : "-bottom-1 right-3"
              }`
            )}
          >
            {rightElement}
          </div>
        ) : null}
      </label>
      {error && renderError(error)}
    </div>
  );
}

export default function FormInput(props: IFormInput) {
  const [showPassword, setShowPassword] = useState(true);
  const id = useId();

  if (props.type === "phoneNumber") {
    return <PhoneNumberInput {...props} id={id} />;
  }
  if (props.type === "password") {
    return (
      <DefaultInput
        showPassword={showPassword}
        rightElement={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <IoEyeOffOutline className="text-primary-300" />
            ) : (
              <IoEyeOutline className="text-primary-300" />
            )}
          </button>
        }
        {...props}
        id={id}
      />
    );
  }

  return <DefaultInput {...props} id={id} />;
}

function renderError(error: string) {
  return (
    <div className="text-red-500 text-xs mt-2 flex items-center">
      <div className="w-1 h-1 rounded-full bg-red-500 mr-1" />
      <p className="text-inherit"> {error}</p>
    </div>
  );
}
