'use client'
import { useEffect } from "react"

export default function MovingText() {

  useEffect(() => {
    const target = document.getElementById('target');
    
    if (!target) return;

    const movingText: any = document.getElementById('moving-text');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Initial logging when the component is in view
            const rect = target.getBoundingClientRect();
            const distanceFromTop = window.innerHeight - rect.bottom;
            if (distanceFromTop < 0) {
              movingText.style.transform = `translateY(-100%)`;
            } else {
              movingText.style.transform = `translateY(100%)`;
            }
            logDistanceFromBottom();
            // Add a scroll event listener to update the log on scroll
            window.addEventListener('scroll', logDistanceFromBottom);
            // console.log("in view");
          } else {
            window.removeEventListener('scroll', logDistanceFromBottom);
            // console.log("out of view");
          }
      });
    });

    observer.observe(target);

    // Function to calculate and log the distance
    const logDistanceFromBottom = () => {
      const rect = target.getBoundingClientRect();
      const distanceFromTop = window.innerHeight - rect.bottom;

      // Assuming min_val = 0 and max_val = window.innerHeight
      const percentage = (distanceFromTop / window.innerHeight) * 100;

      movingText.style.transform = `translateX(${-percentage + 30}%)`;
    };

  }, []);

  return (
    <div id="target" className='relative my-10 w-full flex items-center justify-center overflow-x-hidden'>
        <h1 id="moving-text" className='text-white text-[14em] font-bold text-nowrap uppercase ease-in-out'>Tech Trade Show in the media</h1>
    </div>
  )
}
