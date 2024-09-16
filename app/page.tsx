import Image from "next/image";
import Bg from "./Bg";
import HeroContent from "./HeroContent";
import VideoSection from "./VideoSection";
import CardsSection from "./CardsSection";
import MovingText from "./MovingText";
import Media from "./Media";
import Sponsors from "./Sponsors";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] relative">
      <Bg />
      <HeroContent />
      <VideoSection />
      <CardsSection />
      <MovingText />
      <Media />
      <Sponsors />
    </div>
  );
}
