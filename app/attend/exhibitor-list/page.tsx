import React from 'react'
import Search from './Search'
import ExhibitorList from './ExhibitorList'
import Hero from '@/components/Hero'
import ParticlesBg from '@/components/ParticlesBg'

export default function page() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-br from-[#050752] to-[#4EAEE5]'>
        <ParticlesBg color="#78e0f4" amount={100} />
        <Hero img='/images/pageshero/exhibitors.JPG' title='Exhibitor Profile' />
        <div className="relative flex flex-col lg:flex-row gap-5 py-10 px-5 sm:px-20">
            <Search />
            <ExhibitorList />
        </div>
    </div>
  )
}
