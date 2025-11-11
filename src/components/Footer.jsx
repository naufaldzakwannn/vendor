import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold text-white tracking-wide">🎓 WisudaLens</h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto">Abadikan momen wisudamu dengan hasil foto & video profesional — penuh makna dan keindahan.</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="mailto:info@wisudalens.com" className="hover:text-indigo-400 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:+6281234567890" className="hover:text-indigo-400 transition-colors duration-300">
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 pt-4">
          © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">WisudaLens</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
