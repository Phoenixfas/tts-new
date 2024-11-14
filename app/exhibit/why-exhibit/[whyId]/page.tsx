import ParticlesBg from "@/components/ParticlesBg"
import ViewWhyExhibit from "./ViewWhyExhibit"

export default function page() {
  return (
    <div className="relative w-full min-h-screen">
        <ParticlesBg color="#78e0f4" amount={100} />
        <ViewWhyExhibit />
    </div>
  )
}
