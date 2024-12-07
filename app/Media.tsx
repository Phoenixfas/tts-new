'use client'
import Link from 'next/link'
import React from 'react'
// import medias from '@/data/medias'
import Image from 'next/image'
import useFetch from '@/hooks/useClientFetch'

export default function Media() {
  const { data: medias = [], error } = useFetch('partners')
  return (
    <div id='partners' className='relative w-full px-10 sm:px-20'>
      <div className="w-full border border-[#4EAEE5] flex flex-col md:flex-row justify-evenly">
        {medias && medias?.slice(0, 5).map((media: any, index: any) => (
          <Link key={index} href={media.url} className='group w-full max-h-[250px] flex items-center justify-center relative border-b md:border-b-0 md:border-r border-[#4EAEE5] py-16'>
            <h3 className='relative text-2xl font-bold text-[#050752] text-center'>{media.name}</h3>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:rotate-6 duration-300 w-[160px] h-[190px] overflow-hidden">
              <Image className='object-cover' src={media.logo} alt={media.name} width={160} height={190} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
