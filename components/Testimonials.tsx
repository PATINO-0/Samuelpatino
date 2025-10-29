"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Martínez",
    role: "CEO, Tech Startup",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote: "Samuel es un profesional excepcional. Su atención al detalle y compromiso con la calidad son impresionantes.",
    rating: 5,
  },
  {
    name: "Lina Rodríguez",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=45",
    quote: "Trabajar con Samuel fue una experiencia increíble. Entregó el proyecto antes de tiempo y superó nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Diego Fernández",
    role: "CTO, Digital Agency",
    avatar: "https://i.pravatar.cc/150?img=33",
    quote: "Su capacidad técnica y habilidades de comunicación hacen que sea un placer colaborar con él en cualquier proyecto.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="section-title text-white mt-3">
            Lo que dicen de mí
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="apple-card p-8 hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-ink/80 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-ink font-semibold">{testimonial.name}</p>
                  <p className="text-ink/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
