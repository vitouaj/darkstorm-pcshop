import { Carousel } from "../Components/Carousel";
import { Layout } from "./Layout";
import { PCs as pc } from "../assets/Data/Computer";
import { Card } from "../Components/Card";
import { useEffect, useState } from "react";
import { CheckoutPage } from "./CheckoutPage";
import { carts } from "../assets/Data/Cart";

export const DetailPage = () => {
  let firstComputer = {
    productId: "",
    productName: "",
    price: 0,
    viewCount: 0,
    spec: {
      cpu: "",
      gpu: "",
      ram: "",
      storage: "",
      display: "",
      battery: "",
      brightness: "",
      port: "",
      weight: "",
    },
    imageUrl: [],
  };
  const [computer, setDisplayData] = useState(firstComputer);
  const [showCartPage, setShowCartPage] = useState(false);

  // function handleShowCartPage() {
  //   console.log("show handle click activate ", computer);
  //   setShowCartPage(!showCartPage);
  // }

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let queryId = params.productId;
    var newDisplayData = pc.find((p) => p.productId === queryId);
    setDisplayData({ ...newDisplayData });
  }, []);

  function addProductToCarts(product) {
    console.log("Before adding:", carts);
    const storedCarts = JSON.parse(localStorage.getItem("carts")) || [];

    const newProductToCart = {
      productId: product.productId,
      productName: product.productName,
      price: product.price,
      orderStatus: "Ordering",
      quantity: 1,
      imageUrl: product.imageUrl[0],
    };

    // Update the data
    const updatedCarts = [...storedCarts, newProductToCart];

    // Save the updated data to localStorage
    localStorage.setItem("carts", JSON.stringify(updatedCarts));

    console.log("Product added to cart", product);

    console.log("new product: ", newProductToCart);
    console.log("product pushed to cart", carts);
  }

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-4 my-8">
          <div>
            <Carousel images={computer.imageUrl} />
          </div>
          <div>
            <table className="table-auto rounded-lg w-full">
              <thead className="text-[15px]">
                <tr className="h-10 text-left">
                  <th className="w-2/3">Specification</th>
                  <th className="w-1/3">
                    <div
                      className="w-full h-full flex justify-center items-center bg-green-500 border-green-500 border-2 rounded-sm text-sm text-white py-2"
                      onClick={() => addProductToCarts(computer)}
                    >
                      <span className="text-[12px] font-light">
                        Add to Cart
                      </span>
                      <svg
                        className="ml-2"
                        fill="white"
                        viewBox="0 0 16 16"
                        height="1.3rem"
                        width="1.3rem"
                      >
                        <path d="M9 5.5a.5.5 0 00-1 0V7H6.5a.5.5 0 000 1H8v1.5a.5.5 0 001 0V8h1.5a.5.5 0 000-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </div>
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
                  <td className="text-blue-500">${computer.price}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>View Count</td>
                  <td>{computer.viewCount}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>CPU</td>
                  <td>{computer.spec.cpu}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>GPU</td>
                  <td>{computer.spec.gpu}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>Memory</td>
                  <td>{computer.spec.ram}</td>
                </tr>

                <tr className="h-10 border-b-2">
                  <td>Storage</td>
                  <td>{computer.spec.storage}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>Display</td>
                  <td>{computer.spec.display}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>Battery</td>
                  <td>{computer.spec.battery}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>Brightness</td>
                  <td>{computer.spec.brightness}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>Port</td>
                  <td>{computer.spec.port}</td>
                </tr>
                <tr className="h-10 border-b-2">
                  <td>Weight</td>
                  <td>{computer.spec.weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mx-4">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pc.map((c, i) => (
              <Card
                key={i}
                productId={c.productId}
                productName={c.productName}
                imageUrl={c.imageUrl[0]}
                price={c.price}
                viewCount={c.viewCount}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
