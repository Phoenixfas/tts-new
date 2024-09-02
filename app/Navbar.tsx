'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <div className={`fixed top-0 left-0 z-[99999999] w-full ${isScrolled ? "h-[70px] py-3" : "h-[100px] py-5"} duration-300 flex justify-between gap-10 items-center px-20`}>
        <div className={`absolute ${isScrolled ? "top-0" : "-top-full"} duration-300 left-0 w-full h-full bg-[#050752]`}></div>
        <Link href={"/"} className="relative w-[100px] h-full">
            <Image className="w-full h-full object-contain" src="/logo2.svg" alt="logo" width={100} height={70} />
        </Link>

        <div className="relative flex items-center gap-10">
            <Link href={"/"} className="text-lg font-semibold text-[#78e0f4] hover:text-white duration-300">Exhibit</Link>
            <Link href={"/"} className="text-lg font-semibold text-[#78e0f4] hover:text-white duration-300">Attend</Link>
            <Link href={"/"} className="text-lg font-semibold text-[#78e0f4] hover:text-white duration-300">Learn</Link>
            <Link href={"/"} className="text-lg font-semibold text-[#78e0f4] hover:text-white duration-300">Media</Link>
            <Link href={"/"} className="text-lg font-semibold text-[#78e0f4] hover:text-white duration-300">Book a Stand</Link>
            <Link href={"/"} className="text-lg font-semibold text-[#78e0f4] hover:text-white duration-300">Register</Link>
        </div>
    </div>
  )
}
