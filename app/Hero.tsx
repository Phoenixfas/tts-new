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
                    <div className="absolute top-0 left-0 w-full h-full bg-[#1A144B55]"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5">
                        <h1 className="text-white text-4xl font-semibold">{item.title}</h1>
                        <h2 className="text-white text-2xl font-semibold">{item.subtitle}</h2>
                        <div className="flex gap-5">
                            <button className="px-5 py-2 bg-white text-[#1A144B] font-semibold rounded-md">{item.cta}</button>
                            <button className="px-5 py-2 bg-white text-[#1A144B] font-semibold rounded-md">{item.cta2}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
