import React from "react";

export const CartCard = ({
  image,
  productName,
  orderStatus,
  price,
  quantity,
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md mb-4 rounded-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-20 h-20 object-cover rounded"
          alt="product"
          src={image}
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{productName}</span>
          <div className="bg-yellow-200 text-sm text-center w-20 rounded-sm">
            {orderStatus}
          </div>
          <span className="text-blue-500 text-sm">${price}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 focus:outline-none">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M20 12H4"></path>
            </svg>
          </button>
          <span className="text-gray-700">{quantity}</span>
          <button className="text-gray-500 focus:outline-none">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M20 12H4"></path>
              <path d="M12 4L12 20"></path>
            </svg>
          </button>
        </div>
        <button className="text-red-500 focus:outline-none">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
