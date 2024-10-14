import exProfile from "@/data/exProfile"

export default function ExhibitorProfile() {
  return (
    <div className="w-full py-10 px-5 flex flex-col items-center">
        <div className="max-w-[1000px] flex flex-wrap justify-center gap-10">
            {exProfile && exProfile?.map((item, index) => (
                <div key={index} className="max-w-[300px] p-5 rounded-xl border border-[#78e0f4] shadow-inner shadow-[#78e0f4]">
                    <p className="text-white text-lg">{item}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
