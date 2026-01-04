import { Facebook, Instagram, Mail, Phone } from "lucide-react";

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
                <Phone className="w-4 h-4" /> +62 812-3456-7890
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" /> arunikapicture@gmail.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a href="https://instagram.com/arunikapicture" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
                <Instagram className="w-5 h-5" />
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                <Facebook className="w-5 h-5" />
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
