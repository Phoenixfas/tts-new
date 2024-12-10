// import ParticlesBg from "@/components/ParticlesBg"
import ViewWhyExhibit from "./ViewWhyExhibit"
import whyexhibit from "@/data/whyexhibit";
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ whyId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata ): Promise<Metadata> {
  // read route params
  const blogId = (await params).whyId
 
  const blog = whyexhibit?.find((why) => why.id === blogId)
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: "Why Exhibit TTS - " + blog?.title,
    description: blog?.description?.slice(3, 150),
    openGraph: {
      images: blog && blog.image ? [blog.image, ...previousImages] : previousImages,
    },
  }
}

export default function page() {
  return (
    <div className="relative w-full min-h-screen">
        {/* <ParticlesBg color="#78e0f4" amount={100} /> */}
        <ViewWhyExhibit />
    </div>
  )
}
