import Image from "next/image"
import style from "../../../styles/Exhibit.module.css"
import { FaChevronRight } from "react-icons/fa"
import Link from "next/link"
import whyexhibit from "../../../data/whyexhibit"

export default function WhyExhibit() {
  return (
    <div className={style.services__cards}>

        {whyexhibit && whyexhibit?.map((item, index) => (
            <div key={index} className={style.card}>
                <div className={style.card__top}>
                    <Image src={item.image} alt={item.title} width={500} height={350} unoptimized priority quality={100} />
                </div>
                <div className={`${style.card__bottom}`}>
                    <h3>{item.title}</h3>
                    {/* <GiCargoShip size={80} className={style.card__icon} /> */}
                    <div dangerouslySetInnerHTML={{ __html: item.description.slice(0, 100) + "..." }}></div>
                    <Link href={`/exhibit/why-exhibit/${item.id}`}><div className={style.button}><FaChevronRight size={30} color="#fff" /></div></Link>
                </div>
            </div>
        ))}

    </div>
  )
}