"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remoto",
    description: "Lideré el desarrollo de aplicaciones web escalables usando React y Node.js.",
    technologies: ["React", "Next.js", "PostgreSQL", "AWS"],
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Agency",
    location: "Pasto, Colombia",
    description: "Desarrollé múltiples proyectos para clientes internacionales.",
    technologies: ["Vue", "Django", "MongoDB"],
  },
  {
    year: "2021 - 2022",
    title: "Frontend Developer",
    company: "StartUp XYZ",
    location: "Remoto",
    description: "Creé interfaces de usuario modernas y responsivas.",
    technologies: ["React", "Tailwind", "TypeScript"],
  },
];

export default function Timeline() {
  return (
    <section id="experiencia" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Experiencia
          </span>
          <h2 className="section-title text-white mt-3">
            Mi trayectoria profesional
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Línea vertical */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/0 via-accent to-accent/0" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-12 md:mb-20 md:grid md:grid-cols-2 md:gap-8 ${
                i % 2 === 0 ? "" : "md:direction-rtl"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent border-4 border-black z-10" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"
                }`}
              >
                <div className="apple-card p-6 hover-lift">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                    <Calendar className="w-3 h-3" />
                    {exp.year}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-ink/70 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-lg text-xs bg-accent/10 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
