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

/* =====================
   ANIMATION VARIANTS
===================== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

/* =====================
   DATA
===================== */
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
      {/* ================= HERO ================= */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/src/assets/img/graduation.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative z-10 text-center text-white px-6">
          <h1 className="heading text-4xl md:text-6xl font-semibold mb-4">Abadikan Momen Wisudamu</h1>
          <p className="text-base md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">Foto & video profesional untuk hari paling berharga dalam hidupmu</p>

          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="inline-block bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-full text-lg font-medium transition">
            Booking Sekarang
          </motion.a>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24 bg-gray-50 text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading text-4xl mb-14 text-gray-800">
          Layanan Kami
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <s.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="heading text-2xl mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= GALERI ================= */}
      <section id="galeri" className="py-24 bg-white">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading text-4xl text-center mb-12 text-gray-800">
          Galeri Wisuda
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
          {photos.map((src, i) => (
            <motion.div key={i} variants={fade} whileHover={{ scale: 1.04 }} className="overflow-hidden rounded-xl">
              <img src={src} alt="Galeri Wisuda" className="w-full h-full object-cover aspect-[3/4]" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading text-4xl text-center mb-12">
          Apa Kata Mereka
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} className="w-14 h-14 rounded-full" />
                <h4 className="font-medium">{t.name}</h4>
              </div>
              <p className="italic text-gray-600">“{t.text}”</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gray-300/30 rounded-full blur-3xl"></div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.08)] px-10 py-20 text-center">
            <h2 className="heading text-4xl md:text-5xl text-gray-800 mb-6">Siap Abadikan Momen Wisudamu?</h2>

            <p className="text-gray-600 max-w-xl mx-auto mb-10">Percayakan momen spesialmu kepada tim profesional kami</p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/6281234567890"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-full font-medium shadow-lg hover:bg-gray-800 transition"
            >
              Chat via WhatsApp →
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
