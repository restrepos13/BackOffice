import Reveal from './Reveal.jsx'
import { Badge, CtaButton, Icon, SectionHead } from './ui.jsx'

const fixedItems = [
  'Construcción completa del asistente desde cero',
  'Entrenamiento de la IA con el conocimiento de tu negocio',
  'Integraciones: WhatsApp API, calendario, CRM, pagos',
  'Dashboard con métricas en tiempo real',
  'Mantenimiento, mejoras y soporte continuo',
]

const whys = [
  { icon: 'refresh', title: 'Igual todos los meses', desc: 'La tarifa fija no cambia: mes 1 o mes 12, pagas lo mismo por construcción y mantenimiento.' },
  { icon: 'lock', title: 'Sin costos ocultos', desc: 'El consumo de IA y almacenamiento se cobra al costo y lo ves desglosado en tu dashboard.' },
  { icon: 'sparkles', title: 'Nunca queda obsoleto', desc: 'Tu IA se ajusta y mejora todos los meses, incluido en la misma tarifa.' },
]

export default function Pricing() {
  return (
    <section id="suscripcion" className="relative overflow-hidden border-y border-line bg-panel px-6 py-28 max-md:py-20">
      
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHead
            kicker="Proyectos a medida · Suscripción"
            title="Una sola mensualidad, igual todos los meses"
          >
            Para automatizaciones a medida — clínicas, concesionarios, tu negocio — sin pago inicial
            gigante ni sorpresas: construir tu asistente no cuesta aparte, va dentro de la misma
            cuota. Tu mensualidad se compone así:
          </SectionHead>
        </Reveal>

        {/* La fórmula: tarifa fija + consumo = mensualidad */}
        <Reveal>
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.15fr_auto_1.15fr_auto_0.9fr]">
            <div className="bg-grad rounded-none p-px shadow-[0_30px_80px_-30px_rgba(26,26,26,0.25)]">
              <div className="flex h-full flex-col rounded-none bg-card p-8 max-md:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-[0.7rem] font-bold tracking-[0.16em] text-vio uppercase">Tarifa fija mensual</span>
                  <Badge>Ej. USD 500/mes</Badge>
                </div>
                <p className="mb-5 text-[0.92rem] leading-relaxed text-muted">
                  Lo que nos pagas a nosotros por <b className="font-semibold text-ink">construirla y mantenerla</b>.
                  Siempre el mismo monto:
                </p>
                <ul className="flex flex-col gap-2.5">
                  {fixedItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.88rem]">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-vio/10 text-vio">
                        <Icon name="check" className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid place-items-center font-display text-3xl font-bold text-muted max-lg:py-1">+</div>

            <div className="flex h-full flex-col rounded-none border border-line bg-card p-8 max-md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-[0.7rem] font-bold tracking-[0.16em] text-vio uppercase">Consumo de tu IA</span>
                <Badge>Al costo · variable</Badge>
              </div>
              <p className="mb-5 text-[0.92rem] leading-relaxed text-muted">
                Lo que tu asistente gasta operando. No le ganamos nada a esto — se traslada tal cual:
              </p>
              <div className="mb-5 flex flex-col gap-4">
                <div className="flex items-start gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-none bg-vio/10 text-vio"><Icon name="cpu" className="size-4.5" /></span>
                  <div>
                    <b className="block text-[0.9rem] font-semibold">Recursos de IA</b>
                    <span className="text-[0.84rem] leading-relaxed text-muted">Lo que gastan los modelos por cada mensaje respondido. Escala con tu volumen.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-none bg-vio/10 text-vio"><Icon name="server" className="size-4.5" /></span>
                  <div>
                    <b className="block text-[0.9rem] font-semibold">Almacenamiento</b>
                    <span className="text-[0.84rem] leading-relaxed text-muted">Cada conversación y la memoria de tus clientes, guardadas y respaldadas.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-none bg-vio/10 text-vio"><Icon name="chat" className="size-4.5" /></span>
                  <div>
                    <b className="block text-[0.9rem] font-semibold">API de WhatsApp</b>
                    <span className="text-[0.84rem] leading-relaxed text-muted">La tarifa que cobra Meta por cada conversación en la API oficial. Se traslada tal cual.</span>
                  </div>
                </div>
              </div>
              <p className="mt-auto border-t border-line pt-4 text-[0.8rem] text-muted/80">
                Lo ves detallado y en vivo en tu dashboard.
              </p>
            </div>

            <div className="grid place-items-center font-display text-3xl font-bold text-muted max-lg:py-1">=</div>

            <div className="flex h-full flex-col justify-center rounded-none bg-navy p-8 text-center max-md:p-6">
              <span className="mb-2 text-[0.7rem] font-bold tracking-[0.16em] text-sky/70 uppercase">Tu mensualidad</span>
              <b className="font-display text-2xl leading-tight font-bold text-white">Un solo cobro, todo incluido</b>
              <p className="mt-3 text-[0.84rem] leading-relaxed text-sky/70">
                Desde el mes uno hasta siempre: misma tarifa, más el consumo real de tu operación.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Plus: la base de datos es tuya */}
        <Reveal delay={80}>
          <div className="mt-5 flex flex-wrap items-center gap-6 rounded-none border border-vio/25 bg-vio/5 p-7 max-md:p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-none bg-vio text-white">
              <Icon name="dashboard" className="size-5" />
            </span>
            <div className="min-w-[260px] flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <b className="font-display text-[1.02rem] font-bold">Plus: tu base de datos de clientes, 100% tuya</b>
                <Badge>Incluido</Badge>
              </div>
              <p className="max-w-3xl text-[0.9rem] leading-relaxed text-muted">
                Cada conversación que atiende tu asistente construye una base de datos de tus clientes —
                quiénes son, qué buscan, qué compraron. Un público ya segmentado, listo para tus futuras
                campañas de marketing y publicidad. Y la propiedad es total: la base de datos es tuya,
                no nuestra.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Add-on: landing pages dentro de la suscripción */}
        <Reveal delay={100}>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-6 rounded-none border border-line bg-card p-7 max-md:p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-none bg-vio/10 text-vio">
                <Icon name="globe" className="size-5" />
              </span>
              <div className="max-w-xl">
                <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <b className="font-display text-[0.95rem] font-bold">Add-on: landing pages para tu negocio</b>
                  <Badge>Dentro de tu suscripción</Badge>
                </div>
                <p className="text-[0.88rem] leading-relaxed text-muted">
                  ¿Tu campaña necesita una página propia? Sumamos landing pages adicionales a tu
                  suscripción para captar tráfico y mandarlo directo a tu WhatsApp — como esta que
                  construimos para un proyecto de lotes en Colombia:
                </p>
              </div>
            </div>
            <a
              href="https://www.lotesancestral.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border-b border-ink pb-0.5 text-[0.74rem] font-bold tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-60"
            >
              <Icon name="pin" className="size-3.5 text-mag" />
              lotesancestral.com · Colombia
              <Icon name="external" className="size-3" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {whys.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="flex h-full items-start gap-4 rounded-none border border-line bg-card p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-none bg-mag/10 text-mag">
                  <Icon name={w.icon} className="size-4.5" />
                </span>
                <div>
                  <b className="block font-display text-[0.92rem] font-bold">{w.title}</b>
                  <span className="text-[0.86rem] leading-relaxed text-muted">{w.desc}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 text-center">
            <CtaButton href="#contacto">
              Cotizar mi suscripción <Icon name="arrow" className="size-4" />
            </CtaButton>
            <p className="mt-4 text-[0.84rem] text-muted">
              USD 500/mes es una tarifa de ejemplo: la tuya se define según el alcance, en la primera llamada — gratis.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
