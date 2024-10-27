'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { toggleRegModal } from '../../../redux/slices/regModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { CgCloseO } from 'react-icons/cg'
import { FaTrash, FaRegCheckCircle } from 'react-icons/fa'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewRegModal({path}: any) {
    const dispatch = useAppDispatch()
    const regModalToggle = useAppSelector(state => state.regModalToggle.value)
    const regData = useAppSelector(state => state.activeVendor)

    const token = useAppSelector((state) => state.login.admin)

  
    const approveReg = async (data: any) => {
        const res = await fetch(`https://dashboard.afriopia.com/api/exhibitors/${data._id}/approve`, {
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

    const deleteReg = async (id: any) => {
        const res = await fetch(`https://api.afriopia.com/${path}/${id}`, {
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

    // console.log(regData)

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
                    <div className='text-xl font-bold text-black'>Space Only</div>
                    <div className='text-xl font-light text-black '>{regData.space_only}</div>
                  </div>
                  <div className='flex  flex-wrap gap-1 mb-4 flex-col'>
                    <div className='text-xl font-bold text-black'>Shell Scheme</div>
                    <div className='text-xl font-light text-black '>{regData.shell_scheme}</div>
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
                {!regData.approved && <button className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  approveReg(regData)
                }} ><FaRegCheckCircle /> APPROVE Exhibitor</button>}

                <Link href={`/vendors/${regData._id}`} className="px-5 py-2 bg-orange-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" >Update Exhibitor</Link>
                
                {/* <button className="px-5 py-2 bg-red-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3" onClick={() => {
                  deleteReg(regData._id)
                }} ><FaTrash /> DELETE Vendor</button> */}
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
