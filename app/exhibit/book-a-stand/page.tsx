import React from 'react'
import BookAStand from './BookAStand'
// import ParticlesBg from '@/components/ParticlesBg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TTS - Book a Stand',
  description: 'Tech Trade Show Book a Stand',
}

export default function page() {
  return (
    <div className='relative bg-[linear-gradient(to_bottom_right,_#4EAEE5_10%,_#050752_70%)]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <BookAStand />
    </div>
  )
}
