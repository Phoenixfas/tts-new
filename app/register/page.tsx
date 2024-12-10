// import ParticlesBg from "@/components/ParticlesBg";
import RegisterVisitor from "./RegisterVisitor";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TTS - Register To Visit',
  description: 'Tech Trade Show Register Visitor',
}


export default function page() {
  return (
    <div className='relative bg-[linear-gradient(to_bottom_right,_#4EAEE5_10%,_#050752_70%)]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <RegisterVisitor />
    </div>
  )
}
