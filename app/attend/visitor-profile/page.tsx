import Hero from '@/components/Hero'
import VisitorProfile from './VisitorProfile'

export default function page() {
  return (
    <div className='w-full min-h-[100vh]'>
        <Hero img='https://picsum.photos/1923/1083' title='Visitor Profile' />
        <VisitorProfile />
    </div>
  )
}
