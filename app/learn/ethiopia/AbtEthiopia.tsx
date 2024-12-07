import style from "../../../styles/Learn.module.css";
import Image from "next/image";

export default function AbtEthiopia() {
  return (
    <div className={style.rwanda}>
        <div className={style.rwanda__bottom}>
            <div className={`${style.rwanda__bottom__row} flex flex-col lg:flex-row lg:items-center gap-12 bg-[linear-gradient(to_top_right,_#78E0F4,_#4EAEE5,_#050752)] text-white p-[20px_!important] sm:p-12`}>
                <div className={style.rwanda__bottom__col}>
                    <h1 className="mokoto">Why Ethiopia?</h1>
                    <p>
                    Ethiopia is a land of immense opportunity, with a vibrant, fast-growing market and a youthful population ready to embrace innovation. The government&apos;s bold reforms are paving the way for industrialization, infrastructure development, and digital transformation. The Digital Ethiopia 2025 strategy exemplifies the nation&apos;s dedication to leveraging technology for economic progress. Coupled with a robust agricultural sector and a burgeoning tech ecosystem, Ethiopia offers boundless potential in areas like AI,  Agritech, Healthtech, and Fintech. Situated in the strategic Horn of Africa, Ethiopia enjoys access to regional markets and trade routes, bolstered by significant investments in infrastructure and renewable energy. With expanding internet access and the liberalization of key industries, Ethiopia is swiftly evolving into a tech powerhouse, drawing in investors keen on sustainable growth in Africa.
                    </p>
                </div>
                <div className={style.rwanda__bottom__col}>
                    <Image
                        src="/images/learn/addis.jpg"
                        alt="addis ababa ethiopia"
                        width={2000}
                        height={2000}
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>

        <div className="w-full h-[500px] flex flex-col items-center mt-10">
            <h2 className="text-2xl text-[#050752] text-center font-bold mokoto">Ethiopia at a glance</h2>
            <Image className="w-full h-full object-contain" src="/images/learn/glance.jpg" alt="ethiopia" width={2000} height={2000} priority quality={100} />
        </div>

        <div className={style.rwanda__top}>
            <div className="flex flex-col text-center items-center text-[#050752] py-20 px-5 max-w-[1200px] gap-5">
                <h1 className="text-2xl font-bold mb-5 mokoto">Growth of the East Africa Technology Industry </h1>
                <p className="text-lg font-light">
                    The technology industry in East Africa has been growing at a remarkable pace, spurred by increasing mobile penetration, digital financial services, startup ecosystems, and government-backed digital initiatives.
                </p>
                <p className="text-lg font-light">
                    African tech startups raised over $4 billion in venture capital, with East Africa accounting for a significant portion.
                </p>
                <p className="text-lg font-light">
                    Visitor numbers at Tech Trade Show 2023 were over 20,000, showcasing the event&apos;s growing appeal to specialized technology professionals.
                </p>
                <p className="text-lg font-light">The technology market in East Africa holds great promise for both local and international investors looking to grow and thrive.</p>
            </div>
        </div>

        <div className={"w-full flex flex-col items-center gap-7 px-5 sm:px-24"}>
            <div className={`flex flex-col lg:flex-row-reverse lg:items-center gap-12 bg-[linear-gradient(to_bottom_left,_#78E0F4,_#4EAEE5,_#050752)] text-white p-5 sm:p-12`}>
                <div className={style.rwanda__bottom__col}>
                    <h1 className="text-2xl font-light mokoto">Millennium Hall, Ethiopia</h1>
                    <p className="text-justify">
                        Millennium Hall is one of the largest and most prestigious event venues in Ethiopia, located in the heart of Addis Ababa. It was inaugurated in 2007 to commemorate the Ethiopian Millennium and has since become a central hub for hosting international conferences, concerts, exhibitions, and high-profile events. The hall boasts a modern and spacious design, with a capacity of over 20,000 people, making it ideal for large gatherings such as trade shows, summits, and cultural celebrations.
                    </p>
                    <p className="text-justify">
                        Equipped with state-of-the-art facilities, Millennium Hall is a key destination for both local and international events, contributing to Addis Ababa&apos;s status as a major diplomatic and business hub in Africa. It has hosted significant events like the African Union summits, concerts by international artists, and large-scale exhibitions in sectors like technology, agriculture, and health. The venue&apos;s prime location near hotels, restaurants, and the Addis Ababa Bole International Airport adds to its appeal as a go-to destination for large events in Ethiopia.
                    </p>
                </div>
                <div className="max-w-[600px]">
                    <Image
                        className="rounded-3xl"
                        src="/images/learn/millennium.jpg"
                        alt="rwanda kigali"
                        width={2000}
                        height={2000}
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>

        <div className="w-full h-[500px] flex flex-col items-center mt-10">
            <h2 className="text-2xl text-[#050752] text-center font-bold mokoto">Ethiopia - land of origins</h2>
            <Image className="w-full h-full object-contain" src="/images/learn/origins.jpg" alt="land of origins" width={2000} height={2000} priority quality={100} />
        </div>

    </div>
  );
}
