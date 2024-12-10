// import ParticlesBg from '@/components/ParticlesBg'
import ViewExhibitor from './ViewExhibitor'
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ exhId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata ): Promise<Metadata> {
  // read route params
  const blogId = (await params).exhId
 
  // fetch data
  const response = await fetch(`${process.env.PUBLIC_BASE_URL}/api/exhibitors/${blogId}`).then((res) => res.json())
  const blog = response.data
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: "TTS Exhibitor - " + blog.company_name,
    description: blog?.description?.slice(0, 150),
    openGraph: {
      images: [blog.logo, ...previousImages],
    },
  }
}

export default function page() {
  return (
    <div className='relative w-full min-h-screen'>
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <ViewExhibitor />
    </div>
  )
}
