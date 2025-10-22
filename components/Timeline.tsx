"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Rocket, Briefcase, Sparkles, Award, Waypoints } from "lucide-react";

type Milestone = {
  year: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const data: Milestone[] = [
  {
    year: "2021",
    title: "Primeros pasos",
    desc: "Aprendí fundamentos web y construí mis primeras interfaces.",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    year: "2022",
    title: "Proyectos reales",
    desc: "Trabajos freelance y pequeños dashboards en producción.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    year: "2023",
    title: "Front con músculo",
    desc: "Next.js, SSR/ISR y diseño de sistemas UI reutilizables.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    year: "2024",
    title: "Full-stack",
    desc: "APIs limpias, auth, bases de datos y despliegues sólidos.",
    icon: <Waypoints className="h-5 w-5" />,
  },
  {
    year: "2025",
    title: "Enfoque producto",
    desc: "Experimentos, métricas y pulido de experiencia end-to-end.",
    icon: <Award className="h-5 w-5" />,
  },
];

export default function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="recorrido" className="container mt-16">
      <div className="flex items-center justify-between mb-6">
        <span className="soft-pill text-xs">Recorrido</span>
        <span className="text-white/60 text-xs hidden md:inline">
          Desliza en móvil · Alternado en desktop
        </span>
      </div>

      {/* MOBILE: carrusel horizontal con snap */}
      <div className="md:hidden relative">
        <div className="timeline-progress" />
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
          {data.map((m, i) => (
            <motion.article
              key={m.year}
              initial={prefersReducedMotion ? false : { y: 16, opacity: 0 }}
              whileInView={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="timeline-card snap-start min-w-[85%] px-5 py-4 rounded-blob border border-black/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="year-badge">{m.year}</span>
                <div className="icon-chip">{m.icon}</div>
              </div>
              <h4 className="text-ink font-semibold">{m.title}</h4>
              <p className="text-ink/70 text-sm mt-1">{m.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* DESKTOP: línea vertical + tarjetas alternadas */}
      <div className="hidden md:block relative">
        {/* Línea central */}
        <div aria-hidden className="timeline-line" />

        <div className="grid grid-cols-[1fr,40px,1fr] gap-6">
          {data.map((m, i) => {
            const leftSide = i % 2 === 0;
            return (
              <div key={m.year} className={`contents`}>
                {/* Columna izquierda (cuando toca) */}
                <div className={`${leftSide ? "" : "row-start-auto"}`}>
                  {leftSide && (
                    <motion.article
                      initial={prefersReducedMotion ? false : { x: -24, opacity: 0 }}
                      whileInView={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-20% 0px" }}
                      transition={{ duration: 0.45 }}
                      className="timeline-card p-5 rounded-blob border border-black/10 relative"
                    >
                      <Header m={m} align="left" />
                      <p className="text-ink/70 text-sm mt-2">{m.desc}</p>
                      <Connector side="right" />
                    </motion.article>
                  )}
                </div>

                {/* Columna central (punto) */}
                <div className="flex items-center justify-center relative">
                  <Dot />
                </div>

                {/* Columna derecha (cuando toca) */}
                <div>
                  {!leftSide && (
                    <motion.article
                      initial={prefersReducedMotion ? false : { x: 24, opacity: 0 }}
                      whileInView={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-20% 0px" }}
                      transition={{ duration: 0.45 }}
                      className="timeline-card p-5 rounded-blob border border-black/10 relative"
                    >
                      <Header m={m} align="right" />
                      <p className="text-ink/70 text-sm mt-2">{m.desc}</p>
                      <Connector side="left" />
                    </motion.article>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Header({ m, align }: { m: Milestone; align: "left" | "right" }) {
  return (
    <div className={`flex items-center gap-3 ${align === "right" ? "justify-end text-right" : ""}`}>
      {align === "right" ? null : <div className="icon-chip">{m.icon}</div>}
      <div>
        <div className="flex items-center gap-2 justify-start">
          <span className="year-badge">{m.year}</span>
        </div>
        <h4 className="text-ink font-semibold mt-1">{m.title}</h4>
      </div>
      {align === "right" ? <div className="icon-chip">{m.icon}</div> : null}
    </div>
  );
}

function Dot() {
  return <div className="timeline-dot" aria-hidden />;
}

function Connector({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden
      className={`timeline-connector ${side === "left" ? "left-[-18px]" : "right-[-18px]"}`}
    />
  );
}
