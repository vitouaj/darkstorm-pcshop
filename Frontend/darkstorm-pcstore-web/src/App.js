import "./App.css";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import { MobileNavigation } from "./Components/MobileNavigation";
import { PCs as pc } from "./Data/Computer";

function App() {
  return (
    <div className="relative flex-col justify-between flex items-center">
      <Header />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 w-full sm:w-11/12 md:w-5/6 mx-auto xl:w-3/4 mb-16 mt-20">
        <span className="text-[15px] ml-2 font-bold col-span-2">
          Special Promotion
        </span>
        <div className="w-full h-52 sm:h-64 md:h-72 lg:h-80 col-span-2 sm:col-span-3 lg:col-span-4">
          <img
            className="object-cover w-full h-full rounded-lg shadow-lg"
            alt="promotions"
            src="https://i.pinimg.com/originals/d4/3b/15/d43b154119cae525ddbef6bd359e71a4.jpg"
          />
        </div>
        <span className="text-[15px] ml-2 font-bold col-span-2 sm:col-span-3 lg:col-span-4">
          Onsales
        </span>
        {pc.map((c, i) => {
          return (
            <Card
              key={i}
              productName={c.productName}
              imageUrl={c.imageUrl}
              price={c.price}
              viewCount={c.viewCount}
            />
          );
        })}
      </div>
      <div
        id="mobilenav"
        className="h-14 bg-white w-full fixed bottom-0 flex items-center sm:hidden"
      >
        <MobileNavigation />
      </div>
    </div>
  );
}

export default App;
