import { Carousel } from "../Components/Carousel";
import { Layout } from "./Layout";
import { PCs as pc } from "../Data/Computer";
import { Card } from "../Components/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DetailPage = () => {
  const navigator = useNavigate();
  let firstComputer = {
    productId: "",
    productName: "",
    price: 0,
    viewCount: 0,
    imageUrl: "",
  };
  const [computer, setDisplayData] = useState(firstComputer);

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let queryId = params.productId;
    var newDisplayData = pc.find((p) => p.productId === queryId);
    setDisplayData({ ...newDisplayData });
  }, []);

  function viewDetailFromDetail(cardId) {
    navigator(`/detail?productId=${cardId}`);
    var newDisplayData = pc.find((p) => p.productId === cardId);
    setDisplayData({ ...newDisplayData });
  }

  return (
    <Layout>
      <Carousel image={computer.imageUrl} />
      <table className="table-auto rounded-lg mx-3 col-span-2 sm:col-span-3 lg:col-span-4">
        <thead className="text-[15px]">
          <tr className="h-10 text-left">
            <th>Specification</th>
            <th className="flex justify-end items-center h-full w-full">
              <button
                onClick={() => console.log(computer)}
                className="w-8/12 h-10 relative flex justify-center gap-x-2 items-center bg-green-500 border-green-500 border-2 rounded-sm text-sm"
              >
                <span className="text-white font-light">Add to cart</span>
                <svg
                  className=""
                  fill="white"
                  viewBox="0 0 16 16"
                  height="1.3rem"
                  width="1.3rem"
                >
                  <path d="M9 5.5a.5.5 0 00-1 0V7H6.5a.5.5 0 000 1H8v1.5a.5.5 0 001 0V8h1.5a.5.5 0 000-1H9V5.5z" />
                  <path d="M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="text-[13px]">
          <tr className="h-10 border-b-2">
            <td>Brand</td>
            <td>{computer.productName}</td>
          </tr>
          <tr className="h-10 border-b-2">
            <td>Price</td>
            <td className="text-blue-500">{computer.price} $</td>
          </tr>
          <tr className="h-10 border-b-2">
            <td>viewCount</td>
            <td>{computer.viewCount}</td>
          </tr>
        </tbody>
      </table>
      <span className="text-[15px] mx-3 font-bold col-span-2 sm:col-span-3 lg:col-span-4">
        Related Products
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
            onClickHandler={viewDetailFromDetail}
          />
        );
      })}
    </Layout>
  );
};
