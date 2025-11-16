import React from 'react'
import { GridBackgroundDemo } from './ui/GridBackgroundDemo'
import Image from 'next/image'
import { FlipWords } from './ui/flip-words.tsx'
import Link from "next/link";

const Hero = () => {

  const words = [
    "Digital products",
    "UI/UX projects",
    "Mobile apps",
    "Web apps",
    "Websites"
  ];

  return (
    <div className="relative w-full flex flex-col items-center justify-center lg:justify-start lg:pt-[200px] pb-10" style={{ fontFamily: 'var(--font-albert-sans)' }}>
      {/* Grid background */}
      <GridBackgroundDemo />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-32 lg:pt-0">
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
          <span className="text-red-500 font-semibold">Experiences</span> for <FlipWords words={words}/>
        </h2>

        {/* Description */}
        <p className="text-[clamp(14px,1.8vw,24px)] text-center text-gray-700 max-w-[80%] mb-[4vh] leading-relaxed hidden sm:block">
          I develop innovative solutions by identifying the problem that needs addressing and creating a meaningful experience that meets the needs of end-users, aligning it with the context in which the product will be used.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-[2vw] flex-wrap justify-center">
          <Link href="mailto:ituxmateuszkuzaj@gmail.com" className="text-gray-400 hover:text-pink-500 transition" aria-label="Dribbble">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#f97316_50%,#ef4444_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-[clamp(16px,1.8vw,18px)] font-regular text-white backdrop-blur-3xl">
                Porozmawiajmy
              </span>
            </button>
          </Link>
          <Link href="/#portfolio" className="text-gray-400 hover:text-pink-500 transition" aria-label="Dribbble">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#f97316_50%,#ef4444_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-1 text-[clamp(16px,1.8vw,18px)] font-regular text-black backdrop-blur-3xl">
                Projekty
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero