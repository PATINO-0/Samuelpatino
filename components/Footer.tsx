"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Samuel Patiño</h3>
            <p className="text-white/60 text-sm">Ingeniero de Software</p>
          </div>

          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
            <span>en Colombia</span>
          </div>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Samuel Patiño. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
