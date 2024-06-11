"use client";

import { IIntlTranslator } from "@/Interface";
import { FC } from "react";
import { ContactDetails, ContactUsForm } from "..";

export const ContactUsContainer: FC<IIntlTranslator> = ({ t }) => (
  <>
    <div className="container mx-auto py-20">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <ContactDetails t={t} />
        <ContactUsForm t={t} />
      </div>
    </div>
  </>
);
