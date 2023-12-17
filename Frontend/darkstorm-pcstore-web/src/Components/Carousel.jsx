export const Carousel = ({ image }) => {
  return (
    <div className="w-full h-52 sm:h-64 md:h-72 lg:h-80 col-span-2 sm:col-span-3 lg:col-span-4">
      <img
        className="object-cover w-full h-full rounded-lg shadow-lg"
        alt="promotions"
        src={image}
      />
    </div>
  );
};
