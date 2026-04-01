import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/ProductDetails/Breadcrumbs";
import { ProductContext } from "../context/productContext";
import ProductImage from "../components/ProductDetails/ProductImage";
import ProductDescription from "../components/ProductDetails/ProductDecription";
import BuyingOptions from "../components/ProductDetails/BuyingOptions";
import CategoryContext from "../context/categoryContext";
import { GridLoader } from "react-spinners";
export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { products } = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);
  const location = useLocation();
  const productId = location.pathname.split("/").pop();
  const product = products.find((p) => p._id === productId);
  const displayImage = selectedImage || product?.thumbnail;
  categories.length === 0
    ? console.log(categories)
    : console.log("No categories available");
  return (
    <>
      {product ? (
        <div className="container col-span-1 mx-auto flex flex-col justify-center space-x-2 py-12 gap-5">
          <Breadcrumbs productName={product.name} />
          <div className="container grid grid-cols-2 gap-10 mx-auto">
            <ProductImage product={product} selectedImage={displayImage} />
            <div className="container col-span-1 flex flex-col justify-start space-x-2 py-10 gap-5 max-w-fit">
              <ProductDescription product={product} />
              <div className="flex gap-2 overflow-hidden rounded-lg w-full">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.short_description} image`}
                    className="w-32 aspect-[3/4] object-cover rounded-lg cursor-pointer hover:opacity-90 transition duration-300 ease-in-out hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
              <BuyingOptions product={product} />
              <div className="flex flex-col gap-3 mt-3 text-gray-500 text-sm">
                <p>SKU: {product.sku}</p>
                <p>
                  Category:{" "}
                  {categories?.find((c) => c.id === product.category_id)?.name},{" "}
                  {
                    categories
                      ?.find((c) => c.id === product.category_id)
                      ?.subcategories?.find((s) => s.id === "sub-005")?.name
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen gap-2 mx-auto">
          <p className="">Loading...</p>
        </div>
      )}
    </>
  );
}
