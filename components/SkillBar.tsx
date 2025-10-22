"use client";
import { motion } from "framer-motion";

export default function SkillBar({label, value}:{label:string, value:number}){
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-black/60">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="h-2 bg-black/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once:true }}
          transition={{ duration: .8 }}
          className="h-full bg-black"
        />
      </div>
    </div>
  )
}
