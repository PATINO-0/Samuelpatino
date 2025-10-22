"use client";
import { motion } from "framer-motion";

const bars = [1,2,3,4,5];

export default function Timeline(){
  return (
    <section className="container mt-10">
      <span className="soft-pill inline-block mb-5">Recorrido</span>
      <div className="space-y-7">
        {bars.map((_,i)=>(
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity:0 }}
            whileInView={{ scaleX: 1, opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration:.6, delay: i * .1 }}
            style={{ transformOrigin: "0 50%" }}
            className="h-9 bg-pill rounded-pill w-[75%] md:w-[60%]"
          />
        ))}
      </div>
    </section>
  )
}
