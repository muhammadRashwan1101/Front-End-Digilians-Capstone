import ProductCard from "../ProductCard";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
export default function BestSeller() {
  const {products} = useContext(ProductContext);
  return (
    <>
      <div className="container flex flex-col mx-auto my-[4rem] items-center justify-center">
        <h3 className="text-3xl font-semibold mb-6">Best Seller</h3>
        <div className="grid grid-cols-4 gap-y-[2rem] justify-center">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
