import Reveal from './Reveal.jsx'
import { SectionHead } from './ui.jsx'

const steps = [
  {
    n: '01',
    title: 'Entendemos tu negocio',
    desc: 'Una llamada. Nos cuentas cómo vendes hoy y dónde se te escapan los clientes. Nada de formularios eternos.',
  },
  {
    n: '02',
    title: 'Diseñamos el flujo',
    desc: 'Qué se automatiza, qué queda en manos humanas y dónde está el retorno. Te lo mostramos antes de escribir una línea de código.',
  },
  {
    n: '03',
    title: 'Lo construimos',
    desc: 'IA entrenada en tu negocio, integraciones, dashboard. Tú ves avances reales cada semana, no promesas.',
  },
  {
    n: '04',
    title: 'Lo dejamos operando',
    desc: 'Sale a producción con métricas en vivo. Lo ajustamos hasta que conversa exactamente como tu negocio habla.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="px-6 py-28 max-md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHead kicker="Cómo trabajamos" title="De la primera llamada a tu WhatsApp operando solo">
            Un proceso corto y sin humo: en cada etapa sabes qué está pasando y qué sigue.
          </SectionHead>
        </Reveal>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="group border-t-2 border-line pt-6 transition-colors duration-200 hover:border-vio">
                <span className="mb-4 block font-display text-3xl font-extrabold text-grad">{s.n}</span>
                <h3 className="mb-2.5 font-display text-[1.05rem] font-bold">{s.title}</h3>
                <p className="text-[0.88rem] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
