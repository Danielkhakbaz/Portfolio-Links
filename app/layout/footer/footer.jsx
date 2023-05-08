"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import DKLogoBlack from "app/assets/dk-logo-black.jpeg";
import DKLogoGray from "app/assets/dk-logo-gray.jpeg";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div
        className={`${oswald.className} text-white flex flex-row justify-center items-center`}
      >
        by
        {width > 1023 ? (
          <Image
            className="ml-1"
            src={DKLogoBlack}
            alt="Danial Khakbaz's logo"
            width={40}
            height={40}
          />
        ) : (
          <Image
            className="ml-1"
            src={DKLogoGray}
            alt="Danial Khakbaz's logo"
            width={40}
            height={40}
          />
        )}
      </div>
    </>
  );
};

export default Footer;
