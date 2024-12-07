'use client'
// import blogs from "@/data/blogs"
import Image from "next/image"
import Link from "next/link"
import useFetch from "@/hooks/useClientFetch"

export default function BlogList() {
  const { data: blogs = [], loading, error } = useFetch('news')
  return (
    <div className=" relative w-full flex items-center justify-center py-10 px-10 ">
        {loading && (
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 spinner border-[#050752_!important] border-t-[transparent_!important]"></div>
            </div>
        )}
        <div className="w-full lg:w-fit flex flex-wrap justify-center gap-10">
            {blogs && blogs?.map((blog: any, index: any) => (
                <Link href={`/media/blogs/${blog._id}`} key={index} className="min-w-[100%_!important] lg:min-w-[400px_!important] lg:max-w-[400px_!important] lg:w-[400px] flex flex-col">
                    <Image className='w-full max-h-[300px] object-cover mb-10' src={blog.image} alt={blog.title} width={400} height={300} />
                    <h3 className='text-[#4eaee5] hover:text-[#050752] duration-300 text-2xl mb-7 mokoto'>{blog.title}</h3>
                    <p className='text-gray-500 text-lg mb-7'>{blog.snippet.slice(0, 90)} {blog.snippet.length > 90 ? "..." : ""}</p>
                    <div className='w-fit px-8 py-3 rounded-full bg-[linear-gradient(to_bottom_right,_#050752,_#4EAEE5)] text-white hover:bg-transparent hover:text-[#78e0f4] duration-300 overflow-hidden mokoto text-[0.7rem]'>Read more</div>
                </Link>
            ))}
        </div>
    </div>
  )
}
