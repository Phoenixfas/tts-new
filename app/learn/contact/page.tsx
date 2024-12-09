import Hero from '@/components/Hero'
import React from 'react'
import Info from './Info'
import Message from './Message'
import Map from './Map'
// import ParticlesBg from '@/components/ParticlesBg'

export default function page() {
  return (
    <div className='relative w-full min-h-screen'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <Hero img='/images/pageshero/ethiopia.jpg' title='Contact Us' />
        <div className=" relative flex flex-col lg:flex-row w-full py-20 px-5 md:px-10 lg:px-20 xl:px-40 gap-10">
            <Info />
            <Message />
        </div>
        <Map />
    </div>
  )
}
