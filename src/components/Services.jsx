import Reveal from './Reveal.jsx'
import { Icon, SectionHead } from './ui.jsx'

const services = [
  {
    icon: 'chat',
    title: 'WhatsApp con IA humanizada',
    desc: 'Asistentes que conversan con naturalidad: atienden, califican, venden y agendan sin que nadie note que es un bot.',
  },
  {
    icon: 'image',
    title: 'Modelos IA hiperrealistas',
    desc: 'Personas que no existen, indistinguibles de una foto real: identidad visual consistente para tu marca o tu contenido.',
  },
  {
    icon: 'dashboard',
    title: 'Dashboards y control total',
    desc: 'Paneles a medida para ver conversaciones, ventas y métricas en tiempo real. Tu operación en una sola pantalla.',
  },
  {
    icon: 'megaphone',
    title: 'Meta Ads y campañas',
    desc: 'Campañas en Facebook e Instagram conectadas directo a tu WhatsApp: del clic al cliente sin fricción.',
  },
  {
    icon: 'send',
    title: 'Automatización de Telegram',
    desc: 'Bots, canales y flujos automatizados: notificaciones, comunidades, ventas y gestión interna.',
  },
  {
    icon: 'globe',
    title: 'Landing pages que convierten',
    desc: 'Páginas rápidas y enfocadas en conversión, listas para recibir el tráfico de tus campañas.',
  },
  {
    icon: 'workflow',
    title: 'Automatizaciones con N8N',
    desc: 'Flujos sin IA para tareas repetitivas: integraciones entre apps, reportes y procesos internos.',
  },
  {
    icon: 'sparkles',
    title: 'Estrategia de automatización',
    desc: 'Te ayudamos desde la idea: qué automatizar, qué flujo conviene y dónde está el retorno real.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-28 max-md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHead kicker="Qué hacemos" title="Todo lo que tu negocio necesita para operar en automático">
            Somos dos desarrolladores con 4 años de experiencia cada uno en automatización
            conversacional. No vendemos plantillas: entendemos tu negocio y construimos sobre tu idea.
          </SectionHead>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 60}>
              <div className="group flex h-full flex-col rounded-none border border-line bg-card p-7 transition-[transform,border-color,background-color] duration-200 hover:border-vio/40 hover:bg-card2 motion-safe:hover:-translate-y-1">
                <div className="mb-10 flex items-start justify-between">
                  <div className="grid size-11 place-items-center rounded-none bg-vio/10 text-vio">
                    <Icon name={s.icon} className="size-5" />
                  </div>
                  <span className="font-display text-sm font-bold text-muted/40">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-display text-[1.02rem] leading-snug font-bold">{s.title}</h3>
                <p className="text-[0.86rem] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
