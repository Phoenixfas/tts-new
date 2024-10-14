import Hero from '@/components/Hero'
import React from 'react'
import BlogList from './BlogList'

export default function page() {
  return (
    <div className='w-full min-h-screen'>
        <Hero img='https://picsum.photos/1920/1085' title='Blogs' />
        <BlogList />
    </div>
  )
}
