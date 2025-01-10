'use client'
import {useEffect, useState} from 'react'
import conferenceAgenda from '@/data/conferenceAgenda'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { changeConfDay } from '@/redux/slices/confDaySlice' 

export default function DateWidget() {
    // const [activeDate, setActiveDate] = useState<any>()
    const dispatch = useAppDispatch()
    const confDay = useAppSelector((state) => state.confDay.value)


    return (
        <div className='w-full py-10 px-10 md:px-20'>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10">

                {conferenceAgenda?.map((agenda, index) => (
                    <div key={index} className={`group w-full sm:w-fit justify-between sm:justify-start p-2 flex items-center border border-[#050752] ${confDay === index+1 ? "bg-white" : ""} hover:bg-white duration-300 rounded-lg cursor-pointer`} onClick={() => dispatch(changeConfDay({value: index+1}))}>
                        <div className={`flex flex-col items-center text-xl ${confDay === index+1 ? "text-[#050752]" : "text-[#050752]"} group-hover:text-[#050752] font-bold px-3`}>
                            <p>DAY</p>
                            <p>{agenda.day}</p>
                        </div>
                        <div className={`flex flex-col items-center text-sm p-2  ${confDay === index+1 ? "bg-[#050752] text-white" : "text-white bg-gradient-to-tr from-[#050752] to-[#78E0F4]"} group-hover:bg-[#050752] group-hover:text-white rounded-lg px-5`}>
                            <p>{agenda.date.split(" ")[0]}</p>
                            <p>{agenda.date.split(" ")[2]} {agenda.date.split(" ")[1]}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
