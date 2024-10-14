'use client'
import Image from "next/image";
import style from "@/styles/Exhibit.module.css";
import whyexhibit from "@/data/whyexhibit";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewWhyExhibit() {
    const { whyId } = useParams();
    const [why, setWhy] = useState<any>();

    useEffect(() => {
        if (whyId) {
            setWhy(whyexhibit.find((why) => why.id === whyId))
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
                <div className={style.serviceContent}>
                    <div dangerouslySetInnerHTML={{ __html: why.description }} />
                </div>
            </div>
        )}
    </div>
  )
}
