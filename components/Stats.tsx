"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Briefcase, Award, Users } from "lucide-react";

const stats = [
  { icon: <Code2 />, value: 3, suffix: "+", label: "Años de experiencia" },
  { icon: <Briefcase />, value: 20, suffix: "+", label: "Proyectos completados" },
  { icon: <Award />, value: 15, suffix: "+", label: "Tecnologías dominadas" },
  { icon: <Users />, value: 10, suffix: "+", label: "Clientes satisfechos" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-spacing bg-paper">
      <div className="container-large">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-4">
                {stat.icon}
              </div>
              <div className="text-ink">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-ink/60 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
