"use client";
import { motion } from "framer-motion";
import { Heart, ArrowUp, Download } from "lucide-react";

const footerLinks = {
  sections: [
    {
      title: "Navegación",
      links: [
        { label: "Inicio", href: "#inicio" },
        { label: "Acerca", href: "#acerca" },
        { label: "Habilidades", href: "#habilidades" },
        { label: "Experiencia", href: "#experiencia" },
      ],
    },
    {
      title: "Proyectos",
      links: [
        { label: "Todos los proyectos", href: "#proyectos" },
        { label: "Destacados", href: "#proyectos" },
        { label: "Testimonios", href: "#testimonios" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", href: "https://github.com/PATINO-0?tab=repositories" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://www.instagram.com/samuel.patino_?igsh=MTNreTZ4NDI3Y2JmNg==" },
      ],
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const downloadCV = () => {
    // Crear un elemento <a> temporal para forzar la descarga
    const link = document.createElement('a');
    link.href = '/assets/CV.pdf';
    link.download = 'CV_Samuel_Patino.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative dark:bg-dark-elevated light:bg-light-elevated border-t dark:border-white/5 light:border-black/5">
      <div className="container">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="dark:text-white light:text-black font-bold text-2xl mb-4"
            >
              Samuel Patiño
            </motion.h3>
            <p className="dark:text-white/60 light:text-black/60 text-sm leading-relaxed mb-6">
              Ingeniero de software especializado en crear experiencias digitales excepcionales.
            </p>
            <div className="flex items-center gap-2 dark:text-white/70 light:text-black/70 text-sm mb-6">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
              <span>en Colombia</span>
            </div>

            {/* Botón de descarga de CV */}
            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </motion.button>
          </div>

          {/* Links sections */}
          {footerLinks.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="dark:text-white light:text-black font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="dark:text-white/60 light:text-black/60 hover:text-accent text-sm transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t dark:border-white/5 light:border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="dark:text-white/40 light:text-black/40 text-sm"
          >
            © {currentYear} Samuel Patiño. Todos los derechos reservados.
          </motion.p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full dark:bg-white/10 light:bg-black/10 hover:bg-accent flex items-center justify-center dark:text-white light:text-black hover:text-white transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </footer>
  );
}
