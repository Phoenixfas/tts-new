import Image from "next/image";
import Bg from "./Bg";
import HeroContent from "./HeroContent";
import VideoSection from "./VideoSection";
import CardsSection from "./CardsSection";
import MovingText from "./MovingText";
import Media from "./Media";
import Sponsors from "./Sponsors";
import Blogs from "./Blogs";
import TargetSectors from "./TargetSectors";
import ParticlesBg from "@/components/ParticlesBg";
import Speakers from "./Speakers";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] relative">
      <Bg />
      <ParticlesBg color="#78e0f4" amount={100} />
      <HeroContent />
      <VideoSection />
      <CardsSection />
      <MovingText />
      <Media />
      <Speakers />
      <TargetSectors />
      <Sponsors />
      <Blogs />
    </div>
  );
}
