"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white border-t border-gray-200 mt-20" style={{ fontFamily: 'var(--font-albert-sans)'}} id="footer">
      <div className="max-w-[1728px] mx-auto px-5 flex flex-col items-center justify-center">
        <p className="text-gray-500 text-sm mb-2">© {new Date().getFullYear()} ITUX Mateusz Kuzaj. All rights reserved.</p>
        <div className="flex gap-6 mt-2">
          <Link href="https://github.com/matetuh" target="_blank" className="text-gray-400 hover:text-black transition" aria-label="GitHub">
            <img src="/github.svg" alt="GitHub" width={28} height={28} className="w-7 h-7 rounded-sm"/>
          </Link>
          <Link href="https://www.linkedin.com/in/mateusz-kuzaj-386a7aa8/" target="_blank" className="text-gray-400 hover:text-blue-700 transition" aria-label="LinkedIn">
            <img src="/linkedin.svg" alt="LinkedIn" width={28} height={28} className="w-7 h-7 rounded-sm"/>
          </Link>
          <Link href="https://dribbble.com/matetuh" target="_blank" className="text-gray-400 hover:text-pink-500 transition" aria-label="Dribbble">
            <img src="/dribbble.svg" alt="Dribbble" width={28} height={28} className="w-7 h-7"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}
