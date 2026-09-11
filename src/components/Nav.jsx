export function Logo({ dark = false }) {
  return (
    <a href="#" className={`font-display text-[1.3rem] leading-none tracking-[0.02em] ${dark ? 'text-bg' : 'text-ink'}`}>
      BACKOFFICE
    </a>
  )
}

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-5">
          <Logo />
          <span className="hidden text-[0.6rem] leading-[1.3] font-semibold tracking-[0.14em] text-muted uppercase sm:block">
            Estudio de<br />automatización con IA
          </span>
        </div>
        <div className="hidden gap-7 text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase lg:flex">
          <a className="transition-colors hover:text-ink" href="#servicios">Servicios</a>
          <a className="transition-colors hover:text-ink" href="#planes">Plataforma</a>
          <a className="transition-colors hover:text-ink" href="#suscripcion">Suscripción</a>
          <a className="transition-colors hover:text-ink" href="#casos">Casos</a>
        </div>
        <a
          href="#contacto"
          className="bg-ink px-5 py-2.5 font-display text-[0.95rem] tracking-[0.06em] text-bg transition-[background-color,transform] duration-150 hover:bg-black motion-safe:active:scale-[0.97]"
        >
          Hablemos
        </a>
      </div>
    </nav>
  )
}
