import HeroSlider from "@/components/sections/HeroSlider";
import Section2HomeIntro from "@/components/sections/Section2HomeIntro";
import Section3HomeScale from "@/components/sections/Section3HomeScale";
import Section4HomeCategories from "@/components/sections/Section4HomeCategories";
import Footer from "@/components/layout/Footer";
import Section5HomeContact from "@/components/sections/Section5HomeContact";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <HeroSlider />
      <Section2HomeIntro />
      
      <Section3HomeScale />

      <Section4HomeCategories />

      <Section5HomeContact />

      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
