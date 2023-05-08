import Image from "next/image";
import { Oswald } from "next/font/google";
import DKLogo from "app/assets/dk-logo.jpeg";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div
        className={`${oswald.className} text-white flex flex-row justify-center items-center`}
      >
        by
        <Image
          className="ml-1"
          src={DKLogo}
          alt="Danial Khakbaz's logo"
          width={40}
          height={40}
        />
      </div>
    </>
  );
};

export default Footer;
