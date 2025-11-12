"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <span ref={ref} className="text-5xl md:text-6xl font-bold tabular-nums stat-number">
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / 10;
    const deltaY = (e.clientY - centerY) / 10;
    x.set(deltaX);
    y.set(deltaY);
    rotateX.set(-(e.clientY - centerY) / 20);
    rotateY.set((e.clientX - centerX) / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      className="group relative perspective-1000"
    >
      {/* ✅ AGREGADA clase dark-card */}
      <div className="dark-card rounded-[var(--radius-lg)] p-8 text-center hover-lift transform-gpu">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-blue-600 text-white mb-5 shadow-lg"
        >
          {stat.icon}
        </motion.div>
        <div>
          <Counter target={stat.value} suffix={stat.suffix} />
        </div>
        <p className="card-text-secondary text-sm mt-3 font-medium">
          {stat.label}
        </p>
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-[var(--radius-lg)] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="shimmer absolute inset-0" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="section-space dark:bg-dark-surface light:bg-light-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
