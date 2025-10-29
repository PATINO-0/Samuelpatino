"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="section-spacing bg-paper">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="section-title text-ink mt-3">
            Trabajemos juntos
          </h2>
          <p className="body-large text-ink/70 max-w-2xl mx-auto mt-4">
            ¿Tienes un proyecto en mente? Me encantaría escucharlo y ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 max-w-5xl mx-auto">
          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-ink font-semibold mb-1">Email</h4>
                  <a href="mailto:samipatino1002@gmail.com" className="text-accent hover:underline">
                    samipatino1002@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-ink font-semibold mb-1">Teléfono</h4>
                  <p className="text-ink/70">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-ink font-semibold mb-1">Ubicación</h4>
                  <p className="text-ink/70">San Juan de Pasto, Colombia</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-ink font-semibold mb-4">Sígueme</h4>
              <div className="flex gap-3">
                {[
                  { icon: <Github />, href: "#" },
                  { icon: <Linkedin />, href: "#" },
                  { icon: <Twitter />, href: "#" },
                  { icon: <Instagram />, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-ink/5 hover:bg-accent hover:text-white flex items-center justify-center text-ink transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-ink font-medium mb-2 text-sm">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border-2 border-ink/10 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-ink font-medium mb-2 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-ink/10 focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-ink font-medium mb-2 text-sm">Asunto</label>
              <input
                type="text"
                placeholder="¿En qué puedo ayudarte?"
                className="w-full px-4 py-3 rounded-xl border-2 border-ink/10 focus:border-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-ink font-medium mb-2 text-sm">Mensaje</label>
              <textarea
                rows={6}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full px-4 py-3 rounded-xl border-2 border-ink/10 focus:border-accent outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="apple-btn w-full">
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
