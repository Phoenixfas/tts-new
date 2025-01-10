import Link from 'next/link'
import React from 'react'

export default function DownBtn() {
  return (
    <div className='w-full flex justify-center p-5 mb-10'>
        <Link href={"/files/TTS2025_Agenda.pdf"} download={true} className='w-fit px-10 py-3 text-xl bg-gradient-to-tr from-[#050752] to-[#4EAEE5] rounded-full text-white mokoto-mark font-light shadow-sm shadow-[#00000033] hover:shadow-[#00000088] hover:shadow-md hover:-translate-y-1 duration-300'>DOWNLOAD FULL AGENDA</Link>
    </div>
  )
}
