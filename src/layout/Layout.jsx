import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Banner from "../shared/Banner";
import Footer from "../shared/Footer";
import TopScroller from "../utils/TopScroller";
import SimpleFooter from "../shared/simpleFooter";

export default function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isLogin = location.pathname === "/login";
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <TopScroller />
        <Banner />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        {isDashboard || isLogin ? <SimpleFooter /> : <Footer />}
      </div>
    </>
  );
}
