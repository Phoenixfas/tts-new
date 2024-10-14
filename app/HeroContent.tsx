import Link from 'next/link'
import React from 'react'
import speakers from '@/data/speakers'
import Image from 'next/image'

export default function HeroContent() {
  return (
    <div className='relative w-full h-screen flex flex-col justify-end px-20 py-20'>
        <h1 className='max-w-[1000px] text-7xl leading-[5.25rem] text-white font-bold mb-10'>EXPERIENCE THE BIGGEST TECH TRADE SHOW LIKE NEVER BEFORE</h1>
        <div className="w-fit flex gap-2 rounded-full p-2 border border-[#78e0f4] bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] mb-5">
            <div className="py-2 px-5 rounded-full border border-[#78e0f4] bg-[#78e0f4] text-[#050752] hover:text-[#78e0f4] hover:bg-[#050752] duration-300">Explore All</div>
            <Link href={"/"} className="py-2 px-5 rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Exhibitors</Link>
            <Link href={"/"} className="py-2 px-5 rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Media Partners</Link>
            <Link href={"/"} className="py-2 px-5 rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Speakers</Link>
            <Link href={"/"} className="py-2 px-5 rounded-full text-[#fff] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Blogs</Link>
        </div>
        <div className="flex flex-col gap-5">
            <h3 className='text-xl text-white'>RECENTLY SPEAKERS</h3>
            <div className="w-full flex items-center gap-16 overflow-hidden">
                {speakers.map((speaker, idx) => (
                    <div key={idx} className="flex items-center gap-5 min-w-fit">
                        <Image className="object-cover w-10 h-10 rounded-full" src={speaker.image} alt={speaker.name} width={40} height={40} />
                        <h4 className="text-[#4EAEE5] text-nowrap">{speaker.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
