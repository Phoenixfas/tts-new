'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
// import vendors from '../../data/vendors'

export default function Regs() {
    const token = useAppSelector((state) => state.login.admin)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [regData, setRegData] = useState([])

    const [boothVendors, setBoothVendors] = useState(0)
    const [approvedVendors, setApprovedVendors] = useState(0)
    const [visitors, setVisitors] = useState(0)
    const [sponsors, setSponsors] = useState(0)
    const [approvedSponsors, setApprovedSponsors] = useState(0)


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
                    fetch('https://dashboard.afriopia.com/api/exhibitors', config),
                    fetch('https://dashboard.afriopia.com/api/visitors', config),
                    fetch('https://dashboard.afriopia.com/api/sponsors', config),
                ])
                if(!res.every(r => r.ok)){
                    setError('Error fetching data')
                    setLoading(false)
                    return
                }
                const data: any = await Promise.all(res.map(r => r.json()))
                setRegData(data)
                setBoothVendors(data[0].data.length)
                setApprovedVendors(data[0].data.filter((vendor: any) => vendor.approved).length)
                setVisitors(data[1].data.length)
                setSponsors(data[2].data.length)
                setApprovedSponsors(data[2].data.filter((sponsor: any) => sponsor.approved).length)
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
        {/* <h1 className='text-center text-4xl font-light mt-5'>AMEC</h1> */}
        <div className='w-full flex justify-center flex-wrap gap-8' >
            <Link href='/dashboard/vendors' className='flex-1' title='vendors'>
                <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{boothVendors}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Total Vendors Registered</div>
                </div>
            </Link>
            <Link href='/dashboard/vendors/approved' className='flex-1' title='vendors'>
                <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{approvedVendors}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Approved Vendors</div>
                </div>
            </Link>
        </div>
        <div className='w-full flex justify-center flex-wrap gap-8' >
            <Link href='/dashboard/sponsors' title='sponsors' className='flex-1'>
                <div className="min-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{sponsors}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Sponsors Registrants</div>
                </div>
            </Link>
            <Link href='/dashboard/sponsors/approved' title='approved sponsors' className='flex-1'>
                <div className="min-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{approvedSponsors}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Approved Sponsors</div>
                </div>
            </Link>
        </div>
        <div className='w-full flex justify-center flex-wrap gap-8' >
            {/* <Link href='/startups' title='startups'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{startups}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Startup Registrants</div>
                </div>
            </Link> */}
            <Link href='/dashboard/visitors' title='visitors' className='flex-1'>
                <div className="h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#050752] font-bold">{visitors}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Visitor Registrants</div>
                </div>
            </Link>
            
            {/* <Link href='/workshop' title='workshop'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{workshops}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Workshop Registrants</div>
                </div>
            </Link>
            <Link href='/lanparty' title='lanparty'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{lanParties}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">LAN Party Registrants</div>
                </div>
            </Link>
            <Link href='/hackathon' title='hackathon'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{hackathons}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">Hackathon Registrants</div>
                </div>
            </Link>
            <Link href='/ctf' title='ctf'>
                <div className="max-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                    <div className="text-6xl text-[#4eaee5] font-bold">{ctfs}</div>
                    <div className="text-2xl text-gray-600 text-center font-light">CTF Registrants</div>
                </div>
            </Link> */}
        </div>
    </div>
  )
}
