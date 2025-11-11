import { motion } from "framer-motion";

const photos = ["https://images.unsplash.com/photo-1614283233556-69c18f13e1a2", "https://images.unsplash.com/photo-1522199710521-72d69614c702", "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"];

export default function Portfolio() {
  return (
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
  );
}
