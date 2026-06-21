"use client";

/* Inline social SVGs since lucide-react no longer ships brand icons */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

const socials = [
  { icon: InstagramIcon, url: "#" },
  { icon: FacebookIcon, url: "#" },
  { icon: XIcon, url: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#030303] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-1 mb-6 group w-fit">
              <span className="font-bebas text-4xl tracking-wide text-white group-hover:scale-105 transition-transform duration-300">
                FILLMORE
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow self-end mb-2.5 animate-pulse"></span>
            </a>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-sm mb-6">
              A premium brand-building concept created by Orzora to showcase the international brand identity of Fillmore Burger in Kochi, Kerala.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-brand-yellow uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "Locations", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-brand-yellow uppercase mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li>hello@fillmoreburger.com</li>
              <li>+91 98450 12345</li>
              <li>Kochi, Kerala, India</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-500">
          <span>&copy; {new Date().getFullYear()} Fillmore Burger. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
