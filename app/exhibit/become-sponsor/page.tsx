// import ParticlesBg from "@/components/ParticlesBg"
import BecomeSponsor from "./BecomeSponsor"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TTS - Become a Sponsor',
  description: 'Tech Trade Show Become a Sponsor',
}

export default function page() {
  return (
    <div className='relative bg-[linear-gradient(to_bottom_right,_#4EAEE5_10%,_#050752_70%)]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <BecomeSponsor />
    </div>
  )
}
