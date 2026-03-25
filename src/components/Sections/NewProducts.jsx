import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="py-3.5 mx-auto container">
        <h2 className="font-semibold text-3xl mb-3">Just In</h2>
        <div className="custom-pagination"></div>
        <div className="carousel-wrapper relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
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
                <div className="flex flex-col items-start text-start justify-center gap-2 bg-gray-300 p-4 rounded-lg h-110">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-70 h-70 object-contain"
                  />
                  <h3>{product.title}</h3>
                  <p className="font-semibold ">${product.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
