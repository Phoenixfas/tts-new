import Hero from '@/components/Hero'
import WhyVisit from './WhyVisit'
// import ParticlesBg from '@/components/ParticlesBg'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'TTS - Why Visit',
    description: 'Why Visit At Tech Trade Show',
}

export default function page() {
  return (
    <div className='relative w-full min-h-[100vh]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <Hero img='/images/pageshero/visitors.JPG' title='Why Visit' />
        <h2 className='text-4xl text-center mt-10 font-bold text-[#050752]'>East Africa&apos;s Premier Tech Destination</h2>
        <WhyVisit />
        <h2 className='text-4xl text-center my-10 font-bold text-[#050752]'>Don&apos;t Miss Your Chance to Shape the Future of Tech in East Africa!</h2>
        <div className="w-full flex justify-center">
          <Link href="/register" className="text-xl px-10 py-3 border-2 border-[#050752] text-[#050752] hover:bg-[#050752] hover:text-white duration-300 mb-20 rounded-full">Register to Visit</Link>
        </div>
    </div>
  )
}
