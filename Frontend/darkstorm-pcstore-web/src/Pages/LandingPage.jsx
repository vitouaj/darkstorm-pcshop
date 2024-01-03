import { Card } from "../Components/Card";
import { PCs as pc } from "../assets/Data/Computer"
import { Carousel } from "../Components/Carousel";
import { Layout } from "./Layout";

export const LandingPage = () => {
  // handler for card view detail from landing page

  // pchum ben carousel
  const img = [
    "https://i.pinimg.com/originals/d4/3b/15/d43b154119cae525ddbef6bd359e71a4.jpg",
    "https://img.freepik.com/free-vector/instagram-carousel-templates_23-2148778411.jpg?w=996&t=st=1703347536~exp=1703348136~hmac=cc4ccd7b5d26bfb800bddd3ba51b9cded4664a43940bf6c913f84a18d28e66c1",
    "https://img.freepik.com/premium-vector/fashion-sale-banner-social-media-instagram-carousel-premium_180271-404.jpg?w=996",
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
              imageUrl={c.imageUrl}
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
              imageUrl={c.imageUrl}
              price={c.price}
              viewCount={c.viewCount}
            />
          );
        })}
      </div>
    </Layout>
  );
};
