import Card from "components/app/cards/card/card";
import { socialMediaLinks } from "constants/app/social-media-links";

const Cards = async () => {
  return (
    <div className="w-11/12 flex flex-col justify-between justify-items-center gap-7 p-2 m-4 lg:w-full lg:grid lg:grid-cols-2">
      {socialMediaLinks.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Cards;
