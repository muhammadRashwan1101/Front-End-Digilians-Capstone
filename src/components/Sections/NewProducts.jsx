import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext } from "react";
import ProductCard from "../ProductCard";
import { ProductContext } from "../../context/productContext";

export default function NewProducts() {
  const {products} = useContext(ProductContext)

  return (
    <>
      <div className="py-3.5 mx-auto container">
        <h2 className="font-semibold text-3xl mb-3 ms-5">Just In</h2>
        <div className="custom-pagination"></div>
        <div className="carousel-wrapper relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 5,
            }}
            loop={false}
            slidesPerGroup={5}
            spaceBetween={20}
            slidesPerView={5}
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
