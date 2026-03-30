import { useEffect, useState } from "react";
import api from "../apis/axios";
import Stars from "./Stars";

export default function ProductCard({ cardsNum }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      {products.map((product, index) => (
        index <= cardsNum &&
        <div key={index}>
          <div className="flex flex-col items-start text-start justify-start gap-2 p-4 rounded-lg">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-fill aspect-[3/4] object-cover rounded-2xl object-top object-center"
            />
            <h3 className="mt-2">{product.name}</h3>
            <Stars rating={product.rating} />
            <p className="font-semibold ">$ {product.price_original}</p>
          </div>
        </div>
      ))}
    </>
  );
}
