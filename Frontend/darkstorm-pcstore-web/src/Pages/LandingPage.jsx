import { Card } from "../Components/Card";
import { PCs as pc } from "../Data/Computer";
import { Carousel } from "../Components/Carousel";
import { Layout } from "./Layout";

export const LandingPage = () => {
  // handler for card view detail from landing page

  // pchum ben carousel
  const img =
    "https://i.pinimg.com/originals/d4/3b/15/d43b154119cae525ddbef6bd359e71a4.jpg";

  return (
    <Layout>
      <span className="text-[15px] ml-2 font-bold col-span-2">
        Special Promotion
      </span>
      <Carousel image={img} />
      <span className="text-[15px] ml-2 font-bold col-span-2 sm:col-span-3 lg:col-span-4">
        Onsales
      </span>
      {pc.map((c, i) => {
        return (
          <Card
            key={i}
            productId={c.productId}
            productName={c.productName}
            imageUrl={c.imageUrl}
            price={c.price}
            viewCount={c.viewCount}
          />
        );
      })}
    </Layout>
  );
};
