'use client'
import Link from 'next/link'
import React from 'react'
// import speakers from '@/data/speakers'
import Image from 'next/image'
import useFetch from '@/hooks/useClientFetch'

export default function HeroContent() {
    
    const { data: speakers = [], error } = useFetch('speakers')
  return (
    <div className='relative w-full h-screen flex flex-col items-center sm:items-start justify-end px-5 sm:px-10 md:px-20 pt-20 sm:pb-20'>
        <h1 className='max-w-[1000px] text-[2.4rem] leading-[2.5rem] sm:text-6xl md:text-7xl md:leading-[5.25rem] text-center sm:text-left text-white font-bold mb-10'>EXPERIENCE THE BIGGEST TECH TRADE SHOW LIKE NEVER BEFORE</h1>
        <div className="w-full sm:w-fit flex flex-col sm:flex-row gap-2 rounded-md sm:rounded-full p-2 border border-[#78e0f4] bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] mb-5">
            <div className="py-2 px-5 rounded-md sm:rounded-full border border-[#78e0f4] bg-[#78e0f4] text-[#050752] hover:text-[#78e0f4] hover:bg-[#050752] duration-300">Explore All</div>
            <Link href={"/attend/exhibitor-list"} className="py-2 px-5 rounded-md sm:rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Exhibitors</Link>
            <Link href={"#partners"} className="py-2 px-5 rounded-md sm:rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Media Partners</Link>
            <Link href={"/attend/speakers"} className="py-2 px-5 rounded-md sm:rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Speakers</Link>
            <Link href={"/media/blogs"} className="py-2 px-5 rounded-md sm:rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Blogs</Link>
        </div>
        <div className="hidden md:flex flex-col gap-5">
            <h3 className='text-xl text-white'>RECENT SPEAKERS</h3>
            <div className="w-full flex items-center gap-16 overflow-hidden">
                {speakers && speakers?.map((speaker: any, idx: any) => (
                    <div key={idx} className="flex items-center gap-5 min-w-fit">
                        <Image className="object-cover w-10 h-10 rounded-full" src={speaker.profile_pic} alt={speaker.first_name} width={40} height={40} />
                        <h4 className="text-[#4EAEE5] text-nowrap">{speaker.first_name + " " + speaker.last_name}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
