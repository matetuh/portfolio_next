"use client";

import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden w-full">
      {/* Logo - Desktop only, top left */}
      <div className="hidden sm:flex fixed top-10 left-[calc((100vw-min(100vw,1728px))/2+162px)] z-5000 items-center h-14">
        <img 
          src="/logo.svg" 
          alt="Logo" 
          width={53} 
          height={24}
        />
      </div>
      <FloatingNavDemo />
      
      {/* Hero Section */}
      <section className="w-full max-w-[1728px] px-5 sm:px-[clamp(5px,9.375vw,162px)]">
        <Hero />
        
        {/* Image at bottom of hero section */}
        <div className=" sm:mt-10">
          {/* Desktop image */}
          <img
            src="/img-1.png" 
            alt="Portfolio showcase" 
            width={1404}
            height={800}
            className="hidden sm:block w-full h-auto shadow-lg"
          />
          {/* Mobile image */}
          <img
            src="/img-1-mobile.png" 
            alt="Portfolio showcase" 
            width={700}
            height={800}
            className="block sm:hidden w-full h-auto shadow-lg"
          />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Portfolio Section */}
        <PortfolioSection />
        <Footer />
      </section>
    </main>
  );
}
