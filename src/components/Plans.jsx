import Reveal from './Reveal.jsx'
import { Badge, Icon, SectionHead } from './ui.jsx'

const capabilities = [
  { icon: 'sparkles', title: 'Personalidad por modelo', desc: 'Cada perfil mantiene su tono, estilo, límites y contexto propios.' },
  { icon: 'chat', title: 'Memoria y biografía', desc: 'La IA recuerda cada conversación: nada de charlas genéricas y repetitivas.' },
  { icon: 'target', title: 'Supervisión humana', desc: 'Tu equipo detecta al instante las conversaciones que necesitan atención.' },
  { icon: 'dashboard', title: 'Analytics por modelo', desc: 'Actividad, volumen y desempeño de cada perfil, medidos en un solo panel.' },
]

const plans = [
  {
    name: 'Starter',
    price: '299',
    tagline: 'Para estudios pequeños que arrancan con IA sin montar infraestructura propia.',
    features: [
      'Hasta 10 perfiles/modelos',
      '1 workspace',
      'Panel de agencia completo',
      'Personalidad individual + memoria',
      'Historial de conversaciones',
      'Métricas básicas y onboarding inicial',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '599',
    tagline: 'El plan recomendado para agencias que ya operan en serio.',
    features: [
      'Hasta 30 perfiles/modelos',
      'Analytics por modelo',
      'Supervisión de conversaciones',
      'Reglas de personalidad y roles de equipo',
      'Respuestas sugeridas y exportación de datos',
      'Soporte prioritario',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    price: '999',
    tagline: 'Para agencias grandes con equipos y necesidades de control.',
    features: [
      'Hasta 75 perfiles/modelos',
      '3 workspaces',
      'Analytics avanzado + reportes operativos',
      'Auditoría y trazabilidad completa',
      'API, webhooks e integraciones avanzadas',
      'Onboarding y migración asistida',
    ],
    featured: false,
  },
]

function PlanCard({ plan, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`flex h-full flex-col rounded-none p-8 max-md:p-6 ${
          plan.featured
            ? 'bg-navy text-white shadow-[0_40px_80px_-24px_rgba(26,26,26,0.35)]'
            : 'border border-line bg-card'
        }`}
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className={`font-display text-[0.95rem] font-bold tracking-wide uppercase ${plan.featured ? 'text-sky' : 'text-ink'}`}>
            {plan.name}
          </span>
          {plan.featured && (
            <span className="bg-bg px-3 py-1 text-[0.68rem] font-bold tracking-[0.12em] text-ink uppercase">
              Recomendado
            </span>
          )}
        </div>
        <div className="mb-2 flex items-baseline gap-1.5">
          <span className={`font-display text-[3.2rem] leading-none tracking-tight ${plan.featured ? 'text-white' : 'text-ink'}`}>
            US${plan.price}
          </span>
          <span className={`text-[0.9rem] ${plan.featured ? 'text-sky/70' : 'text-muted'}`}>/mes</span>
        </div>
        <p className={`mb-1 text-[0.74rem] font-semibold tracking-[0.08em] uppercase ${plan.featured ? 'text-sky/80' : 'text-muted'}`}>
          + consumo aparte, al costo
        </p>
        <p className={`mb-7 text-[0.88rem] leading-relaxed ${plan.featured ? 'text-sky/75' : 'text-muted'}`}>
          {plan.tagline}
        </p>
        <ul className="mb-8 flex flex-col gap-2.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[0.88rem]">
              <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${plan.featured ? 'bg-vio/30 text-sky' : 'bg-vio/10 text-vio'}`}>
                <Icon name="check" className="size-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className={`mt-auto inline-flex items-center justify-center gap-3 px-6 py-4 font-display text-[1rem] tracking-[0.04em] transition-[background-color,color,border-color,transform] duration-150 motion-safe:active:scale-[0.98] [&>svg]:transition-transform [&>svg]:duration-200 motion-safe:hover:[&>svg]:translate-x-1 ${
            plan.featured
              ? 'bg-bg text-ink hover:bg-sky'
              : 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-bg'
          }`}
        >
          Quiero este plan <Icon name="arrow" className="size-4" />
        </a>
      </div>
    </Reveal>
  )
}

export default function Plans() {
  return (
    <section id="planes" className="relative overflow-hidden px-6 py-28 max-md:py-20">
      
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHead
            kicker="Nuestro producto · Plataforma IA"
            title="La infraestructura de IA para operar tu agencia a escala"
          >
            Para agencias y estudios webcam que manejan decenas de perfiles: no es "un chatbot para
            las modelos", es la plataforma donde administras personalidades, memoria, conversaciones,
            supervisión y analítica — todo desde un solo lugar.
          </SectionHead>
        </Reveal>

        <div className="mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="flex h-full items-start gap-3.5 rounded-none border border-line bg-card p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-none bg-vio/10 text-vio">
                  <Icon name={c.icon} className="size-4.5" />
                </span>
                <div>
                  <b className="block text-[0.9rem] font-semibold">{c.title}</b>
                  <span className="text-[0.82rem] leading-relaxed text-muted">{c.desc}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} delay={i * 80} />
          ))}
        </div>

        <Reveal delay={90}>
          <div className="mt-5 border border-ink bg-card p-7 max-md:p-6">
            <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <b className="font-display text-[1.15rem]">Importante: tu factura = plan + consumo</b>
            </div>
            <p className="mb-5 max-w-3xl text-[0.92rem] leading-relaxed text-muted">
              El plan cubre la plataforma: perfiles, personalidades, panel, supervisión, analytics y
              soporte. <b className="font-semibold text-ink">El gasto variable de tu operación va aparte y
              se traslada al costo, sin margen nuestro:</b>
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { icon: 'cpu', t: 'Recursos de IA', d: 'Lo que gastan los modelos por cada mensaje que responden tus perfiles.' },
                { icon: 'server', t: 'Almacenamiento', d: 'Conversaciones, memoria de clientes y respaldos de tu operación.' },
                { icon: 'chat', t: 'API de WhatsApp', d: 'La tarifa que cobra Meta por cada conversación en la API oficial.' },
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-3 border border-line bg-bg p-4">
                  <span className="grid size-9 shrink-0 place-items-center bg-ink/5 text-ink">
                    <Icon name={x.icon} className="size-4" />
                  </span>
                  <div>
                    <b className="block text-[0.85rem] font-semibold">{x.t}</b>
                    <span className="text-[0.8rem] leading-snug text-muted">{x.d}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.8rem] text-muted/90">
              Todo el consumo lo ves desglosado y en vivo en tu dashboard — nunca una factura sorpresa.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-6 rounded-none bg-navy2 p-7 max-md:p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-none bg-vio text-white">
                <Icon name="lock" className="size-5" />
              </span>
              <div className="max-w-2xl">
                <b className="mb-1 block font-display text-[1rem] font-bold text-white">Enterprise — a tu medida</b>
                <p className="text-[0.88rem] leading-relaxed text-sky/70">
                  Para grupos grandes: 100+ modelos, límites personalizados, SSO, permisos avanzados,
                  SLA, integraciones privadas y aislamiento dedicado opcional.
                </p>
              </div>
            </div>
            <a
              href="#contacto"
              className="bg-bg px-7 py-3.5 font-display text-[1rem] tracking-[0.04em] text-ink transition-[background-color,transform] duration-150 hover:bg-sky motion-safe:active:scale-[0.97]"
            >
              Hablemos
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.82rem] text-muted">
            <span className="flex items-center gap-2"><Icon name="check" className="size-3.5 text-vio" /> El plan cubre la plataforma; IA, almacenamiento y API de WhatsApp van aparte, al costo</span>
            <span className="flex items-center gap-2"><Icon name="check" className="size-3.5 text-vio" /> Modelos y workspaces adicionales como add-on</span>
            <span className="flex items-center gap-2"><Icon name="check" className="size-3.5 text-vio" /> Confidencialidad total</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
