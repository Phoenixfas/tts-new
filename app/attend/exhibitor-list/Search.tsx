'use client'
import { useState, useEffect } from "react"
import useFetch from "@/hooks/useClientFetch"
import { useRouter } from 'next/navigation'
import Link from "next/link"

export default function Search() {
    const router = useRouter()
    const { data: e = [], error } = useFetch('exhibitors')

    const [filteredData, setFilteredData] = useState([]);
    const [word, setWord] = useState("");
    const [toggleFocus, setToggleFocus] = useState(false)

    const clearSearch = () => {
      setFilteredData([])
      setWord("")
    }
  

  const checkEmpty = (e: any) => {
      if(e.target.value === "") {
          setFilteredData([])
          setWord("")
      }
  }

  useEffect(() => {
    if (word.trim() === '') {
      setFilteredData([]);
    } else {
      if(e){
        setFilteredData(
          e.filter((exhibitor: any) =>
            exhibitor.company_name.toLowerCase().includes(word.toLowerCase())
          )
        );
      }
    }
  }, [word, e]);
  
  return (
    <div className="relative w-full h-fit flex-[.2] flex flex-col gap-3">
      <div className='w-full h-fit border border-white rounded-md p-2 flex flex-col gap-5'>
          <p className='text-sm text-white'>Refine the list (min. 2 characters)</p>
          <input type="text" placeholder="Search" className='w-full bg-transparent text-[#78e0f4] placeholder-white placeholder:text-sm focus:border-[#78e0f4] duration-300 p-2 border rounded-md border-white outline-none' value={word} onChange={(e) => setWord(e.target.value)} onKeyDown={checkEmpty} onFocus={() => setToggleFocus(true)} onBlur={() => setTimeout(() => setToggleFocus(false), 500 )} />
      </div>
      {filteredData.length > 0 && toggleFocus && (
            <div className="w-full bg-white rounded-xl p-3 flex flex-col" >
                {filteredData.slice(0, 10).map((exhibitor: any, index: any) => (
                    <Link href={`/attend/exhibitor-list/${exhibitor._id}`} className='px-5 py-3 duration-300 hover:bg-gray-100 hover:shadow-md rounded-xl' key={index}>
                            {exhibitor.company_name.substr(0, 50)}
                    </Link>
                ))}
            </div>
        )}
    </div>
  )
}
