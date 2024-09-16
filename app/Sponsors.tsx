import Link from 'next/link'
import sponsors from '@/data/sponsors'
import Image from 'next/image'

export default function Sponsors() {
  return (
    <div className='relative w-full px-20 py-28'>
        <div className="w-full flex flex-col gap-10 mb-12">
            <h3 className='text-[#78e0f4] text-5xl max-w-[1100px]'>We are proud to have worked with some of the most outstanding organizations to turn their events into epic tech experiences.</h3>
            <Link href={"/"} className='group relative w-fit px-5 py-2 border-2 border-[#78e0f4] rounded-full bg-[#78e0f4] overflow-hidden'>
                <div className="absolute top-full group-hover:top-0 duration-300 left-0 w-full h-full bg-[#050752]"></div>
                <p className='relative text-lg text-[#050752] group-hover:text-[#78e0f4] duration-300'>Lets make it happen</p>
            </Link>
        </div>
        <div className="w-full overflow-hidden">
            <div id='scroller' className="w-fit flex items-center gap-20">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="min-w-[100px] max-w-[100px] h-[200px] flex items-center justify-center">
                        <Image className='w-full h-full object-contain' src={sponsor.logo} alt={sponsor.name} width={100} height={100} />
                    </div>
                ))}
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="min-w-[100px] max-w-[100px] h-[200px] flex items-center justify-center">
                        <Image className='w-full h-full object-contain' src={sponsor.logo} alt={sponsor.name} width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
