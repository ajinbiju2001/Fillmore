"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Quote scroll reveal
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const opacityProg = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const xProg = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  // 3D Mouse Parallax Effect for the transparent poster
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const springRotateX = useSpring(rotateX, { damping: 30, stiffness: 200 });
  const springRotateY = useSpring(rotateY, { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-40 bg-[#030303] overflow-hidden flex items-center justify-center border-t border-white/5 font-sans"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none pr-32">
        <div className="w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#FDBD12]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: The Quote */}
        <motion.div
          style={{ opacity: opacityProg, x: xProg }}
          className="relative text-left pt-10 lg:pt-0"
        >
          {/* Massive decorative quotation marks */}
          <div className="absolute -top-20 -left-10 md:-left-20 pointer-events-none z-0">
            <span className="font-serif text-[15rem] md:text-[25rem] leading-none text-white/[0.03] select-none">
              "
            </span>
          </div>

          <div className="relative z-10">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-white tracking-wide uppercase mb-10 drop-shadow-lg">
              We don't just
              <br />
              make burgers.
              <br />
              <span className="text-[#FDBD12]">We craft obsessions.</span>
            </h2>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-[2px] bg-[#0B4DDB]" />
              <p className="font-sans text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] font-medium">
                The Fillmore Promise
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Transparent Anatomy Poster */}
        <div className="relative flex justify-center items-center perspective-[2000px]">
          <motion.div 
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d"
            }}
            className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[3/4] will-change-transform cursor-pointer group"
          >
            <div className="relative w-full h-full" style={{ transform: 'translateZ(50px)' }}>
              <Image
                src="/images/burger_anatomy_transparent.png"
                alt="Anatomy of Perfection"
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
              
              {/* Dynamic Glare Overlay */}
              <motion.div 
                className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                  left: useTransform(glareX, v => `${v}%`),
                  top: useTransform(glareY, v => `${v}%`),
                  transform: 'translate(-50%, -50%)',
                  width: '200%',
                  height: '200%'
                }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
