'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import Hero from "./Hero"
import PatternBg from "@/components/PatternBg"

export default function Bg() {

    const [b1Active, setB1Active] = useState(true)
    const [b2Active, setB2Active] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setB1Active(false)
                setB2Active(true)
            } else {
                setB1Active(true)
                setB2Active(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [b1Active, b2Active])
    
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
        <div className={`absolute left-0 top-0 w-full h-full ${b1Active ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1s]`}>
            <Hero />
        </div>
        <div className={`absolute left-0 top-0 w-full h-full ${b2Active ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1s]`}>
            {/* <PatternBg /> */}
            {/* <Image className="brightness-[.25]" src="/images/hero/event-bg.jpg" alt="BG" layout="fill" objectFit="cover" /> */}
        </div>
    </div>
  )
}
