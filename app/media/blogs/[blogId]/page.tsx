import React from 'react'
import ViewBlog from './ViewBlog'
import ParticlesBg from '@/components/ParticlesBg'

export default function page() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-br from-[#050752] to-[#4EAEE5]'>
        <ParticlesBg color="#78e0f4" amount={100} />
        <ViewBlog />
    </div>
  )
}
