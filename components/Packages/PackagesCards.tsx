"use client";

import { IIntlTranslator } from "@/Interface";
import { packagesData } from "@/public/Data";
import { FC } from "react";
import { PackageCard } from "./PackageCard";

export const PackagesCards: FC<IIntlTranslator> = ({ t }) => (
  <section className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[60px] mt-[30px] md:mt-[60px]">
      {packagesData.map((packages, i) => (
        <PackageCard {...packages} t={t} index={i} key={i} />
      ))}
    </div>
  </section>
);
