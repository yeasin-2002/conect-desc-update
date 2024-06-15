"use client";

import Link from "next/link";
import { FC } from "react";

import { IAuthMainRightSide } from "@/Interface";
import { AgreeSection, AuthNavigate, AuthTopSection } from ".";
import { Button } from "..";

export const AuthMainRightSide: FC<IAuthMainRightSide> = ({
  setUserType,
  userType,
  children,
  agreeSectionLabel1,
  authTopLabel,
  btnText,
  maxWidth,
  authNavigateBtnText,
  authNavigateLink,
  authNavigateLabel,
  agreeSectionLabel2,
  agreeSectionLabelLink2,
  authTopLabelType,
  btnLink,
  otp,
}) => (
  <section className="auth-side-box w-full md:w-[50%]  xl:w-[40%] mx-auto lg:pr-5    auth-box  2xl:px-6">
    <div className={`w-full ${maxWidth} mx-auto   `}>
      <AuthTopSection
        label={authTopLabel}
        userType={userType}
        setUserType={setUserType}
        labelType={authTopLabelType}
        otp={otp}
      />

      {children}

      {agreeSectionLabel1 && (
        <AgreeSection
          label1={agreeSectionLabel1}
          label2={agreeSectionLabel2}
          labelLink2={agreeSectionLabelLink2}
        />
      )}

      <Link href={btnLink || ""}>
        <Button
          variant="primary"
          width="full"
          size="md"
          className="mt-4 2xl:text-xl 2xl:py-3 2xl:mt-6"
        >
          {btnText}
        </Button>
      </Link>

      <AuthNavigate
        label={authNavigateLabel}
        btnText={authNavigateBtnText}
        link={authNavigateLink}
        otp={otp}
      />
    </div>
  </section>
);
