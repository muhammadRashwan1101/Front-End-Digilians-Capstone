import { useState, useEffect } from "react";
export default function GetToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`
        flex items-center justify-center fixed bottom-4 right-4 bg-gray-800 text-white p-3 w-[3rem] h-[3.2rem] rounded-[50%] shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer z-50 
        ${isVisible ? "" : "hidden"}`
        }
    >
      ↑
    </button>
  );
}
