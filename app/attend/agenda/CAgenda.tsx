'use client'
import { useEffect, useState } from "react"
import conferenceAgenda from "@/data/conferenceAgenda"
import { useAppSelector } from '@/redux/hooks'
import { MdLocationPin } from "react-icons/md"

export default function CAgenda() {
    const [agendas, setAgendas] = useState<any[]>([])
    const confDay = useAppSelector((state) => state.confDay.value)

    useEffect(() => {
        if (conferenceAgenda) {
            const newAgendas = [];
            for (let i = 0; i < conferenceAgenda.length; i++) {
                newAgendas.push(...conferenceAgenda[i].sessions);
            }
            setAgendas(newAgendas);
        }
    }, [conferenceAgenda]);
    
    const getFullDay = (order: string) => {
        const day = conferenceAgenda.find((agd) => agd.sessions.find((act) => act.day === order));
        return day;
    }

    const locColor = (loc: string) => {
        switch (loc) {
            case "Main Hall":
                return "bg-[#ffcc00]";
            case "Exhibition Hall":
                return "bg-purple-300";
            case "Business Lounge":
                return "bg-green-300";
            case "Cyber Drill Corner":
                return "bg-red-300";
            case "Hackathon Corner":
                return "bg-blue-300";
            default:
                return "bg-[#78E0F4]";
        }
    }
    
    
    return (
        <div className="w-full px-5 sm:px-20 pb-10">
            <div className="w-full flex flex-col gap-5">

                {agendas.filter((a) => a.day === confDay.toString()).map((agenda, index) => (
                    <div key={index} id={`day-${agenda.day}`} className="p-3 flex flex-col gap-5 border border-[#050752] rounded-md text-white">
                        <div className="flex items-center gap-3">
                            <div className="p-1 rounded-sm bg-[#4EAEE5]">{agenda.time}</div>
                            <div className="text-[#050752]">{getFullDay(agenda?.day)?.date}</div>
                            <div className={`relative w-fit px-5 py-1 border-2 border-[#050752] rounded-sm text-[#050752] `}>{agenda.location === "Main Hall" ? "Paid" : "Free"}</div>
                        </div>
                        {agenda.location && <div className={`relative flex flex-col gap-3 ${agenda.activityDetails && "p-3 border border-[#050752] rounded-md"}`}>
                            <div className={`relative flex flex-col md:flex-row md:items-center gap-3 p-3 rounded-lg `}>
                                
                                <div className={`p-2 rounded-md ${locColor(agenda.location)} w-fit text-[#050752] flex items-center gap-1`}><MdLocationPin /> {agenda.location}</div>
                                <div className="w-fit text-[#050752]">{agenda.activity}</div>
                                <div className="w-fit text-[#050752]">{agenda.activityDetails?.type}</div>
                            </div>
                            {agenda.activityDetails && <div className="flex flex-col gap-2 text-[#050752]">
                                <h3 className="font-bold text-2xl">{agenda.activityDetails.name}</h3>
                                <p>{agenda.activityDetails.desc}</p>
                                
                                <h3 className="font-bold uppercase">Moderator</h3>
                                <p>{agenda.activityDetails.moderator}</p>
                            </div>}
                        </div>}
                        {agenda.locations && agenda.locations.map((loc: any, index: any) => (
                            <div key={index} className={`relative flex flex-col md:flex-row md:items-center gap-3`} >
                                <div className={`p-2 rounded-md ${locColor(loc.area)} w-fit text-[#050752] text-lg flex items-center gap-1`}><MdLocationPin /> {loc.area}</div>
                                <div className=" w-fit text-[#050752]">{loc.activity}</div>
                            </div>
                        ))}
                        {agenda.note && 
                            <ul className="flex items-center gap-3">
                                <li className="p-1 w-fit text-[#050752]">● {agenda.note}</li>
                            </ul>
                        }
                        {agenda.notes && agenda.notes.map((note: string, index: any) => (
                            <ul key={index} className="flex items-center gap-3">
                                <li className="p-1 w-fit text-[#050752]">● {note}</li>
                            </ul>
                        ))}

                        <div className="flex flex-col gap-2 text-[#050752]">
                            <h3 className="font-bold">{agenda.details}</h3>
                            {/* <div dangerouslySetInnerHTML={{__html: agenda?.description}}></div> */}
                        </div>
                        {/* <div className="flex flex-col gap-2 text-[#050752]">
                            <h3 className="font-bold uppercase">Type</h3>
                            <p>{agenda.type}</p>
                        </div> */}
                        {/* <div className="flex flex-col gap-2 text-[#050752]">
                            <h3 className="font-bold uppercase">Moderators</h3>
                            <p>{agenda.moderator}</p>
                        </div> */}
                    </div>
                ))}

            </div>
        </div>
    )
}
