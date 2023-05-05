import Image from "next/image";
import { Raleway } from "next/font/google";

const roboto = Raleway({
  weight: "500",
  subsets: ["latin"],
});

const Card = ({ item }) => {
  return (
    <>
      <div className={roboto.className + " w-4/5 bg-neutral-700 py-3 px-5"}>
        <h1 className="text-lg text-white">{item.title}</h1>
        <Image src={item.logo} alt="" width={40} height={40} />
      </div>
    </>
  );
};

export default Card;
