export const Header = () => {
  return (
    <div className="fixed w-full h-16 bg-white flex justify-center">
      <div
        id="header"
        className="w-full md:w-4/5 lg:w-3/4 h-16 flex justify-between items-center bg-white border-b-2"
      >
        <a href="/" id="shopName" className="ml-2 md:text-md lg:text-lg">
          Dark
          <i className="text-blue-500 font-bold">Storm</i>
        </a>

        <div className="flex h-12 items-center justify-between gap-2">
          <div className="relative h-8">
            <svg
              className="hidden md:block top-1.5 absolute right-1"
              viewBox="0 0 1024 1024"
              fill="gray"
              height="1.3rem"
              width="1.3rem"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
            <input
              type="text"
              className="hidden sm:block w-56 h-full text-[13px] pl-2 border-sm border-2 rounded-md"
              placeholder="Search..."
            ></input>
          </div>
          <ul className="hidden ml-4 sm:flex justify-between gap-x-2 items-center text-[13px]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="/cart-checkout">Cart</a>
            </li>
            <li>Promotion</li>
            <li></li>
          </ul>
          <div
            id="notification"
            className="relative w-8 h-12 flex justify-end items-center mr-2"
          >
            <div className="w-4 h-4 bg-red-400 rounded-full text-[10px] text-center absolute top-1.5 text-red">
              {21}
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.3rem"
              width="1.3rem"
            >
              <path d="M15 19a3 3 0 01-6 0H4a1 1 0 010-2h1v-6a7 7 0 014.02-6.34 3 3 0 015.96 0A7 7 0 0119 11v6h1a1 1 0 010 2h-5zm-4 0a1 1 0 002 0h-2zm0-12.9A5 5 0 007 11v6h10v-6a5 5 0 00-4-4.9V5a1 1 0 00-2 0v1.1z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
