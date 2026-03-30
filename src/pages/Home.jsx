import GetToTop from "../components/GetToTop";
import BestSeller from "../components/Sections/BestSeller";
import Collections from "../components/Sections/Collections";
import HeroSection from "../components/Sections/HeroSections";
import NewProducts from "../components/Sections/NewProducts";
import ShopCategories from "../components/Sections/shopCategories";
import TrendingBrands from "../components/Sections/TrendingBrands";

export default function Home() {
  return (
    <>
        <GetToTop />
        <HeroSection />
        <TrendingBrands />
        <NewProducts />
        <ShopCategories />
        <Collections />
        <BestSeller />
    </>
  )
}
