'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ firstName, lastName, email })
  }

  return (
    <div className='relative w-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] text-white px-28 py-16 flex flex-col'>
        <div className="w-full flex justify-between mb-32">
          <div className="w-[200px] h-[200px]">
            <Image src={'/logo_white.svg'} alt='logo' width={200} height={200} />
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <h3 className='text-2xl mb-3 text-[#78e0f4bb]'>Target Sectors</h3>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Agri Tech</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Fintech</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Health Tech</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Artificial Intelligence</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Cyber Security</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>E-Commerce</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Smart City</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className='text-2xl mb-3 text-[#78e0f4bb]'>Explore</h3>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Exhibitors</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Media Partners</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Speakers</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Blogs</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className='text-2xl mb-3 text-[#78e0f4bb]'>Company</h3>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>About us</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Our team</Link>
              <Link href={"/"} className='hover:text-[#78e0f4] duration-300'>Buzz</Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className='text-base max-w-[300px]'>We respond lightning fast, so do not hesitate to reach out and discuss ideas for your next event.</p>
            <Link href={"/"} className='w-fit px-6 py-2 rounded-full border-2 border-[#78e0f4] bg-[#78e0f4] hover:bg-transparent text-[#050752] hover:text-[#78e0f4] duration-300'>Contact us</Link>
          </div>
        </div>

        <div className="w-full flex flex-col mb-20">
          <p className='max-w-[600px] mb-5 text-lg'>We respond lightning fast, so do not hesitate to reach out and discuss ideas for your next event.</p>
          <form className='w-full flex gap-3'>
            <input className='w-full p-3 bg-white text-black placeholder:text-lg placeholder:text-[#050752] outline-none border-2 border-white focus:border-[#78e0f4] duration-300' type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input className='w-full p-3 bg-white text-black placeholder:text-lg placeholder:text-[#050752] outline-none border-2 border-white focus:border-[#78e0f4] duration-300' type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input className='w-full p-3 bg-white text-black placeholder:text-lg placeholder:text-[#050752] outline-none border-2 border-white focus:border-[#78e0f4] duration-300' type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className='w-fit px-10 py-3 rounded-full border-2 border-[#78e0f4] bg-[#78e0f4] hover:bg-transparent text-[#050752] hover:text-[#78e0f4] duration-300' type='submit' onClick={handleSubmit}>Subscribe</button>
          </form>
        </div>
        <div className="w-full border-t border-[#78e0f4] py-5 text-center text-sm">
          <p>&copy;2024 All rights reserved. Designed and developed by <Link href={"/"} className='text-[#78e0f4]'>Fasika</Link></p>
        </div>
    </div>
  )
}
