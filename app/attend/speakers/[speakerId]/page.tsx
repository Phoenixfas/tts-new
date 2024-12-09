import React from 'react'
import ViewSpeaker from './ViewSpeaker'
// import ParticlesBg from '@/components/ParticlesBg'

export default function page() {
  return (
    <div className='relative w-full min-h-screen'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <ViewSpeaker />
    </div>
  )
}
