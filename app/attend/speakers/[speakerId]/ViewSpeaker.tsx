'use client'
// import speakers from "@/data/speakers"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import useFetch from "@/hooks/useClientFetch"

export default function ViewSpeaker() {
    const { speakerId } = useParams()
    const [speaker, setSpeaker] = useState<any>()
    const { data: speakers = [], error } = useFetch(`speakers`)

    useEffect(() => {
        if (speakerId && speakers) {
            setSpeaker(speakers?.find((speaker: any) => speaker._id === speakerId))
        }
    }, [speakerId, speakers]);
    
  return (
    <div className="w-full h-screen flex bg-gradient-to-br from-[#050752] to-[#4EAEE5]">
        <div className="group relative w-1/2 h-full">
            <div className="absolute z-10 w-full h-full bg-[#05075288] duration-300 hover:bg-transparent "></div>
            <Image className="relative w-full h-full object-cover brightness-75 group-hover:brightness-100 hue-rotate-[180deg] duration-300 group-hover:hue-rotate-0" src={speaker?.profile_pic} alt={speaker?.first_name} width={1280} height={720} />
        </div>
        <div className="w-1/2 h-full flex flex-col py-40 px-20">
            <p className="text-base font-light text-gray-400 mb-4">{speaker?.type}</p>
            <h2 className="text-5xl font-black text-white mb-4">{speaker?.first_name} {speaker?.last_name}</h2>
            <div className="w-28 h-[5px] rounded-full bg-[#78e0f4] mb-4"></div>
            <p className="text-lg font-medium text-gray-400 mb-4">{speaker?.job_title} of {speaker?.company_name}</p>
            <p className="text-lg font-light text-gray-400 mb-10">{speaker?.bio}</p>
            <Link href={"/register"} className="w-fit px-8 py-3 rounded-full text-lg font-bold bg-transparent hover:bg-[#78e0f4] text-white hover:text-white duration-300 border border-[#78e0f4]">Register Now!</Link>
        </div>
    </div>
  )
}
