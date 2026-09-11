import Reveal from './Reveal.jsx'
import { Icon, WordReveal } from './ui.jsx'

export default function CtaBand() {
  return (
    <section className="bg-grad overflow-hidden py-24 max-md:py-16">
      <div className="marquee-wrap mb-14 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="shrink-0 pr-10 font-display text-6xl whitespace-nowrap text-bg/12 uppercase">
              Hablemos <span className="text-bg/25">·</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10 px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[2.6rem] leading-[0.95] text-balance text-white md:text-[3.8rem]">
            <WordReveal text="¿Hacemos que tu WhatsApp trabaje por ti?" />
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 rounded-full bg-bg px-9 py-5 font-display text-base font-bold text-ink transition-[background-color,transform] duration-150 hover:bg-card2 motion-safe:active:scale-[0.97]"
          >
            Empezar ahora <Icon name="arrow" className="size-5 text-vio" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
