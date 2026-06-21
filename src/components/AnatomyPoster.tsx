"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnatomyPoster() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Scroll animations for dramatic entrance
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scaleProg = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);

  const smoothScale = useSpring(scaleProg, { damping: 20, stiffness: 100 });
  const smoothOpacity = useSpring(opacityProg, { damping: 20, stiffness: 100 });

  // 3D Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse values into 3D rotations
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  
  // Transform mouse values into a glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  // Smooth the rotations
  const springRotateX = useSpring(rotateX, { damping: 30, stiffness: 200 });
  const springRotateY = useSpring(rotateY, { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: "+=50%", 
        pin: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[150vh] bg-[#030303] overflow-hidden flex items-center justify-center perspective-[2000px]"
    >
      <motion.div 
        ref={imageRef}
        style={{
          scale: smoothScale,
          opacity: smoothOpacity,
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full max-w-[1400px] mx-auto z-10 p-4 md:p-8 flex items-center justify-center will-change-transform"
      >
        <div className="relative w-full h-full max-h-[90vh]" style={{ transform: 'translateZ(50px)' }}>
          <Image
            src="/images/burger_anatomy_dark.jpg"
            alt="Anatomy of Perfection"
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
          
          {/* Dynamic Glare Overlay */}
          <motion.div 
            className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-30"
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
    </section>
  );
}
