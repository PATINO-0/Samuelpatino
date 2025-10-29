"use client";
import { motion } from "framer-motion";
import { Code2, Server, Database, Layers } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    title: "DevOps & Tools",
    icon: <Layers className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="section-spacing bg-paper">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Habilidades
          </span>
          <h2 className="section-title text-ink mt-3">
            Stack tecnológico
          </h2>
          <p className="body-large text-ink/70 max-w-2xl mx-auto mt-4">
            Herramientas y tecnologías que domino para construir productos digitales de clase mundial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 hover-lift"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white mb-5`}
              >
                {group.icon}
              </div>
              <h3 className="text-ink font-semibold text-lg mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-ink/5 text-ink border border-ink/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
