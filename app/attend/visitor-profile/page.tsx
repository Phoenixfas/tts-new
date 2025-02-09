import Hero from '@/components/Hero'
import VisitorProfile from './VisitorProfile'
// import ParticlesBg from '@/components/ParticlesBg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TTS - Visitor Profile',
  description: 'Tech Trade Show Visitor Profile',
}

export default function page() {
  return (
    <div className='relative w-full min-h-[100vh]'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <Hero img='/images/pageshero/visitors.JPG' title='Visitor Profile' />
        <VisitorProfile />
    </div>
  )
}
