"use client";

import { CommonText } from "@/components";
import { checkPrimary } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";

export const Solution: FC<{ title: JSX.Element }> = ({ title }) => (
  <div className="w-fit flex flex-col justify-center items-center text-center">
    <div className="transition duration-500 ease-in-out hover:bg-green-400 rounded-full cursor-pointer">
      <Image src={checkPrimary} alt="" />
    </div>
    <CommonText>{title}</CommonText>
  </div>
);
