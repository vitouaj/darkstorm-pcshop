import { CartCard } from "../Components/CartCard";
import { Layout } from "./Layout";
import { carts } from "../Data/Cart";
import { useState } from "react";

export const CheckoutPage = () => {
  function calculateTotal(carts) {
    var total = 0;
    carts.forEach((c) => {
      var totalPriceForOneItem = c.price * c.quantity;
      total += totalPriceForOneItem;
    });
    return total;
  }

  var totalPrice = calculateTotal(carts);

  const [showHistory, setShowHistory] = useState(false);
  function handleOpenHistory() {
    setShowHistory(!showHistory);
  }

  return (
    <Layout>
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-x-8 px-2 col-span-2 sm:col-span-3 lg:col-span-4">
        <div id="cart-container">
          <span className="text-[15px] font-bold">Recent</span>
          <div className="flex flex-col gap-2">
            {carts.map((c, i) => {
              return (
                <CartCard
                  image={c.imageUrl}
                  productName={c.productName}
                  price={c.price}
                  orderStatus={c.orderStatus}
                  quantity={c.quantity}
                />
              );
            })}
          </div>
        </div>
        <br className="lg:hidden"></br>
        <div
          id="table-container"
          className="flex flex-col gap-y-10 shadow-md pb-6"
        >
          <table class="table-fixed text-[12px]">
            <thead>
              <tr className="text-left border-b-2 h-10">
                <th className="w-4/6 ">Product name</th>
                <th className="w-1/6">Price</th>
                <th className="w-1/6 text-center">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((c, i) => {
                return (
                  <tr className="h-10">
                    <td>{c.productName}</td>
                    <td className="text-blue-500">{c.price}$</td>
                    <td className="text-center">{c.quantity}</td>
                  </tr>
                );
              })}
              <br></br>
              <tr className="border-t-2 h-10">
                <td></td>
                <td className="">Total</td>
                <td className="text-center text-blue-500 font-bold">
                  {totalPrice}$
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end w-full">
            <button className="bg-green-400 text-[12px] h-8 w-20 rounded-sm shadow-md">
              Check out
            </button>
          </div>
          <div
            id="history-btn"
            onClick={handleOpenHistory}
            className="h-8 w-full flex gap-2 justify-center items-center"
          >
            {!showHistory ? (
              <svg fill="gray" viewBox="0 0 16 16" height="1em" width="1em">
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
            ) : (
              <svg fill="gray" viewBox="0 0 16 16" height="1em" width="1em">
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z"
                />
              </svg>
            )}
          </div>
          <div
            id="order-history"
            className={showHistory ? "w-full}" : "hidden"}
          >
            <table
              id="order-history-table"
              className="table-fixed w-full text-[12px]"
            >
              <thead>
                <tr className="text-left border-b-2 h-10">
                  <th className="w-6/12 ">Product name</th>
                  <th className="w-2/12">Price</th>
                  <th className="w-2/12 text-center">Quantity</th>
                  <th className="w-2/12 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((c, i) => {
                  return (
                    <tr className="h-10">
                      <td>{c.productName}</td>
                      <td className="text-blue-500">{c.price}$</td>
                      <td className="text-center">{c.quantity}</td>
                      <td className="text-center">
                        <span className="bg-yellow-500 px-[2px] text-[9px]">
                          {c.orderStatus}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
