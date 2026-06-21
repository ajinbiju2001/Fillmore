"use client";

import { ArrowRight, Flame, Star, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] lg:h-screen w-full overflow-hidden bg-white font-sans pt-32 pb-16 lg:pt-0 lg:pb-0"
    >
      {/* ── Background Depth / Main Ambient Glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Fillmore Blue Top Glow - Hidden on mobile for performance */}
        <div className="hidden md:block absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-[#0B4DDB] blur-[150px] opacity-20" />
        {/* Fillmore Yellow Bottom Glow - Hidden on mobile for performance */}
        <div className="hidden md:block absolute -bottom-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-[#FDBD12] blur-[150px] opacity-15" />
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0">
        
        {/* ── Left: Content ── */}
        <div className="flex flex-col justify-center text-left relative z-20 xl:pr-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEBFF]/50 text-[#0B4DDB] text-[11px] font-bold tracking-[0.15em] mb-6 w-fit uppercase border border-[#0B4DDB]/10"
          >
            <Flame className="w-3.5 h-3.5 fill-[#0B4DDB] text-[#0B4DDB]" />
            KOCHI&apos;S FINEST SMASH BURGERS
          </motion.div>

          {/* Headline - Scaled down for perfect viewport fit */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-bebas text-[5rem] sm:text-[6.5rem] md:text-[7.5rem] lg:text-[8rem] xl:text-[9rem] leading-[0.85] tracking-tight uppercase mb-6 drop-shadow-sm"
          >
            <span className="text-[#0B4DDB] block">FULL NEVER</span>
            <span className="text-[#FDBD12] block">FELT BETTER</span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-gray-600 text-lg md:text-xl font-medium max-w-md mb-8 leading-relaxed"
          >
            Handcrafted smash burgers. Loaded fries. Bold flavors. Made fresh to
            order in the heart of Kerala.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#menu"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#0B4DDB] px-9 py-4 text-[16px] font-bold text-white shadow-[0_8px_25px_rgba(11,77,219,0.25)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(11,77,219,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-[0_5px_15px_rgba(11,77,219,0.2)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative">Order Online</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </a>

            <a
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#0B4DDB] bg-white px-9 py-4 text-[16px] font-bold text-[#0B4DDB] transition-all duration-300 hover:bg-[#0B4DDB]/5 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(11,77,219,0.1)] active:translate-y-0"
            >
              <span>View Menu</span>
            </a>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-gray-500"
          >
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#FDBD12] fill-current drop-shadow-sm" />
              <span className="text-gray-900 font-bold">4.8</span> 
              <span>Google Rating</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 bg-gray-200 rounded-full" />
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#0B4DDB]" />
              <span className="text-gray-900 font-bold">1000+</span>
              <span>Happy Customers</span>
            </div>
            <div className="hidden lg:block w-1.5 h-1.5 bg-gray-200 rounded-full" />
            <div className="flex items-center gap-1.5 w-full lg:w-auto mt-2 lg:mt-0">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Whitefield & Thrikkakara</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Burger Composition ── */}
        <div className="relative flex items-center justify-center h-full w-full lg:-ml-8 xl:-ml-12 mt-12 lg:mt-0 pointer-events-none">
          
          {/* Dual Radial Glow behind the burger - Hidden on mobile */}
          <div className="absolute inset-0 flex items-center justify-center hidden md:flex">
            <div className="absolute w-[60%] aspect-square rounded-full bg-[#0B4DDB] blur-[80px] opacity-10" />
            <div className="absolute w-[50%] aspect-square rounded-full bg-[#FDBD12] blur-[70px] translate-y-10 opacity-15" />
          </div>

          {/* Static Wrapper (Parallax removed for performance) */}
          <div className="relative z-20 w-full h-full flex items-center justify-center">
            
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full flex justify-center hover:animate-none">

                {/* The Burger - Raw Static Native Image for 100% Stability */}
                <div className="relative w-[85vw] md:w-[70vw] lg:w-[65vw] max-w-[850px] min-w-[320px] aspect-[4/5] md:aspect-square z-50">
                  <img 
                    src="/images/epic_black_burger_transparent.png" 
                    alt="The Ultimate Fillmore Burger" 
                    fetchPriority="high"
                    decoding="sync"
                    loading="eager"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Static Floor shadow beneath the burger */}
          <div className="absolute bottom-[5%] lg:bottom-[8%] w-[55%] h-[20px] md:h-[30px] rounded-[50%] bg-black/40 blur-[15px] md:blur-[25px] pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
