"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="container mt-10 grid md:grid-cols-2 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="card p-6"
      >
        <h2 className="font-bold text-ink text-xl mb-4">¿Quién soy?</h2>
        <div className="rounded-blob bg-dot/10 p-5 dotted">
          <p className="text-ink font-semibold">
            Hola mi nombre es Samuel Patiño, soy un ingeniero de software.
          </p>
          <div className="mt-3 space-y-2 text-ink/70">
            <p>• Full-stack con enfoque en Frontend.</p>
            <p>• Apasionado por el diseño limpio y accesible.</p>
            <p>• Trabajo con React/Next.js, Node y bases de datos SQL/NoSQL.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="flex justify-center"
      >
        {/* imagen mockup tipo ventana/propiedades del disco */}
        <div className="card p-0 overflow-hidden max-w-md w-full">
          <Image
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200&auto=format&fit=crop"
            alt="Mockup"
            width={900}
            height={700}
            className="w-full h-[320px] object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
