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
        <div className={`absolute ${isScrolled ? "top-0" : "-top-full"} duration-300 left-0 w-full h-full bg-[linear-gradient(to_top,_#050752,_#4EAEE5)]`}></div>
        <Link href={"/"} className="relative w-[100px] h-full">
            <Image className="w-full h-full object-contain" src="/logo_white.svg" alt="logo" width={100} height={70} />
        </Link>

        <div className="relative h-full flex items-center gap-10">
            <div className="relative text-nowrap group h-full flex items-center text-lg font-semibold text-white hover:text-[#78e0f4] duration-300">
                <span>Exhibit</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Why Exhibit</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Book a Stand</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Become a Sponsor</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Exhibition profile</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Floor Plan</Link>
                </div>
            </div>
            <div className="relative text-nowrap group h-full flex items-center text-lg font-semibold text-white hover:text-[#78e0f4] duration-300">
                <span>Attend</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                    <Link href={"/attend/agenda"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Conference Agenda</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Speakers</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Exhibitor list</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Why Visit</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Visitor Profile</Link>
                </div>
            </div>
            <div className="relative text-nowrap group h-full flex items-center text-lg font-semibold text-white hover:text-[#78e0f4] duration-300">
                <span>Learn</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">About Organizer</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Contact Us</Link>
                </div>
            </div>
            <div className="relative text-nowrap group h-full flex items-center text-lg font-semibold text-white hover:text-[#78e0f4] duration-300">
                <span>Media</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Blogs</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Press Material</Link>
                    <Link href={"/"} className="p-3  text-lg text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Become Media Partner</Link>
                </div>
            </div>
            <Link href={"/"} className="text-lg font-semibold text-white hover:text-[#78e0f4] duration-300">Book a Stand</Link>
            <Link href={"/"} className="text-lg font-semibold text-white hover:text-[#78e0f4] duration-300">Register</Link>
        </div>
    </div>
  )
}
