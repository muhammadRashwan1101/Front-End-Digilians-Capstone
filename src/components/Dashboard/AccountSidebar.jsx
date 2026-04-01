import { NavLink, } from "react-router-dom";

export default function AccountSidebar() {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-2 items-center bg-gray-300/30 rounded-xl">
        <div className="flex flex-col gap-3 mx-auto p-10 pb-0 px-20">
          <img
            src={`https://i.pravatar.cc/100?img=38`}
            className="w-full rounded-full object-fill"
            alt="avatar picture"
          />
          <h3 className="text-2xl font-medium">Sara Smith</h3>
        </div>
        <ul className="flex flex-col gap-5 justify-start items-start w-[80%] py-5">
          <li key="account">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? "border-b-2 border-gray-400 pb-2 w-full" : "text-gray-500 hover:text-gray-700"
              }
            >
              Account
            </NavLink>
          </li>
          <li key="addresses">
            <NavLink
              to="/dashboard/addresses"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-gray-400 pb-2" : "text-gray-500 hover:text-gray-700"
              }
            >
              Addresses
            </NavLink>
          </li>
          <li key="orders">
            <NavLink
              to="/dashboard/orders"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-gray-400 pb-2" : "text-gray-500 hover:text-gray-700"
              }
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
