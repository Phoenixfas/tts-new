'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import Hero from "./Hero"

export default function Bg() {

    useEffect(() => {

        const bgs = document.getElementsByClassName("bgs")

        const handleScroll = () => {
            if (bgs) {
                if (window.scrollY > window.innerHeight) {
                    bgs[0].classList.remove("active")
                    bgs[1].classList.add("active")
                } else {
                    bgs[0].classList.add("active")
                    bgs[1].classList.remove("active")
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
        <div className="bgs active opacity-0 transition-opacity ease-in-out duration-[1s]">
            <Hero />
        </div>
        <div className="bgs opacity-0 transition-opacity ease-in-out duration-[1s]">
            <div className="w-full h-full bg-[#eee] "></div>
            {/* <Image className="brightness-[.25]" src="/images/hero/event-bg.jpg" alt="BG" layout="fill" objectFit="cover" /> */}
        </div>
    </div>
  )
}
