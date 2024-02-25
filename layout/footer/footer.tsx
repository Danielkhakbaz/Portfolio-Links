"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DKLogoBlack from "public/dk-logo-black.jpeg";
import DKLogoGray from "public/dk-logo-gray.jpeg";

const Footer = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="text-white flex flex-row justify-center items-center">
      by
      {width > 1023 ? (
        <Image
          src={DKLogoBlack}
          width={40}
          height={40}
          className="ml-1"
          alt="Danial Khakbaz's logo"
        />
      ) : (
        <Image
          src={DKLogoGray}
          width={40}
          height={40}
          className="ml-1"
          alt="Danial Khakbaz's logo"
        />
      )}
    </div>
  );
};

export default Footer;
