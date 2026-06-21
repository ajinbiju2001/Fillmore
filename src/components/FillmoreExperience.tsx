"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FillmoreExperience() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">
            Our Vibe
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-brand-blue uppercase mt-2">
            The Fillmore <span className="text-brand-yellow">Experience</span>
          </h2>
        </div>

        {/* Magazine Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block - Huge Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-lg min-h-[450px] lg:min-h-[600px] flex flex-col justify-end p-8 md:p-12"
          >
            <Image
              src="/images/experience_interior.png"
              alt="Fillmore Interior"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/30 to-transparent" />
            
            <div className="relative z-10 text-white max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow mb-2 block">
                Instagrammable Space
              </span>
              <h3 className="font-bebas text-4xl md:text-5xl text-white uppercase leading-none mb-4">
                Designed for delicious moments
              </h3>
              <p className="text-brand-lightblue/90 text-sm font-medium leading-relaxed">
                Step into a space that matches the freshness of our burgers. Our signature blue paneling, clean white tiles, and vibrant yellow booths create the perfect cozy yet premium atmosphere for foodies.
              </p>
            </div>
          </motion.div>

          {/* Right Block - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Top Right Card - Flatlay Vibe */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden bg-brand-lightblue/40 p-8 flex-1 flex flex-col justify-between border border-brand-lightblue/50"
            >
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-sm">
                <Image
                  src="/images/insta_3.png"
                  alt="Delicious burger flatlay"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase mb-1.5 block">
                  Kochi's Favorite
                </span>
                <h4 className="font-bebas text-2xl text-brand-blue uppercase mb-2">
                  Taste that travels
                </h4>
                <p className="text-gray-600 text-xs font-medium leading-relaxed">
                  Every tray is a curated masterpiece of flavor. From the crunchy brioche buns to our cheese pull moments, it's premium quality down to the last bite.
                </p>
              </div>
            </motion.div>

            {/* Bottom Right Card - Text Callout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-blue rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              
              <p className="font-bebas text-3xl md:text-4xl text-brand-yellow uppercase leading-tight mb-4">
                "An international burger experience right here in Kochi."
              </p>
              <span className="text-xs font-bold tracking-widest text-brand-lightblue uppercase">
                - Kochi Food Journal
              </span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
