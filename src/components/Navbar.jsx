import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logoArunika from "../assets/img/123.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["Home", "Services", "Galeri", "Testimonials", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoArunika} alt="Arunika Picture" className="w-18 h-18 object-contain drop-shadow-sm" />
          <span className="font-[Cormorant_Garamond] text-2xl font-semibold">
            Arunika <span>Picture</span>
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 font-[Poppins] text-sm tracking-wide">
          {menu.map((item) => (
            <ScrollLink
              profilingkey={item}
              to={item.toLowerCase()}
              smooth
              duration={600}
              offset={-90}
              className="cursor-pointer text-gray-600 hover:text-amber-600 transition-all relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 hover:after:w-full after:transition-all"
            >
              {item}
            </ScrollLink>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-2xl text-gray-700" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="
        md:hidden
        bg-white/50
        backdrop-blur-xl
        border-t border-amber-100/60
      "
          >
            {menu.map((item, i) => (
              <motion.div key={item} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth
                  duration={600}
                  offset={-90}
                  onClick={() => setOpen(false)}
                  className="
              block px-6 py-5
              font-[Poppins] text-base
              text-gray-700
              hover:bg-amber-50/50 hover:text-amber-600
              transition
              border-b border-amber-100/40
              last:border-none
            "
                >
                  {item}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
