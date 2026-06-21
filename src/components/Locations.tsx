"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    city: "Kochi",
    area: "Whitefield",
    address: "Fillmore Tower, Infopark Road, Kakkanad, Kochi, Kerala 682030",
    phone: "+91 98450 12345",
    timing: "12:00 PM - 11:30 PM",
    lat: "9.9816",
    lng: "76.3298",
  },
  {
    city: "Kochi",
    area: "Thrikkakara",
    address: "Metro Plaza, Seaport - Airport Rd, Thrikkakara, Kochi, Kerala 682021",
    phone: "+91 98450 67890",
    timing: "12:00 PM - 11:30 PM",
    lat: "10.0261",
    lng: "76.3302",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-brand-lightblue/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">
            Outlets
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-brand-blue uppercase mt-2">
            Where to <span className="text-brand-yellow">Find Us</span>
          </h2>
          <p className="text-gray-500 font-medium mt-4">
            Visit us for hot off the grill smash burgers or get them delivered directly to your doorstep.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Outlet Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-brand-lightblue/50 shadow-[0_4px_30px_rgba(11,77,219,0.02)] rounded-3xl p-8 flex flex-col justify-between group hover:border-brand-blue/30 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                        {loc.city}
                      </span>
                      <h3 className="font-bebas text-3xl text-brand-blue uppercase mt-1">
                        {loc.area}
                      </h3>
                    </div>
                    <span className="bg-brand-lightblue text-brand-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Open Now
                    </span>
                  </div>

                  <div className="space-y-4 my-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-gray-600 leading-relaxed">
                        {loc.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                      <span className="text-xs font-semibold text-gray-600">
                        {loc.phone}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                      <span className="text-xs font-medium text-gray-500">
                        {loc.timing}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-brand-lightblue/20 pt-6">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group inline-flex justify-center items-center gap-2 rounded-full border-2 border-brand-blue py-3 text-xs font-bold text-brand-blue transition-all duration-300 hover:bg-brand-blue hover:text-white"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stylized Clean Vector Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[400px] lg:h-[550px] bg-brand-lightblue/30 rounded-3xl overflow-hidden border border-brand-lightblue/40 flex items-center justify-center p-4 shadow-sm"
          >
            {/* Map Art Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0B4DDB_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-lightblue/10 via-transparent to-brand-yellow/5" />

            {/* Simulated Map Design */}
            <div className="relative w-full h-full border border-white/50 rounded-2xl bg-white/60 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-inner">
              
              {/* Fake roads */}
              <div className="absolute w-[2px] h-full bg-brand-blue/10 left-1/3" />
              <div className="absolute w-[2px] h-full bg-brand-blue/10 left-2/3" />
              <div className="absolute h-[2px] w-full bg-brand-blue/10 top-1/2" />
              <div className="absolute h-[2px] w-full bg-brand-blue/10 top-1/4" />
              
              {/* Fake river/coastline */}
              <div className="absolute top-0 right-0 w-28 h-full bg-brand-lightblue/20 rounded-l-full blur-xl" />

              {/* Fake Map Markers */}
              <div className="absolute left-[38%] top-[45%] flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full bg-brand-blue/20 animate-ping" />
                  <div className="w-4 h-4 rounded-full bg-brand-blue border-2 border-white shadow-md z-10" />
                </div>
                <span className="bg-brand-blue text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md mt-2 tracking-wider z-20">
                  Whitefield
                </span>
              </div>

              <div className="absolute left-[64%] top-[30%] flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full bg-brand-blue/20 animate-ping" />
                  <div className="w-4 h-4 rounded-full bg-brand-blue border-2 border-white shadow-md z-10" />
                </div>
                <span className="bg-brand-blue text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md mt-2 tracking-wider z-20">
                  Thrikkakara
                </span>
              </div>

              {/* Cochin Coast Label */}
              <div className="absolute bottom-6 right-6 flex flex-col items-end opacity-40 select-none">
                <span className="font-bebas text-4xl text-brand-blue tracking-wider uppercase leading-none">
                  Kochi, Kerala
                </span>
                <span className="text-[10px] font-bold tracking-widest text-brand-blue">
                  Arabian Sea Coast
                </span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
