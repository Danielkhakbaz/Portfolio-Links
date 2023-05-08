import Image from "next/image";
import { Raleway } from "next/font/google";
import { BsArrowRightShort } from "react-icons/bs";

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
});

const Card = ({ item }) => {
  return (
    <>
      <a
        className={`${raleway.className} card w-full bg-neutral-700 flex flex-row justify-between items-center rounded cursor-pointer transition ease-out py-3 px-5 hover:bg-neutral-600`}
        href={item.link}
        target="_blank"
      >
        <div className="flex flex-row items-center">
          <Image
            className={`${item.title.toLowerCase()} card__image rounded relative right-7`}
            src={item.logo}
            alt={item.title + "'s logo"}
            width={55}
            height={55}
            priority
          />
          <h1 className="text-lg text-white">{item.title}</h1>
        </div>
        <BsArrowRightShort
          className="card__icon text-slate-200"
          fontSize={24}
        />
      </a>
    </>
  );
};

export default Card;
