import { Logo } from './Nav.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-x-10 gap-y-8">
        <div>
          <Logo />
          <p className="mt-3 text-[0.8rem] text-muted/70">© 2026 — Automatización humana con IA</p>
        </div>
        <div className="flex flex-col gap-2 text-[0.85rem] text-muted">
          <span className="text-[0.64rem] font-semibold tracking-[0.2em] text-muted/70 uppercase">WhatsApp</span>
          <a className="transition-colors hover:text-ink" href="https://wa.me/573108790168" target="_blank" rel="noopener noreferrer">+57 310 879 0168</a>
          <a className="transition-colors hover:text-ink" href="https://wa.me/573162356084" target="_blank" rel="noopener noreferrer">+57 316 235 6084</a>
        </div>
        <div className="flex flex-col gap-2 text-[0.85rem] text-muted">
          <span className="text-[0.64rem] font-semibold tracking-[0.2em] text-muted/70 uppercase">Correo</span>
          <a className="transition-colors hover:text-ink" href="mailto:restrepos591@gmail.com">restrepos591@gmail.com</a>
          <a className="transition-colors hover:text-ink" href="mailto:danielloaiza609@gmail.com">danielloaiza609@gmail.com</a>
        </div>
        <div className="flex flex-col gap-2 text-[0.85rem] text-muted">
          <span className="text-[0.64rem] font-semibold tracking-[0.2em] text-muted/70 uppercase">Secciones</span>
          <a className="transition-colors hover:text-ink" href="#servicios">Servicios</a>
          <a className="transition-colors hover:text-ink" href="#casos">Casos</a>
          <a className="transition-colors hover:text-ink" href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
