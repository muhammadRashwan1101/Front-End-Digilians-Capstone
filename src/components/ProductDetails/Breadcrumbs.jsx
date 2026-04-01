import { useNavigate } from "react-router-dom";
export default function Breadcrumbs({ productName }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium mt-4">
        <button
          className="cursor-pointer hover:text-gray-700"
          type="button"
          aria-label="Home"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
            fill="#CBD5E1"
          />
        </svg>
        <a href="#" className="hover:text-gray-700">
          Shop
        </a>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
            fill="#CBD5E1"
          />
        </svg>
        <a href="#" className="hover:text-gray-700">
          Products
        </a>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
            fill="#CBD5E1"
          />
        </svg>
        <a href="#" className="text-lime-700">
          {productName}
        </a>
      </div>
    </>
  );
}
