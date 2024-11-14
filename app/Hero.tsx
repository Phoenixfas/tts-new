'use client'
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import hero from "@/data/hero"
import { usePathname } from "next/navigation"

export default function Hero() {
    const pathname = usePathname()
    const p = pathname.split("/")[1]
    const slideTimeout = useRef<any>(null);
    const slideContainer = useRef<any>(null);

    useEffect(() => {
        let slideIndex = 0;

        // Function to show slides
        function showSlides() {
            if (!slideContainer.current) return; // Ensure container exists

            let slides = slideContainer.current.children;
            
            if (!slides || slides.length === 0) return; // Make sure there are slides

            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            slideIndex++;
            if (slideIndex === slides.length) { slideIndex = 0; }
            slides[slideIndex].classList.add("active");

            slideTimeout.current = setTimeout(showSlides, 5000); // Change image every 5 seconds
        }

        // Start the slideshow if on the homepage
        if (p === "") {
            showSlides();
        }

        // Cleanup the timeout on unmount
        return () => {
            if (slideTimeout.current) {
                clearTimeout(slideTimeout.current);
            }
        };
    }, [p]);

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <div className="relative w-full h-screen overflow-hidden" ref={slideContainer}>
                {hero.map((item, index) => (
                    <div key={index} className="mySlides opacity-0 transition-opacity ease-in-out duration-[2s]">
                        <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                    </div>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(#000000_0%,_#00000088_15%,_#00000088_85%,_#000000_100%)]"></div>
        </div>
    );
}
