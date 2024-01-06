import { Carousel as FlowbiteCarousel } from "flowbite-react";

export const Carousel = ({ images }) => {
  console.log("images are", images)
  return (
    <div className="w-full h-52 sm:h-64 md:h-72 lg:h-80">
      <FlowbiteCarousel>
        {images.map((p, i) => {
          return <img key={i} src={p} alt="..." />;
        })}
      </FlowbiteCarousel>
    </div>
  );
};
