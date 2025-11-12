"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    year: "2024 - Presente",
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remoto",
    description: "Lideré el desarrollo de aplicaciones web escalables usando React, Next.js y arquitecturas serverless. Implementé sistemas de CI/CD y mejoras de performance que redujeron el tiempo de carga en 60%.",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    link: "#",
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Agency Co.",
    location: "Pasto, Colombia",
    description: "Desarrollé múltiples proyectos para clientes internacionales, desde e-commerce hasta dashboards analíticos. Colaboré con equipos multidisciplinarios usando metodologías ágiles.",
    technologies: ["Vue.js", "Django", "MongoDB", "Redis", "Tailwind"],
    link: "#",
  },
  {
    year: "2021 - 2022",
    title: "Frontend Developer",
    company: "StartUp XYZ",
    location: "Remoto",
    description: "Creé interfaces de usuario modernas, responsivas y accesibles. Implementé design systems y componentes reutilizables que aceleraron el desarrollo en 40%.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Figma"],
    link: "#",
  },
  {
    year: "2020 - 2021",
    title: "Junior Developer",
    company: "Dev Studio",
    location: "Pasto, Colombia",
    description: "Inicié mi carrera profesional trabajando en proyectos web y móviles. Aprendí las mejores prácticas de desarrollo y colaboración en equipo.",
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
    link: "#",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experiencia" ref={containerRef} className="section-space relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Experiencia
          </span>
          <h2 className="section-title dark:text-white light:text-black mt-4">
            Mi trayectoria profesional
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Línea vertical */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 dark:bg-white/10 light:bg-black/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-accent via-blue-500 to-purple-500"
          />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-8 md:left-1/2 w-5 h-5 -ml-2.5 rounded-full bg-accent border-4 dark:border-dark-bg light:border-light-bg z-10 shadow-lg"
                />

                {/* Card CON permanent-dark-card */}
                <div
                  className={`ml-20 md:ml-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16 md:col-start-2"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group permanent-dark-card rounded-[var(--radius-lg)] p-6 md:p-8 hover-lift cursor-pointer"
                  >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.year}
                    </div>

                    <h3 className="font-bold text-2xl mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-3 text-secondary text-sm mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-secondary leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tag px-3 py-1 rounded-lg text-xs font-medium border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={exp.link}
                      className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                    >
                      Ver más
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
