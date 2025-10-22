"use client";
import { motion } from "framer-motion";

const items = ["Inicio", "Acerca", "Habilidades", "Proyectos", "Contacto"];

export default function Nav() {
  return (
    <div className="sticky top-4 z-50">
      <nav className="container">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70 }}
          className="glass rounded-pill py-3 px-4 flex items-center gap-4 overflow-x-auto"
        >
          <span className="font-bold text-lg whitespace-nowrap">Samuel Patiño</span>
          <div className="flex gap-3 ml-auto">
            {items.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="pill text-sm hover:opacity-90 whitespace-nowrap"
              >
                {l}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
}
