import { Header } from "../Components/Header";
import { MobileNavigation } from "../Components/MobileNavigation";

export const Layout = ({ children }) => {
  return (
    <div className="relative flex-col justify-between flex items-center">
      <Header />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 w-full sm:w-11/12 md:w-5/6 mx-auto xl:w-3/4 mb-16 mt-20">
        {children}
      </div>
      <div
        id="mobilenav"
        className="h-14 bg-white w-full fixed bottom-0 flex border-t-2 items-center sm:hidden"
      >
        <MobileNavigation />
      </div>
    </div>
  );
};
