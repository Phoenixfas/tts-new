'use client'
import { useEffect, useState, useRef } from "react"

export default function VideoSection() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(ref.current)
    }, [ref])
  return (
    <div className='relative w-full py-10 px-5 sm:p-10'>
        <div className="w-full bg-[linear-gradient(#050752,_#78e0f4,_transparent_80%)] flex flex-col gap-5 p-8 sm:p-16">
            <div className="w-full flex flex-col xl:flex-row gap-5 xl:gap-16 text-white">
                <h2 className='text-[2.5rem] leading-[2.6rem] sm:text-6xl md:text-[5.5rem] md:leading-[5.5rem] font-bold uppercase'>A GLOBAL PARTNERSHIP TO SHAPE THE FUTURE ECONOMY.</h2>
                <div className="flex flex-col gap-5 xl:gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="w-full h-5 bg-white"></div>
                        <div className="w-full h-5 bg-white"></div>
                        <div className="w-full h-5 bg-white"></div>
                    </div>
                    <p className='text-xl sm:text-[2rem] sm:leading-[2.25rem]'>In redefining the digital economy and landscape, the Tech Trade Show—recognized as the largest technology exhibition in East Africa—facilitates connections with industry leaders from prominent technology firms, global governmental organizations, innovative startups, expert investors, and corporate buyers.</p>
                </div>
            </div>
            <div className="relative w-full h-[300px] sm:h-[550px] bg-[#78e0f4]">
                {/* <div ref={ref} className="absolute top-0 left-0 w-full h-full"></div> */}
                <iframe
                    className="w-full h-full pointer-events-none"
                    src="https://www.youtube.com/embed/o2mwAsFqs64?autoplay=1&mute=1&loop=1&controls=0&playlist=o2mwAsFqs64"
                    title="Afriopia Presents - Tech Trade Show"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                >
                </iframe>
            </div>
        </div>
    </div>
  )
}
