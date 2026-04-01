import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../shared/Navbar";
import Banner from "../shared/Banner";
import Footer from "../shared/Footer";
import TopScroller from "../utils/TopScroller";
import SimpleFooter from "../shared/simpleFooter";
import Loader from "../components/Loader";

export default function Layout() {
  const location = useLocation();


  return (
    <div className="min-h-screen flex flex-col">
      <TopScroller />
      {location.pathname === "/" && <Banner />}
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {location.pathname !== "/" ? <SimpleFooter /> : <Footer />}
    </div>
  );
}
