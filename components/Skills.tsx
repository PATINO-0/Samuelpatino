"use client";
import { motion } from "framer-motion";
import { Code2, Server, DatabaseIcon, Boxes } from "lucide-react";

type Group = {
  title: string;
  icon: React.ReactNode;
  items: string[];
  note?: string;
};

export default function Skills() {
  const groups: Group[] = [
    {
      title: "Frontend",
      icon: <Code2 className="h-5 w-5 text-ink/70" />,
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue", "TailwindCSS"],
      note: "UI, accesibilidad, SSR/ISR, performance",
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5 text-ink/70" />,
      items: ["Node.js", "Express", "Python", "Django", "REST", "JWT"],
      note: "APIs limpias, middlewares, auth",
    },
    {
      title: "Database",
      icon: <DatabaseIcon className="h-5 w-5 text-ink/70" />,
      items: ["PostgreSQL", "MongoDB", "Prisma", "ORM"],
      note: "Modelado, migraciones, indices",
    },
    {
      title: "DevOps",
      icon: <Boxes className="h-5 w-5 text-ink/70" />,
      items: ["Docker", "AWS (básico)", "CI/CD", "Vercel"],
      note: "Deploys reproducibles y monitoreo básico",
    },
  ];

  return (
    <section id="habilidades" className="bg-pill/60 py-16">
      <div className="container">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="soft-pill text-xs">Habilidades</span>
          <h2 className="mt-3 text-balance text-3xl md:text-4xl font-bold gradient-ink">
            Lo que manejo en el día a día
          </h2>
          <p className="text-white/70 mt-2">
            Tecnologías y herramientas con las que trabajo. No cuantifico “porcentajes” — solo lo que sé usar con soltura.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="skill-card paper rounded-blob p-5 border border-black/10"
            >
              <div className="flex items-center gap-3">
                <div className="icon-badge">{g.icon}</div>
                <h3 className="text-ink font-semibold">{g.title}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>

              {g.note && <p className="text-ink/60 text-xs mt-4">{g.note}</p>}
            </motion.div>
          ))}
        </div>

        {/* Nota al final */}
        <p className="text-center text-white/60 text-xs mt-10">
          *Lista viva — se actualiza según proyectos y necesidades.
        </p>
      </div>
    </section>
  );
}
