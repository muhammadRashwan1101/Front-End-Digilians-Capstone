import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../shared/Navbar";
import Banner from "../shared/Banner";
import Footer from "../shared/Footer";
import TopScroller from "../utils/TopScroller";
import SimpleFooter from "../shared/simpleFooter";
import { GridLoader } from "react-spinners";

export default function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isLogin = location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col">
      <TopScroller />
      {location.pathname === "/" && <Banner />}
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={
          <div className="loading flex flex-col items-center justify-center gap-3 mt-10">
            <h3 className="font-semibold text-2xl">VisioCreate</h3>
            <GridLoader 
              color="#8ea09e" 
              loading={true}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          
          }>
              <Outlet />
        </Suspense>
      </main>
      {isDashboard || isLogin ? <SimpleFooter /> : <Footer />}
    </div>
  );
}