'use client'
import { useEffect, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
// import blogs from "@/data/blogs"
import Image from "next/image"
import Link from "next/link"
import useFetch from "@/hooks/useClientFetch"

export default function Blogs() {
    const { data: blogs = [], error } = useFetch('news')
    const [initialPosition, setInitialPosition] = useState(0)

    const scrollLeft = () => {
        const slider: HTMLElement | null = document.getElementById('slider')
        if (!slider) return
        const slide = document.getElementsByClassName('slide')[0]
        const slidesLength = document.getElementsByClassName('slide').length
        const slideWidth = slide?.clientWidth
        const sliderXPosition = slider.getBoundingClientRect().x

        if(-(sliderXPosition ) > (slidesLength*slideWidth) - slideWidth*2){
            slider.style.transform = `translateX(${initialPosition}px)`
            return
        }
        slider.style.transform = `translateX(${sliderXPosition - slideWidth }px)`
    }

    const scrollRight = () => {
        const slider: HTMLElement | null = document.getElementById('slider')
        if (!slider) return
        const slide = document.getElementsByClassName('slide')[0]
        const slideWidth = slide.clientWidth
        const sliderXPosition = slider.getBoundingClientRect().x

        if(sliderXPosition  >= initialPosition){
            slider.style.transform = `translateX(${initialPosition}px)`
            return
        }
        slider.style.transform = `translateX(${sliderXPosition + slideWidth }px)`
    }

    useEffect(() => {
        if(window.innerWidth > 640) setInitialPosition(120)
        const interval = setInterval(() => {
            scrollLeft()
        }, 5000)

        return () => clearInterval(interval)
    }, [scrollLeft])

  return (
    <div className='relative w-full flex flex-col gap-16 py-20'>
        <div className="w-full flex flex-col gap-16 px-5 sm:px-20">
            <h2 className='text-[#050752] text-5xl mokoto-mark drop-shadow-[0_0_10px_#78e0f4]'>Dig into our blogs...</h2>
            <div className="flex items center gap-3 ml-20">
                <div className="px-5 py-3 border-2 border-[#78e0f4] hover:border-[#4EAEE5] text-[#4eaee5] hover:text-[#4EAEE5] cursor-pointer hover:bg-[#4EAEE555] duration-300" onClick={() => scrollRight()}>
                    <FaArrowLeft />
                </div>
                <div className="px-5 py-3 border-2 border-[#78e0f4] hover:border-[#4EAEE5] text-[#4eaee5] hover:text-[#4EAEE5] cursor-pointer hover:bg-[#4EAEE555] duration-300" onClick={() => scrollLeft()}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
        <div className="w-full overflow-hidden">
            <div id="slider" className={`w-full sm:w-fit translate-x-0 sm:translate-x-[120px] flex gap-0 sm:gap-14 duration-300`}>
                {blogs && blogs?.map((blog: any, index: any) => (
                    <Link href={`/media/blogs/${blog._id}`} key={index} className="slide min-w-[100%_!important] sm:min-w-[400px_!important] sm:max-w-[400px_!important] sm:w-[400px] flex flex-col">
                        <Image className='w-full max-h-[300px] object-cover mb-10' src={blog.image} alt={blog.title} width={400} height={300} />
                        <h3 className='text-[#4eaee5] hover:text-[#050752] duration-300 text-2xl mb-7 mokoto'>{blog.title}</h3>
                        <p className='text-gray-500 text-lg mb-7'>{blog.snippet.slice(0, 90)} {blog.snippet.length > 90 ? "..." : ""}</p>
                        <div className='w-fit px-8 py-3 rounded-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] text-white hover:bg-transparent hover:text-[#78e0f4] duration-300 overflow-hidden mokoto text-[0.7rem]'>Read more</div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}
