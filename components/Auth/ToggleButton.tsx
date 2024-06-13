"use client";

import { FC } from "react";

import { IToggleButton } from "@/Interface";
import { Button } from "..";

const toggleButton: ["Business Login", "Client Login"] = [
  "Business Login",
  "Client Login",
];

export const ToggleButton: FC<IToggleButton> = ({ setUserType, userType }) => (
  <div className="flex w-full max-w-[350px] mx-auto mb-3">
    {toggleButton.map((i) => (
      <Button
        key={i}
        text="14"
        size="sm"
        width="full"
        onClick={() => setUserType(i)}
        variant={userType === i ? "primary" : "secondary"}
        className={`${
          i === "Business Login" ? "rounded-r-none" : "rounded-l-none"
        } transition-all duration-500 capitalize   xl:text-lg xl:px-3 xl:py-2  2xl:text-xl 2xl:px-4 2xl:py-3 whitespace-nowrap `}
      >
        {i}
      </Button>
    ))}
  </div>
);
