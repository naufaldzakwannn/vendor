import { Instagram, Mail, Phone } from "lucide-react";
import { FaInstagram, FaMailBulk, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="heading text-2xl text-gray-900">Arunika Picture</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Jasa foto & video wisuda profesional untuk mengabadikan momen penting dalam hidupmu dengan hasil yang elegan dan berkesan.</p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Kontak</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" /> +62 856-7357-138
              </p>
              {/* <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" /> arunikapicture@gmail.com
              </p> */}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a href="https://instagram.com/arunikapicture_" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition transform hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]">
                <FaInstagram className="w-5 h-5" />
              </a>

              <a href="https://www.tiktok.com/@arunika.picture" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition transform hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-14 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-gray-700 font-medium">Arunika Picture</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
