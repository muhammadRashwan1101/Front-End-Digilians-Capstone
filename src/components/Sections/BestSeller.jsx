import ProductCard from "../ProductCard";

export default function BestSeller() {
  return (
    <>
      <div className="container flex flex-col mx-auto my-[4rem] items-center justify-center">
        <h3 className="text-3xl font-semibold mb-6">Best Seller</h3>
        <div className="grid grid-cols-4 gap-y-[2rem] justify-center">
          <ProductCard cardsNum={7} />
        </div>
      </div>
    </>
  );
}
