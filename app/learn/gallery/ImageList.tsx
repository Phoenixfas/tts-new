'use client'
import style from '@/styles/Gallery.module.css'
import gallery from '@/data/showGallery'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleGallery } from '@/redux/slices/galleryToggleSlice'
import { changeActiveImage } from '@/redux/slices/activeImageSlice'

export default function ImageList() {
    const dispatch = useAppDispatch()
    const parentRef = useRef<any>(null);

    useEffect(() => {
        const children = parentRef.current.children;

        for (let i = 0; i < children.length; i++) {
            const rotation = Math.floor(Math.random() * 30) - 15; // random rotation between -180 and 180 degrees
            children[i].style.setProperty('--rotate', `${rotation}`);
        }

    }, [])

return (
    <div className={style.imagelist}>
        <div id='parent' ref={parentRef} className={style.imagelist__container}>
            {gallery.map((pic, index) => (
                <div key={index} className={style.image__card} onClick={() => {
                    dispatch(changeActiveImage(pic))
                    dispatch(toggleGallery())
                }}>
                    <div className={style.image__cardImg}>
                        <Image src={pic.src} alt={pic.title} fill 
                            sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 768px) 50vw,
                                (max-width: 1024px) 33.3vw,
                                (max-width: 1280px) 25vw,
                                20vw" 
                        />
                    </div>
                    {/* <p>{pic.location}</p> */}
                </div>
            ))}
        </div>
    </div>
  )
}