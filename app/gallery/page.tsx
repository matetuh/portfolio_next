"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";

const images = [
  "/portfolio-1.png",
  "/portfolio-2.png",
  "/portfolio-3.png",
  "/portfolio-4.png",
  "/portfolio-5.png",
  "/portfolio-6.png",
  "/portfolio-7.png",
];



const descriptions = [
  null,
  "A modern dashboard UI for analytics.",
  null,
  "Mobile app concept for creative portfolios.",
  null,
  "Landing page design for a SaaS product.",
  null,
];

export default function GalleryPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const subtitle = searchParams.get("subtitle");
  return (
    <main className="relative bg-white flex flex-col overflow-x-hidden w-full min-h-screen">
      {/* Logo - Desktop only, top left */}
      <div className="hidden sm:flex fixed top-10 left-[calc((100vw-min(100vw,1728px))/2+162px)] z-5000 items-center h-14">
        <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={53} 
          height={24}
        />
      </div>
      <div className="fixed top-0 left-0 w-full z-50">
        <FloatingNavDemo />
      </div>
      <div className="min-h-screen pt-[150px] pb-[150px] py-10 px-5 w-full max-w-[1728px] mx-auto">
        
        <section className="w-full max-w-[1728px] px-5 sm:px-[clamp(5px,9.375vw,162px)]">
        <h2 className="text-[clamp(40px,3.5vw,60px)] font-normal text-center leading-tight mb-5">
          {title}
        </h2>
        <p className="text-[clamp(14px,1.8vw,24px)] text-gray-600 text-center mb-[3vh]">
          {subtitle}
        </p>
        <div className="mb-[3vh] flex items-center">
          <Link href="/" className="text-[clamp(14px,1.8vw,20px)] text-gray-600 text-left ">
            ← Portfolio
          </Link>
        </div>
        <div className="flex flex-col gap-12">
          {images.map((src, i) => (
            <div key={i} className="w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={src} 
                  alt={`portfolio ${i + 1}`} 
                  width={1500} 
                  height={1000} 
                  className="object-cover w-full h-auto aspect-16/10" 
                />
              </div>
              {descriptions[i] && (
                <div className="mt-4 text-lg text-gray-700 text-center px-4">
                  {descriptions[i]}
                </div>
              )}
            </div>
          ))}
        </div>
        </section>
      </div>
    </main>
  );
}
