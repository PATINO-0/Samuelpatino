"use client";
import { motion } from "framer-motion";

function DottedBox({title, items}:{title:string, items:string[]}){
  return (
    <motion.div
      initial={{ opacity:0, y:10 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      className="card p-6"
    >
      <h4 className="font-semibold text-ink mb-4">{title}</h4>
      <div className="rounded-blob dotted bg-dot/5 p-6 text-ink/80">
        {items.map((x,i)=> <p key={i} className="leading-7">• {x}</p>)}
      </div>
    </motion.div>
  )
}

export default function About(){
  return (
    <section id="acerca" className="mt-16 paper py-12 border-y border-black/10">
      <div className="container">
        <span className="pill mb-8 inline-block">Acerca de mí</span>

        <div className="grid md:grid-cols-[1fr,1fr] gap-8 items-start">
          <div className="space-y-10">
            <div className="flex items-center gap-5">
              <div className="bg-white h-10 w-40 rounded-md shadow-insetSoft flex items-center justify-center text-ink font-semibold">
                Aptitudes
              </div>
              <div className="text-ink text-3xl">➜</div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white h-10 w-64 rounded-md shadow-insetSoft flex items-center justify-center text-ink font-semibold">
                Lenguajes y herramientas
              </div>
              <div className="text-ink text-3xl">➜</div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <DottedBox
              title="Aptitudes"
              items={[
                "Comunicación y trabajo en equipo",
                "PM básico y estimaciones",
                "UX pragmático",
                "Escritura técnica",
              ]}
            />
            <DottedBox
              title="Lenguajes y herramientas"
              items={[
                "TypeScript, JavaScript, Python",
                "React, Next.js, Vue",
                "Node.js, Express",
                "PostgreSQL, MongoDB",
                "Docker, AWS (básico)"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
