"use client";

import { IAuthComponent } from "@/Interface";
import { FC } from "react";

export const AuthComponent: FC<IAuthComponent> = ({
  leftComponent,
  rightComponent,
}) => (
  <div className="w-[100%] flex flex-col lg:flex-row gap-10 xl:gap-x-16 p-5  md:p-10 ">
    {leftComponent}
    {rightComponent}
  </div>
);
