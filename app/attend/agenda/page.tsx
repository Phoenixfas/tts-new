import Hero from '@/components/Hero'
import React from 'react'
import DateWidget from './DateWidget'
import CAgenda from './CAgenda'

export default function page() {
  return (
    <div className='w-full min-h-[100vh]'>
        <Hero img='https://picsum.photos/1921/1080' title='Conference Agenda' />
        <DateWidget />
        <CAgenda />
    </div>
  )
}
