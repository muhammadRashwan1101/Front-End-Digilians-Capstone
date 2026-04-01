import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

import Stars from "./Stars";
import { memo } from "react";
export default memo(function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        key={product._id}
        className="group flex relative flex-col items-start text-start justify-start gap-2 p-4 rounded-lg cursor-pointer hover:opacity-90 transition duration-300 ease-in-out hover:scale-105"
      >
        <div className="relative w-full overflow-hidden rounded-2xl">
          {product.is_on_sale && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount_percent}%
            </span>
          )}
          <img
            src={product.thumbnail}
            alt={product.name}
            loading="lazy"
            className="w-full aspect-3/4 object-cover rounded-2xl object-top object-center"
            onClick={() => navigate(`/productDetails/${product._id}`)}
          />
          <div className="absolute top-4 right-4 mt-2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <button className=" bg-white inset-0 p-3 rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer">
              <HeartIcon className="w-5 h-5" />
            </button>
            <button className=" bg-white p-3 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
              <ShoppingCartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <h3 className="mt-2">{product.name}</h3>
        <Stars rating={product.rating} />
        <p className="font-semibold">$ {product.price_original}</p>
      </div>
    </>
  );
});
