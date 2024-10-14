import React from 'react'
import Search from './Search'
import ExhibitorList from './ExhibitorList'
import Hero from '@/components/Hero'

export default function page() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#050752] to-[#4EAEE5]'>
        <Hero img='https://picsum.photos/1926/1086' title='Exhibitor Profile' />
        <div className="flex gap-5 py-10 px-20">
            <Search />
            <ExhibitorList />
        </div>
    </div>
  )
}
