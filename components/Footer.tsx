export default function Footer(){
  return (
    <footer className="paper border-t border-black/10">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-ink font-semibold text-xl">Contactame</p>
          <div className="bg-black rounded-pill text-white px-6 py-2">
            Disponible para nuevos proyectos
          </div>
        </div>

        <div className="mt-8 border-t border-black/10 pt-6">
          <p className="text-ink/70">Redes Sociales</p>
          <div className="flex gap-5 mt-3 opacity-80">
            <div className="h-8 w-8 bg-ink/10 rounded-md" />
            <div className="h-8 w-8 bg-ink/10 rounded-md" />
            <div className="h-8 w-8 bg-ink/10 rounded-md" />
            <div className="h-8 w-8 bg-ink/10 rounded-md" />
            <div className="h-8 w-8 bg-ink/10 rounded-md" />
          </div>
          <p className="text-ink/60 text-sm mt-6">© {new Date().getFullYear()} Samuel Patiño</p>
        </div>
      </div>
    </footer>
  )
}
