import Image from "next/image";
import { socialMediaLinks } from "app/services/social-media-links";
import { Nunito } from "next/font/google";
import { IoMdMail } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import "app/styles/about-me.css";

const raleway300 = Nunito({
  weight: "300",
  subsets: ["latin"],
});
const raleway500 = Nunito({
  weight: "500",
  subsets: ["latin"],
});

const AboutMe = () => {
  return (
    <>
      <section
        className={`${raleway500.className} w-full bg-neutral-700 text-slate-300 flex flex-col items-center rounded gap-3 p-6 my-6`}
      >
        <h1 className="text-3xl text-white">Danial Khakbaz</h1>
        <h2
          className={`${raleway300.className} text__location text-md flex flex-row items-center gap-2`}
        >
          <SlLocationPin />
          Tehran, Iran
        </h2>
        <h3 className="text-sm text-white">23</h3>
        <a href="mailto:danialkhakbaz.dk@gmail.com" target="_blank">
          <button className="text-sm flex flex-row items-center gap-2 border border-slate-300 rounded-sm transition ease-out py-2 px-3 hover:text-white hover:border-white">
            <IoMdMail fontSize={20} /> Email
          </button>
        </a>
        <div className="flex flex-row gap-4">
          {socialMediaLinks
            .filter((item) => {
              if (
                item.title === "Instagram" ||
                item.title === "Telegram" ||
                item.title === "Twitter" ||
                item.title === "Spotify"
              ) {
                return item;
              }
            })
            .map((filteredItems) => (
              <a
                key={filteredItems.title}
                className="rounded-full border border-slate-300 transition ease-out hover:border-white"
                href={filteredItems.link}
                target="_blank"
              >
                <Image
                  className="invert"
                  src={filteredItems.icon}
                  alt={`${filteredItems.title}'s icon`}
                  width={35}
                  height={35}
                />
              </a>
            ))}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
