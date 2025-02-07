import React from 'react'
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md'

export default function Info() {
  return (
    <div className='flex-[.4] flex flex-col gap-10'>
        <div className="w-full px-5 sm:px-10 py-7 bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] rounded-2xl flex flex-wrap break-all items-center gap-5">
            <MdLocationPin className='text-7xl text-white' />
            <div className='text-white'>
                <h1 className='text-lg mokoto'>Location:</h1>
                <p className='text-lg font-light text-[#ccc]'>Addis Ababa, Ethiopia</p>
                <p className='text-lg font-light text-[#ccc]'>Millenium Hall</p>
            </div>
        </div>
        <div className="w-full px-5 sm:px-10 py-7 bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] rounded-2xl flex flex-wrap break-all items-center gap-5">
            <MdEmail className='text-7xl text-white' />
            <div className='text-white'>
                <h1 className='text-lg mokoto'>Email Us:</h1>
                <p className='text-lg font-light text-[#ccc]'>sales@ttsethiopia.com</p>
                <p className='text-lg font-light text-[#ccc]'>partnership@ttsethiopia.com</p>
                <p className='text-lg font-light text-[#ccc]'>conference@ttsethiopia.com</p>
            </div>
        </div>
        <div className="w-full px-5 sm:px-10 py-7 bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] rounded-2xl flex flex-wrap break-all items-center gap-5">
            <MdPhone className='text-7xl text-white' />
            <div className='text-white'>
                <h1 className='text-lg mokoto'>Phone:</h1>
                <p className='text-lg font-light text-[#ccc]'>+251-923-123-214</p>
                <p className='text-lg font-light text-[#ccc]'>+251-923-123-214</p>
            </div>
        </div>
    </div>
  )
}
