"use client";

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CategoryContext from "../context/categoryContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const {categories} = useContext(CategoryContext);
  return (
    <header className="bg-black sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3.5 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h2 className="text-white text-3xl">VisioCreate</h2>
          </Link>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white cursor-pointer">
              Products
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-black/95 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {categories[0]?.subcategories?.map((subcategory, index) => (
                  index <= 7 &&
                  <div
                    key={subcategory.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex-auto">
                      <a
                        href={subcategory.href}
                        className="block font-semibold text-white"
                      >
                        {subcategory.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{subcategory.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-white">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {token ? (
            <div className="flex gap-2">
              <Link
                to="dashboard"
                className="text-sm/6 font-semibold text-white inline-flex items-center"
              >
                <img
                  src={"https://i.pravatar.cc/30?img=38"}
                  alt="user profile"
                  className="w-full rounded-full object-fill"
                />
              </Link>
              <Link
                to=""
                className="flex-none rounded-full px-3.5 py-1 text-sm font-semibold text-white shadow-xs inset-ring-white/20 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-bottom-2 border-transparent hover:border-white/30"
                onClick={logout}
              >
                Logout <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ) : (
            <Link to="login" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
