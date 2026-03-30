import { useEffect, useState, useRef } from "react";
import api from "../../apis/axios";

export default function ShopCategories() {
  const [categories, setCategories] = useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;

    fetched.current = true;
    const getProducts = async () => {
      try {
        const response = await api.get("categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col py-3.5 container mx-auto justify-center my-10 items-center gap-8">
        <h3 className="text-3xl font-semibold mb-4">Shop By Categories</h3>
        <ul className="flex flex-row gap-x-3 ">
          {categories[0]?.subcategories?.map(
            (c, index) => (
              index <= 7 && 
                <li
                  key={index}
                  className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition duration-300 ease-in-out cursor-pointer"
                >
                  <img
                    src={c.image_url}
                    alt={c.name}
                    className="w-40 h-40 object-cover rounded-[50%]"
                  />
                  {c.name}
                </li>
            ),
          )}
        </ul>
      </div>
    </>
  );
}
