import sectors from "@/data/sectors"
import Image from "next/image"

export default function TargetSectors() {
  return (
    <div className="relative w-full flex flex-col items-center px-10 sm:px-40 py-20 gap-20">
        <h2 className="relative text-4xl text-center sm:text-5xl font-black text-[#050752] mokoto-mark drop-shadow-[0_0_10px_#78e0f4]">Target Sectors</h2>
        <div className="flex flex-wrap justify-center gap-5 w-full">
            {sectors && sectors?.map((sector, idx) => (
                <div key={idx} className="flip-box w-full sm:w-fit">
                    <div className="relative flip-box-inner w-full sm:w-[250px] h-[350px] flex flex-col items-center justify-center text-center gap-5">
                        <div className="absolute w-full h-full flex items-center justify-center flip-box-front">
                            <Image className="absolute object-cover w-full h-full rounded-xl brightness-75" src={sector?.image} alt={sector?.name} width={500} height={900} />
                            <h3 className="relative w-full px-5 text-2xl font-black text-white uppercase mokoto">{sector?.name}</h3>
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
