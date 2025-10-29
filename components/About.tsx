"use client";
import { motion } from "framer-motion";
import { Sparkles, Target, Heart } from "lucide-react";

const highlights = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Innovación constante",
    desc: "Siempre explorando nuevas tecnologías y metodologías para crear soluciones efectivas.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Orientado a resultados",
    desc: "Cada línea de código tiene un propósito: resolver problemas reales de manera elegante.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Pasión por el detalle",
    desc: "El diseño y la experiencia del usuario son tan importantes como la funcionalidad.",
  },
];

export default function About() {
  return (
    <section id="acerca" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Acerca de mí
          </span>
          <h2 className="section-title text-white mt-3">
            Más que código
          </h2>
          <p className="body-large text-white/70 max-w-2xl mx-auto mt-4">
            Soy un ingeniero de software con pasión por crear experiencias digitales
            que no solo funcionen perfectamente, sino que también deleiten a los usuarios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="apple-card p-8 hover-lift group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-ink font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-ink/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
