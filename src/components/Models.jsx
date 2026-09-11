import Reveal from './Reveal.jsx'
import { Badge, Icon, Overline, WordReveal } from './ui.jsx'

function ModelPhoto({ src, className = '', style, chip }) {
  return (
    <div
      className={`relative overflow-hidden rounded-none border border-line bg-card2 shadow-[0_40px_80px_-20px_rgba(16,18,35,0.25)] ${className}`}
      style={style}
    >
      <img
        src={src}
        alt="Modelo hiperrealista generada con IA"
        loading="lazy"
        className="block h-full w-full object-cover object-top"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling.style.display = 'flex'
        }}
      />
      <div className="hidden h-full w-full flex-col items-center justify-center gap-3 p-6 text-center [background:radial-gradient(300px_300px_at_50%_30%,rgba(26,26,26,0.05),transparent)]">
        <Icon name="image" className="size-8 text-vio/60" />
        <span className="text-xs text-muted">
          Guarda la foto como <code className="text-vio">{src.replace('./', 'public/')}</code>
        </span>
      </div>
      {chip && (
        <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[0.7rem] font-semibold text-white backdrop-blur-md">
          {chip}
        </span>
      )}
    </div>
  )
}

export default function Models() {
  return (
    <section id="modelos" className="overflow-hidden border-y border-line bg-panel px-6 py-28 max-md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <Overline>Modelos IA hiperrealistas</Overline>
          <h2 className="mb-5 font-display text-[2.6rem] leading-[0.95] text-balance md:text-[4rem]">
            <WordReveal text="Ella" /> <WordReveal text="no existe." className="text-grad" offset={1} />
          </h2>
          <p className="mb-6 max-w-[480px] text-lg leading-relaxed text-muted">
            Está generada 100% con IA — y podemos crear una para ti. Modelos hiperrealistas con
            identidad consistente: la misma cara, en infinitas fotos, sin sesiones ni contratos.
          </p>
          <ul className="mb-8 flex flex-col gap-3">
            {[
              'Identidad visual consistente en cada imagen',
              'Contenido para redes, marcas y campañas sin producción',
              'Integrable con los asistentes de WhatsApp: una cara para tu IA',
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-[0.94rem]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-vio/10 text-vio">
                  <Icon name="check" className="size-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            <Badge>Generación de imagen</Badge>
            <Badge>Identidad consistente</Badge>
            <Badge>Contenido para redes</Badge>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative mx-auto flex max-w-[480px] items-center justify-center py-6">
            <ModelPhoto
              src="./models/modelo-1.jpg"
              chip="✦ 100% generada con IA"
              className="clip-reveal z-10 aspect-[3/4] w-[58%] motion-safe:-rotate-2"
            />
            <ModelPhoto
              src="./models/modelo-2.jpg"
              chip="✦ 100% generada con IA"
              className="clip-reveal -ml-14 mt-16 aspect-[3/4] w-[52%] motion-safe:rotate-3"
              style={{ '--clip-delay': '180ms' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
