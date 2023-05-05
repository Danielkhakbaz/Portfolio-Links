import Card from "app/components/cards/card/card";
import { socialMediaLinks } from "app/services/social-media-links";

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-2 justify-items-center gap-4 p-4">
        {socialMediaLinks.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </>
  );
};

export default Cards;
