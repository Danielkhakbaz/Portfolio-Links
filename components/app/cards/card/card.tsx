import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "styles/modules/card.module.css";

type CardProps = {
  item: {
    title: string;
    link: string;
    logo: string;
  };
};

const Card = async ({ item }: CardProps) => {
  return (
    <a
      className={`${styles.card} w-full bg-neutral-700 flex flex-row justify-between items-center rounded cursor-pointer transition ease-out py-3 px-5 hover:bg-neutral-600`}
      href={item.link}
      target="_blank"
    >
      <div className="flex flex-row items-center">
        <Image
          className={`${item.title.toLowerCase()} ${styles.card__image} rounded relative right-7`}
          src={item.logo}
          alt={item.title + "'s logo"}
          width={55}
          height={55}
          priority
        />
        <h1 className="text-lg text-white">{item.title}</h1>
      </div>
      <BsArrowRightShort
        className={`${styles.card__icon} text-slate-200`}
        fontSize={24}
      />
    </a>
  );
};

export default Card;
