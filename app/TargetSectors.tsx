import sectors from "@/data/sectors"
import Image from "next/image"

export default function TargetSectors() {
  return (
    <div className="relative w-full flex flex-col items-center px-40 py-20 pt-40 gap-20">
        <h2 className="relative text-8xl font-black text-white">Target Sectors</h2>
        <div className="flex flex-wrap justify-center gap-5">
            {sectors && sectors?.map((sector, idx) => (
                <div key={idx} className="flip-box">
                    <div className="relative flip-box-inner w-[250px] h-[350px] flex flex-col items-center justify-center text-center gap-5">
                        <div className="absolute w-full h-full flex items-center justify-center flip-box-front">
                            <Image className="absolute object-cover w-full h-full rounded-xl brightness-75" src={sector?.image} alt={sector?.name} width={500} height={900} />
                            <h3 className="relative w-full px-5 text-4xl font-black text-white">{sector?.name}</h3>
                        </div>
                        <div className="absolute w-full h-full flex items-center justify-center flip-box-back">
                            <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#050752] to-[#4EAEE5]"></div>
                            <p className="relative w-full px-5 text-base font-normal text-white">{sector?.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
