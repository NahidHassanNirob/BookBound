import Link from "next/link";
import React from "react";
import 'animate.css';

const Banner = () => {
  return (
    <div
      className="relative h-[500px] w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1500&auto=format&fit=crop')",
      }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white px-4">
      
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Find Your Next Read
        </h1>

        <p className="text-lg md:text-xl mb-6 opacity-90 animate__animated animate__fadeInUp animate__delay-0.5s">
          Digitize your traditional library experience with ease.
        </p>

        
        <div className="animate__animated animate__zoomIn animate__delay-0.8s">
          <Link href={'/books'}>
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
              Browse Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;