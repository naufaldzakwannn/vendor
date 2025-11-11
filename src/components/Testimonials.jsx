import { motion } from "framer-motion";

const testimonials = [
  { name: "Ayu", text: "Hasil fotonya luar biasa! Timnya profesional dan sabar banget.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Dimas", text: "Video wisuda saya benar-benar cinematic, keren parah!", img: "https://randomuser.me/api/portraits/men/22.jpg" },
];

export default function Testimonials() {
  return (
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
  );
}
