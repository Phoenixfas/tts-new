import Hero from '@/components/Hero'
import React from 'react'
import Grid from './Grid'
import ImageList from './ImageList'
import ImageModal from './ImageModal'

export default function page() {
  return (
    <div className='relative w-full min-h-screen'>
        <ImageModal />
        <Hero img='/images/pageshero/exhibitors.JPG' title='Previous Shows Gallery' />
        <ImageList />
    </div>
  )
}
