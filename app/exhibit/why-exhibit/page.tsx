import Hero from '@/components/Hero'
import React from 'react'
import WhyExhibit from './WhyExhibit'
import ParticlesBg from '@/components/ParticlesBg'

export default function page() {
  return (
    <div className='relative w-full min-h-[100vh]'>
        <ParticlesBg color="#78e0f4" amount={100} />
        <Hero img='/images/pageshero/exhibitors.JPG' title='Why Exhibit' />
        <WhyExhibit />
    </div>
  )
}
