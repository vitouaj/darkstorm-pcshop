const Card = ({ productName, price, viewCount, imageUrl }) => {
  return (
    <div className="w-[10rem] md:w-[11rem] xl:w-[15rem] flex flex-col justify-between h-auto rounded-t-md shadow-lg cursor-pointer mx-auto hover:shadow-xl">
      <img
        className="w-full object-cover rounded-t-md"
        alt="pc"
        src={imageUrl}
      />
      <div className="w-full px-1 pb-4">
        <div className="w-11/12 flex flex-col justify-between gap-2 mx-auto">
          <p className="text-left text-[13px] ">{productName}</p>
          <div className="flex justify-between">
            <div className="w-[2rem] flex justify-between items-center">
              <svg
                viewBox="0 0 576 512"
                fill="gray"
                height="0.8em"
                width="0.8em"
              >
                <path d="M160 256c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128-128-57.3-128-128zm128 80c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2.9c2.2 5.1 2.9 10.5 2.9 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2.9v2c0 45.1 35.8 80.9 80 80.9zM95.42 112.6C142.5 68.84 207.2 32 288 32c80.8 0 145.5 36.84 192.6 80.6 46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-14.8 35.7-46.1 86.8-92.9 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.58-80.6C48.62 355.1 17.34 304 2.461 268.3a31.967 31.967 0 010-24.6C17.34 207.1 48.62 156 95.42 112.6zM288 80c-65.2 0-118.8 29.6-159.9 67.7-38.5 35.8-65.08 77.4-78.66 108.3 13.58 30 40.16 72.5 78.66 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7c38.5-35.8 64.2-78.3 78.7-108.3-14.5-30.9-40.2-72.5-78.7-108.3C406.8 109.6 353.2 80 288 80z" />
              </svg>
              <span className="text-[10px] text-gray-500">{viewCount}</span>
            </div>

            <p className="text-[11px] text-right">
              <span className="text-blue-500">{price}</span>{" "}
              <span className="text-gray-500">$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
