'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'

interface Vendor {
  approved: boolean;
}

interface Sponsor {
  approved: boolean;
}

export default function Regs() {
    const token = useAppSelector((state) => state.login.admin)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [regData, setRegData] = useState<any[]>([])

    const [boothVendors, setBoothVendors] = useState(0)
    const [approvedVendors, setApprovedVendors] = useState(0)
    const [visitors, setVisitors] = useState(0)
    const [sponsors, setSponsors] = useState(0)
    const [approvedSponsors, setApprovedSponsors] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }

            try {
                const res = await Promise.all([
                    fetch('/api/exhibitors', config),
                    fetch('/api/visitors', config),
                    fetch('/api/sponsors', config),
                ])

                if (!res.every(r => r.ok)) {
                    setError('Error fetching data')
                    return
                }

                const data = await Promise.all(res.map(r => r.json()))

                setRegData(data)
                setBoothVendors(data[0].data.length)
                setApprovedVendors(data[0].data.filter((vendor: Vendor) => vendor.approved).length)
                setVisitors(data[1].data.length)
                setSponsors(data[2].data.length)
                setApprovedSponsors(data[2].data.filter((sponsor: Sponsor) => sponsor.approved).length)
            } catch (err) {
                console.error(err)
                setError('An error occurred while fetching data')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [token])

    // if (loading) {
    //     return (
    //         <div className='relative w-full h-full p-5 flex items-center justify-center'>
    //             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y- w-10 h-10 rounded-full border-[5px] border-r-transparent border-white animate-spin"></div>
    //         </div>
    //     )
    // }

    if (error) return <p>{error}</p>

    return (
        <div className='flex flex-col gap-8'>
            <hr />
            <div className='w-full flex justify-center flex-wrap gap-8'>
                <Link href='/dashboard/vendors' className='flex-1' title='vendors'>
                    <div className="min-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                        <div className="text-6xl text-[#050752] font-bold">{boothVendors}</div>
                        <div className="text-2xl text-gray-600 text-center font-light">Total Vendors Registered</div>
                    </div>
                </Link>
                <Link href='/dashboard/vendors/approved' className='flex-1' title='approved vendors'>
                    <div className="min-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                        <div className="text-6xl text-[#050752] font-bold">{approvedVendors}</div>
                        <div className="text-2xl text-gray-600 text-center font-light">Approved Vendors</div>
                    </div>
                </Link>
            </div>
            <div className='w-full flex justify-center flex-wrap gap-8'>
                <Link href='/dashboard/sponsors' className='flex-1' title='sponsors'>
                    <div className="min-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                        <div className="text-6xl text-[#050752] font-bold">{sponsors}</div>
                        <div className="text-2xl text-gray-600 text-center font-light">Sponsors Registrants</div>
                    </div>
                </Link>
                <Link href='/dashboard/sponsors/approved' className='flex-1' title='approved sponsors'>
                    <div className="min-w-72 h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                        <div className="text-6xl text-[#050752] font-bold">{approvedSponsors}</div>
                        <div className="text-2xl text-gray-600 text-center font-light">Approved Sponsors</div>
                    </div>
                </Link>
            </div>
            <div className='w-full flex justify-center flex-wrap gap-8'>
                <Link href='/dashboard/visitors' className='flex-1' title='visitors'>
                    <div className="h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                        <div className="text-6xl text-[#050752] font-bold">{visitors}</div>
                        <div className="text-2xl text-gray-600 text-center font-light">Visitor Registrants</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
