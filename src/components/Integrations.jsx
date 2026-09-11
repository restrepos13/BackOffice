import Reveal from './Reveal.jsx'
import { Icon, WordReveal } from './ui.jsx'

const chips = ['WhatsApp', 'Meta Ads', 'CRM', 'Calendario', 'Telegram', 'N8N']

/* Diagrama estilo plataforma: los canales convergen en tu asistente,
   y de ahí baja todo a un solo dashboard. Las líneas se dibujan al entrar en viewport. */
function Diagram() {
  const xs = [8, 25, 42, 58, 75, 92] // % horizontal de cada chip
  return (
    <div className="relative">
      <div className="flex justify-between gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-none border border-navyline bg-navy2 px-3 py-2 text-[0.7rem] font-semibold tracking-wide whitespace-nowrap text-sky uppercase max-md:px-2 max-md:text-[0.58rem]"
          >
            {c}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 600 150" fill="none" className="block w-full" aria-hidden="true">
        {xs.map((x, i) => (
          <path
            key={x}
            d={`M ${x * 6} 0 C ${x * 6} 80, 300 40, 300 128`}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            pathLength="1"
            className="draw-line"
            style={{ '--draw-delay': `${i * 90}ms` }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a4a4a" />
            <stop offset="1" stopColor="#cfc8c0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="node-pulse mx-auto -mt-3 flex w-fit items-center gap-3 rounded-none border border-navyline bg-navy2 px-5 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <span className="grid size-9 place-items-center rounded-none bg-vio text-white">
          <Icon name="chat" className="size-4.5" />
        </span>
        <div className="leading-tight">
          <b className="block text-[0.85rem] font-semibold text-white">Tu asistente con IA</b>
          <span className="text-[0.72rem] text-sky/70">todo converge en un solo dashboard</span>
        </div>
      </div>
    </div>
  )
}

export default function Integrations() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-28 max-md:py-20">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(700px_400px_at_85%_0%,rgba(100,112,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="mb-4 flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] text-mag uppercase">
            <span className="h-px w-8 bg-mag/60" />
            Todo conectado
          </span>
          <h2 className="mb-5 font-display text-[2.4rem] leading-[0.98] text-balance text-white md:text-[3.2rem]">
            <WordReveal text="Mira cómo tu equipo de IA hace el trabajo" />
          </h2>
          <p className="max-w-[460px] text-[1.02rem] leading-relaxed text-sky/70">
            Tus campañas, tus canales y tu agenda dejan de ser islas: cada mensaje entra por donde sea,
            lo atiende la misma IA con la misma memoria, y todo queda medido en un solo lugar.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Diagram />
        </Reveal>
      </div>
    </section>
  )
}
