"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con pasarela de pagos integrada.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control analítico con visualizaciones en tiempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Aplicación social con chat en tiempo real y sistema de notificaciones.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["React Native", "Firebase", "WebSocket"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section-spacing bg-paper">
      <div className="container-large">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Proyectos
          </span>
          <h2 className="section-title text-ink mt-3">
            Trabajos destacados
          </h2>
          <p className="body-large text-ink/70 max-w-2xl mx-auto mt-4">
            Una selección de proyectos que demuestran mi experiencia y pasión por el desarrollo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden hover-lift"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-ink font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-ink/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-lg text-xs bg-ink/5 text-ink border border-ink/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-ink/70 hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
