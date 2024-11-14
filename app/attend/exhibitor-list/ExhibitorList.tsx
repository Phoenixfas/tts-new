'use client'
// import exhibitors from "@/data/exhibitors"
import Image from "next/image"
import Link from "next/link"
import useFetch from "@/hooks/useClientFetch"
import { useEffect, useState } from "react"

export default function ExhibitorList() {
    const { data: e = [], error } = useFetch('exhibitors')
    const [exhibitors, setExhibitors] = useState([])

    useEffect(() => {
        if (e) {
            setExhibitors(e.filter((d: any) => d.approved === true))
        }
    }, [e])
  return (
    <div className='flex-[.8] flex flex-col gap-5'>
        <p className='text-xl font-bold text-white'>Exhibitors</p>
        <div className="flex flex-wrap gap-5">
            {exhibitors && exhibitors?.map((exhibitor: any, index: any) => (
                <Link href={`/attend/exhibitor-list/${exhibitor._id}`} key={index} className='md:max-w-[300px] w-full h-[200px] bg-white rounded-md flex flex-col p-3 gap-3  duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white'>
                    <div className="w-full h-[100px] rounded-md overflow-hidden">
                        <Image className="w-full h-full object-cover" src={exhibitor.logo} alt={exhibitor.company_name} width={500} height={300} />
                    </div>
                    <p className="text-[#050752] text-xl font-light">{exhibitor.company_name}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}
