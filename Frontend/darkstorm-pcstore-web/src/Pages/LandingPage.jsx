import { Card } from "../Components/Card";
import { PCs as pc } from "../Data/Computer";
import { Carousel } from "../Components/Carousel";
import { Layout } from "./Layout";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigator = useNavigate();

  // handler for card view detail from landing page
  const viewProductDetail = (productId) => {
    navigator(`/detail?productId=${productId}`);
  };

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
            onClickHandler={viewProductDetail}
          />
        );
      })}
    </Layout>
  );
};
