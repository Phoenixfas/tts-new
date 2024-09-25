import Link from 'next/link'
import sponsors from '@/data/sponsors'
import Image from 'next/image'

export default function Sponsors() {
  return (
    <div className='relative w-full px-12 pt-28'>
        <div className="w-full flex flex-col gap-10 px-8 mb-12">
            <h3 className='text-white text-5xl max-w-[1100px]'>We are proud to have worked with some of the most outstanding organizations to turn their events into epic tech experiences.</h3>
            <Link href={"/"} className='group relative w-fit px-5 py-2 border border-[#78e0f4] rounded-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] overflow-hidden'>
                <div className="absolute top-full group-hover:top-0 duration-300 left-0 w-full h-full bg-[#78e0f4]"></div>
                <p className='relative text-lg text-white group-hover:text-[#050752] duration-300'>Lets make it happen</p>
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
