import React from 'react'
import ViewBlog from './ViewBlog'
// import ParticlesBg from '@/components/ParticlesBg'
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ blogId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata ): Promise<Metadata> {
  // read route params
  const blogId = (await params).blogId
 
  // fetch data
  const response = await fetch(`${process.env.PUBLIC_BASE_URL}/api/news/${blogId}`).then((res) => res.json())
  const blog = response.data
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: blog.title,
    description: blog?.snippet?.slice(0, 150),
    openGraph: {
      images: [blog.image, ...previousImages],
    },
  }
}

export default function page() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-br from-[#050752] to-[#4EAEE5]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <ViewBlog />
    </div>
  )
}
