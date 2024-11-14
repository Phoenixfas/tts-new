'use client'
// import speakers from "@/data/speakers"
import Image from "next/image"
import Link from "next/link"
import useFetch from "@/hooks/useClientFetch"

export default function SpeakersList() {
    const { data: speakers = [], error } = useFetch('speakers')
  return (
    <div className="w-full px-5 py-20 flex flex-col items-center">
        <div className="max-w-[1200px] flex flex-wrap justify-center gap-10">
            {speakers && speakers?.map((speaker: any, index: any) => (
                <Link href={`/attend/speakers/${speaker._id}`} key={index} className="group relative w-[500px] h-[300px] rounded-md overflow-hidden">
                    <Image className="absolute w-full h-full object-cover brightness-75 group-hover:brightness-50 hue-rotate-[180deg] duration-300 group-hover:hue-rotate-0" src={speaker.profile_pic} alt={speaker.first_name} width={800} height={500}/>
                    <div className="absolute w-full h-full bg-[#4EAEE588]  duration-300 group-hover:bg-transparent "></div>
                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-5">
                        <p className="text-lg font-medium text-white">{speaker.type}</p>
                        <h2 className="text-4xl font-black text-white">{speaker.first_name} {speaker.last_name}</h2>
                        <Link href={`/attend/speakers/${speaker._id}`} className="text-lg font-bold text-white hover:text-[#78e0f4] duration-300 py-3 border-t-4 border-[#78e0f4]">Learn More</Link>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
