import exhibitors from "@/data/exhibitors"
import Image from "next/image"
import Link from "next/link"

export default function ExhibitorList() {
  return (
    <div className='flex-[.8] flex flex-col gap-5'>
        <p className='text-xl font-bold text-white'>Exhibitors</p>
        <div className="flex flex-wrap gap-5">
            {exhibitors && exhibitors?.map((exhibitor, index) => (
                <Link href={`/attend/exhibitor-list/${exhibitor.id}`} key={index} className='w-[300px] h-[200px] bg-white rounded-md flex flex-col p-3 gap-3  duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white'>
                    <div className="w-full h-[100px] rounded-md overflow-hidden">
                        <Image className="w-full h-full object-cover" src={exhibitor.logo} alt={exhibitor.name} width={500} height={300} />
                    </div>
                    <p className="text-[#050752] text-xl font-light">{exhibitor.name}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}
