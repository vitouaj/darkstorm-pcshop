import { Card } from "../Components/Card";
import { PCs as pc } from "../assets/Data/Computer";
import { Carousel } from "../Components/Carousel";
import { Layout } from "./Layout";
import pmt1 from "../assets/Images/PMT.png";
import pmt2 from "../assets/Images/Promotion.png";

export const LandingPage = () => {
  // handler for card view detail from landing page

  // pchum ben carousel
  const img = [
    // "https://i.pinimg.com/originals/d4/3b/15/d43b154119cae525ddbef6bd359e71a4.jpg",
    pmt1,
    pmt2,
  ];
  return (
    <Layout>
      <span className="text-[15px] ml-2 font-bold col-span-2">
        Special Promotion
      </span>
      <Carousel images={img} />
      <span className="text-[15px] ml-2 font-bold col-span-2">
        Gaming Series
      </span>
      <div className="w-full flex flex-nowrap overflow-x-scroll gap-x-3">
        {pc.map((c, i) => {
          return (
            <Card
              key={i}
              productId={c.productId}
              productName={c.productName}
              imageUrl={c.imageUrl[0]}
              price={c.price}
              viewCount={c.viewCount}
            />
          );
        })}
      </div>
      <span className="text-[15px] ml-2 font-bold col-span-2">
        Office Series
      </span>
      <div className="w-full flex flex-nowrap overflow-x-scroll gap-x-3">
        {pc.map((c, i) => {
          return (
            <Card
              key={i}
              productId={c.productId}
              productName={c.productName}
              imageUrl={c.imageUrl[0]}
              price={c.price}
              viewCount={c.viewCount}
            />
          );
        })}
      </div>
    </Layout>
  );
};
