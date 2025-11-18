import React from "react";
import Link from "next/link";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const metadata = {
  title: "About — Mateusz Kuzaj",
  description: "Mobile-Focused Software Developer & UI/UX Designer with 5 years of commercial experience across 20+ projects. I specialize in mobile applications (React Native, Expo, Flutter) and user interfaces design (Figma, Adobe XD, Affinity). I combine technical and design expertise to deliver end-to-end solutions from concept to deployment.",
};

const EXPERIENCE = [
  {
    years: "2022 — Present",
    role: "Owner- Designer & Web Developer",
    company: "ITUX Mateusz Kuzaj",
    bullets: [
      "Designing and developing WordPress and Next.js websites,covering everything from UI/UX to SEO.",
      "Creating visual identities (logos, color systems, promotional materials).",
      "Designing packaging, advertising materials, and product photography.",
      "Content creation.",
    ],
  },
  {
    years: "2021 - 2025",
    role: "Software Developer & UI/UX Designer",
    company: "TDCM SP. Z O.O.",
    bullets: [
      "Participation in over 20 projects involving mobile apps (React Native, Expo, Flutter) and web apps (React, TypeScript, JavaScript, HTML5, CSS3, Sass, Tailwind) with backend integration (MongoDB, Supabase, Firebase).",
      "Designing and implementing UI/UX interfaces for mobile apps and websites, as well as participating in redesign and product development using tools (Figma, Adobe XD, LottieFiles, SVGator, Affinity) and resources (Dribbble, Behance). Creating visual identities.",
      "Creating project documentation.",
      "Development of the tdcm.io and tdcm.ai websites in Wix/Wix Studio.",
      "Supporting client communication and project estimations.",
      "Participation in UI/UX recruitment and mentoring."
    ],
  },
  {
    years: "2019 — 2021",
    role: "Intern Software Developer",
    company: "TDCM SP. Z O.O.",
    bullets: [
      "Data extraction from various online sources using XPath and RegExp.",
      "Creating a mobile application in React Native with a local Node.js/Express server and Socket.IO communication over the Tor network.",
      "Implementing video template rendering with the Shotstack API, preparing masks and UI in Adobe XD for dynamic video generation.",
      "Designing interfaces in Adobe XD for mobile applications and websites.",
      "Managing and developing the TDCM website tdcm.io on Wix."
    ],
  },
];



const EDUCATION = [
  {
    years: "2020-2021",
    degree: "Master of Science in Engineering, Big Data Analytics (English-language)",
    school: "Wrocław University of Science and Technology",
    notes: ["Foundations in typography, layout and digital illustration."],
  },
  {
    years: "2016 — 2020",
    degree: "Engineer, Technical Physics - Nanoengineering",
    school: "Wrocław University of Science and Technology",
    notes: 
    [
      "Cited in article 'Concept and Design of Martian Far-IR ORE Spectrometer (MIRORES)'",
      "Cited in article 'Regional and local geological characteristics of Isidis Planitia on Mars and analysis of terrestrial analogues'",
      "Cited in article 'Regional morphological division on Isidis Planitia on Mars'",
      "Cited in 'Raport CBK PAN 2019'",
      "Participating in PRELUDIUM 17 entitled: 'Optical properties of new compounds and semiconductor structures deposited on GaSb substrate and intended for applications in the mid-infrared range' No. 02NP / 0005/2016 from the Ministry of Science and Higher Education",
    ],
  },
];

const SKILLS = [
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: "react-native" },
      { name: "Expo", icon: "expo-go" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next-js" },
      { name: "TypeScript", icon: "ts" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Sass", icon: "sass" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Firebase", icon: "firebase" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" },
      { name: "Node.js", icon: "node-js" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Adobe XD", icon: "adobe-xd" },
      { name: "Affinity Designer", icon: "ade" },
      { name: "Affinity Photo", icon: "aph" },
      { name: "Affinity Publisher", icon: "apu" },
    ],
  },
  {
    category: "DevOp",
    items: [
      { name: "Heroku", icon: "heroku" },
      { name: "Docker", icon: "docker" },
      { name: "DigitalOcean", icon: "digitalocean" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Wix", icon: "wix" },
      { name: "WixStudio", icon: "wix-studio" },
      { name: "WordPress", icon: "wordpress" },
    ],
  },
];

const LANGUAGES = [
  { name: 'Polish', level: 'Native'},
  { name: 'English', level: 'B2/C1 - Professional'},
  { name: 'German', level: 'A2 - Basic'},
];


export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white flex justify-center px-5 py-16" style={{ fontFamily: 'var(--font-albert-sans)' }}>
      <div className="hidden sm:flex fixed top-10 left-[calc((100vw-min(100vw,1728px))/2+162px)] z-5000 items-center h-14">
        <img 
          src="/logo.svg" 
          alt="Logo" 
          width={53} 
          height={24}
        />
      </div>

      <div className="fixed top-0 left-0 w-full z-50">
        <FloatingNavDemo />
      </div>

      <div className="w-full max-w-[1728px] px-5 sm:px-[clamp(5px,9.375vw,162px)] mx-auto mt-20">
        <header className="mb-8 text-center">
          <h1 className="text-[clamp(28px,3vw,40px)] font-medium"><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-orange-500 to-red-500 font-semibold">My</span> Career</h1>
          <p className="text-gray-600 mt-2">Contact details & experience history</p>
        </header>

        <Link href="/" className="text-[clamp(14px,1.8vw,20px)] text-gray-600 text-left pb-6 inline-block">
          ← Home
        </Link>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="p-6 rounded-2xl border border-gray-100 relative isolate">
              <GlowingEffect disabled={false} proximity={100} borderWidth={1} spread={40} />
              <div className="flex items-center gap-4 mb-4">
                <img src="/avatar.png" alt="Mateusz Kuzaj" className="w-16 h-16 rounded-full object-cover bg-linear-to-r from-blue-500 via-orange-500 to-red-500" />
                <div>
                  <h2 className="font-medium">Mateusz Kuzaj</h2>
                  <p className="text-sm text-gray-500">Poland — Mobile & UI/UX Designer</p>
                </div>
              </div>

              <div className="text-sm text-gray-700 space-y-3">
                <div>
                  <strong className="block text-gray-900">Email</strong>
                  <a href="mailto:ituxmateuszkuzaj@gmail.com" className="text-black underline">ituxmateuszkuzaj@gmail.com</a>
                </div>
                <div>
                  <strong className="block text-gray-900">Location</strong>
                  <span>Poland</span>
                </div>
                <div>
                  <strong className="block text-gray-900">Availability</strong>
                  <span>Open to freelance & contract</span>
                </div>

                <div className="pt-3 border-t border-gray-100 mt-3">
                  <strong className="block text-gray-900 mb-2">Social</strong>
                  <div className="flex gap-3">
                    <a href="https://github.com/matetuh" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">GitHub</a>
                    <a href="https://www.linkedin.com/in/mateusz-kuzaj" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">LinkedIn</a>
                    <a href="https://dribbble.com/matetuh" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">Dribbble</a>
                  </div>
                </div>

                <div className="pt-3">
                  <strong className="block text-gray-900 mb-2">Download CV</strong>
                  <div className="flex gap-3 mb-3">
                    <a
                      href="/cv/CV - Mateusz Kuzaj - ENG.pdf"
                      download
                    >
                      <button className="relative inline-flex h-12 overflow-hidden rounded-md p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#f97316_50%,#ef4444_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-black px-10 py-2 rounded-md text-sm text-white backdrop-blur-3xl">
                          Download CV (EN)
                        </span>
                      </button>
                    </a>
                    <a
                      href="/cv/CV - Mateusz Kuzaj - PL.pdf"
                      download
                    >
                      <button className="relative inline-flex h-12 overflow-hidden rounded-md p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#f97316_50%,#ef4444_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-white px-10 py-2 rounded-md text-sm text-black backdrop-blur-3xl">
                          Pobierz CV (PL)
                        </span>
                      </button>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-6 rounded-2xl border border-gray-100 relative isolate">
              <GlowingEffect disabled={false} proximity={100} borderWidth={1} spread={40} />
              <h3 className="text-xl font-medium mb-4">Biography</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I’m a UX/UI Designer and Frontend Developer focused on building thoughtful, accessible
                digital products. I design in Figma and implement using React/Next.js and Tailwind CSS.
                I enjoy solving UX problems and shipping high-quality interfaces with performance in mind.
              </p>

              <h3 className="text-xl font-medium mb-4">Experience</h3>
              <div className="space-y-6">
                {EXPERIENCE.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-28 text-sm text-gray-500">{item.years}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-base font-medium">{item.role}</div>
                          <div className="text-sm text-gray-500">{item.company}</div>
                        </div>
                      </div>
                      <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="text-sm">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-medium mb-4">Education</h3>
                <div className="space-y-4">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-28 text-sm text-gray-500">{edu.years}</div>
                      <div className="flex-1">
                        <div className="text-base font-medium">{edu.degree}</div>
                        <div className="text-sm text-gray-500">{edu.school}</div>
                        {edu.notes && (
                          <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
                            {edu.notes.map((n, idx) => (
                              <li key={idx} className="text-sm">{n}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-medium mb-4">Technologies</h3>
                <div className="space-y-4">
                  {SKILLS.map((s, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-28 text-sm text-gray-500">{s.category}</div>
                      <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {s.items.map((it) => (
                            <SkillBadge key={it.name} name={it.name} icon={it.icon} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-medium mb-4">Languages</h3>
                <div className="space-y-4">
                  {LANGUAGES.map((lang, idx) => (
                    <div key={idx} className="flex gap-6">
                    <div className="w-28 text-sm text-gray-500">{lang.name}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-base font-medium">{lang.level}</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

       <Footer />
      </div>
    </main>
  );
}
