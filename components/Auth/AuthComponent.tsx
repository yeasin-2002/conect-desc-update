"use client";

import { IAuthComponent } from "@/Interface";
import { FC } from "react";

export const AuthComponent: FC<IAuthComponent> = ({
  leftComponent,
  rightComponent,
}) => (
  <div className="w-[100%] flex flex-col lg:flex-row gap-5 p-5 ">
    {leftComponent}
    {rightComponent}
  </div>
);
