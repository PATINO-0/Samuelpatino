"use client";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Contact(){
  return (
    <section id="contacto" className="py-16">
      <div className="container max-w-5xl">
        <h3 className="text-center text-3xl font-semibold">Trabajemos juntos</h3>
        <p className="text-center text-white/70 max-w-2xl mx-auto mt-2">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y discutir cómo hacerla realidad.
        </p>

        <div className="grid md:grid-cols-[1fr,1.4fr] gap-8 mt-10 items-start">
          <div className="space-y-6">
            <div className="glass rounded-blob p-5">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-md bg-white/10"><Mail size={18}/></span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/70">alex.rivera@email.com</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-blob p-5">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-md bg-white/10"><Phone size={18}/></span>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-blob p-5">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-md bg-white/10"><MapPin size={18}/></span>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-white/70">Ciudad de México, México</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-white/80">Sígueme en</p>
              <div className="flex gap-3">
                <a aria-label="GitHub" className="glass p-2 rounded-md" href="#"><Github size={18}/></a>
                <a aria-label="LinkedIn" className="glass p-2 rounded-md" href="#"><Linkedin size={18}/></a>
                <a aria-label="YouTube" className="glass p-2 rounded-md" href="#"><Youtube size={18}/></a>
                <a aria-label="Instagram" className="glass p-2 rounded-md" href="#"><Instagram size={18}/></a>
              </div>
            </div>
          </div>

          <form className="glass p-6 rounded-blob space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="text-sm">Nombre
                <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-md p-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="Tu nombre" />
              </label>
              <label className="text-sm">Email
                <input type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-md p-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="tu@email.com" />
              </label>
            </div>
            <label className="text-sm">Asunto
              <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-md p-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="¿En qué puedo ayudarte?" />
            </label>
            <label className="text-sm">Mensaje
              <textarea rows={6} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md p-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="Cuéntame sobre tu proyecto..." />
            </label>
            <button className="w-full bg-white text-black rounded-md py-3 font-semibold hover:opacity-90">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
