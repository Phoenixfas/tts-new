import Image from "next/image";
import Bg from "./Bg";
import HeroContent from "./HeroContent";

export default function Home() {
  return (
    <div className="w-full min-h-[250vh] relative">
      <Bg />
      <HeroContent />
    </div>
  );
}
