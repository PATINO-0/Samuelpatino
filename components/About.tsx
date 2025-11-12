"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Target, Heart, Zap } from "lucide-react";
import { useRef } from "react";

const highlights = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Innovación constante",
    desc: "Siempre explorando nuevas tecnologías y metodologías para crear soluciones efectivas y de vanguardia.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Orientado a resultados",
    desc: "Cada línea de código tiene un propósito claro: resolver problemas reales de manera elegante y eficiente.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Pasión por el detalle",
    desc: "El diseño y la experiencia del usuario son tan importantes como la funcionalidad técnica del producto.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance first",
    desc: "Optimización y velocidad en cada proyecto, garantizando experiencias fluidas y responsivas.",
    gradient: "from-yellow-500 to-amber-500",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="acerca" ref={containerRef} className="section-space relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] dark:bg-accent/5 light:bg-accent/10 rounded-full blur-[100px] animate-glow pointer-events-none"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Acerca de mí
          </span>
          <h2 className="section-title dark:text-white light:text-black mt-4">
            Más que código
          </h2>
          <p className="body-large dark:text-white/70 light:text-black/70 max-w-3xl mx-auto mt-6">
            Soy un ingeniero de software con pasión por crear experiencias digitales
            que no solo funcionen perfectamente, sino que también <strong>deleiten</strong> a los usuarios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="group relative permanent-dark-card rounded-[var(--radius-lg)] p-8 hover-lift cursor-pointer"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute top-8 right-8 text-accent"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
