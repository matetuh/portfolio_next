"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const portfolioItems = [
  {
    title: "Cryptocurrency App",
    subtitle: "Mobile app idea",
    image: "/portfolio-1.png",
  },
  {
    title: "AI-Powered Chatbot App",
    subtitle: "Mobile app idea",
    image: "/portfolio-2.png",
  },
  {
    title: "Gym Tracker App",
    subtitle: "Mobile app idea",
    image: "/portfolio-3.png",
  },
  {
    title: "Cryptocurrency App",
    subtitle: "Mobile app idea",
    image: "/portfolio-4.png",
  },
  {
    title: "Car Rental Service App",
    subtitle: "Mobile app idea",
    image: "/portfolio-5.png",
  },
  {
    title: "Job Finder App",
    subtitle: "Mobile app idea",
    image: "/portfolio-6.png",
  },
  {
    title: "Webapp Dashboard App",
    subtitle: "Web app idea",
    image: "/portfolio-7.png",
  },
  {
    title: "AI-Powered Chat Web App",
    subtitle: "Web app idea",
    image: "/portfolio-8.png",
  },
];

export default function PortfolioSection() {
  return (
    <section className="w-full mt-20">
      <div className="flex flex-col items-center">
        <p className="text-[clamp(14px,1.8vw,24px)] text-gray-600 text-center mb-[3vh]">
          Portfolio
        </p>
        <h2 className="text-[clamp(40px,3.5vw,60px)] font-normal text-center leading-tight mb-12">
          Recent UI/UX cases
        </h2>
        
        {/* Portfolio Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="text-[clamp(18px,1.5vw,24px)] font-medium">
                  {item.title}
                </h3>
                <p className="text-[clamp(14px,1.2vw,18px)] text-gray-600">
                  {item.subtitle}
                </p>
              </div>
              <a href={`/gallery?index=${i}`} className="block">
                <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
