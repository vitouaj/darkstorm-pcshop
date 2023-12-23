import { Card as FlowbiteCard } from "flowbite-react";

const Card = ({ productId, productName, price, viewCount, imageUrl }) => {
  return (
    <a
      href={`/detail?productId=${productId}`}
      className="min-w-[10rem] lg:min-w-[13rem] flex flex-col justify-between h-auto rounded-t-md shadow-md cursor-pointer mx-auto hover:shadow-xl"
    >
      <img
        className="w-full object-cover rounded-t-md"
        alt="pc"
        src={imageUrl}
      />
      <div className="w-full px-1 pb-4">
        <div className="w-11/12 flex flex-col justify-between mx-auto">
          <p className="text-left text-[13px] ">{productName}</p>
          <div className="flex justify-between">
            <div className="mb-5 mt-2.5 flex items-center w-full">
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-3 flex gap-x-1 justify-center items-center mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                <svg
                  viewBox="0 0 576 512"
                  fill="green"
                  height="0.8em"
                  width="0.8em"
                >
                  <path d="M160 256c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128-128-57.3-128-128zm128 80c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2.9c2.2 5.1 2.9 10.5 2.9 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2.9v2c0 45.1 35.8 80.9 80 80.9zM95.42 112.6C142.5 68.84 207.2 32 288 32c80.8 0 145.5 36.84 192.6 80.6 46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-14.8 35.7-46.1 86.8-92.9 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.58-80.6C48.62 355.1 17.34 304 2.461 268.3a31.967 31.967 0 010-24.6C17.34 207.1 48.62 156 95.42 112.6zM288 80c-65.2 0-118.8 29.6-159.9 67.7-38.5 35.8-65.08 77.4-78.66 108.3 13.58 30 40.16 72.5 78.66 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7c38.5-35.8 64.2-78.3 78.7-108.3-14.5-30.9-40.2-72.5-78.7-108.3C406.8 109.6 353.2 80 288 80z" />
                </svg>
                {viewCount}
              </span>
            </div>
          </div>
          <span className="text-md font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </a>
  );
};

export { Card };
