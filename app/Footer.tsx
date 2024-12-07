'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import postReq from '../hooks/postReq'
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const p = pathname.split('/')[1] || ''

  useEffect(() => {
    if (p === 'dashboard') {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }, [p])

  const subscribe = async (e: any) => {
    e.preventDefault()
    setMsg("Please wait...")
    if (email === "") {
        setMsg("Please enter your email address")
        return
    }

    try {
        const res = await postReq('subscribers', {email})
        if (res.success) {
            setMsg("Subscribed successfully")
            setEmail('')
            return
        } else {
            setMsg("An error occured, please try again")
            return
        }
    } catch (error) {
        console.log(error)
        setMsg("An error occured, please try again")
    }
}

  if (isActive) return (
    <div className='relative w-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] text-white px-10 md:px-28 py-16 flex flex-col'>
        <div className="w-full flex flex-wrap gap-10 justify-between mb-32">
          <div className="w-[200px] h-[200px]">
            <Image src={'/logo_white.svg'} alt='logo' width={200} height={200} />
          </div>

          <div className="flex gap-20 flex-wrap">
            <div className="flex flex-col gap-3">
              <h3 className='text-xl mb-3 text-[#78e0f4bb] mokoto'>Explore</h3>
              <Link href={"/attend/exhibitor-list"} className='hover:text-[#78e0f4] duration-300'>Exhibitors</Link>
              <Link href={"#partners"} className='hover:text-[#78e0f4] duration-300'>Media Partners</Link>
              <Link href={"/attend/speakers"} className='hover:text-[#78e0f4] duration-300'>Speakers</Link>
              <Link href={"/media/blogs"} className='hover:text-[#78e0f4] duration-300'>Blogs</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className='text-xl mb-3 text-[#78e0f4bb] mokoto'>Learn</h3>
              <Link href={"/learn/ethiopia"} className='hover:text-[#78e0f4] duration-300'>About Ethiopia</Link>
              <Link href={"/learn/contact"} className='hover:text-[#78e0f4] duration-300'>Contact us</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className='text-xl mb-3 text-[#78e0f4bb] mokoto'>Get In Touch</h3>
              <p className='font-bold'>Sales Inquiry</p>
              <Link href={"mailto:sales@ttsglobal.tech"} className='hover:text-[#78e0f4] duration-300'>sales@ttsglobal.tech</Link>
              <p className='font-bold'>Partnership Inquiry</p>
              <Link href={"mailto:partnership@ttsglobal.tech"} className='hover:text-[#78e0f4] duration-300'>partnership@ttsglobal.tech</Link>
              <p className='font-bold'>Conference</p>
              <Link href={"mailto:conference@ttsglobal.tech "} className='hover:text-[#78e0f4] duration-300'>conference@ttsglobal.tech </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className='text-base max-w-[300px]'>We respond lightning fast, so do not hesitate to reach out.</p>
            <div className="flex flex-wrap gap-4 text-white text-3xl">
              <Link href={"https://www.linkedin.com/"}><FaLinkedin /></Link>
              <Link href={"https://www.facebook.com/"}><FaFacebook /></Link>
              <Link href={"https://www.instagram.com/"}><FaInstagram /></Link>
              <Link href={"https://wa.me/"}><FaWhatsapp /></Link>
              <Link href={"https://www.tiktok.com/"}><FaTiktok /></Link>
              <Link href={"https://www.youtube.com/"}><FaYoutube /></Link>
            </div>
            <Link href={"/"} className='w-fit px-6 py-2 rounded-full border-2 border-[#78e0f4] bg-[#78e0f4] hover:bg-transparent text-[#050752] hover:text-[#78e0f4] duration-300 mokoto text-sm'>Contact us</Link>
          </div>
        </div>

        <div className="w-full flex flex-col mb-20">
          {/* <p className='max-w-[600px] mb-5 text-lg'>We respond lightning fast, so do not hesitate to reach out and discuss ideas for your next event.</p> */}
          {msg !== "" && <p style={{color: "#fff", backgroundColor: "orange", padding: "5px 10px", width: "fit-content", borderRadius: "5px", marginBottom: "10px"}}>{msg}</p>}
          <form className='w-full flex gap-3 flex-wrap md:flex-nowrap' onSubmit={subscribe}>
            {/* <input className='w-full p-3 bg-white text-black placeholder:text-lg placeholder:text-[#050752] outline-none border-2 border-white focus:border-[#78e0f4] duration-300' type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} /> */}
            {/* <input className='w-full p-3 bg-white text-black placeholder:text-lg placeholder:text-[#050752] outline-none border-2 border-white focus:border-[#78e0f4] duration-300' type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} /> */}
            <input className='w-full p-3 bg-white text-black placeholder:text-lg placeholder:text-[#050752] outline-none border-2 border-white focus:border-[#78e0f4] duration-300' type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className='w-fit px-10 py-3 rounded-full border-2 border-[#78e0f4] bg-[#78e0f4] hover:bg-transparent text-[#050752] hover:text-[#78e0f4] duration-300 mokoto text-sm' type='submit' >Subscribe</button>
          </form>
        </div>
        <div className="w-full border-t border-[#78e0f4] py-5 text-center text-sm">
          <p>&copy;2024 All rights reserved. Designed and developed by <Link href={"/"} className='text-[#78e0f4]'>Fasika</Link></p>
        </div>
    </div>
  )
}
