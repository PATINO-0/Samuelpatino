"use client";
import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Cpu, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "MySQL", "Supabase"],
  },
  {
    title: "DevOps",
    icon: <Cloud className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Vercel", "Nginx"],
  },
  {
    title: "Mobile",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-indigo-500 to-blue-500",
    skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
  },
  {
    title: "Tools",
    icon: <Terminal className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    skills: ["VS Code", "Figma", "Postman", "Jest", "Webpack", "Vite"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="habilidades" className="section-space dark:bg-dark-surface light:bg-light-surface relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 dark:opacity-[0.02] light:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Habilidades
          </span>
          <h2 className="section-title dark:text-white light:text-black mt-4">
            Stack tecnológico
          </h2>
          <p className="body-large dark:text-white/70 light:text-black/70 max-w-3xl mx-auto mt-6">
            Tecnologías y herramientas que domino para construir productos digitales de clase mundial.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, rotateY: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group dark-card rounded-[var(--radius-lg)] p-7 hover-lift cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {group.icon}
                </motion.div>
                <h3 className="card-title font-bold text-xl">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="tag px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:border-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1 bg-white/5 rounded-full overflow-hidden mt-6"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className={`h-full bg-gradient-to-r ${group.gradient} rounded-full`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center dark:text-white/40 light:text-black/40 text-sm mt-12"
        >
          *Lista en constante actualización según proyectos y tendencias del mercado.
        </motion.p>
      </div>
    </section>
  );
}
