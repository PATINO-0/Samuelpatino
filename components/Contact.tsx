"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: <Github />, href: "https://github.com/samuelpatino", label: "GitHub" },
  { icon: <Linkedin />, href: "https://linkedin.com/in/samuelpatino", label: "LinkedIn" },
  { icon: <Twitter />, href: "https://twitter.com/samuelpatino", label: "Twitter" },
  { icon: <Instagram />, href: "https://instagram.com/samuelpatino", label: "Instagram" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="section-space dark:bg-dark-surface light:bg-light-surface relative overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface light:bg-gradient-to-b light:from-light-surface light:via-light-bg light:to-light-surface" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="section-title dark:text-white light:text-black mt-4">
            Trabajemos juntos
          </h2>
          <p className="body-large dark:text-white/70 light:text-black/70 max-w-2xl mx-auto mt-6">
            ¿Tienes un proyecto en mente? Me encantaría escucharlo y ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 max-w-6xl mx-auto">
          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Card Email CON permanent-dark-card */}
            <div className="permanent-dark-card rounded-[var(--radius-lg)] p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-white shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:samipatino1002@gmail.com"
                    className="text-accent hover:underline text-sm"
                  >
                    samipatino1002@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Card Teléfono CON permanent-dark-card */}
            <div className="permanent-dark-card rounded-[var(--radius-lg)] p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-secondary text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Card Ubicación CON permanent-dark-card */}
            <div className="permanent-dark-card rounded-[var(--radius-lg)] p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-secondary text-sm">
                    San Juan de Pasto, Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="pt-6">
              <h4 className="dark:text-white light:text-black font-semibold mb-4">Sígueme en</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl dark:bg-white/10 light:bg-black/10 hover:bg-accent flex items-center justify-center dark:text-white light:text-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario CON permanent-dark-card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="permanent-dark-card rounded-[var(--radius-lg)] p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2 text-sm">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder:text-white/40 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder:text-white/40 outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2 text-sm">
                  Asunto *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder:text-white/40 outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-sm">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder:text-white/40 outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                className={`w-full apple-btn flex items-center justify-center gap-2 ${
                  isSubmitted ? "bg-green-500 hover:bg-green-500" : ""
                } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
