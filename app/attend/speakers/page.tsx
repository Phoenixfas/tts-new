import Hero from '@/components/Hero'
import React from 'react'
import SpeakersList from './SpeakersList'

export default function page() {
  return (
    <div className='w-full min-h-screen'>
        <Hero img='https://picsum.photos/1920/1083' title='Speakers' />
        <SpeakersList />
    </div>
  )
}
