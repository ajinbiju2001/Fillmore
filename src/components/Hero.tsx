"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Flame, Star, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  /* ── Mouse parallax ── */
  useEffect(() => {
    const section = sectionRef.current;
    const burger = burgerRef.current;
    if (!section || !burger) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouse = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 10;  // max 10px
      targetY = y * 10;
    };

    const handleLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      burger.style.transform = `translate(${currentX}px, ${currentY}px)`;
      rafId = requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", handleMouse);
    section.addEventListener("mouseleave", handleLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", handleMouse);
      section.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100vh] lg:h-screen w-full overflow-hidden bg-white font-sans pt-32 pb-16 lg:pt-0 lg:pb-0"
    >
      {/* ── Background Depth / Main Ambient Glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Fillmore Blue Top Glow */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-[#0B4DDB] blur-[150px]"
        />
        {/* Fillmore Yellow Bottom Glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-[#FDBD12] blur-[150px]"
        />
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
          
          {/* Dual Radial Glow behind the burger */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[60%] aspect-square rounded-full bg-[#0B4DDB] blur-[80px]"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-[50%] aspect-square rounded-full bg-[#FDBD12] blur-[70px] translate-y-10"
            />
          </div>

          {/* Parallax Wrapper */}
          <div ref={burgerRef} className="relative z-20 w-full h-full flex items-center justify-center will-change-transform">
            
            {/* Entrance & Zero-Gravity Float Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  y: [-6, 6, -6],
                  rotate: [-0.5, 0.5, -0.5] // Subtle rotational breathing
                }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="relative w-full flex justify-center"
              >
                {/* Steam Wisps - Premium Food Photography Style */}
                <div className="absolute inset-0 z-30 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -40, -80], x: [0, 5, -3], opacity: [0, 0.08, 0], scale: [0.9, 1.2, 1.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: 0 }}
                    className="absolute top-[15%] left-[45%] w-[80px] h-[100px] rounded-full bg-white blur-[25px]"
                  />
                  <motion.div
                    animate={{ y: [0, -30, -60], x: [0, -8, 4], opacity: [0, 0.06, 0], scale: [0.8, 1.1, 1.3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeOut", delay: 2 }}
                    className="absolute top-[18%] left-[52%] w-[60px] h-[80px] rounded-full bg-white blur-[20px]"
                  />
                </div>

                {/* The Physics Drop Assembly Burger */}
                <div
                  className="relative w-[85vw] md:w-[70vw] lg:w-[65vw] max-w-[850px] min-w-[320px] aspect-[4/5] md:aspect-square"
                  style={{
                    filter: "drop-shadow(0 50px 70px rgba(0,0,0,0.25)) drop-shadow(0 20px 30px rgba(0,0,0,0.18))",
                  }}
                >
                  {/* --- PREMIUM EPIC BURGER DROP --- */}
                  <motion.div
                    initial={{ opacity: 0, y: -800, scale: 1.4, rotate: -5, filter: "brightness(2) blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "brightness(1) blur(0px)" }}
                    transition={{ 
                      y: { type: "spring", stiffness: 35, damping: 15, mass: 3, delay: 0.2 },
                      opacity: { duration: 0.8, delay: 0.2 },
                      scale: { type: "spring", stiffness: 35, damping: 15, mass: 3, delay: 0.2 },
                      rotate: { type: "spring", stiffness: 35, damping: 15, mass: 3, delay: 0.2 },
                      filter: { duration: 1.5, ease: "easeOut", delay: 0.2 }
                    }}
                    className="absolute inset-0 z-50"
                  >
                    <Image src="/images/epic_black_burger_transparent.png" alt="The Ultimate Fillmore Burger" fill priority className="object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.6)]" sizes="(max-width: 768px) 95vw, 65vw" />
                    
                    {/* Epic Impact Shockwave (Rings that expand out when the burger lands) */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.3, 1.8] }}
                      transition={{ duration: 2.0, ease: "easeOut", delay: 1.0 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-brand-yellow/30 pointer-events-none"
                    />
                    
                    {/* Cinematic Lighting Overlay (Softbox reflection on top bun) */}
                    <div 
                      className="absolute top-[10%] left-[40%] w-[40%] h-[20%] rounded-[50%] bg-white/10 blur-[40px] mix-blend-overlay pointer-events-none"
                      style={{ transform: "rotate(-10deg)" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floor shadow beneath the burger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scale: [0.85, 1.05, 0.85],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[5%] lg:bottom-[8%] w-[55%] h-[30px] rounded-[50%] bg-black/30 blur-[20px] pointer-events-none z-10"
          />
        </div>
      </div>
    </section>
  );
}
