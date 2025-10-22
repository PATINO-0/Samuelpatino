"use client";
import SkillBar from "./SkillBar";

export default function Skills(){
  return (
    <section id="habilidades" className="bg-pill/60 py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto paper rounded-blob p-6 shadow-card">
          <h3 className="text-ink font-semibold text-lg mb-6">Habilidades Técnicas</h3>

          <p className="text-ink/70 text-sm mb-2">Frontend</p>
          <SkillBar label="JavaScript/TypeScript" value={95}/>
          <div className="mt-5 space-y-4">
            <SkillBar label="React/Next.js" value={90}/>
            <SkillBar label="Vue.js" value={85}/>
          </div>

          <p className="text-ink/70 text-sm mt-7 mb-2">Backend</p>
          <SkillBar label="Node.js" value={88}/>
          <SkillBar label="Python/Django" value={82}/>

          <p className="text-ink/70 text-sm mt-7 mb-2">Database</p>
          <SkillBar label="PostgreSQL/MongoDB" value={80}/>

          <p className="text-ink/70 text-sm mt-7 mb-2">DevOps</p>
          <SkillBar label="AWS/Docker" value={75}/>
        </div>
      </div>
    </section>
  )
}
