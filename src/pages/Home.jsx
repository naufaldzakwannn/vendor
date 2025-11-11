import { motion } from "framer-motion";
import { Camera, Video, Users } from "lucide-react";

import photo1 from "../assets/img/img2.jpg";
import photo2 from "../assets/img/img3.jpg";
import photo3 from "../assets/img/img4.jpg";
import photo4 from "../assets/img/img5.jpg";
import photo5 from "../assets/img/img6.jpg";
import photo6 from "../assets/img/img1.jpg";
import photo7 from "../assets/img/img7.jpg";
import photo8 from "../assets/img/img8.jpg";

const services = [
  { icon: Camera, title: "Foto Wisuda", desc: "Sesi foto indoor & outdoor dengan gaya elegan." },
  { icon: Video, title: "Video Sinematik", desc: "Video cinematic untuk momen spesial wisudamu." },
  { icon: Users, title: "Grup & Keluarga", desc: "Foto bersama teman & keluarga dengan konsep menarik." },
];

const photos = [photo2, photo1, photo3, photo4, photo5, photo6, photo7, photo8];

const testimonials = [
  { name: "Ayu", text: "Hasil fotonya luar biasa! Timnya profesional dan sabar banget.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Dimas", text: "Video wisuda saya benar-benar cinematic, keren parah!", img: "https://randomuser.me/api/portraits/men/22.jpg" },
];

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
      >
        {/* 🔹 Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="src/assets/img/graduation.mp4" type="video/mp4" />
          Browser kamu tidak mendukung video tag.
        </video>

        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Abadikan Momen Spesialmu</h1>
          <p className="text-lg md:text-xl mb-6">Layanan Foto & Video Wisuda</p>
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition">
            Booking Sekarang
          </a>
        </motion.div>
      </section>

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

      <section id="portfolio" className="py-24 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {photos.map((src, i) => (
            <motion.img
              key={i}
              src={`${src}?auto=format&fit=crop&w=800&q=80`}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            />
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Testimoni</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} className="bg-white p-8 rounded-2xl shadow-md" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} className="w-14 h-14 rounded-full" />
                <h4 className="font-semibold text-lg">{t.name}</h4>
              </div>
              <p className="text-gray-600 italic">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Hubungi Kami</h2>
        <p className="text-gray-600 mb-6">Booking atau tanya-tanya? Hubungi kami via WhatsApp!</p>
        <a href="https://wa.me/6281234567890" className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition">
          Chat via WhatsApp
        </a>
      </section>
    </>
  );
}
