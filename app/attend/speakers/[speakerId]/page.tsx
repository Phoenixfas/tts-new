import React from 'react'
import ViewSpeaker from './ViewSpeaker'
// import ParticlesBg from '@/components/ParticlesBg'
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ speakerId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata ): Promise<Metadata> {
  // read route params
  const blogId = (await params).speakerId
 
  // fetch data
  const response = await fetch(`${process.env.PUBLIC_BASE_URL}/api/speakers/${blogId}`).then((res) => res.json())
  const blog = response.data
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: "Speaker At TTS - " + blog.first_name + " " + blog.last_name,
    description: blog.job_title + " at " + blog.company_name,
    openGraph: {
      images: [blog.profile_pic, ...previousImages],
    },
  }
}

export default function page() {
  return (
    <div className='relative w-full min-h-screen'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <ViewSpeaker />
    </div>
  )
}
