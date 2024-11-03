'use client'
import { useAppSelector } from "@/redux/hooks"
import useFetch from "../../../../hooks/useFetch"
import { useState, useEffect } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { FaRegCheckCircle } from 'react-icons/fa'

export default function UpdateExhibitor({ exhibitorId }: { exhibitorId: any }) {
  const { data, error, loading } = useFetch(`exhibitors/${exhibitorId}`)

  const [description, setDescription] = useState("")

  const [sector, setSector] = useState("")
  const [sectors, setSectors] = useState<any>([])

  const [vendor_loc, setVendorLoc] = useState("")

  const [product_name, setProductName] = useState("")
  const [product_image, setProductImage] = useState("")
  const [products, setProducts] = useState<any>([])

  const [video, setVideo] = useState("")
  const [videos, setVideos] = useState<any>([])

  const token = useAppSelector(state => state.login.admin)

  const updateExhibitor = async (e: any) => {
    e.preventDefault()
    // @ts-ignore
    const img: any = document.getElementById("image").files[0]
    const imgData = new FormData()
    imgData.append('file', img)
    imgData.append('upload_preset', 'afriopia')

    const res = await fetch('https://api.cloudinary.com/v1_1/drp73bqti/image/upload', {
        method: 'POST',
        body: imgData
    })
    if(!res.ok) {
        return
    }
    const json = await res.json()

    if(json.secure_url === "") {
        return
    }
    if(json.secure_url !== "") {
        const image = json.secure_url
        await fetch(`/api/profile/exhibitor/${exhibitorId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            description,
            sectors,
            vendor_loc,
            products,
            videos,
            logo: image
          })
        })
        // window.location.reload()
    }
  }
  
  useEffect(() => {
    if (data) {
      console.log(data)
      setDescription(data.description)
      setSectors(data.sectors)
      setVendorLoc(data.vendor_loc)
      setProducts(data.products)
      setVideos(data.videos)
    }
  }, [data])
  return (
    <div className="w-full flex py-16">
      <div className='relative w-full h-fit flex flex-col bg-white rounded-2xl p-20'>
      {data &&
        <div className=' w-full'>
          <div className="w-full flex flex-col mb-5">
              <label>Logo</label>
              <input placeholder="Upload Logo" required type="file" accept="image/*" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="image" />
          </div>
          <div className="w-full flex flex-col mb-5">
              <label className="mb-3" htmlFor="description">Description*</label>
              <textarea name="description" id="description" placeholder='(Required)' required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="w-full flex flex-col mb-5">
              <label className="mb-3" htmlFor="sectors">Sectors</label>
              {sectors && sectors.length > 0 && <div className='text-xl font-light text-black '>{sectors.map((s: any) => s + ", ")}</div>}
              <input placeholder="Enter Sector" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="sectors" value={sector} onChange={(e) => setSector(e.target.value)} />
              <button className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-start mt-2 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                setSectors([...sectors, sector])
                setSector("")
              }}>+</button>
          </div>
          <div className="w-full flex flex-col mb-5">
              <label className="mb-3" htmlFor="vendor_loc">Vendor Location</label>
              <input placeholder="Enter Vendor Location" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="vendor_loc" value={vendor_loc} onChange={(e)=> setVendorLoc(e.target.value)} />
          </div>
          <div className="w-full flex flex-col mb-5">
              <label className="mb-3" htmlFor="product_name">Product Name</label>
              {products && products.length > 0 && <div className='text-xl font-light text-black '>{products.map((p: any) => p.name + ", ")}</div>}
              <input placeholder="Enter Product Name" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" value={product_name} onChange={(e) => setProductName(e.target.value)} />
              <input placeholder="Enter Product Image" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none mt-2" value={product_image} onChange={(e) => setProductImage(e.target.value)} />
              <button className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-start mt-2 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                setProducts([...products, { name: product_name, image: product_image }])
                setProductName("")
                setProductImage("")
              }}>+</button>
          </div>
          <div className="w-full flex flex-col mb-5">
              <label className="mb-3" htmlFor="video">Video</label>
              {videos && videos.length > 0 && <div className='text-xl font-light text-black '>{videos.map((s: any) => s + ", ")}</div>}
              <input placeholder="Enter Video Link" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" value={video} onChange={(e) => setVideo(e.target.value)} />
              <button className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-start mt-2 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                setVideos([...videos, video])
                setVideo("")
              }}>+</button>
          </div>

          <button className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={updateExhibitor}><FaRegCheckCircle /> UPDATE Exhibitor</button>

        </div>
        
      }
      </div>
    </div>
  )
}
