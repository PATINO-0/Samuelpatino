"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "E-commerce Headless", desc: "Next.js + Stripe + CMS", href: "#" },
  { title: "Dashboard Analítico", desc: "Next.js + Supabase", href: "#" },
  { title: "Landing Animada", desc: "Framer Motion + SEO", href: "#" },
];

export default function Projects(){
  return (
    <section id="proyectos" className="py-16">
      <div className="container">
        <h3 className="font-semibold text-xl mb-6">Proyectos y experiencia</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p,i)=>(
            <motion.a
              key={i}
              href={p.href}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration:.5, delay: i * .05 }}
              className="card p-6 hover:shadow-xl transition-shadow"
            >
              <div className="rounded-blob dotted bg-dot/10 p-8 mb-4 h-28" />
              <h4 className="text-ink font-semibold">{p.title}</h4>
              <p className="text-ink/70 text-sm">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
