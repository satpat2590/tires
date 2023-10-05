//"use client";
import React, { useEffect, useState } from 'react';
import '../src/app/globals.css';


const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageCount = 5;
  const photoPaths = ['horiztires.jpg', 'tires1.jpg', 'semitrucktires.jpeg', 'semitruck1.jpg', 'semitruck2.jpg']

   // Fade-in effect on page load
  useEffect(() => {
    const landingPage = document.getElementById('landing-page');
    landingPage.style.opacity = '0';
    setTimeout(() => {
      landingPage.style.transition = 'opacity 1s ease-in-out';
      landingPage.style.opacity = '1';
    }, 100);
  }, []);


  return (
    <div id="landing-page" className="container opacity-0 w-screen">
      {/* Full-width Background Image with Opacity Gradient */}
      <section className="relative bg-cover bg-center h-[300px] md:h-[400px] lg:h-[500px] w-screen" style={{ backgroundImage: `url('truckers.webp')` }}>
        
        {/* Opacity Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

        {/* Centered Description */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-center p-4 mx-4 md:mx-auto max-w-xs md:max-w-sm lg:max-w-xl"> {/* Responsive max-width */}
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-black">Tires, Wheels, And More. We'll Help You Get There</h1>
            <p className="mb-4 text-sm md:text-base lg:text-lg text-black">
              Expert advice and easy tire selection tools.
              [Insert statement about how sexy Joe is.]
            </p>
            
            {/* Browse Tires Button */}
            <a class="inline-flex" href>
              <span class="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">browse all</span>
              <span class="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg class="h-3 w-3 scale-150" aria-hidden="true" focusable="false" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
              </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
  
    </div>

  );
};

export default Home;