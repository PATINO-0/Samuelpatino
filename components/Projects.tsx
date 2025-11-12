"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Editor de Imágenes Web",
    description: "Editor virtual completo desarrollado en JavaScript que permite crear, editar, recortar, agregar múltiples imágenes y guardar las modificaciones en tiempo real.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["JavaScript", "Canvas API", "HTML5", "CSS3"],
    github: "https://github.com/PATINO-0/image-editor",
    featured: true,
  },
  {
    title: "API de Gestión de Productos",
    description: "API RESTful robusta para la gestión completa de productos de negocios, incluyendo inventario, categorías y operaciones CRUD.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/PATINO-0/Api-Products",
    featured: true,
  },
  {
    title: "Sistema de Notificaciones con Lambda",
    description: "Aplicación serverless con funciones Lambda AWS para envío automático de notificaciones mediante sistema de eventos con operaciones CRUD completas.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["AWS Lambda", "Python", "PostgreSQL", "Railway"],
    github: "https://github.com/PATINO-0/Events_notification",
    featured: true,
  },
  {
    title: "Rutina Online - App de Bitácoras",
    description: "Aplicación móvil para creación y gestión de rutinas tipo bitácora con almacenamiento local y seguimiento de progreso personal.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
    tags: ["Flutter", "Dart", "SQLite", "Mobile"],
    github: "https://github.com/PATINO-0/Rutina_online",
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
      <div className="rounded-[var(--radius-lg)] overflow-hidden hover-lift">
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
              <span className="text-xs font-semibold text-white">
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
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              <Github className="w-4 h-4" />
              Ver Repo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full liquid-glass backdrop-blur-xl hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>

        {/* Content - CON CLASE permanent-dark-card */}
        <div className="permanent-dark-card p-6 rounded-b-[var(--radius-lg)]">
          <h3 className="font-bold text-xl mb-2">
            {project.title}
          </h3>
          <p className="text-secondary text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tag px-2.5 py-1 rounded-lg text-xs font-medium border"
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
            Una selección de proyectos personales que demuestran mi experiencia técnica en diferentes tecnologías.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* CTA - Ahora apunta a tu GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/PATINO-0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 apple-btn"
          >
            <Github className="w-5 h-5" />
            Ver todos mis repositorios
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
