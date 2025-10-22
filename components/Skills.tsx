"use client";

export default function Skills() {
  const groups = [
    {
      title: "Frontend",
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Python", "Django"],
    },
    {
      title: "Database",
      items: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps",
      items: ["Docker", "AWS (básico)"],
    },
  ];

  return (
    <section id="habilidades" className="bg-pill/60 py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto paper rounded-blob p-6 md:p-8 shadow-card">
          <h3 className="text-ink font-semibold text-lg mb-6">Habilidades Técnicas</h3>

          <div className="space-y-8">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="text-ink/70 text-sm mb-3">{g.title}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="soft-pill text-sm">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-ink/60 text-xs mt-8">
            *Las habilidades se muestran como tecnologías y herramientas conocidas; no se cuantifica el nivel.
          </p>
        </div>
      </div>
    </section>
  );
}
