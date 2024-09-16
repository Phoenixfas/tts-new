import Link from 'next/link'
import React from 'react'
import medias from '@/data/medias'
import Image from 'next/image'

export default function Media() {
  return (
    <div className='relative w-full px-20'>
      <div className="w-full border border-[#78e0f4] flex items-center justify-evenly">
        {medias?.slice(0, 5).map((media, index) => (
          <Link key={index} href={media.url} className='group w-full relative border-r border-[#78e0f4] py-16'>
            <h3 className='relative text-2xl font-bold text-[#78e0f4] text-center'>{media.name}</h3>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:rotate-6 duration-300 w-[160px] h-[190px] overflow-hidden">
              <Image className='object-cover' src={media.img} alt={media.name} width={160} height={190} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
