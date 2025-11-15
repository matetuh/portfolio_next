import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden w-full">
      {/* Logo - Desktop only, top left */}
      <div className="hidden sm:flex fixed top-10 left-[calc((100vw-min(100vw,1728px))/2+162px)] z-5000 items-center h-14">
        <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={53} 
          height={24}
        />
      </div>
      <FloatingNavDemo />
      
      {/* Hero Section */}
      <section className="w-full max-w-[1728px] px-[clamp(5px,9.375vw,162px)]">
        <Hero />
        
        {/* Image at bottom of hero section */}
        <div className="mt-10">
          <Image 
            src="/img-1.png" 
            alt="Portfolio showcase" 
            width={1404}
            height={800}
            className="w-full h-auto rounded-4xl shadow-lg"
            priority
          />
        </div>
      </section>
    </main>
  );
}
