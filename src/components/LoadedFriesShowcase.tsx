"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LoadedFriesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Create smooth scroll parallax bind
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-brand-blue"
    >
      {/* Background Parallax Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] select-none pointer-events-none opacity-80"
      >
        <Image
          src="/images/loaded_fries.png"
          alt="Loaded Fries Done Right"
          fill
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-brand-blue/60 to-transparent" />
        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-color" />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-sm font-bold tracking-widest text-brand-yellow uppercase mb-2 block">
            Crave Worthy Side
          </span>
          <h2 className="font-bebas text-6xl md:text-8xl text-white leading-none uppercase mb-6">
            LOADED FRIES<br />
            DONE RIGHT.
          </h2>
          <p className="text-brand-lightblue/90 text-base md:text-lg font-medium mb-8 max-w-md leading-relaxed">
            Hot crispy golden fries drenched in rich cheese sauce, sprinkled with crispy bacon bits, chopped green onions, and jalapeños.
          </p>
          
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-yellow px-8 py-4 text-base font-bold text-brand-blue shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span>Explore Menu</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
