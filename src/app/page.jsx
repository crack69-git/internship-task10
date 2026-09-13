import Carousel from "@/Components/Shared/Homepage/GallerSection";
import HeroSection from "@/Components/Shared/Homepage/HeroSection";
import EmbeddedMapCard from "@/Components/Shared/Homepage/MapSection";
import MarqueeSection from "@/Components/Shared/Homepage/MarqueeSection";
import GovernmentServicesGrid from "@/Components/Shared/Homepage/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MarqueeSection />
      <HeroSection />
      <GovernmentServicesGrid />
      <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto my-8">
        <Carousel />
        <EmbeddedMapCard />
      </div>
    </div>
  );
}
