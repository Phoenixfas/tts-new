'use client'
import { useEffect, useState } from "react"
import conferenceAgenda from "@/data/conferenceAgenda"

export default function CAgenda() {
    const [agendas, setAgendas] = useState<any[]>([])

    useEffect(() => {
        if (conferenceAgenda) {
            const newAgendas = [];
            for (let i = 0; i < conferenceAgenda.length; i++) {
                newAgendas.push(...conferenceAgenda[i].activities);
            }
            setAgendas(newAgendas);
        }
    }, [conferenceAgenda]);

    const getFullDay = (order: string) => {
        const day = conferenceAgenda.find((day) => day.activities.find((act) => act.order === order));
        return day;
    }

    return (
        <div className="w-full px-5 sm:px-20 pb-10">
            <div className="w-full flex flex-col gap-5">

                {agendas.map((agenda, index) => (
                    <div key={index} className="p-3 flex flex-col gap-7 border rounded-md text-white">
                        <div className="flex items-center gap-3">
                            <div className="p-1 rounded-sm bg-[#4EAEE5]">{agenda.time}</div>
                            <div className="">{getFullDay(agenda?.order)?.date}</div>
                        </div>
                        <div className="p-1 rounded-sm bg-[#78E0F4] w-fit text-[#050752]">{agenda.name}</div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold">{agenda.format}</h3>
                            {/* <div dangerouslySetInnerHTML={{__html: agenda?.description}}></div> */}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold uppercase">Moderators</h3>
                            <p>{agenda.moderator}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
