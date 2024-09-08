import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardsSection() {
  return (
    <div className='relative flex flex-col items-center gap-10 py-10'>
        <h2 className='text-5xl text-[#78e0f4]'>Explore Tech Talent for Events</h2>
        <div className="flex flex-col gap-4 max-w-[1080px]">
            <div className="flex gap-4 w-full">
                <div className="group w-[360px] h-[420px] flex flex-col items-center rounded-lg overflow-hidden text-[#050752] text-center">
                    <div className="w-full h-[230px] group-hover:h-[210px] duration-300 overflow-hidden">
                        <Image className='w-full h-full object-cover group-hover:scale-110 duration-300' src="https://picsum.photos/400/300" alt="1" width={400} height={300} />
                    </div>
                    <div className="flex-grow flex flex-col items-center bg-[#78e0f4] group-hover:bg-[hsl(190,85%,91%)] duration-300">
                        <h3 className='text-2xl leading-[1.5rem] font-bold px-5 mt-5 mb-3'>Innovators & CEOs</h3>
                        <p className='px-5 mb-3'>We can book nearly any tech leader for your event.</p>
                        <Link href={"/"} className="text-lg py-1 px-5 mb-5 group-hover:mb-10 rounded-full border border-[#050752] bg-[#050752] text-[#78e0f4] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Learn More</Link>
                    </div>
                </div>
                
                <div className="group w-[360px] h-[420px] flex flex-col items-center rounded-lg overflow-hidden text-[#050752] text-center">
                    <div className="w-full h-[230px] group-hover:h-[210px] duration-300 overflow-hidden">
                        <Image className='w-full h-full object-cover group-hover:scale-110 duration-300' src="https://picsum.photos/400/301" alt="1" width={400} height={300} />
                    </div>
                    <div className="flex-grow flex flex-col items-center bg-[#78e0f4] group-hover:bg-[hsl(190,85%,91%)] duration-300">
                        <h3 className='text-2xl leading-[1.5rem] font-bold px-5 mt-5 mb-3'>Tech Speakers</h3>
                        <p className='px-5 mb-3'>Inspiring talks from the best in the industry.</p>
                        <Link href={"/"} className="text-lg py-1 px-5 mb-5 group-hover:mb-10 rounded-full border border-[#050752] bg-[#050752] text-[#78e0f4] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Learn More</Link>
                    </div>
                </div>
                <div className="group w-[360px] h-[420px] flex flex-col items-center rounded-lg overflow-hidden text-[#050752] text-center">
                    <div className="w-full h-[230px] group-hover:h-[210px] duration-300 overflow-hidden">
                        <Image className='w-full h-full object-cover group-hover:scale-110 duration-300' src="https://picsum.photos/400/302" alt="1" width={400} height={300} />
                    </div>
                    <div className="flex-grow flex flex-col items-center bg-[#78e0f4] group-hover:bg-[hsl(190,85%,91%)] duration-300">
                        <h3 className='text-2xl leading-[1.5rem] font-bold px-5 mt-5 mb-3'>Exhibitors</h3>
                        <p className='px-5 mb-3'>Showcase cutting-edge technology and products.</p>
                        <Link href={"/"} className="text-lg py-1 px-5 mb-5 group-hover:mb-10 rounded-full border border-[#050752] bg-[#050752] text-[#78e0f4] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Learn More</Link>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 w-full">
                <div className="group flex-1 h-[420px] flex flex-col items-center rounded-lg overflow-hidden text-[#050752] text-center">
                    <div className="w-full h-[230px] group-hover:h-[210px] duration-300 overflow-hidden">
                        <Image className='w-full h-full object-cover group-hover:scale-110 duration-300' src="https://picsum.photos/400/303" alt="1" width={400} height={300} />
                    </div>
                    <div className="w-full flex-grow flex flex-col items-center bg-[#78e0f4] group-hover:bg-[hsl(190,85%,91%)] duration-300">
                        <h3 className='text-2xl leading-[1.5rem] font-bold px-5 mt-5 mb-3'>Startups</h3>
                        <p className='px-5 mb-3'>Discover the next big thing in tech.</p>
                        <Link href={"/"} className="text-lg py-1 px-5 mb-5 group-hover:mb-10 rounded-full border border-[#050752] bg-[#050752] text-[#78e0f4] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Learn More</Link>
                    </div>
                </div>
                
                <div className="group flex-1 h-[420px] flex flex-col items-center rounded-lg overflow-hidden text-[#050752] text-center">
                    <div className="w-full h-[230px] group-hover:h-[210px] duration-300 overflow-hidden">
                        <Image className='w-full h-full object-cover group-hover:scale-110 duration-300' src="https://picsum.photos/400/304" alt="1" width={400} height={300} />
                    </div>
                    <div className="w-full flex-grow flex flex-col items-center bg-[#78e0f4] group-hover:bg-[hsl(190,85%,91%)] duration-300">
                        <h3 className='text-2xl leading-[1.5rem] font-bold px-5 mt-5 mb-3'>Innovators & CEOs</h3>
                        <p className='px-5 mb-3'>We can book nearly any tech leader for your event.</p>
                        <Link href={"/"} className="text-lg py-1 px-5 mb-5 group-hover:mb-10 rounded-full border border-[#050752] bg-[#050752] text-[#78e0f4] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
