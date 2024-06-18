"use client";

import { InputFieldProps } from "@/Interface";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const InputField: FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  width = "full",
  handleOnChange,
  otp,
  name,
  value,
  required = false,
  ...rest
}) => (
  <div
    className={twMerge(
      `${width === "auto" ? "w-auto" : "w-full"} my-1.5 xl:mt-6 2xl:mt-3`,
      rest.className
    )}

    // className={`${
    // width === "auto" ? "w-auto" : "w-full"
    // } my-1.5 xl:mt-6 2xl:mt-3`}
  >
    <p className="text-xs font-medium text-neutral mb-0.5 xl:text-sm 2xl:text-lg">
      {label}
    </p>
    <input
      name={name}
      value={value}
      className={`border border-primary border-opacity-20 rounded-md p-2 text-sm focus:outline-primary     xl:text-lg ${
        otp && "w-9 h-10 sm:w-10 sm:h-11 md:w-12 md:h-14  "
      } ${
        (width === "full" && "w-full") ||
        (width === "half" && "w-1/2") ||
        (width === "auto" && "w-auto")
      }`}
      onChange={(e) => handleOnChange(e)}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  </div>
);
