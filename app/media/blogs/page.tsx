import Hero from '@/components/Hero'
import React from 'react'
import BlogList from './BlogList'
// import ParticlesBg from '@/components/ParticlesBg'

export default function page() {
  return (
    <div className='relative w-full min-h-screen'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <Hero img='/images/pageshero/blogs.JPG' title='Blogs' />
        <BlogList />
    </div>
  )
}
