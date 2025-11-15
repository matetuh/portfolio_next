import React from 'react'
import { GridBackgroundDemo } from './ui/GridBackgroundDemo'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full" style={{ fontFamily: 'var(--font-albert-sans)' }}>
      <GridBackgroundDemo />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Profile Image */}
        <div className="mb-2">
          <Image
            src="/avatar.png"
            alt="Mateusz Kuzaj"
            width={80}
            height={80}
            className="rounded-[20px] object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-black mb-2">
          Mateusz Kuzaj
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] text-gray-600 text-center mb-8">
          Software Developer & UI/UX Designer
        </p>

        {/* Main Heading */}
        <h2 className="text-[40px] font-normal text-center mb-2 leading-tight">
          Creating <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-orange-500 to-red-500 font-semibold">Useful</span> 
        </h2>
        <h2 className="text-[40px] font-normal text-center mb-2 leading-tight">
          <span className="text-red-500 font-semibold">Experiences</span> for
        </h2>
        <h2 className="text-[40px] font-normal text-center mb-10 leading-tight">
          Digital products
        </h2>
        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Porozmawiajmy
          </button>
          <button className="border border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
            Projekty
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero