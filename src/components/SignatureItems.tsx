"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "fillmore-smash",
    name: "Fillmore Smash",
    description: "Double premium beef patties, melted sharp cheddar cheese, house burger sauce, dill pickles, toasted golden brioche bun.",
    price: "₹299",
    image: "/images/hero_burger.png",
    badge: "Bestseller",
  },
  {
    id: "nashville-hot",
    name: "Nashville Hot Chicken",
    description: "Crispy buttermilk fried chicken breast tossed in hot chili glaze, tangy coleslaw, house pickles, toasted brioche bun.",
    price: "₹320",
    image: "/images/nashville_hot_chicken.png",
    badge: "Trending",
  },
  {
    id: "classic-cheese",
    name: "Classic Cheeseburger",
    description: "Single juicy flame-grilled patty, cheddar cheese, crisp butterhead lettuce, tomato slice, dill pickles, signature secret sauce.",
    price: "₹249",
    image: "/images/classic_cheeseburger.png",
    badge: "Classic",
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Crispy golden French fries loaded with creamy warm cheddar cheese sauce, crisp chopped bacon, sliced jalapenos, and green onions.",
    price: "₹189",
    image: "/images/loaded_fries.png",
    badge: "Must Try",
  },
];

export default function SignatureItems() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">
            Signature Lineup
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-brand-blue uppercase mt-3">
            Crafted for <span className="text-brand-yellow">True Flavor</span>
          </h2>
          <p className="text-gray-500 font-medium mt-4">
            Freshly ground daily, hand-smashed, and seasoned to perfection. Taste the international difference in Kochi.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-3xl border border-brand-lightblue/40 p-6 flex flex-col justify-between shadow-[0_4px_30px_rgba(11,77,219,0.03)] hover:shadow-[0_20px_50px_rgba(11,77,219,0.08)] hover:scale-[1.03] transition-all duration-500 ease-out"
            >
              <div>
                {/* Badge & Image */}
                <div className="relative w-full aspect-square bg-brand-lightblue/20 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                  <span className="absolute top-3 left-3 z-10 bg-brand-blue text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider">
                    {product.badge}
                  </span>
                  
                  {/* Image container with scale-up hover */}
                  <div className="relative w-[85%] h-[85%] transition-transform duration-500 ease-out group-hover:scale-110">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bebas text-2xl tracking-wide text-brand-blue mb-2 uppercase">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium mb-4">
                  {product.description}
                </p>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between border-t border-brand-lightblue/30 pt-4 mt-2">
                <span className="text-lg font-extrabold text-brand-blue">
                  {product.price}
                </span>
                
                <button className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-lightblue/50 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
