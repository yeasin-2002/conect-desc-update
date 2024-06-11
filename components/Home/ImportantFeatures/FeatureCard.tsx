"use client";

import { IFeatures, IIntlTranslator } from "@/Interface";
import { CommonText } from "@/components";
import Image from "next/image";
import { FC } from "react";
import { Trans } from "react-i18next";

export const FeatureCard: FC<IFeatures & IIntlTranslator> = ({
  des,
  icon,
  title,
  t,
  dos,
}) => (
  <div
    data-aos={dos}
    className="w-full max-w-[324px]  h-auto rounded-[5px] shadow-md px-[24px] pb-[30px] pt-[10px] flex flex-col justify-start items-center cursor-pointer  hover:shadow-[0_4px_0px_green] ease-in-out duration-500 transition-all "
  >
    <Image src={icon} alt={title} />

    <CommonText text="lg" className="font-semibold mt-1">
      {title}
    </CommonText>
    <CommonText className="mt-[15px] text-center">
      <Trans i18nKey={des} components={{ strong: <strong /> }} t={t} />
    </CommonText>
  </div>
);
