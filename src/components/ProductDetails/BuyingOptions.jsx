import { useState } from "react";

export default function BuyingOptions() {
  const [spanText, setSpanText] = useState(1);
  return (
    <div className="flex flex-col w-full rounded-lg overflow-hidden">
      <div className="flex w-full items-center my-3 gap-5">
        <div className="flex justify-start items-center my-3 gap-5 bg-slate-300/60 w-fit py-3 px-3 rounded-lg">
          <button
            disabled={spanText === 1}
            onClick={() => setSpanText(spanText - 1)}
            className="cursor-pointer hover:bg-slate-300/80 px-3 py-1 rounded-lg transition duration-300 ease-in-out"
          >
            -
          </button>
          <span id="quantity">{spanText}</span>
          <button
            onClick={() => setSpanText(spanText + 1)}
            className="cursor-pointer hover:bg-slate-300/80 px-3 py-1 rounded-lg transition duration-300 ease-in-out"
          >
            +
          </button>
        </div>
        <button className="border flex justify-center items-center gap-5 border-red-500 hover:border-red-600 hover:bg-red-600 hover:text-white cursor-pointer text-red-500 py-3.5 w-full rounded-lg transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          Wishlist
        </button>
      </div>
      <button className="border flex justify-center items-center gap-5 border-gray-500 hover:border-black hover:bg-black hover:text-white cursor-pointer text-black py-3.5 px-22 rounded-lg transition duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        Add to Cart
      </button>
      <div></div>
    </div>
  );
}
