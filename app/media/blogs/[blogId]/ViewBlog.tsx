'use client'
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import blogs from "@/data/blogs"
import Image from "next/image"

export default function ViewBlog() {
    const { blogId } = useParams()
    const [blog, setBlog] = useState<any>(null)

    const dateConverter = (date: any) => {
        const newDate = new Date(date);
        return newDate.toDateString();
    };

    useEffect(() => {
        if (blogId) {
            setBlog(blogs.find((blog) => blog.id === blogId))
        }
    }, [blogId]);
    
  return (
    <div className="w-full py-40 flex flex-col items-center bg-gradient-to-br from-[#050752] to-[#4EAEE5]">
        <div className="max-w-[800px] flex flex-col gap-5">
            <h1 className="text-5xl font-black text-white">{blog?.title}</h1>
            <div className="w-28 h-[5px] rounded-full bg-[#78e0f4]"></div>
            <p className="text-sm font-light text-gray-400">{blog?.author} | {dateConverter(blog?.date)}</p>
            <Image className="w-full h-[500px] object-cover rounded-md" src={blog?.image} alt={blog?.title} width={1920} height={1080} />
            <p className="text-lg font-medium text-white">{blog?.description}</p>
            <p className="text-lg font-light text-white">{blog?.content.split("\n").map((paragraph: string, index: number) => (
                <p key={index} className="text-base mb-2">
                    {paragraph}
                </p>
            ))}</p>
        </div>
    </div>
  )
}
