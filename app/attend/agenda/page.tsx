import Hero from '@/components/Hero'
import React from 'react'
import DateWidget from './DateWidget'
import CAgenda from './CAgenda'
import { Metadata } from 'next'
// import ParticlesBg from '@/components/ParticlesBg'

export const metadata: Metadata = {
  title: 'TTS - Conference Agenda',
  description: 'Tech Trade Show Conference Agenda',
}

export default function page() {
  return (
    <div className='relative w-full min-h-[100vh]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <Hero img='/images/features/conference.JPG' title='Conference Agenda' />
        <DateWidget />
        <CAgenda />
    </div>
  )
}
