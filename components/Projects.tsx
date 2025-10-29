"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con pasarela de pagos, gestión de inventario y panel de administración.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control analítico con visualizaciones en tiempo real y reportes personalizables.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Social Media App",
    description: "Aplicación social con chat en tiempo real, sistema de notificaciones y feed personalizado.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["React Native", "Firebase", "WebSocket"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Task Management",
    description: "Sistema de gestión de tareas con colaboración en equipo, kanban boards y timelines.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "AI Content Generator",
    description: "Generador de contenido impulsado por IA para marketing y redes sociales.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Next.js", "OpenAI", "Python", "FastAPI"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Health & Fitness App",
    description: "Aplicación de seguimiento de salud con planes personalizados y estadísticas detalladas.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    tags: ["Flutter", "Firebase", "ML Kit"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="dark:apple-card-dark light:apple-card-light overflow-hidden hover-lift">
        {/* Imagen */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Featured badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full liquid-glass backdrop-blur-xl flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-semibold dark:text-white light:text-black">
                Destacado
              </span>
            </motion.div>
          )}

          {/* Links on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-4 left-4 right-4 flex gap-3 z-10"
          >
            <a
              href={project.demo}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
            <a
              href={project.github}
              className="flex items-center justify-center w-10 h-10 rounded-full liquid-glass backdrop-blur-xl hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="dark:text-white light:text-black font-bold text-xl mb-2">
            {project.title}
          </h3>
          <p className="dark:text-white/70 light:text-black/70 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium dark:bg-white/5 light:bg-black/5 dark:text-white light:text-black dark:border-white/10 light:border-black/10 border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="section-space dark:bg-dark-surface light:bg-light-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Proyectos
          </span>
          <h2 className="section-title dark:text-white light:text-black mt-4">
            Trabajos destacados
          </h2>
          <p className="body-large dark:text-white/70 light:text-black/70 max-w-3xl mx-auto mt-6">
            Una selección de proyectos que demuestran mi experiencia técnica y pasión por el desarrollo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 apple-btn"
          >
            Ver todos los proyectos
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
