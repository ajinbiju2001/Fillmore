"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// We use the perfect premium slices for the deconstructed state
const ingredients = [
  { id: "top-bun", src: "/images/premium_slice_1_bun_v2.png", z: 50 },
  { id: "toppings", src: "/images/premium_slice_2_patty_v2.png", z: 40 },
  { id: "patty-1", src: "/images/premium_slice_3_patty_v2.png", z: 30 },
  { id: "patty-2", src: "/images/premium_slice_4_veggies_v2.png", z: 20 },
  { id: "bottom-bun", src: "/images/premium_slice_5_bottom_v2.png", z: 10 },
];

export default function DeconstructedScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ingredientRefs = useRef<(HTMLDivElement | null)[]>([]);
  const baseBurgerRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const steamRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textReveal = textRevealRef.current;
    const introText = introTextRef.current;
    const steam = steamRef.current;
    const glow = glowRef.current;
    const wrapper = wrapperRef.current;
    const baseBurger = baseBurgerRef.current;
    const elements = ingredientRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!container || !textReveal || !steam || !wrapper || !glow || !baseBurger || elements.length === 0) return;

    ScrollTrigger.getAll()
      .filter((t) => t.vars.trigger === container)
      .forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      // 1. Initial State - PERFECTLY ASSEMBLED BURGER
      // Base burger is IN FRONT of the slices to completely hide the internal drop-shadow seams
      gsap.set(baseBurger, { opacity: 1, scale: 1, y: 0 });
      elements.forEach((el) => {
        gsap.set(el, { y: 0, scale: 1, opacity: 1 });
      });

      // Hide Climax Elements
      gsap.set(textReveal, { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 });
      gsap.set(steam, { opacity: 0 });
      gsap.set(glow, { opacity: 0, scale: 0.8 });
      gsap.set(introText, { opacity: 1, y: 0 });
      gsap.set(wrapper, { scale: 1, y: 0 });

      // 2. Main Timeline (250vh scroll distance)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=250%", 
          scrub: 1, 
          pin: true,
          anticipatePin: 1,
        },
      });

      // --- PHASE 1: INITIAL VIEW & ANTICIPATION (0% - 15%) ---
      // Burger floats gently, steam slowly appears
      tl.to(wrapper, { y: -10, duration: 1.5, ease: "power1.inOut" }, 0);
      tl.to(steam, { opacity: 0.3, duration: 1.5, ease: "power1.inOut" }, 0);
      
      // Fade out intro text
      tl.to(introText, { opacity: 0, y: -20, duration: 1 }, 0.5);

      // --- PHASE 2: SLIGHT DECONSTRUCTION (15% - 45%) ---
      // Fade out the flawless base image EXACTLY as the slices begin separating
      // This seamlessly reveals the individual slices and their drop-shadows
      tl.to(baseBurger, { opacity: 0, duration: 0.3 }, 1.5);

      // The slices expand SLIGHTLY
      const expandY = [-40, -25, -15, -8, 0];
      
      elements.forEach((el, i) => {
        tl.to(
          el,
          {
            y: expandY[i],
            duration: 3,
            ease: "power2.inOut",
          },
          1.5
        );
      });

      // --- PHASE 3: REASSEMBLE (45% - 70%) ---
      elements.forEach((el) => {
        tl.to(
          el,
          {
            y: 0,
            duration: 2.5,
            ease: "power2.inOut",
          },
          4.5
        );
      });

      // Fade the flawless base image back in EXACTLY as they touch to hide the seams again
      tl.to(baseBurger, { opacity: 1, duration: 0.3 }, 6.7);

      // --- CLIMAX MOMENT (70% - 85%) ---
      tl.to(
        wrapper,
        {
          scale: 1.05,
          y: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        7.0
      );
      
      tl.to(glow, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" }, 7.0);
      tl.to(steam, { opacity: 0.6, duration: 1.5, ease: "power2.inOut" }, 7.0);

      // TAGLINE REVEAL behind the burger
      tl.to(
        textReveal,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power4.out",
        },
        7.2
      );

      // Hold Climax
      tl.to({}, { duration: 2.0 });

      // --- TRANSITION OUT (85% - 100%) ---
      tl.to(
        [wrapper, textReveal, steam, glow],
        {
          y: -150,
          scale: 0.9,
          opacity: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "+=0"
      );

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white w-full overflow-hidden">
      <div className="h-screen w-full flex flex-col items-center justify-center relative">
        
        {/* Soft, deep radial glow for depth */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[150px]" 
               style={{ backgroundColor: "rgba(11,77,219,0.08)" }} />
        </div>

        {/* Micro Details: Floating Sesame Particles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-2.5 rounded-[50%] bg-[#dca85b] blur-[0.5px]"
              style={{
                left: `${35 + Math.random() * 30}%`,
                top: `${30 + Math.random() * 40}%`,
                transform: `rotate(${Math.random() * 180}deg)`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                rotate: [0, 60, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Intro Content */}
        <div 
          ref={introTextRef}
          className="absolute top-[12vh] flex flex-col items-center z-30 pointer-events-none"
        >
          <span className="text-brand-blue tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase mb-4">
            Watch It Come Together
          </span>
          <div className="text-center font-medium text-brand-blue/60 text-sm tracking-wide">
            <p>Crafted Layer By Layer</p>
            <p>Made Fresh Daily</p>
          </div>
        </div>

        {/* Tagline Reveal */}
        <div
          ref={textRevealRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
        >
          <h2 className="font-bebas text-[18vw] md:text-[22vw] lg:text-[280px] text-brand-blue leading-[0.78] text-center tracking-tight uppercase"
              style={{
                textShadow: "0 20px 40px rgba(11,77,219,0.1)",
              }}>
            FULL NEVER<br />FELT BETTER
          </h2>
        </div>

        {/* Climax Glow Behind Burger */}
        <div 
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/70 blur-[40px] rounded-full z-[15] pointer-events-none" 
        />

        {/* The Burger Wrapper */}
        <div
          ref={wrapperRef}
          className="relative w-full max-w-[300px] md:max-w-[350px] lg:max-w-[420px] aspect-square flex flex-col justify-center items-center z-20 pointer-events-none"
        >
          {/* Photorealistic Steam */}
          <div
            ref={steamRef}
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-[250px] h-[350px] z-[5]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-transparent blur-[35px] rounded-[50%] animate-steam-slow" />
          </div>

          {/* Realistic Floor Shadow */}
          <div className="absolute bottom-[2%] w-[75%] h-[15px] rounded-[50%] bg-black/15 blur-[12px] z-0" />

          {/* Sliced Ingredients Stack (These cast 3D shadows on each other when separated) */}
          {ingredients.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                ingredientRefs.current[i] = el;
              }}
              className="absolute w-full h-full will-change-transform"
              style={{
                zIndex: item.z,
                filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.15))", 
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.id}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* THE FLAWLESS BASE LAYER: Sits IN FRONT (z-60) to completely mask the internal drop-shadow seams when assembled */}
          <div
            ref={baseBurgerRef}
            className="absolute w-full h-full z-[60]"
            style={{
              filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.2))", // Global shadow for the assembled burger
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/hero_burger_perfect_nofork.png"
                alt="Flawless Burger"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

