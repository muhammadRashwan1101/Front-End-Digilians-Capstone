import Stars from "../Stars";

export default function ProductDescription({ product }) {
    console.log(product);
  return (
    <>
      <div className="flex flex-col w-full rounded-lg overflow-hidden max-w-125">
        <div className="flex jusitfy-center items-center my-3">
          <Stars rating={product.rating} />
          <span className="text-gray-500 ml-3 mt-0.5">
            {product.review_count} ratings
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2 max-w-125">{product.description}</p>
        <p className="text-gray-800 mt-4 font-semibold text-lg">
          {product.is_on_sale
            ? `$${product.price_sale}`
            : `$${product.price_original.toFixed(2)}`}
          {product.is_on_sale && (
            <span className="text-gray-500 line-through ml-2">
              ${product.price_original.toFixed(2)}
            </span>
          )}
        </p>
        {product.sizes && (
          <div className="mt-4">
            <h3 className="text-gray-800 font-semibold mb-2">
              Available Sizes:
            </h3>
            <div className="flex space-x-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border border-gray-500 rounded-lg cursor-pointer text-gray-500 text-sm font-semibold hover:scale-105 hover:bg-black/90 hover:border-white hover:text-white transition duration-300 ease-in-out"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
        {product.tags && (
          <div className="mt-4 ">
            <h3 className="mx-1 font-semibold">Tags:</h3>
            <div className="ms-1 flex mt-4 space-x-5 w-fit rounded-lg">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`pe-5 py-2 capitalize ${index === product.tags.length - 1 ? "border-e-0" : "border-e border-gray-500"}  text-black text-sm font-semibold transition duration-300 ease-in-out`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {product.in_stock > 0 ? (
          <p className="text-green-600 mt-4 mx-1 font-semibold">
            In Stock
            <span></span>
          </p>
        ) : (
          <p className="text-red-600 mt-4 mx-1 font-semibold">Out of Stock</p>
        )}
      </div>
    </>
  );
}
