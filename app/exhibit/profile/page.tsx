import Hero from '@/components/Hero'
import React from 'react'
import ExhibitorProfile from './ExhibitorProfile'
// import ParticlesBg from '@/components/ParticlesBg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TTS - Exhibition Profile',
  description: 'Tech Trade Show Exhibition Profile',
}

export default function page() {
  return (
    <div className='relative w-full min-h-[100vh]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <Hero img='/images/pageshero/exhibitors.JPG' title='Exhibition Profile' />
        <ExhibitorProfile />
    </div>
  )
}
