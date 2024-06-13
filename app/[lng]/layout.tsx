import { Metadata } from "next";
import { Exo, Inter, Poppins } from "next/font/google";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

import { IChildrenWithIntl } from "@/Interface";
import { dir } from "i18next";

import { DeviceInfo } from "@/components/development/DeviceInfo";
import { AOSInit } from "@/lib/AOSInit";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const exo = Exo({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export async function generateStaticParams() {
  // return languages.map((lng) => ({ lng }));
  return ["en", "bn"];
}

export const metadata: Metadata = {
  title: "Connect Desk",
  description: "Generated by Baitul Hikmah Team",
};

const RootLayout: FC<IChildrenWithIntl> = ({ children, params: { lng } }) => (
  <html lang={lng} dir={dir(lng)}>
    {/* <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
    /> */}

    <body className={(poppins.className, exo.className, inter.className)}>
      <AOSInit />
      {children}
      <Toaster />
      {process.env.NODE_ENV === "development" && <DeviceInfo />}
    </body>
  </html>
);

export default RootLayout;
