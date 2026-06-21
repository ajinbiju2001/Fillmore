"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const hotspots = [
  {
    id: "bun",
    title: "Brioche Bun",
    desc: "Buttery. Toasted. Pure Perfection.",
    top: "20%",
    left: "50%",
    direction: "left",
  },
  {
    id: "lettuce",
    title: "Fresh Lettuce",
    desc: "Crisp. Cool. Farm Fresh.",
    top: "38%",
    left: "50%",
    direction: "right",
  },
  {
    id: "cheese",
    title: "Melted Cheese",
    desc: "Creamy. Gooey. Irresistible.",
    top: "52%",
    left: "50%",
    direction: "left",
  },
  {
    id: "patty",
    title: "Double Smash",
    desc: "Crispy Edges. Juicy Inside.",
    top: "68%",
    left: "50%",
    direction: "right",
  },
  {
    id: "sauce",
    title: "Signature Sauce",
    desc: "Our Secret. Your Obsession.",
    top: "85%",
    left: "50%",
    direction: "left",
  },
];

export default function AnatomySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Pin the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "+=200%", // Long scroll to see all features
          pin: true,
          scrub: 1,
        },
      });

      // 2. Initial state: burger is slightly scaled down and dark
      gsap.set(burgerRef.current, { scale: 0.9, filter: "brightness(0.5)" });
      gsap.set(".hotspot-dot", { scale: 0, opacity: 0 });
      gsap.set(".hotspot-line", { scaleX: 0 });
      gsap.set(".hotspot-text", { opacity: 0, x: (i, target) => target.dataset.dir === "left" ? 20 : -20 });

      // 3. Burger emerges
      tl.to(burgerRef.current, {
        scale: 1,
        filter: "brightness(1)",
        duration: 2,
        ease: "power2.out",
      });

      // 4. Animate each hotspot sequentially
      hotspots.forEach((spot, i) => {
        const dot = `.dot-${spot.id}`;
        const line = `.line-${spot.id}`;
        const text = `.text-${spot.id}`;

        // Dot pops in
        tl.to(dot, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }, "-=0.2")
          // Line draws out
          .to(line, { scaleX: 1, duration: 1, ease: "power2.inOut" })
          // Text fades in and slides into place
          .to(text, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");
      });

      // 5. Hold at the end before unpinning
      tl.to({}, { duration: 2 });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center font-sans"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-[#FDBD12]/5 blur-[120px]" />
      </div>

      {/* Main Container */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-[1200px] h-full max-h-[900px] flex items-center justify-center"
      >
        {/* Burger Image Container (Aspect Square) */}
        <div ref={burgerRef} className="relative w-[90vw] md:w-[60vw] max-w-[600px] aspect-square z-10">
          <Image
            src="/images/hero_burger_perfect_nofork.png"
            alt="The Fillmore Burger"
            fill
            priority
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            sizes="(max-width: 768px) 90vw, 600px"
          />

          {/* Render Hotspots on top of the burger */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20"
              style={{ top: spot.top, left: spot.left }}
            >
              {/* The Glowing Dot */}
              <div 
                className={`hotspot-dot dot-${spot.id} absolute w-3 h-3 md:w-4 md:h-4 bg-[#FDBD12] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(253,189,18,0.8)]`} 
              >
                <div className="absolute inset-0 bg-white rounded-full scale-50" />
              </div>

              {/* The Connecting Line */}
              <div
                className={`hotspot-line line-${spot.id} absolute top-1/2 h-[1px] bg-gradient-to-r w-[15px] sm:w-[25px] md:w-[calc(25vw+50px)] max-w-[40px] md:max-w-[300px] ${
                  spot.direction === "left" 
                    ? "from-transparent to-[#FDBD12]/50 right-0 origin-right" 
                    : "from-[#FDBD12]/50 to-transparent left-0 origin-left"
                }`}
              />

              {/* The Text Block */}
              <div
                data-dir={spot.direction}
                className={`hotspot-text text-${spot.id} absolute top-1/2 -translate-y-1/2 w-[120px] sm:w-[140px] md:w-[250px] 
                  bg-black/60 backdrop-blur-md rounded-lg p-2 border border-white/10 shadow-xl
                  md:bg-transparent md:backdrop-blur-none md:border-transparent md:shadow-none md:p-0
                  ${
                  spot.direction === "left" 
                    ? "right-[20px] sm:right-[30px] md:right-[calc(25vw+60px)] xl:right-[320px] text-right" 
                    : "left-[20px] sm:left-[30px] md:left-[calc(25vw+60px)] xl:left-[320px] text-left"
                }`}
              >
                <h3 className="text-[#FDBD12] text-[11px] sm:text-xs md:text-base font-bold uppercase tracking-widest mb-1 md:mb-1">
                  {spot.title}
                </h3>
                <p className="text-white/90 text-[10px] sm:text-[11px] md:text-sm font-medium leading-tight">
                  {spot.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
