import InnerHTML from "dangerously-set-html-content";

const navigations = [
  {
    label: "Home",
    svg: `<svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.3rem"
            width="1.3rem"
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
          </svg>
          `,
    notification: 4,
  },
  {
    label: "Search",
    svg: `<svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="1.3rem"
    width="1.3rem"
  >
    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
  </svg>`,
    notification: 4,
  },
  {
    label: "Cart",
    svg: `<svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1.3rem"
    width="1.3rem"
    >
        <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
    </svg>`,
    notification: 5,
  },
  {
    label: "Profile",
    svg: ` <svg fill="none" viewBox="0 0 24 24" height="1.3rem" width="1.3rem" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
      clipRule="evenodd"
    />
  </svg>`,
    notification: 0,
  },
];

const MobileNavigation = () => {
  return (
    <div className="w-full h-full flex justify-between bg-white mx-3 md:hidden">
      {navigations.map((n, i) => {
        return (
          <div
            key={i}
            id="btn"
            className="relative flex flex-col justify-center items-center"
          >
            {n.notification !== 0 && (
              <div className="w-4 h-4 bg-red-400 rounded-full text-[10px] text-center absolute top-0.5 right-0 text-red">
                {n.notification}
              </div>
            )}
            <InnerHTML html={n.svg} />
            <span className="text-[10px]">{n.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export { MobileNavigation };
