'use client'
import { useEffect } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import blogs from "@/data/blogs"
import Image from "next/image"
import Link from "next/link"

export default function Blogs() {
    const initialPosition = 120

    const scrollLeft = () => {
        const slider: HTMLElement | null = document.getElementById('slider')
        if (!slider) return
        const slide = document.getElementsByClassName('slide')[0]
        const slidesLength = document.getElementsByClassName('slide').length
        const slideWidth = slide.clientWidth
        const sliderXPosition = slider.getBoundingClientRect().x

        if(-sliderXPosition > (slidesLength*slideWidth) - (slideWidth*2)){
            slider.style.transform = `translateX(${initialPosition}px)`
            return
        }
        slider.style.transform = `translateX(${sliderXPosition - slideWidth}px)`
    }

    const scrollRight = () => {
        const slider: HTMLElement | null = document.getElementById('slider')
        if (!slider) return
        const slide = document.getElementsByClassName('slide')[0]
        const slideWidth = slide.clientWidth
        const sliderXPosition = slider.getBoundingClientRect().x

        if(sliderXPosition >= initialPosition){
            slider.style.transform = `translateX(${initialPosition}px)`
            return
        }
        slider.style.transform = `translateX(${sliderXPosition + slideWidth}px)`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            scrollLeft()
        }, 5000)

        return () => clearInterval(interval)
    }, [scrollLeft])

  return (
    <div className='relative w-full flex flex-col gap-16 py-20'>
        <div className="w-full flex flex-col gap-16 px-20">
            <h2 className='text-white text-5xl'>Dig into our blogs...</h2>
            <div className="flex items center gap-3 ml-20">
                <div className="px-5 py-3 border hover:border-[#4EAEE5] text-white hover:text-[#4EAEE5] cursor-pointer hover:bg-[#4EAEE555] duration-300" onClick={() => scrollRight()}>
                    <FaArrowLeft />
                </div>
                <div className="px-5 py-3 border hover:border-[#4EAEE5] text-white hover:text-[#4EAEE5] cursor-pointer hover:bg-[#4EAEE555] duration-300" onClick={() => scrollLeft()}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
        <div className="w-full overflow-hidden">
            <div id="slider" className={`w-fit translate-x-[120px] flex gap-14 duration-300`}>
                {blogs.map((blog, index) => (
                    <Link href={"/"} key={index} className="slide min-w-[450px] max-w-[400px] flex flex-col">
                        <Image className='w-full max-h-[300px] object-cover mb-10' src={blog.image} alt={blog.title} width={400} height={300} />
                        <h3 className='text-[#78e0f4bb] hover:text-[#78e0f4ff] duration-300 text-4xl mb-7'>{blog.title}</h3>
                        <p className='text-white text-lg mb-7'>{blog.description}</p>
                        <div className='w-fit px-8 py-3 rounded-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] text-white hover:bg-transparent hover:text-[#78e0f4] duration-300 overflow-hidden'>Read more</div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}
