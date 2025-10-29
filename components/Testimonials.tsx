"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "David Martínez",
    role: "CEO, Tech Startup",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote: "Samuel es un profesional excepcional. Su atención al detalle, compromiso con la calidad y capacidad para entregar proyectos complejos en tiempo récord son verdaderamente impresionantes. Sin duda, uno de los mejores desarrolladores con los que he trabajado.",
    rating: 5,
    company: "TechVision Inc.",
  },
  {
    name: "Lina Viveros",
    role: "Product Manager",
    avatar: "/assets/galeria/Lina.jpeg",
    quote: "Trabajar con Samuel fue una experiencia increíble. No solo tiene habilidades técnicas sobresalientes, sino que también entiende profundamente las necesidades del negocio. Entregó el proyecto antes de tiempo y superó todas nuestras expectativas.",
    rating: 5,
    company: "Digital Solutions",
  },
  {
    name: "Diego Fernández",
    role: "CTO, Digital Agency",
    avatar: "https://i.pravatar.cc/150?img=33",
    quote: "Su capacidad técnica, creatividad y habilidades de comunicación hacen que sea un placer colaborar con él en cualquier proyecto. Samuel no solo escribe código excelente, también propone soluciones innovadoras que agregan valor real al producto.",
    rating: 5,
    company: "CreativeCode Studio",
  },
  {
    name: "Esteban Jimenez",
    role: "Founder & Designer",
    avatar: "https://i.pravatar.cc/150?img=25",
    quote: "La colaboración con Samuel fue fluida y productiva. Su comprensión del diseño y la experiencia del usuario, combinada con sus habilidades de desarrollo, resultó en un producto final que superó nuestras expectativas más ambiciosas.",
    rating: 5,
    company: "DesignHub",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section className="section-space relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] dark:bg-purple-600/5 light:bg-purple-600/10 rounded-full blur-[120px] animate-glow pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="section-title dark:text-white light:text-black mt-4">
            Lo que dicen de mí
          </h2>
          <p className="body-large dark:text-white/70 light:text-black/70 max-w-2xl mx-auto mt-6">
            La opinión de quienes han confiado en mi trabajo.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Carrusel */}
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="dark:apple-card-dark light:apple-card-light p-8 md:p-12 h-full flex flex-col justify-between hover-lift">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 dark:text-accent/30 light:text-accent/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="dark:text-white/90 light:text-black/90 text-lg md:text-xl leading-relaxed mb-8 flex-1">
                    "{testimonials[current].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t dark:border-white/10 light:border-black/10">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/20">
                      <Image
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="dark:text-white light:text-black font-bold text-lg">
                        {testimonials[current].name}
                      </p>
                      <p className="dark:text-white/60 light:text-black/60 text-sm">
                        {testimonials[current].role}
                      </p>
                      <p className="text-accent text-xs font-medium mt-0.5">
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full dark:bg-white/10 light:bg-black/10 flex items-center justify-center hover:dark:bg-white/20 hover:light:bg-black/20 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-accent"
                        : "w-2 dark:bg-white/30 light:bg-black/30"
                    }`}
                    aria-label={`Ir a testimonio ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full dark:bg-white/10 light:bg-black/10 flex items-center justify-center hover:dark:bg-white/20 hover:light:bg-black/20 transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
