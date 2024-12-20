'use client'
import Image from "next/image";
import style from "@/styles/Exhibit.module.css";
import whyVisit from "@/data/whyVisit";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewWhyVisit() {
    const { whyId } = useParams();
    const [why, setWhy] = useState<any>();

    useEffect(() => {
        if (whyId) {
            setWhy(whyVisit.find((why) => why.id === whyId))
        }
    }, [whyId]);
    
  return (
    <div className={style.service}>
        {why && (
            <div className={style.serviceHolder}>
                <h1>{why.title}</h1>
                <Image
                    src={why.image}
                    alt={why.title}
                    width={600}
                    height={450}
                    priority
                    unoptimized
                    quality={100}
                />
                {why.sub && <h2 className="text-xl font-bold mt-10 text-[#050752]">{why.sub}</h2>}
                <div className="text-base text-[#050752] mt-5" >
                    <div dangerouslySetInnerHTML={{ __html: why.description }} />
                </div>
            </div>
        )}
    </div>
  )
}
