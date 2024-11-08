import blogs from "@/data/blogs"
import Image from "next/image"
import Link from "next/link"

export default function BlogList() {
  return (
    <div className="w-full flex items-center justify-center py-10 px-10 ">
        <div className="w-fit flex flex-wrap justify-center gap-10">
            {blogs?.map((blog, index) => (
                <Link href={`/media/blogs/${blog.id}`} key={index} className="min-w-[450px] max-w-[400px] flex flex-col">
                    <Image className='w-full max-h-[300px] object-cover mb-10' src={blog.image} alt={blog.title} width={400} height={300} />
                    <h3 className='text-[#78e0f4bb] hover:text-[#78e0f4ff] duration-300 text-4xl mb-7'>{blog.title}</h3>
                    <p className='text-white text-lg mb-7'>{blog.description}</p>
                    <div className='w-fit px-8 py-3 rounded-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] text-white hover:bg-transparent hover:text-[#78e0f4] duration-300 overflow-hidden'>Read more</div>
                </Link>
            ))}
        </div>
    </div>
  )
}
