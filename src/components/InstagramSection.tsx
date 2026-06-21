"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Inline Instagram SVG since lucide-react no longer ships brand icons */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const instagramPosts = [
  { id: 1, image: "/images/insta_1.png", alt: "Milkshake craft shot" },
  { id: 2, image: "/images/insta_2.png", alt: "Hands holding double smash burger" },
  { id: 3, image: "/images/insta_3.png", alt: "Double burger and fries tray flatlay" },
  { id: 4, image: "/images/classic_cheeseburger.png", alt: "Classic cheeseburger closeup" },
];

export default function InstagramSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">
              Join The Community
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl text-brand-blue uppercase mt-2">
              On the <span className="text-brand-yellow">Gram</span>
            </h2>
          </div>
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @fillmore.kochi</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: post.id * 0.05 }}
              className="relative aspect-square rounded-3xl overflow-hidden group shadow-sm border border-brand-lightblue/30"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <InstagramIcon className="w-6 h-6" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
