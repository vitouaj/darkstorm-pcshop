import { Header } from "../Components/Header";
import { MobileNavigation } from "../Components/MobileNavigation";

export const Layout = ({ children }) => {
  const address = "Sangkat Phnom Penh Tmey, Khan Sen Sok, Phnom Penh";
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
      <div className="w-full sm:w-3/4 h-72 bg-white flex justify-center mb-20">
        <div className="flex flex-col justify-between mx-3 w-full gap-y-3 mt-4">
          <div className="flex flex-col gap-y-3">
            <span className="text-[15px] font-bold">Follow us</span>
            <div className="flex gap-x-2">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.1rem"
                width="1.1rem"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
              </svg>
              <span className="text-[12px]">darkstormpc</span>
            </div>
            <div className="flex gap-x-2">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1rem"
                width="1rem"
              >
                <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 01-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 00-.013-.315.337.337 0 00-.114-.217.526.526 0 00-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
              <span className="text-[12px]">darkstormpc</span>
            </div>
            <a href="/" className="text-[12px]">
              087 809 783
            </a>
            <span className="text-[15px] font-bold">Location</span>
            <span className="text-[12px]">{address}</span>
          </div>
          <div className="flex-col flex gap-2">
            <span className="text-[12px] text-center">
              {new Date().getFullYear()} All right reserved
            </span>
            <a href="/" id="shopName" className="ml-2 text-[12px] text-center">
              Dark
              <i className="text-blue-500 font-bold">Storm</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
