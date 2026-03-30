import { Outlet } from "react-router-dom";
import AccountSidebar from "../components/Dashboard/AccountSidebar";

export default function Dashboard() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-3 justify-center items-center my-10">
        <h2 className="text-5xl font-medium">My account</h2>
        <div className="grid grid-cols-8 gap-20 my-10">
            <AccountSidebar />
            <Outlet />
        </div>
      </div>
    </>
  );
}
