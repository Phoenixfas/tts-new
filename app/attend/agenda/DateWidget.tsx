'use client'
import {useEffect, useState} from 'react'
import conferenceAgenda from '@/data/conferenceAgenda'

export default function DateWidget() {
    const [activeDate, setActiveDate] = useState<any>()


    return (
        <div className='w-full py-10 px-20 mb-20'>
            <div className="flex items-center justify-center gap-10">

                {conferenceAgenda?.map((agenda, index) => (
                    <div key={index} className={`group p-2 flex items-center border border-white ${activeDate === index.toString() ? "bg-white" : ""} hover:bg-white duration-300 rounded-lg cursor-pointer`} onClick={() => setActiveDate(index.toString())}>
                        <div className={`flex flex-col items-center text-xl ${activeDate === index.toString() ? "text-[#050752]" : "text-white"} group-hover:text-[#050752] font-bold px-3`}>
                            <p>DAY</p>
                            <p>{agenda.day}</p>
                        </div>
                        <div className={`flex flex-col items-center text-sm p-2  ${activeDate === index.toString() ? "bg-[#050752] text-white" : "text-[#050752] bg-white"} group-hover:bg-[#050752] group-hover:text-white rounded-lg px-5`}>
                            <p>{agenda.date.split(" ")[0]}</p>
                            <p>{agenda.date.split(" ")[2]} {agenda.date.split(" ")[1]}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
