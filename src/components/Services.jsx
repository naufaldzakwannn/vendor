import { motion } from "framer-motion";
import { Camera, Video, Users } from "lucide-react";

const services = [
  { icon: Camera, title: "Foto Wisuda", desc: "Sesi foto indoor & outdoor dengan gaya elegan." },
  { icon: Video, title: "Video Sinematik", desc: "Video cinematic untuk momen spesial wisudamu." },
  { icon: Users, title: "Grup & Keluarga", desc: "Foto bersama teman & keluarga dengan konsep menarik." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Layanan Kami</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <s.icon className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
