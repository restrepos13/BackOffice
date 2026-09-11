import Reveal from './Reveal.jsx'
import { Badge, Icon, Overline, WordReveal } from './ui.jsx'

const points = [
  {
    title: 'Socios de tu idea, no proveedores',
    desc: 'Entramos desde la idea de negocio: qué automatizar y dónde está el retorno. Si algo no conviene automatizarlo, te lo decimos.',
  },
  {
    title: 'La obsesión es que se sienta humano',
    desc: 'Un bot que suena a bot espanta clientes. Calibramos tono, ritmo y memoria hasta que la conversación fluye de verdad.',
  },
  {
    title: 'Stack completo del ecosistema Meta',
    desc: 'WhatsApp, Facebook, Instagram y Meta Ads, más Telegram, N8N y generación de imagen con IA. Todo bajo un mismo techo.',
  },
  {
    title: 'Directo con quien lo construye',
    desc: 'Sin ejecutivos de cuenta ni intermediarios: hablas con los dos desarrolladores que escriben el código.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="px-6 py-28 max-md:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Overline>Quiénes somos</Overline>
          <h2 className="mb-5 font-display text-[2.4rem] leading-[0.98] text-balance md:text-[3.2rem]">
            <WordReveal text="Dos desarrolladores. Cero humo." />
          </h2>
          <p className="mb-6 text-[1.02rem] leading-relaxed text-muted">
            Cuatro años cada uno construyendo automatizaciones conversacionales que hoy están en
            producción atendiendo gente real. No somos una agencia con veinte proyectos a la vez:
            tomamos pocos clientes y los trabajamos a fondo.
          </p>
          <div className="flex flex-wrap gap-2">
            {['WhatsApp', 'Telegram', 'Meta Ads', 'Modelos IA', 'N8N', 'Landing pages'].map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 70}>
              <div className="h-full rounded-none border border-line bg-card p-7 transition-colors duration-200 hover:border-vio/40">
                <span className="mb-4 grid size-9 place-items-center rounded-none bg-vio/10 text-vio">
                  <Icon name="check" className="size-4" />
                </span>
                <h3 className="mb-2 font-display text-[1rem] font-bold">{p.title}</h3>
                <p className="text-[0.86rem] leading-relaxed text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
