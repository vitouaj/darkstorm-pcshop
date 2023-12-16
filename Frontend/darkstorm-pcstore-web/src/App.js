import "./App.css";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import { MobileNavigation } from "./Components/MobileNavigation";
import { PCs as pc } from "./Data/Computer";

function App() {
  return (
    <div className="relative flex-col flex items-center">
      <Header />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:w-3/4 mx-auto mb-16 mt-20">
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
        className="h-14 bg-white w-full fixed bottom-0 flex items-center"
      >
        <MobileNavigation />
      </div>
    </div>
  );
}

export default App;
