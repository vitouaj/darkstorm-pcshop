import React from "react";

export const Header = () => {
  return (
    <div className="fixed w-full h-16 bg-black shadow-md">
      <div className="w-full md:w-4/5 lg:w-3/4 h-16 flex justify-between items-center mx-auto">
        <a
          href="/"
          className="text-white text-lg md:text-xl lg:text-2xl font-bold"
        >
          Dark
          <span className="text-blue-500">Storm</span>
        </a>

        <div className="flex items-center gap-4">
          <div className="relative">
            <svg
              className="hidden md:block absolute top-1.5 right-1 fill-current text-gray-500"
              viewBox="0 0 24 24"
              height="1.3rem"
              width="1.3rem"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
            <input
              type="text"
              className="hidden md:block w-56 h-full text-sm pl-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          <ul className="hidden md:flex space-x-4 text-sm">
            <li>
              <a href="/" className="text-white hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="/cart-checkout"
                className="text-white hover:text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.3rem"
                  width="1.3rem"
                  className="text-white"
                >
                  <path d="M2 5h2l3.35 10.69a2 2 0 0 0 1.9 1.31H18a2 2 0 0 0 2-2 1 1 0 0 0-1-1H7.56L6.75 12l-.12-.38L4 6H2zm13 15a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4z" />
                </svg>
              </a>
            </li>
            <li className="text-white hover:text-blue-500">Promotion</li>
          </ul>

          <div className="relative">
            <div className="w-4 h-4 bg-red-400 rounded-full text-xs text-center absolute top-1.5 text-red-50">
              {1}
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.3rem"
              width="1.3rem"
              className="text-white cursor-pointer"
            >
              <path d="M15 19a3 3 0 01-6 0H4a1 1 0 010-2h1v-6a7 7 0 014.02-6.34 3 3 0 015.96 0A7 7 0 0119 11v6h1a1 1 0 010 2h-5zm-4 0a1 1 0 002 0h-2zm0-12.9A5 5 0 007 11v6h10v-6a5 5 0 00-4-4.9V5a1 1 0 00-2 0v1.1z" />
            </svg>
          </div>

          {/* Log in link */}
          <a
            href="/signin"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
