export const CartCard = ({
  image,
  productName,
  orderStatus,
  price,
  quantity,
}) => {
  return (
    <div className="flex h-20 w-full sm:gap-x-6 lg:-gap-x-10 shadow-md pb-2 md:h-32">
      <img className="w-1/4 object-cover" alt="prod" src={image} />
      <div className="relative w-3/4 flex justify-center items-center gap-x-8">
        <div className="absolute left-2 flex flex-col gap-1.5">
          <span className="text-[13px] whitespace-nowrap">{productName}</span>
          <div className="bg-yellow-200 text-[10px] text-center w-14 rounded-sm">
            {orderStatus}
          </div>
          <span className="text-blue-500 text-[12px]">{price}$</span>
        </div>
        <div className="absolute right-1 flex justify-center gap-x-2 items-center">
          <svg
            viewBox="0 0 1024 1024"
            fill="gray"
            height="1.3rem"
            width="1.3rem"
          >
            <path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
          <input
            className="w-12 text-center text-blue-500"
            type="number"
            value={quantity}
            readOnly="true"
          />
          <svg
            viewBox="0 0 1024 1024"
            fill="gray"
            height="1.3rem"
            width="1.3rem"
          >
            <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
