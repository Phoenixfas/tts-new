import Hero from '@/components/Hero'
import React from 'react'
import WhyExhibit from './WhyExhibit'

export default function page() {
  return (
    <div className='w-full min-h-[100vh]'>
        <Hero img='https://picsum.photos/1920/1081' title='Why Exhibit' />
        <WhyExhibit />
    </div>
  )
}
