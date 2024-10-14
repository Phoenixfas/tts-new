'use client'
import { useState } from "react"

export default function Search() {
    const [keyword, setKeyword] = useState<string>("")
  return (
    <div className='flex-[.2] w-full h-fit border border-white rounded-md p-2 flex flex-col gap-5'>
        <p className='text-sm text-white'>Refine the list (min. 2 characters)</p>
        <input type="text" placeholder="Search" className='w-full bg-transparent text-[#78e0f4] placeholder-white placeholder:text-sm focus:border-[#78e0f4] duration-300 p-2 border rounded-md border-white outline-none' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
    </div>
  )
}
