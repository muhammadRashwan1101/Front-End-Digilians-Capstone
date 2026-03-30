import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Stars  from "../Stars";
import api from "../../apis/axios";

export default function NewProducts() {
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-start text-start justify-start gap-2 p-4 rounded-lg h-120">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-80 h-80 object-cover rounded-2xl object-top object-center"
                  />
                  <h3 className="mt-2">{product.name}</h3>
                  <Stars rating={product.rating} />
                  <p className="font-semibold ">$ {product.price_original}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
