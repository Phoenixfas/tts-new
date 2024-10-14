import Hero from '@/components/Hero'
import React from 'react'
import ExhibitorProfile from './ExhibitorProfile'

export default function page() {
  return (
    <div className='w-full min-h-[100vh]'>
        <Hero img='https://picsum.photos/1920/1082' title='Exhibition Profile' />
        <ExhibitorProfile />
    </div>
  )
}
