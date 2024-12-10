'use client'
import { useEffect, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Image from "next/image"

export default function Gallery({gallery}: {gallery: object[]}) {
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
    <div className='relative w-full flex flex-col gap-10 pb-20 pt-10'>
        <div className="w-full flex flex-col gap-16 px-5 sm:px-20">
            <div className="flex items-center justify-center gap-3">
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
                {gallery && gallery?.map((img: any, index: any) => (
                    <div key={index} className="slide min-w-[100%_!important] sm:min-w-[400px_!important] sm:max-w-[400px_!important] sm:w-[400px] flex flex-col">
                        <Image className='w-full h-[250px] object-cover mb-10' src={img.url} alt={img.title} width={400} height={300} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
