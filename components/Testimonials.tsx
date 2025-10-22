"use client";
import { motion } from "framer-motion";

const refs = [
  { quote: "Es muy amable", name:"David", role:"Descripción" },
  { quote: "Buen trabajador", name:"Lina", role:"Descripción" },
  { quote: "Responsable", name:"Diego", role:"Descripción" },
];

export default function Testimonials(){
  return (
    <section className="paper py-14 border-y border-black/10">
      <div className="container">
        <h3 className="text-ink font-semibold text-2xl mb-6">Referencias</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {refs.map((r,i)=>(
            <motion.div
              key={i}
              initial={{ opacity:0, y:12 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              className="bg-white rounded-blob p-6 border border-black/10"
            >
              <p className="text-lg text-ink mb-4">“{r.quote}”</p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-black/10" />
                <div className="text-ink/80">
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
