import Image from "next/image";
import { socialMediaLinks } from "constants/app/social-media-links";
import { IoMdMail } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import styles from "styles/modules/about-me.module.css";

const AboutMe = async () => {
  return (
    <section className="w-full bg-neutral-800 text-slate-300 flex flex-col items-center rounded gap-3 p-6 lg:bg-neutral-700 lg:my-6">
      <h1 className="text-3xl text-white">Danial Khakbaz</h1>
      <h2
        className={`${styles.text__location} text-md flex flex-row items-center gap-2`}
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
                src={
                  filteredItems.icon ? filteredItems.icon : filteredItems.logo
                }
                width={35}
                height={35}
                className="invert"
                alt={`${filteredItems.title}'s icon`}
              />
            </a>
          ))}
      </div>
    </section>
  );
};

export default AboutMe;
