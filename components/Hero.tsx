import Image from 'next/image'
import React from 'react'

export default function Hero({title, img}: {title: string, img: string}) {
  return (
    <div className='relative w-full flex items-center justify-center py-40 bg-[#4EAEE5]'>
      <Image src={img} className='absolute w-full h-full object-cover brightness-50' alt='hero' width={1920} height={1080} priority />
      <div className="absolute w-full h-full bg-[linear-gradient(to_top,_#050752_0%,_transparent_30%)]"></div>
      <h1 className='relative text-5xl font-bold text-white text-center'>{title}</h1>
    </div>
  )
}
