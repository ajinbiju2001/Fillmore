"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Aparna Nair",
    handle: "@aparna.eats",
    comment: "The Fillmore Smash is next level. The crust on the smash patty is perfect and the brioche bun is so soft. Best burger in Kochi by far!",
    rating: 5,
  },
  {
    name: "Rohit Joseph",
    handle: "@rohit_j",
    comment: "I've never seen a burger place with this level of branding and quality. The loaded fries are absolutely loaded, cheese is real and delicious.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    handle: "@meera.k",
    comment: "Super premium vibes and photogenic food. The Nashville Hot Chicken burger had the perfect crunch and heat. Will definitely return!",
    rating: 5,
  },
];

export default function CustomerReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [rating, setRating] = useState(0.0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 4.8;
    const duration = 1500; // ms
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setRating(end);
        clearInterval(timer);
      } else {
        setRating(parseFloat(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-24 bg-brand-lightblue/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Rating Overview */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">
            Rated by Kochi
          </span>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="font-bebas text-8xl md:text-9xl text-brand-blue leading-none">
              {rating}
            </span>
            <span className="text-2xl font-bold text-brand-blue">/5.0</span>
          </div>

          <div className="flex items-center gap-1.5 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
            ))}
          </div>
          
          <p className="text-gray-500 font-semibold mt-3 text-sm">
            Based on 1,200+ Google Reviews
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-brand-lightblue/50 shadow-[0_4px_30px_rgba(11,77,219,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-brand-lightblue/30 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-lightblue flex items-center justify-center font-bold text-brand-blue uppercase text-sm">
                  {test.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-blue">{test.name}</h4>
                  <span className="text-xs text-gray-400 font-medium">{test.handle}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
