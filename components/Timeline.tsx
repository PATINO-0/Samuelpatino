"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    year: "2025 - Presente",
    title: "Dictor Médico",
    company: "Consultorio Dr. Oscar Javier Patiño Villota",
    location: "Pasto, Colombia",
    type: "work",
    description: "Manejo de software especializado en salud para transcripción de historias médicas y carga al sistema. Responsable de la digitalización y gestión de información clínica del consultorio de fisiatría.",
    technologies: ["Software Médico", "Gestión Documental", "Transcripción"],
  },
  {
    year: "2025 - Presente",
    title: "Desarrollador Freelance",
    company: "Proyectos Independientes",
    location: "Remoto",
    type: "work",
    description: "Desarrollo esporádico de proyectos pequeños y aplicaciones tanto web como móviles. Enfocado en ampliar conocimientos en ingeniería de software mediante proyectos reales y aplicación de tecnologías modernas.",
    technologies: ["React", "Next.js", "Flutter", "Node.js", "Firebase"],
  },
  {
    year: "2024 - Presente",
    title: "Ingeniería de Software",
    company: "Universidad Cooperativa de Colombia",
    location: "Pasto, Colombia",
    type: "education",
    description: "Actualmente cursando sexto semestre de Ingeniería de Software. Retomé mis estudios universitarios con aspiraciones de convertirme en ingeniero de software, aplicando conocimientos en desarrollo full-stack.",
    technologies: ["Ingeniería de Software", "Desarrollo Web", "Bases de Datos", "POO"],
  },
  {
    year: "2023",
    title: "Seguridad Informática",
    company: "Platzi",
    location: "Remoto",
    type: "education",
    description: "Completé curso de introducción y conceptos base de seguridad informática. Aprendí fundamentos de ciberseguridad, mejores prácticas y principios de protección de sistemas.",
    technologies: ["Seguridad Informática", "Ciberseguridad", "Protección de Datos"],
  },
  {
    year: "2021 - 2023",
    title: "Ingeniería Informática",
    company: "Politécnico Jaime Isaza Cadavid",
    location: "Medellín, Colombia",
    type: "education",
    description: "Cursé cuatro semestres de Ingeniería Informática. Tuve que retirarme en 2023 debido a una patología que requirió hospitalización durante un mes y tratamientos prolongados. Durante este periodo adquirí sólidas bases en programación y desarrollo de software.",
    technologies: ["Java", "Estructuras de Datos", "POO", "MySQL", "PostgreSQL", "Python"],
  },
  {
    year: "2020 - 2021",
    title: "Diseño y Creación de Videojuegos",
    company: "Platzi",
    location: "Remoto",
    type: "education",
    description: "Realicé múltiples cursos sobre diseño de videojuegos en plataforma remota. Obtuve dos certificados especializados en diseño y creación de videojuegos, aprendiendo los fundamentos del desarrollo de juegos.",
    technologies: ["Diseño de Videojuegos", "Game Design", "Desarrollo de Juegos"],
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
            Trayectoria
          </span>
          <h2 className="section-title dark:text-white light:text-black mt-4">
            Mi recorrido académico y profesional
          </h2>
          <p className="body-large dark:text-white/70 light:text-black/70 max-w-3xl mx-auto mt-6">
            Un camino de aprendizaje continuo y experiencias que han moldeado mi pasión por la tecnología.
          </p>
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
                {/* Dot con icono según tipo */}
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
                    className="group permanent-dark-card rounded-[var(--radius-lg)] p-6 md:p-8 hover-lift"
                  >
                    {/* Badge con año */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.year}
                    </div>

                    {/* Título con icono según tipo */}
                    <div className="flex items-start gap-3 mb-2">
                      {exp.type === "education" ? (
                        <GraduationCap className="w-6 h-6 text-accent mt-1 shrink-0" />
                      ) : (
                        <Briefcase className="w-6 h-6 text-accent mt-1 shrink-0" />
                      )}
                      <h3 className="font-bold text-2xl">
                        {exp.title}
                      </h3>
                    </div>

                    {/* Empresa y ubicación */}
                    <div className="flex items-center gap-3 text-secondary text-sm mb-4 ml-9">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Descripción */}
                    <p className="text-secondary leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies/Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tag px-3 py-1 rounded-lg text-xs font-medium border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
