export default function SimpleFooter() {
  return (
    <footer className="bg-[#0b0f11] text-white px-6 md:px-20 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">
            VisioCreate<span className="text-gray-500">.</span>
          </h2>

          <span className="text-sm text-gray-400 border-l border-gray-600 pl-4">
            Gift & Decoration Store
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex gap-6 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">Shop</span>
          <span className="hover:text-white cursor-pointer">Product</span>
          <span className="hover:text-white cursor-pointer">Blog</span>
          <span className="hover:text-white cursor-pointer">Contact Us</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 text-sm text-gray-400">
        <p>Copyright © 2023 VisioCreate. All rights reserved</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">Terms of Use</span>
        </div>
        <div className="flex gap-4">
          <div className="border border-gray-600 p-2 rounded-md hover:border-white cursor-pointer">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m5.44.5 3.777 4.994.37.49.405-.463L14.385.5h1.428l-5.296 6.054-.269.306.246.325 6.479 8.565h-4.296l-4.195-5.484-.37-.486-.403.46-4.822 5.51h-1.43l5.716-6.533.27-.308-.25-.325L1.012.5zM2.822 1.867l9.972 13.036.15.197h2.78l-.607-.801-9.86-13.037-.15-.199h-2.9z"
                fill="#000"
                stroke="white"
              />
            </svg>
          </div>
          <div className="border border-gray-600 p-2 rounded-md hover:border-white cursor-pointer">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.167.5c1.326 0 2.598.523 3.535 1.454a4.95 4.95 0 0 1 1.465 3.512v5.793h-3.334V5.466c0-.44-.175-.86-.488-1.17a1.673 1.673 0 0 0-2.357 0 1.65 1.65 0 0 0-.488 1.17v5.793H7.167V5.466c0-1.317.527-2.58 1.464-3.512A5.02 5.02 0 0 1 12.167.5M3.833.5H.5v9.931h3.333z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="border border-gray-600 p-2 rounded-md hover:border-white cursor-pointer">
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.937 10.486a19.8 19.8 0 0 1 0-8.276 1.65 1.65 0 0 1 1.166-1.158c4.47-.736 9.03-.736 13.5 0A1.67 1.67 0 0 1 16.77 2.21a19.8 19.8 0 0 1 0 8.276 1.65 1.65 0 0 1-1.167 1.159c-4.47.735-9.03.735-13.5 0a1.67 1.67 0 0 1-1.166-1.159"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m7.187 9.466 4.166-2.483L7.187 4.5z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
