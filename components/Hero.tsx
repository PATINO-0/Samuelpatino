"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const yMouse = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[56px] md:pt-[68px]"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black dark:via-dark-bg dark:to-dark-surface light:bg-gradient-to-b light:from-white light:via-light-bg light:to-light-surface" />
      
      {/* Orbs flotantes optimizados */}
      <motion.div
        style={{ x, y: yMouse }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] dark:bg-accent/10 light:bg-accent/5 rounded-full blur-[100px] animate-glow"
      />
      <motion.div
        style={{ x: useTransform(x, (v) => -v), y: useTransform(yMouse, (v) => -v) }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] dark:bg-purple-600/10 light:bg-purple-600/5 rounded-full blur-[120px] animate-glow"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ opacity, scale, y }}
        className="container relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-[15px] dark:text-white/90 light:text-black/90 font-medium">
                Disponible para proyectos
              </span>
            </div>
          </motion.div>

          {/* Layout optimizado: DESKTOP = Imagen izquierda, texto derecha | MOBILE = Stack vertical */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
            
            {/* Foto de perfil REDIMENSIONADA y CENTRADA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative shrink-0"
            >
              {/* Contenedor con gradiente de fondo MÁS PEQUEÑO */}
              <div className="relative group">
                {/* Gradiente de fondo AJUSTADO al tamaño de la imagen */}
                <div className="absolute -inset-2 dark:bg-gradient-to-r dark:from-accent dark:to-purple-600 light:bg-gradient-to-r light:from-accent light:to-blue-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />
                
                {/* Imagen de perfil con tamaño OPTIMIZADO */}
                <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-3xl overflow-hidden liquid-glass">
                  <Image
                    src="/assets/galeria/perfil.jpeg"
                    alt="Samuel Patiño"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>

            {/* Contenido de texto CENTRADO */}
            <div className="flex-1 text-center md:text-left max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hero-title dark:text-white light:text-black mb-6"
              >
                Construyendo
                <br />
                <span className="gradient-text-accent">
                  experiencias digitales
                </span>
                <br />
                excepcionales
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="body-large dark:text-white/70 light:text-black/70 mb-8"
              >
                Soy Samuel Patiño, ingeniero de software especializado en desarrollo.
                Transformo ideas en productos digitales elegantes, funcionales y memorables.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <a href="#proyectos" className="apple-btn group inline-flex items-center justify-center">
                  <span>Ver proyectos</span>
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
                <a href="#contacto" className="apple-btn-secondary inline-flex items-center justify-center">
                  Contáctame
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 dark:text-white/40 light:text-black/40"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
