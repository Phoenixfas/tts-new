import Hero from '@/components/Hero'
import React from 'react'
import WhyExhibit from './WhyExhibit'
// import ParticlesBg from '@/components/ParticlesBg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TTS - Why Exhibit',
  description: 'Why Exhibit At Tech Trade Show',
}

export default function page() {
  return (
    <div className='relative w-full min-h-[100vh]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <Hero img='/images/pageshero/exhibitors.JPG' title='Why Exhibit' />
        <WhyExhibit />
    </div>
  )
}
