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
      <div className="mx-auto my-8 grid w-11/12 grid-cols-1 gap-4 lg:grid-cols-3">
        <Carousel />
        <EmbeddedMapCard />
      </div>
    </div>
  );
}
