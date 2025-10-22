"use client";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="mt-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper rounded-blob px-6 py-5 flex flex-col md:flex-row justify-between items-center border border-black/10"
        >
          <p className="text-ink font-semibold">+ 3 Años de experiencia</p>
          <p className="text-ink font-semibold">+ 20 Proyectos completados</p>
        </motion.div>
      </div>
    </section>
  );
}
