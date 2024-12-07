import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import features from '@/data/features'

export default function CardsSection() {
  return (
    <div className='relative flex flex-col items-center gap-10 py-10 px-10 sm:px-20'>
        <h2 className='text-5xl text-[#050752] font-black text-center mokoto-mark mb-10 drop-shadow-[0_0_10px_#78e0f4]'>Show Features</h2>
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {features?.map((feature: any, index: any) => (
                    <div key={index} className="group w-full md:w-[360px] h-[420px] flex flex-col items-center rounded-lg overflow-hidden text-white text-center">
                        <div className="w-full h-[230px] group-hover:h-[210px] duration-300 overflow-hidden">
                            <Image className='w-full h-full object-cover group-hover:scale-110 duration-300' src={feature.image} alt={feature.title} width={400} height={300} />
                        </div>
                        <div className="flex-grow flex flex-col items-center bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] group-hover:bg-[hsl(190,85%,91%)] duration-300">
                            <h3 className='text-xl leading-[1.5rem] font-semibold px-5 mt-5 mb-3 uppercase mokoto'>{feature.title}</h3>
                            <p className='px-5 mb-3'>{feature.description}</p>
                            {/* <Link href={"/"} className="text-lg py-1 px-5 mb-5 group-hover:mb-10 rounded-full border border-[#050752] bg-[#050752] text-[#78e0f4] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Learn More</Link> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
                {features?.slice(3, 5).map((feature: any, index: any) => (
                    <div key={index} className="group flex-1 h-[420px] flex flex-col items-center rounded-lg overflow-hidden text-white text-center">
                        <div className="w-full h-[230px] group-hover:h-[210px] duration-300 overflow-hidden">
                            <Image className='w-full h-full object-cover group-hover:scale-110 duration-300' src={feature.image} alt={feature.title} width={400} height={300} />
                        </div>
                        <div className="w-full flex-grow flex flex-col items-center bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] group-hover:bg-[hsl(190,85%,91%)] duration-300">
                            <h3 className='text-2xl leading-[1.5rem] font-bold px-5 mt-5 mb-3'>{feature.title}</h3>
                            <p className='px-5 mb-3'>{feature.description}</p>
                            <Link href={"/"} className="text-lg py-1 px-5 mb-5 group-hover:mb-10 rounded-full border border-[#050752] bg-[#050752] text-[#78e0f4] hover:text-[#050752] hover:bg-[#78e0f4] duration-300">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    </div>
  )
}
