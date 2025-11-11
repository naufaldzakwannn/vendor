import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Camera } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2 font-bold text-2xl text-gray-800">
          <Camera className="text-indigo-600" />
          <span>WisudaLens</span>
        </div>
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {["Home", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
            <ScrollLink key={item} to={item.toLowerCase()} smooth={true} duration={600} offset={-80} className="cursor-pointer hover:text-indigo-600 transition-colors">
              {item}
            </ScrollLink>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col md:hidden bg-white border-t shadow-md">
          {["Home", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
            <ScrollLink key={item} to={item.toLowerCase()} smooth={true} duration={600} offset={-80} className="p-4 border-b hover:bg-indigo-50" onClick={() => setOpen(false)}>
              {item}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
