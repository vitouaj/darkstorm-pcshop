import React, { useState } from "react";
import { CartCard } from "../Components/CartCard";
import { Layout } from "./Layout";
// import { carts } from "../assets/Data/Cart";

const carts = JSON.parse(localStorage.getItem("carts")) || [];

export const CheckoutPage = () => {
  const [showHistory, setShowHistory] = useState(false);

  function handleOpenHistory() {
    setShowHistory(!showHistory);
  }

  console.log(carts);

  const [cartItems, setCartItems] = useState(carts);

  function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  const totalPrice = calculateTotal(cartItems);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8 px-4 col-span-2 sm:col-span-3 lg:col-span-4">
        <div id="cart-container" className="flex flex-col flex-1">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {cartItems.map((item, index) => (
            <CartCard
              key={index}
              image={item.imageUrl}
              productName={item.productName}
              price={item.price}
              orderStatus={item.orderStatus}
              quantity={item.quantity}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(index, newQuantity)
              }
            />
          ))}
        </div>
        <div id="table-container" className="flex-1">
          <div className="bg-white shadow-md rounded-md p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b-2 h-10">
                  <th className="w-2/4">Product name</th>
                  <th className="w-1/4">Price</th>
                  <th className="w-1/4 text-center">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="h-10">
                    <td>{item.productName}</td>
                    <td className="text-blue-500">${item.price}</td>
                    <td className="text-center">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                        className="w-12 text-center text-blue-500 bg-gray-100 rounded-md"
                      />
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 h-10">
                  <td></td>
                  <td className="font-semibold">Total</td>
                  <td className="text-center text-blue-500 font-bold">
                    ${totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <button className="bg-green-400 text-white px-6 py-2 rounded-md shadow-md">
                Check out
              </button>
            </div>
          </div>
          <div
            id="history-btn"
            onClick={handleOpenHistory}
            className="h-8 w-full flex gap-2 justify-center items-center mt-4 cursor-pointer"
          >
            {!showHistory ? (
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
            ) : (
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z"
                />
              </svg>
            )}
          </div>
          <div id="order-history" className={showHistory ? "mt-4" : "hidden"}>
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b-2 h-10">
                  <th className="w-3/6">Product name</th>
                  <th className="w-2/6">Price</th>
                  <th className="w-1/6 text-center">Quantity</th>
                  <th className="w-1/6 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="h-10">
                    <td>{item.productName}</td>
                    <td className="text-blue-500">${item.price}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">
                      <span className="bg-yellow-500 px-2 text-xs">
                        {item.orderStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
