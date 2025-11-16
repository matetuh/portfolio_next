"use client";
import { useSearchParams } from "next/navigation";

import React from "react";
import Link from "next/link";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";

const images_ui = [
  [
    "/0/p-0-0.png",
    "/0/p-0-1.png",
    "/0/p-0-2.png",
    "/0/p-0-3.png",
    "/0/p-0-4.png",
    "/0/p-0-5.png",
    "/0/p-0-6.png",
  ],
  [
    "/1/p-1-0.png",
    "/1/p-1-1.png",
  ],
  [
    "/2/p-2-0.png",
    "/2/p-2-1.png",
    "/2/p-2-2.png",
    "/2/p-2-3.png",
    "/2/p-2-4.png",
    "/2/p-2-5.png",
    "/2/p-2-6.png",
    "/2/p-2-7.png",
  ],
  [
    "/3/p-3-0.png",
    "/3/p-3-1.png",
    "/3/p-3-2.png",
    "/3/p-3-3.png",
  ],
  [
    "/4/p-4-0.png",
    "/4/p-4-1.png",
    "/4/p-4-2.png",
    "/4/p-4-3.png",
    "/4/p-4-4.png",
  ],
  [
    "/5/p-5-0.png",
    "/5/p-5-1.png",
    "/5/p-5-2.png",
    "/5/p-5-3.png",
    "/5/p-5-4.png",
  ],
  [
    "/6/p-6-0.png",
    "/6/p-6-1.png",
    "/6/p-6-2.png",
    "/6/p-6-3.png",
    "/6/p-6-4.png",
  ],
  [
    "/7/p-7-0.png",
    "/7/p-7-1.png",
    "/7/p-7-2.png",
    "/7/p-7-3.png",
    "/7/p-7-4.png",
    "/7/p-7-5.png",
  ],
  [
    "/8/p-8-0.png",
    "/8/p-8-1.png",
    "/8/p-8-2.png",
  ],
  [
    "/9/p-9-0.png",
  ],
  [
    "/10/p-10-0.png",
  ],
  [
    "/11/p-11-0.png",
  ]
]

const images_mobile = [
  [
    "/mb-0/p-mb-0-0.png",
    "/mb-0/p-mb-0-1.png",
  ],
]

const images_web = [
  [
    "/0/p-0-0.png",
    "/0/p-0-1.png",
    "/0/p-0-2.png",
    "/0/p-0-3.png",
    "/0/p-0-4.png",
    "/0/p-0-5.png",
    "/0/p-0-6.png",
  ],
]

const descriptions_ui = [
  [
    [
      "🌈 Personal Portfolio – Case Study (Figma)",
      "A vibrant yet minimalistic personal portfolio concept crafted entirely by me. The design blends bold, expressive color accents with a clean, modern layout to create an experience that feels both energetic and refined.",
      "Built with responsiveness in mind, the project was designed for seamless viewing across web and mobile. Each frame in Figma mirrors real-world implementation constraints, ensuring that what you see in the design is exactly what comes alive in production.",
      "The UI system is powered by components from Aceternity UI, allowing for smooth, modern interactions and consistent visual patterns. I implemented the final version using Next.js, bringing the design to life with fast performance, crisp animations, and scalable architecture.",
      "This project showcases my full end-to-end process:",
      "✨ Concept → 🎨 Design → ⚙️ Frontend implementation",
      "A colorful, modern, and responsive portfolio that reflects my personality and my approach to crafting thoughtful digital experiences."
    ],
  ],
  [
    [
      "🔥 Crypto Wagering App – UI/UX Concept (Figma)",
      "A sleek and modern crypto wagering app designed entirely in Figma, focused on making peer-to-peer betting simple, fast, and secure. The concept blends bold visuals with a clean, intuitive flow that lets users manage their digital assets and place wagers with confidence.",
      "At the core of the experience is a connected wallet:",
      "Users can view all their tokens, track live price changes, and monitor market movements in real time. The interface is built around clarity—clean charts, color-coded price indicators, and minimalistic dashboards designed for quick decision-making.",
      "The app allows users to:",
      "• Send, receive, and buy tokens",
      "• Set a wager and challenge someone directly",
      "• Instantly confirm wagers using Face ID for seamless security",
      "• View token values and percentage changes at a glance",
      "",
      "The wagering flow is designed to feel smooth and game-like: choose a token, set the stake, confirm with Face ID, and once the match is won, the crypto automatically transfers to the winner’s wallet.",
      "This concept explores the intersection of crypto management, social interaction, and secure betting, wrapped in a minimalistic, modern aesthetic optimized for mobile."
    ],
  ],
  [
    [
      "💪 Workout & Gym Tracker App – UI/UX Improvement Case Study (Figma)",
      "A refined, dark-themed workout tracker concept designed in Figma, focused on creating a cleaner, smarter, and more motivating fitness experience. Styled with a sleek minimalistic interface and a bold lime accent, the app elevates usability while maintaining a modern, athletic feel.",
      "This case study explores how the current app’s UX can be improved through clearer structure, more intuitive flows, and a stronger visual hierarchy.",
      "Core features include:",
      "• Search Workouts – Quickly discover exercises and routines",
      "• Create Custom Workouts – Build personalized sessions tailored to your goals",
      "• Edit Existing Workouts – Fully customize sets, reps, and exercises",
      "• View Previously Completed Workouts – Stay consistent by revisiting past sessions",
      "• Generate & Start Workouts – Instantly create a session and begin training with a single tap",
      "",
      "The experience is designed to be frictionless, clean, and visually balanced—letting users focus on progress without distractions. From improved navigation to clearer workout summaries, every detail pushes toward a more seamless and motivating fitness journey.",
      "A modern redesign that shows how thoughtful UI/UX can transform a standard gym tracker into a powerful, user-centered training companion."
    ],
  ],
  [
    [
      "🖤 AI-Powered Chatbot App – Minimalist High-Fashion UI Concept",
      "A hyper-minimal, editorial-style chatbot experience designed in Figma, inspired by the clean visual language of Calvin Klein and Vogue. The interface embraces pure black & white, sharp edges, and zero border radius to create a bold, modern, and unapologetically minimal aesthetic.",
      "This concept focuses on reducing noise and elevating clarity—turning a simple AI conversation into a premium, gallery-like digital experience.",
      "Key highlights:",
      "• Monochrome palette for a timeless, fashion-forward tone",
      "• No rounded corners, giving every component a confident, architectural feel",
      "• Ultra-clean typography and generous negative space",
      "• Streamlined chat flow that removes distractions",
      "• AI responses styled like editorial statements, precise and elegant",
      "",
      "The result is an AI assistant that feels less like an app—and more like a luxury digital object. A concept that blends high fashion minimalism with functional, intelligent interaction design.",
    ],
  ],
  [
    [
      "🔥 Crypto Wagering App – Advanced Challenge Flow Concept (Figma)",
      "A bold and immersive crypto wagering experience designed in Figma, built around a striking red and black visual identity. This exploration focuses on elevating the competitive atmosphere of peer-to-peer challenges—making every wager feel dynamic, strategic, and secure.",
      "The redesigned flow introduces a more interactive and transparent challenge system, where users can face off directly with others based on skill, odds, and personalized rules.",
      "At the center of the experience is a fully connected crypto wallet, giving users instant access to their tokens, real-time price changes, and performance insights—all wrapped in a sharp, minimal interface.",
      "What’s new in this concept:",
      "• User vs. User Challenge Creation – Set up a duel between two players with clear, side-by-side comparisons.",
      "• Win Probability (%) – Visualized chance-of-win indicators based on past performance, token choice, or custom criteria.",
      "• Challenge Description – Add context, rules, and details to make each wager more personal and competitive.",
      "• QR Code Matchmaking – Instantly generate a scannable QR code to create or accept challenges in seconds.",
      "• Face ID Confirmation – Secure, frictionless approval at key steps in the wagering flow.",
      "",
      "Core functionality remains effortless:",
      "• Add, send, buy, and receive tokens",
      "• Track performance of each crypto asset",
      "• Monitor value, price changes, and volatility at a glance",
      "",
      "The interface is intentionally aggressive yet minimal—crisp typography, high contrast, and confident red accents that amplify the intensity of competitive wagering.",
      "This concept reimagines crypto betting as a sleek, strategic, and socially engaging experience—where design enhances both clarity and adrenaline.",
    ],
  ],
  [
    [
      "🚗 Car Rental Service App – UI/UX Concept (Figma)",
      "Designed with a fresh and inviting palette of green, purple, creamy tones, black accents, and soft gray typography, this concept reimagines the ride-sharing experience with clarity, confidence, and smooth visual flow.",
      "The interface centers around a live interactive map, giving users full visibility of all available cars nearby. Clean markers, subtle shadows, and soft color cues make navigation effortless.",
      "Core features highlighted in the concept:",
      "• Live Car Map – Explore all available vehicles in real time",
      "• Driver Preview Cards – View the driver’s name, rating (stars), experience level, and price per km",
      "• Pickup & Drop-off Selection – Choose your starting point and destination directly on the map",
      "• Route Visualization – A clear, color-coded route appears instantly once both points are set",
      "• Refined Color System – Green for availability, purple for highlights, creamy backgrounds for warmth, and black/gray text for high readability",
      "",
      "The UI strikes a balance between minimalism and character. Soft colors create a friendly atmosphere, while the structured layout and smooth mapping interactions ensure a focused and intuitive experience.",
      "A modern ride-sharing app concept built around trust, clarity, and an elevated visual identity.",
      ],
  ],
  [
    [
      "💼 Worksy – Job Finder App (Figma UI/UX Concept)",
      "Worksy is a minimalistic and functional job-finding platform designed for speed, clarity, and trust. Built with a crisp palette of blue, orange, white, and black, the interface balances professionalism with friendly approachability—perfect for both job seekers and businesses.",
      "The experience centers on effortless discovery and posting of job opportunities. Users can quickly browse open roles or share their own job advert with just a few taps.",
      "Key features showcased in the concept:",
      "• Post a Job Advert – Share details about a role in a clean, guided format",
      "• Company Identity – View the company logo and profile at a glance",
      "• Job Description – Clear, structured content blocks focused on readability",
      "• Pricing & Pay Format – Instantly see hourly rates, fixed prices, or project-based payments",
      "• Time Format – Transparent time requirements, availability windows, and expected durations",
      "• Location Details – Each job shows where work will take place, with simple icons and map indicators",
      "",
      "The UI is intentionally minimal, clean, and functional, designed to reduce friction and help users find or fill jobs as quickly as possible. Blue conveys trust, orange adds energy, and the white/black foundation keeps the experience sharp and modern.",
      "A streamlined job marketplace concept where skilled pros and employers connect effortlessly.",
    ],
  ],
  [
    [
      "🗂️ Organization Management Web Dashboard – UI/UX Concept",
      "A clean, minimalistic web dashboard designed to help teams manage organizations, documents, and business-critical operations with clarity and precision. Built with a sleek palette of black, white, and bold yellow accents, the interface focuses on structure, readability, and effortless navigation.",
      "This concept brings together multiple organizational tools into a unified, intuitive ecosystem—ideal for teams handling complex data, regulatory workflows, or large sets of documentation.",
      "Core modules showcased in the design:",
      "• Organizations Overview – Browse and manage all organizations in a clean, card- or table-based layout",
      "• Reporting Dashboard – High-level insights, analytics, and performance metrics",
      "• Knowledge Management – A modern space for storing and organizing internal information",
      "• Document Library – Centralized repository for files, documents, and internal materials",
      "• Regulatory Forms – Access and manage compliance-related forms with structured templates",
      "• Commercials Section – Manage business documents, deals, contracts, and commercial information",
      "",
      "The visual style combines minimal contrasts with sharp geometry and confident yellow highlights—making key actions stand out while keeping the overall layout elegant and distraction-free. Typography is clean, spacing is generous, and every section is designed for efficiency.",
      "A modern, functional dashboard concept that transforms organizational management into a seamless, well-structured digital experience.",
    ],
  ],
  [
    [
      "🖤 AI-Powered Chat Web App – High-Fashion Minimalist Dashboard Concept",
      "A hyper-minimal, editorial-style AI chat dashboard designed in Figma, inspired by the iconic visual language of Calvin Klein and Vogue. The interface uses a pure black & white palette, strict geometry, and zero border radius to create a bold, architectural, and fashion-forward digital experience.",
      "This concept translates luxury minimalism into a full web environment—offering a calm, gallery-like workspace for AI interactions, with a strong focus on clarity, negative space, and polished typography.",
      "Key highlights of the dashboard:",
      "• Monochrome palette for a timeless, high-fashion aesthetic",
      "• No rounded corners, giving every module a sharp, confident presence",
      "• Clean multi-panel layout balancing navigation, chat threads, and active conversations",
      "• Ultra-minimal sidebar navigation with bold, editorial typography",
      "• AI responses styled like refined editorial statements—precise, spacious, and elegantly typeset",
      "",
      "The visual style embraces strict minimalism, sharp lines, and purposeful spacing, transforming standard chat interactions into a curated, luxury digital experience.",
      "A statement-driven web dashboard concept that merges high-fashion minimalism with functional, intelligent interaction design.",
    ]
  ],
  [
  [
    "☀️ Solar Energy Investment Calculator Web App – UI/UX Concept",
    "A clean, modern web app designed to help users calculate potential profits from investing in solar farms. The interface combines clarity and simplicity with visually engaging elements, making complex financial calculations approachable and actionable.",
    "This concept focuses on guiding users through investment scenarios, energy production estimates, and expected returns, turning technical data into a transparent, user-friendly experience.",
    "Key features of the calculator:",
    "• Investment Input – Enter capital, installation costs, and operational expenses",
    "• Energy Production Estimates – Calculate expected energy output based on location, panel type, and size",
    "• Profit Projection – Visual breakdown of net returns over time with charts and graphs",
    "• Scenario Comparison – Compare different investment options side by side",
    "• Cost & ROI Summary – Clear summary of key metrics like payback period, ROI, and savings",
    "",
    "The visual style is minimalistic and modern, using color accents to highlight results and trends while keeping the interface clean and readable. Typography, spacing, and interactive charts are designed to make financial calculations intuitive and stress-free.",
    "A user-focused web app concept that turns solar energy investment planning into a transparent, engaging, and insightful experience.",
  ]
],
[
  [
    "☀️ Solar Energy Investment Calculator Web App – UI/UX Concept",
    "A clean, modern web app designed to help users calculate potential profits from investing in solar farms. The interface combines clarity and simplicity with visually engaging elements, making complex financial calculations approachable and actionable.",
    "This concept focuses on guiding users through investment scenarios, energy production estimates, and expected returns, turning technical data into a transparent, user-friendly experience.",
    "Key features of the calculator:",
    "• Investment Input – Enter capital, installation costs, and operational expenses",
    "• Energy Production Estimates – Calculate expected energy output based on location, panel type, and size",
    "• Profit Projection – Visual breakdown of net returns over time with charts and graphs",
    "• Scenario Comparison – Compare different investment options side by side",
    "• Cost & ROI Summary – Clear summary of key metrics like payback period, ROI, and savings",
    "",
    "The visual style is minimalistic and modern, using color accents to highlight results and trends while keeping the interface clean and readable. Typography, spacing, and interactive charts are designed to make financial calculations intuitive and stress-free.",
    "A user-focused web app concept that turns solar energy investment planning into a transparent, engaging, and insightful experience.",
  ]
],
[
  [
    "☀️ Solar Energy Landing Page – UI/UX Concept",
    "A modern, visually engaging landing page designed to showcase solar energy solutions and promote sustainable investments. The layout combines clean typography, bright visuals, and interactive elements to communicate the benefits of solar energy effectively.",
    "This concept focuses on guiding users through key information, highlighting environmental impact, cost savings, and investment opportunities in a clear, intuitive flow.",
    "Key sections featured on the landing page:",
    "• Hero Section – Eye-catching headline with supporting imagery and call-to-action",
    "• Benefits Overview – Highlight the advantages of solar energy with icons and brief descriptions",
    "• Investment Calculator Preview – Introduce the profit calculator with a clear CTA",
    "• Testimonials & Case Studies – Real-world success stories from solar farm investors",
    "• Environmental Impact – Visual metrics on CO₂ reduction and energy savings",
    "• Contact & CTA Section – Easy access for inquiries or starting an investment",
    "",
    "The visual style uses bright, clean colors and modern typography, balancing informative content with engaging imagery. Interactive elements like hover effects and smooth scrolling enhance usability and make the experience more immersive.",
    "A vibrant, user-friendly landing page concept that educates, inspires, and converts visitors into solar energy investors.",
  ]
]
];

const descriptions_mobile = [
  [
    [
      "💕 Braintease – Modern Dating App (UI/UX & Mobile Development)",
      "I am part of a 6-person team building Braintease, a modern dating app designed to bring a fresh approach to the dating market. Our goal is to create an intuitive, engaging, and secure platform that stands out from existing solutions.",
      "While the full codebase is private on GitHub, I am able to discuss implementation details and show relevant snippets during job interviews.",
      "Tech Stack & Responsibilities:",
      "• Front-end / Mobile – Developed using React Native, focusing on a smooth and responsive mobile experience",
      "• Authentication – Firebase authentication with email and phone verification for secure user sign-up and login",
      "• Messaging – Firestore-based real-time chat between users",
      "• Backend – Ruby on Rails API delivering data and endpoints for the mobile app",
      "• UI/UX Design – Crafted modern, minimalistic, and user-friendly interfaces for all app screens",
      "Project Status:",
      "• Currently in testing phase; scheduled for release in 2026",
      "• Collaborative development with a small, agile team of 6 members",
      "",
      "This project demonstrates full-stack mobile development and UI/UX design experience in a collaborative environment. It highlights my ability to deliver both design and functional features in a cutting-edge, market-ready application.",
      "Website: [https://braintease.app](https://braintease.app/)"
    ]
  ]
];

const descriptions_web = [
  [
    [
      "🌈 Personal Portfolio – Next.js Implementation",
      "A vibrant, minimalistic personal portfolio built end-to-end with Next.js. The project combines bold color accents with a clean, modern layout to create an engaging and refined user experience across devices.",
      "The app is fully responsive, ensuring seamless viewing on both web and mobile. Every design element from Figma was carefully translated into code, preserving the integrity and intention of the original concept.",
      "UI components are powered by **Aceternity UI** (https://ui.aceternity.com/components), enabling consistent interactions, smooth animations, and scalable design patterns.",
      "Tech highlights:",
      "• **Next.js** – Fast, SEO-friendly, and scalable framework for production-ready web apps",
      "• **Aceternity UI Components** – Reusable building blocks for buttons, cards, modals, and more",
      "• **Responsive Design** – Optimized layouts for mobile, tablet, and desktop",
      "• **Performance & Animations** – Crisp transitions and lightweight frontend architecture",
      "",
      "This project reflects a full end-to-end workflow:",
      "✨ Concept → 🎨 Figma Design → ⚙️ Next.js Implementation",
      "A modern, colorful, and responsive portfolio that demonstrates both UI/UX design skills and frontend development expertise."
    ]
  ]
];

const images = {
  'ui': images_ui,
  'mobile': images_mobile,
  'web': images_web,
};

const descriptions = {
  'ui': descriptions_ui,
  'mobile': descriptions_mobile,
  'web': descriptions_web,
};    

type Localization = "ui" | "mobile" | "web";

export default function PortfolioDetails() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Portfolio Item";
  const subtitle = searchParams.get("subtitle") || "";
  const index = Number(searchParams.get("index") ?? 0);
  const localizationParam = searchParams.get("localization") ?? "web";
  const localization: Localization = localizationParam as Localization;
  return (
    <main className="relative bg-white flex flex-col overflow-x-hidden w-full min-h-screen">
      {/* Logo - Desktop only, top left */}
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
      <div className="min-h-screen pt-[150px] pb-[150px] py-10 px-5 w-full max-w-[1728px] mx-auto">
        <section className="w-full max-w-[1728px] px-5 sm:px-[clamp(5px,9.375vw,162px)]">
        <h2 className="text-[clamp(40px,3.5vw,60px)] font-normal text-center leading-tight mb-5">
          {title}
        </h2>
        <p className="text-[clamp(14px,1.8vw,24px)] text-gray-600 text-center mb-[3vh]">
          {subtitle}
        </p>
        <div className="mb-[3vh] flex items-center">
          <Link href="/#portfolio" className="text-[clamp(14px,1.8vw,20px)] text-gray-600 text-left ">
            ← Portfolio
          </Link>
        </div>
        <div className="flex flex-col gap-12" style={{ fontFamily: 'var(--font-albert-sans)' }}>
          {images[localization] &&
          images[localization][Number(index)] &&
          Array.isArray(images[localization][Number(index)]) &&
          images[localization][Number(index)].map((src, i) => (
            <div key={i} className="w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={src} 
                  alt={`portfolio ${i + 1}`} 
                  width={1500} 
                  height={1000} 
                  className="object-cover w-full h-auto aspect-16/10" 
                />
              </div>
              {Array.isArray(descriptions[localization][Number(index)][i]) ? (
                <div className="mt-4 text-lg text-gray-700 text-left px-4 pt-5 max-w-2xl mx-auto leading-relaxed">
                  {descriptions[localization][Number(index)][i].map((para, idx) => {
                    const match = para.match(/Website: \[([^\]]+)\]\(([^)]+)\)/);
                    if (idx === 0) {
                      return (
                        <h1 key={idx} className="text-[clamp(24px,2vw,36px)] font-medium text-black mb-[1vh]">
                          {para}
                        </h1>
                      );
                    }
                    if (match) {
                      return (
                        <p key={idx} className="mb-6">
                          Website: <a href={match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{match[1]}</a>
                        </p>
                      );
                    }
                    return <p key={idx} className="mb-6">{para}</p>;
                  })}
                </div>
              ) : (
                descriptions[localization][Number(index)][i] && (
                  <div className="mt-4 text-lg text-gray-700 text-left px-4 pt-5 max-w-2xl mx-auto leading-relaxed">
                    {descriptions[localization][Number(index)][i]}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
        </section>
      </div>
    </main>

  );
}
