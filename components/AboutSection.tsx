"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "motion/react";

const UIUXHeader = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-24 flex-col p-6 rounded-lg" style={{ fontFamily: 'var(--font-albert-sans)' }}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-black">UI/UX Design</h3>
      </div>
      <p className="text-xl text-gray-600 mb-6 text-left">
        I design intuitive digital experiences by uncovering the core user needs and translating them into thoughtful, purposeful interfaces.
      </p>
      <div className="mt-auto">
        <img
          src="/ui-technologies.svg" 
          alt="UI/UX Design Tools" 
          width={600}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const MobileDevHeader = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-24 flex-col p-6 rounded-lg" style={{ fontFamily: 'var(--font-albert-sans)' }}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-black">Mobile Development</h3>
      </div>
      <p className="text-xl text-gray-600 mb-6 text-left">
        I build high-performance mobile applications by understanding user goals and delivering smooth, reliable, and scalable experiences.
      </p>
      <div className="mt-auto">
        <img
          src="/mobile-tech.svg" 
          alt="Mobile Development Technologies" 
          width={600}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const WebDevHeader = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-24 flex-col p-6 rounded-lg" style={{ fontFamily: 'var(--font-albert-sans)' }}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-black">Web Development</h3>
      </div>
      <p className="text-xl text-gray-600 mb-6 text-left">
        I build dynamic web experiences by identifying business and user needs and translating them into fast, scalable solutions.
      </p>
      <div className="mt-auto">
        <img
          src="/technologies.svg" 
          alt="Web Development Technologies" 
          width={600}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const items = [
  {
    title: "",
    description: "",
    header: <UIUXHeader />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "",
    description: "",
    header: <MobileDevHeader />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "",
    description: "",
    header: <WebDevHeader />,
    className: "md:col-span-1 md:row-span-2",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full mt-12" style={{ fontFamily: 'var(--font-albert-sans)' }}>
      <div className="flex flex-col items-center">
        <h2 className="text-[clamp(14px,1.8vw,24px)] text-black text-center mb-[3vh]">
          A few words about me
        </h2>
        <h2 className="text-[clamp(40px,3.5vw,60px)] font-normal text-center leading-tight mb-[2vh]">
          I build user-centered{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-orange-500 to-red-500 font-semibold">Mobile</span> and{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-orange-500 to-red-500 font-semibold">Web</span> solutions by defining the core
          problem, designing intuitive{" "}
          <span className="text-red-500 font-semibold">UI & UX</span>, and delivering
          functional, scalable implementations.
        </h2>
        <BentoGrid className="w-full max-w-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
