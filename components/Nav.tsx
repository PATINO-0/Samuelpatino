"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Acerca", href: "#acerca" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  const navBg = useTransform(
    scrollY,
    [0, 100],
    theme === "dark" 
      ? ["rgba(0, 0, 0, 0)", "rgba(18, 18, 18, 0.8)"]
      : ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-2xl border-b border-white/10 dark:border-white/10 light:border-black/10" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[56px] md:h-[68px]">
            {/* Logo */}
            <motion.a
              href="#inicio"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl tracking-tight dark:text-white light:text-black"
            >
              Samuel Patiño
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-[15px] font-medium dark:text-white/70 dark:hover:text-white light:text-black/70 light:hover:text-black transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-white/10 light:bg-black/10 dark:hover:bg-white/20 light:hover:bg-black/20 transition-colors"
                aria-label="Cambiar tema"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 dark:text-white" />
                ) : (
                  <Moon className="w-5 h-5 light:text-black" />
                )}
              </motion.button>

              {/* CTA */}
              <motion.a
                href="#contacto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden md:inline-flex apple-btn text-[15px]"
              >
                Hablemos
              </motion.a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center dark:bg-white/10 light:bg-black/10"
                aria-label="Menú"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 lg:hidden pt-[56px] dark:bg-dark-bg light:bg-light-bg"
        >
          <div className="container py-8 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-2xl font-semibold dark:text-white light:text-black hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block apple-btn text-center mt-6"
            >
              Hablemos
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
