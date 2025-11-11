import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1529634898514-4e0b0b73b2b2?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-center text-white z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Abadikan Momen Wisudamu</h1>
        <p className="text-lg md:text-xl mb-6">Layanan Foto & Video Wisuda Premium untuk Jabodetabek</p>
        <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition">
          Booking Sekarang
        </a>
      </motion.div>
    </section>
  );
}
