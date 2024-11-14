'use client'
import Link from 'next/link'
// import sponsors from '@/data/sponsors'
import Image from 'next/image'
import useFetch from '@/hooks/useClientFetch'

export default function Sponsors() {
    const { data: sponsors = [], error } = useFetch('sponsors')
  return (
    <div className='relative w-full px-5 sm:px-12 pt-28'>
        <div className="w-full flex flex-col gap-10 px-5 sm:px-8 mb-12">
            <h3 className='text-white text-4xl md:text-5xl max-w-[1100px]'>Honored to collaborate with industry leaders in transforming their visions into extraordinary tech-driven experiences.</h3>
            <Link href={"/exhibit/become-sponsor"} className='group relative w-fit px-5 py-2 border border-[#78e0f4] rounded-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] overflow-hidden'>
                <div className="absolute top-full group-hover:top-0 duration-300 left-0 w-full h-full bg-[#78e0f4]"></div>
                <p className='relative text-lg text-white group-hover:text-[#050752] duration-300'>Become a Sponsor</p>
            </Link>
        </div>
        <div className="w-full overflow-hidden">
            <div id='scroller' className="w-fit flex items-center gap-20">
                {sponsors && sponsors?.map((sponsor: any, index: any) => (
                    <div key={index} className="min-w-[100px] max-w-[100px] h-[200px] flex items-center justify-center">
                        <Image className='w-full h-full object-contain' src={sponsor.logo} alt={sponsor.company_name} width={100} height={100} />
                    </div>
                ))}
                {sponsors && sponsors?.map((sponsor: any, index: any) => (
                    <div key={index} className="min-w-[100px] max-w-[100px] h-[200px] flex items-center justify-center">
                        <Image className='w-full h-full object-contain' src={sponsor.logo} alt={sponsor.company_name} width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
