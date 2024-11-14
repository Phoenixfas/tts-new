'use client'
import React from 'react'
import { useState } from 'react'

export default function Message() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [msg, setMsg] = useState<any>()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, phone, email, message})
            })

            const data = await res.json()
            if (data.success) {
                setLoading(false)
                setMsg('Message Sent Successfully')
                setTimeout(() => {
                    setMsg('')
                }, 3000)
            } else {
                setLoading(false)
                setMsg('Message Failed to Send')
                setTimeout(() => {
                    setMsg('')
                }, 3000)
            }
        } catch (error) {
            setLoading(false)
            setMsg(error)
        }
    }
  return (
    <div className='flex-[.6] bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] p-14 rounded-2xl'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
            <h2 className='text-white text-center text-4xl font-bold mb-5'>Send us a Message</h2>
            {msg && <p className='p-1 text-base bg-green-400 text-white font-bold text-center rounded-md'>{msg}</p>}
            <input type="text" placeholder='Name:' className='w-full p-5 bg-[#f6f6f6] rounded-xl' required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="tel" placeholder='Phone:' className='w-full p-5 bg-[#f6f6f6] rounded-xl' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="email" placeholder='Email:' className='w-full p-5 bg-[#f6f6f6] rounded-xl' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder='Message:' className='w-full p-5 bg-[#f6f6f6] rounded-xl' required  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type='submit' className='w-full p-5 bg-[#050752] duration-300 hover:bg-[#78E0F4] text-white hover:text-[#050752] text-lg rounded-xl'>{loading ? "sending..." : "send"}</button>
        </form>
    </div>
  )
}
