import Hero from '@/components/Hero'
import React from 'react'
import ExhibitorProfile from './ExhibitorProfile'
import ParticlesBg from '@/components/ParticlesBg'

export default function page() {
  return (
    <div className='relative w-full min-h-[100vh]'>
        <ParticlesBg color="#78e0f4" amount={100} />
        <Hero img='https://picsum.photos/1920/1082' title='Exhibition Profile' />
        <ExhibitorProfile />
    </div>
  )
}
