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
        <div className="mb-[1vh]">
          <Image
            src="/avatar.png"
            alt="Mateusz Kuzaj"
            width={80}
            height={80}
            className="rounded-[20px] object-cover w-[15vw] h-[15vw] min-w-20 min-h-20 max-w-[120px] max-h-[120px]"
          />
        </div>

        {/* Name */}
        <h1 className="text-[clamp(24px,2vw,36px)] font-medium text-black mb-[1vh]">
          Mateusz Kuzaj
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(14px,1.8vw,24px)] text-gray-600 text-center mb-[3vh]">
          Software Developer & UI/UX Designer
        </p>

        {/* Main Heading */}
        <h2 className="text-[clamp(40px,3.5vw,60px)] font-normal text-center leading-tight mb-[2vh]">
          Creating <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-orange-500 to-red-500 font-semibold">Useful </span>
          <span className="text-red-500 font-semibold">Experiences</span> for Digital products
        </h2>

        {/* Description */}
        <p className="text-[clamp(14px,1.8vw,24px)] text-center text-gray-700 max-w-[80%] mb-[4vh] leading-relaxed hidden sm:block">
          I develop innovative solutions by identifying the problem that needs addressing and creating a meaningful experience that meets the needs of end-users, aligning it with the context in which the product will be used.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-[2vw] flex-wrap justify-center">
          <button className="bg-black text-white px-[4vw] py-[1vh] rounded-full font-medium hover:bg-gray-800 transition-colors text-[clamp(16px,1.8vw,18px)] min-w-[150px]">
            Porozmawiajmy
          </button>
          <button className="border border-black text-black px-[2vw] py-[1vh] rounded-full font-medium hover:bg-black hover:text-white transition-colors text-[clamp(16px,1.8vw,18px)] min-w-[150px]">
            Projekty
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero