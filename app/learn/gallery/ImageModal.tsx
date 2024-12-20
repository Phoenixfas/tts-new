'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { toggleGallery } from '@/redux/slices/galleryToggleSlice'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function ImageModal() {
    const dispatch = useAppDispatch()
    const imageIsToggled = useAppSelector(state => state.galleryToggle.value)
    const activeImage = useAppSelector(state => state.activeImage)
  return (
    <>
        <AnimatePresence>
            {imageIsToggled && (
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed z-[10001] w-full h-screen bg-[#000000aa] flex items-center justify-center">
                        {imageIsToggled && (
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} className="relative max-w-[800px] h-[70vh]">
                                <div onClick={() => dispatch(toggleGallery())} className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-white rounded-full text-4xl cursor-pointer">
                                    <AiFillCloseCircle color='#d20' />
                                </div>
                                <Image className='w-full h-full object-fit rounded-xl' src={activeImage.src} alt={activeImage.title} width={500} height={500} quality={100} unoptimized />
                            </motion.div>
                        )}
                    </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}
