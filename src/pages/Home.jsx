import GetToTop from "../components/GetToTop";
import BestSeller from "../components/Sections/BestSeller";
import Collections from "../components/Sections/Collections";
import HeroSection from "../components/Sections/HeroSections";
import NewProducts from "../components/Sections/NewProducts";
import ShopCategories from "../components/Sections/shopCategories";
import TrendingBrands from "../components/Sections/TrendingBrands";
import PageTransition from "../utils/PageTransition";
import ScrollReveal from "../utils/scrollReveal";

export default function Home() {
  return (
    <>
      <PageTransition>
        <GetToTop />
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
          <TrendingBrands />
        <ScrollReveal>
          <NewProducts />
        </ScrollReveal>
        <ScrollReveal>
          <ShopCategories />
        </ScrollReveal>
        <ScrollReveal>
          <Collections />
        </ScrollReveal>
        <ScrollReveal>
          <BestSeller />
        </ScrollReveal>
      </PageTransition>
    </>
  );
}
