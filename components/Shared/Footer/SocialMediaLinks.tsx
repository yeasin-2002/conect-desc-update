"use client";

import Image from "next/image";
import Link from "next/link";

import { IIntlTranslator } from "@/Interface";
import { socialMediaLinks } from "@/public/Data";
import { FC } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FooterTitle } from ".";

export const SocialMediaLinks: FC<IIntlTranslator> = ({ t }) => {
  const props = {
    accountName: "Connect-desk",
    phoneNumber: "+8801713392537",
  };
  return (
    <div className="mb-5 xl:mb-0">
      <FooterTitle className="mb-3">
        {t("footer.download.socialMediaLinks")}
      </FooterTitle>
      <div className="flex justify-start items-center gap-4">
        {socialMediaLinks.map(({ icon, link, title }) => (
          <Link href={link} key={title}>
            <Image src={icon} alt="icon" />
          </Link>
        ))}
        <div className="border bg-[#adcdc2] p-1 rounded-badge">
          {/* <MdWhatsapp className="text-2xl  text-green-500  " /> */}
          <FloatingWhatsApp {...props} />
        </div>
      </div>
    </div>
  );
};
