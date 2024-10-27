'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'

export default function Startups() {
    const token = useAppSelector((state) => state.login.admin)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [regData, setRegData] = useState([])

    const [activity1, setActivity1] = useState(0)
    const [activity2, setActivity2] = useState(0)
    const [activity3R1, setActivity3R1] = useState(0)
    const [activity3R2, setActivity3R2] = useState(0)
    const [activity5, setActivity5] = useState(0)
    const [activity6, setActivity6] = useState(0)


    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const fetchData = async () => {
            try{
                const res = await Promise.all([
                    fetch('https://api.afriopia.com/business/activity/1', config),
                    fetch('https://api.afriopia.com/business/activity/2', config),
                    fetch('https://api.afriopia.com/business/activity/3R1', config),
                    fetch('https://api.afriopia.com/business/activity/3R2', config),
                    fetch('https://api.afriopia.com/business/activity/5', config),
                    fetch('https://api.afriopia.com/business/activity/6', config),
                ])
                if(!res.every(r => r.ok)){
                    setError('Error fetching data')
                    setLoading(false)
                    return
                }
                const data: any = await Promise.all(res.map(r => r.json()))
                setRegData(data)
                setActivity1(data[0].data.length)
                setActivity2(data[1].data.length)
                setActivity3R1(data[2].data.length)
                setActivity3R2(data[3].data.length)
                setActivity5(data[4].data.length)
                setActivity6(data[5].data.length)
                // console.log(data)
            }
            catch(err: any){
                setLoading(false)
                setError(err)
            }
        }

        fetchData()
        setLoading(false)
    }, [])


  return (
    <div className='flex flex-col gap-8'>
        <hr />
        <h1 className='text-center text-4xl font-light mt-5'>Business Lounge Activities Registrants</h1>
        
        <div className='w-full flex justify-center flex-wrap gap-8' >
            <Link href='/startups/1' title='activity1'>
                <div className="min-w-72  h-52 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{activity1}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startups Registered for Activity 1</div>
                </div>
            </Link>
            <Link href='/startups/2' title='activity2'>
                <div className="max-w-72 h-52 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{activity2}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startups Registered for Activity 2</div>
                </div>
            </Link>
            <Link href='/startups/3R1' title='activity3R1'>
                <div className="max-w-72 h-52 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{activity3R1}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startups Registered for Activity 3 Round 1</div>
                </div>
            </Link>
            <Link href='/startups/3R2' title='activity3R2'>
                <div className="max-w-72 h-52 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{activity3R2}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startups Registered for Activity 3 Round 2</div>
                </div>
            </Link>
            <Link href='/startups/5' title='activity5'>
                <div className="max-w-72 h-52 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{activity5}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startups Registered for Activity 5</div>
                </div>
            </Link>
            <Link href='/startups/6' title='activity6'>
                <div className="max-w-72 h-52 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{activity6}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startups Registered for Activity 6</div>
                </div>
            </Link>
        </div>
    </div>
  )
}
