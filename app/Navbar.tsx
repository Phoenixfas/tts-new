'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const pathname = usePathname()
    const p = pathname.split('/')[1] || ''

    const mobileRef = useRef<HTMLDivElement>(null)
    const [mobile, setMobile] = useState(false)

    const toggleMobile = () => {
        setMobile(!mobile)
    }

    useEffect(() => {
        if(mobileRef.current){
            if (mobile) {
                mobileRef.current.style.transform = 'translateX(0%)'
            } else {
                mobileRef.current.style.transform = 'translateX(100%)'
            }
        }

        if (p === 'dashboard') {
            setIsActive(false)
          } else {
            setIsActive(true)
        }

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
    }, [p, mobile, mobileRef])

    if (isActive) return (
        <>
            <div className={`fixed top-0 left-0 z-[99999999] w-full ${isScrolled ? "h-[70px] py-3" : "h-[100px] py-5"} duration-300 flex justify-between gap-10 items-center px-5 sm:px-20 mokoto`}>
                <div className={`absolute ${isScrolled ? "top-0" : "-top-full"} duration-300 left-0 w-full h-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)]`}></div>
                <Link href={"/"} className="relative w-[100px] h-full">
                    <Image className="w-full h-full object-contain" src="/logo_white.svg" alt="logo" width={100} height={70} />
                </Link>

                <div className="relative h-full hidden lg:flex items-center gap-10 text-sm">
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Exhibit</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/exhibit/why-exhibit"} className="p-3 text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Why Exhibit</Link>
                            <Link href={"/exhibit/book-a-stand"} className="p-3 text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Book a Stand</Link>
                            <Link href={"/exhibit/become-sponsor"} className="p-3 text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Become a Sponsor</Link>
                            <Link href={"/exhibit/profile"} className="p-3 text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Exhibition profile</Link>
                            <Link href={"/"} className="p-3 text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Floor Plan</Link>
                        </div>
                    </div>
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Attend</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/attend/agenda"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Conference Agenda</Link>
                            <Link href={"/attend/speakers"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Speakers</Link>
                            <Link href={"/attend/exhibitor-list"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Exhibitor list</Link>
                            <Link href={"/attend/why-visit"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Why Visit</Link>
                            <Link href={"/attend/visitor-profile"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Visitor Profile</Link>
                        </div>
                    </div>
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Learn</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/learn/ethiopia"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">About Ethiopia</Link>
                            <Link href={"/learn/gallery"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Gallery</Link>
                            <Link href={"/learn/contact"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Contact Us</Link>
                        </div>
                    </div>
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Media</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/media/blogs"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Blogs</Link>
                            {/* <Link href={"/"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Press Material</Link> */}
                            {/* <Link href={"/"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Become Media Partner</Link> */}
                        </div>
                    </div>
                    <Link href={"/exhibit/book-a-stand"} className={`font-semibold  hover:text-[#050752] hover:bg-white duration-300 border px-5 py-2 rounded-md ${isScrolled ? "bg-transparent border-white text-white" : "bg-white text-[#050752] border-transparent"}`}>Book a Stand</Link>
                    <Link href={"/register"} className="font-semibold text-white hover:text-[#78e0f4] duration-300">Visit</Link>
                </div>

                <div className="relative flex-[1] flex justify-end h-full cursor-pointer lg:hidden" onClick={() => toggleMobile()}>
                    <div className="h-10 w-10 p-1 border border-white rounded-md text-white text-5xl flex items-center justify-center">
                        <HiOutlineMenuAlt3 />
                    </div>
                </div>
            </div>

            {/* /////////////////////////////////////// Mobile nav /////////////////////////////////// */}

            <div ref={mobileRef} className="fixed top-0 left-0 z-[999999999999] w-full h-screen overflow-auto bg-gradient-to-br from-[#050752] to-[#78e0f4] flex flex-col items-center justify-center text-center gap-[50px] translate-x-full transition duration-300">
                <div className="absolute top-[20px] right-[20px] text-3xl text-white cursor-pointer" onClick={() => toggleMobile()}>
                    <AiOutlineClose />
                </div>

                <div className="relative flex flex-col items-center gap-10 text-sm mokoto">
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Exhibit</span>
                        <div className="absolute z-[99999999] top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/exhibit/why-exhibit"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Why Exhibit</Link>
                            <Link href={"/exhibit/book-a-stand"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Book a Stand</Link>
                            <Link href={"/exhibit/become-sponsor"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Become a Sponsor</Link>
                            <Link href={"/exhibit/profile"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Exhibition profile</Link>
                            <Link href={"/"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Floor Plan</Link>
                        </div>
                    </div>
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Attend</span>
                        <div className="absolute z-[99999999] top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/attend/agenda"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Conference Agenda</Link>
                            <Link href={"/attend/speakers"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Speakers</Link>
                            <Link href={"/attend/exhibitor-list"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Exhibitor list</Link>
                            <Link href={"/attend/why-visit"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Why Visit</Link>
                            <Link href={"/attend/visitor-profile"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Visitor Profile</Link>
                        </div>
                    </div>
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Learn</span>
                        <div className="absolute z-[99999999] top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/learn/ethiopia"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>About Ethiopia</Link>
                            <Link href={"/learn/gallery"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Gallery</Link>
                            <Link href={"/learn/contact"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Contact Us</Link>
                        </div>
                    </div>
                    <div className="relative text-nowrap group h-full flex items-center font-semibold text-white hover:text-[#78e0f4] duration-300">
                        <span>Media</span>
                        <div className="absolute z-[99999999] top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-black border-2 border-[#78e0f4]">
                            <Link href={"/media/blogs"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Blogs</Link>
                            {/* <Link href={"/"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Press Material</Link> */}
                            {/* <Link href={"/"} className="p-3  text-[#78e0f4] hover:text-white hover:bg-[#78e0f4] duration-300">Become Media Partner</Link> */}
                        </div>
                    </div>
                    <Link href={"/exhibit/book-a-stand"} className={`font-semibold  hover:text-[#050752] hover:bg-white duration-300 border px-5 py-2 rounded-md ${isScrolled ? "bg-transparent border-white text-white" : "bg-white text-[#050752] border-transparent"}`} onClick={() => toggleMobile()}>Book a Stand</Link>
                    <Link href={"/register"} className="font-semibold text-white hover:text-[#78e0f4] duration-300" onClick={() => toggleMobile()}>Visit</Link>
                </div>
            </div>
        </>
    )
}
