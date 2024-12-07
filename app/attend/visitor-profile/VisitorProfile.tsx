import viProfile from "@/data/viProfile"

export default function VisitorProfile() {
  return (
    <div className="relative w-full py-10 px-5 flex flex-col items-center">
        <div className="max-w-[1000px] flex flex-wrap justify-center gap-10">
            {viProfile && viProfile?.map((item, index) => (
                <div key={index} className="max-w-[300px] p-5 rounded-xl bg-gradient-to-tr from-[#050752] to-[#4eaee5] border border-[#78e0f4] shadow-inner shadow-[#78e0f4]">
                    <p className="text-white text-lg">{item}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
