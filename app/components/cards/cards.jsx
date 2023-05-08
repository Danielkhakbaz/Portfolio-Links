import Card from "app/components/cards/card/card";
import { socialMediaLinks } from "app/services/social-media-links";

const Cards = () => {
  return (
    <>
      <div className="w-full grid grid-cols-2 justify-between justify-items-center gap-7 p-2 m-4">
        {socialMediaLinks.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </>
  );
};

export default Cards;
