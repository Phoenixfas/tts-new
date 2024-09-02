'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import hero from "@/data/hero"
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {

    useEffect(() => {

        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].classList.add("active");
            setTimeout(showSlides, 5000); // Change image every 5 seconds
        }
    }, [])
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            {hero.map((item, index) => (
                <div key={index} className="mySlides opacity-0 transition-opacity ease-in-out duration-[2s]">
                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                </div>
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(#000000_0%,_#00000088_15%,_#00000088_85%,_#000000_100%)]"></div>
        </div>
    )
}
