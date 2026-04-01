import ImageTranstion from "../../utils/ImageTransition";

export default function ProductImage({ product, selectedImage }) {
  return (
    <>
      <div className="flex flex-col w-full rounded-lg overflow-hidden p-10">
        <div className="w-full">
          <ImageTranstion
            src={selectedImage || product.thumbnail}
            className="w-full aspect-3/4 object-cover rounded-2xl object-top object-center "
            selectedImage={selectedImage}
            key={selectedImage || product.thumbnail}
          />
        </div>
      </div>
    </>
  );
}
