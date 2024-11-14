'use client'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { toggleRegModal } from '../../../redux/slices/regModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { CgCloseO } from 'react-icons/cg'
import { FaTrash, FaRegCheckCircle } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewRegModal({path}: any) {
    const dispatch = useAppDispatch()
    const regModalToggle = useAppSelector(state => state.regModalToggle.value)
    const regData = useAppSelector(state => state.activeVendor)
    const [type, setType] = useState('' as any)

    const token = useAppSelector((state) => state.login.admin)

  
    const approveReg = async (data: any) => {
        const res = await fetch(`/api/${path}/${data._id}/approve`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                ...data,
                approved: true
            })
        })
        const dataRes = await res.json()
        dispatch(toggleRegModal())
        window.location.reload()
    }

    const changeType = async (data: any) => {
        const res = await fetch(`/api/${path}/${data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                ...data,
                type: type
            })
        })
        const dataRes = await res.json()
        dispatch(toggleRegModal())
        window.location.reload()
    }

    const deleteReg = async (id: any) => {
        const res = await fetch(`/${path}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await res.json()
        console.log(data)
        dispatch(toggleRegModal())
    }

    const updateLogo = async (reg: any) => {
      // @ts-ignore
      const img: any = document.getElementById("image").files[0]
      const imgData = new FormData()
      imgData.append('file', img)
      imgData.append('upload_preset', 'amec24')

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
          const res = await fetch(`/api/${path}/${reg._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              ...reg,
              logo: image
            })
          })
          const data = await res.json()
          console.log(data)
          dispatch(toggleRegModal())
          window.location.reload()
      }
    }

  return (
    <>
      <AnimatePresence>
        {regModalToggle && (
            <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={`fixed z-10 top-0 blog-modal left-0 w-full h-screen bg-[#00000077] flex py-16 justify-center overflow-y-auto`}>
              <motion.div initial={{y: "100%"}} animate={{y: 0}}  transition={{duration: .3}} className='relative max-w-[800px] h-fit flex flex-col bg-white rounded-2xl p-20'>
                <div className="p-3 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xl cursor-pointer" onClick={() => dispatch(toggleRegModal())}>
                  <GrClose />
                </div>
                <div className=' w-full'>
                  {regData.logo && regData.logo !== "" && <Image src={regData.logo} alt={regData.first_name} width={400} height={400} className="rounded-2xl mt-5 mb-10 w-52 object-contain h-auto" />}
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>First Name</div>
                    <div className='text-xl font-light text-black '>{regData.first_name.charAt(0).toUpperCase() + regData.first_name.slice(1)}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Last Name</div>
                    <div className='text-xl font-light text-black '>{regData.last_name.charAt(0).toUpperCase() + regData.last_name.slice(1)}</div>
                  </div>
                  {/* <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Title</div>
                    <div className='text-xl font-light text-black '>{regData.title}</div>
                  </div> */}
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Company Name</div>
                    <div className='text-xl font-light text-black '>{regData.company_name}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Company Website</div>
                    <div className='text-xl font-light text-black '>{regData.company_website}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Email</div>
                    <div className='text-xl font-light text-black '>{regData.email}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Title</div>
                    <div className='text-xl font-light text-black '>{regData.title}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Country</div>
                    <div className='text-xl font-light text-black '>{regData.country}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>City</div>
                    <div className='text-xl font-light text-black '>{regData.region}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Phone</div>
                    <div className='text-xl font-light text-black '>{regData.phone}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Goal</div>
                    <div className='text-xl font-light text-black '>{regData.goal}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    {regData.type && <div className='text-xl font-bold text-black'>Type</div>}
                    <div className='text-xl font-light text-black '>{regData.type}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Product Category</div>
                    <div className='text-xl font-light text-black '>{regData.product_category}</div>
                  </div>

                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Approved</div>
                    <div className='text-xl font-light text-black '>{regData.approved ? <FaRegCheckCircle color='green' /> : <CgCloseO color='red' />}</div>
                  </div>

                </div>
                <hr />
                <br />
                <div className="w-full flex flex-col mb-5">
                    <label>Logo</label>
                    <input placeholder="Upload Logo" required type="file" accept="image/*" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#489b42] duration-300 outline-none" id="image" />
                </div>
                <div className="w-full flex flex-col mb-5">
                    <label>Change Type</label>
                    <select id="type" value={type} onChange={(e)=> setType(e.target.value)} required>
                      <option value={regData.type ? regData.type : ""}>{regData.type ? regData.type : "select"}</option>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="bronze">Bronze</option>
                    </select>
                </div>
                <hr />
                <button className="px-5 py-2 bg-blue-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  updateLogo(regData)
                }} ><FaRegCheckCircle /> Update Logo</button>
                <button className="px-5 py-2 bg-orange-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  changeType(regData)
                }} ><FaRegCheckCircle /> Change Type</button>
                {!regData.approved && <button className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  approveReg(regData)
                }} ><FaRegCheckCircle /> APPROVE Sponsor</button>}
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
