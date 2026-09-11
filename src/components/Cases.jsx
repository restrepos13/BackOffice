import Reveal from './Reveal.jsx'
import { Badge, Icon, SectionHead } from './ui.jsx'

/* Los mockups van en claro a propósito: contraste editorial sobre el fondo oscuro */

function MockFrame({ children, label }) {
  return (
    <div className="rounded-none border border-line bg-card p-5 shadow-[0_30px_60px_-24px_rgba(16,18,35,0.18)]">
      <div className="mb-4 flex items-center gap-1.5">
        <i className="size-2.5 rounded-full bg-line" />
        <i className="size-2.5 rounded-full bg-line" />
        <i className="size-2.5 rounded-full bg-line" />
        {label && <span className="ml-2 text-[0.68rem] font-semibold tracking-wide text-muted/70 uppercase">{label}</span>}
      </div>
      {children}
    </div>
  )
}

function ClinicDashboard() {
  const bars = [35, 52, 44, 68, 60, 82, 95]
  return (
    <MockFrame label="Panel · Clínica">
      <div className="mb-3.5 grid grid-cols-3 gap-3">
        {[
          { label: 'Conversaciones hoy', value: '347', up: '▲ 18%' },
          { label: 'Citas agendadas', value: '62', up: '▲ 24%' },
          { label: 'Ahorro mensual', value: '16 sueldos' },
        ].map((k) => (
          <div key={k.label} className="rounded-none border border-[#e3e1d2] bg-white p-3.5">
            <small className="mb-1 block text-[0.66rem] leading-tight text-[#8b8a76]">{k.label}</small>
            <b className="font-display text-[1.02rem] font-bold text-[#171c18]">{k.value}</b>{' '}
            {k.up && <span className="text-[0.66rem] font-semibold text-[#1a1a1a]">{k.up}</span>}
          </div>
        ))}
      </div>
      <div className="flex h-24 items-end gap-2 rounded-none border border-[#e3e1d2] bg-white p-3.5">
        {bars.map((h, i) => (
          <i
            key={i}
            className={`chart-bar flex-1 rounded-t ${i === bars.length - 1 ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]/25'}`}
            style={{ height: `${h}%`, '--bar-delay': `${200 + i * 55}ms` }}
          />
        ))}
      </div>
      <div className="mt-3.5 flex flex-col gap-2">
        {[
          { text: 'Área de citas — auditada', st: 'OK', ok: true },
          { text: 'Área de ventas — auditada', st: 'OK', ok: true },
          { text: 'Seguimientos pendientes', st: '3', ok: false },
        ].map((r) => (
          <div key={r.text} className="flex items-center gap-2.5 rounded-none border border-[#e3e1d2] bg-white px-3.5 py-2.5 text-[0.78rem] font-medium text-[#171c18]">
            <span className={`grid size-6 place-items-center rounded-none ${r.ok ? 'bg-[#1a1a1a]/10 text-[#1a1a1a]' : 'bg-amber-500/15 text-amber-600'}`}>
              <Icon name={r.ok ? 'check' : 'zap'} className="size-3.5" />
            </span>
            {r.text}
            <span className={`ml-auto rounded-full px-2.5 py-0.5 text-[0.66rem] font-bold ${r.ok ? 'bg-[#1a1a1a]/10 text-[#1a1a1a]' : 'bg-amber-500/15 text-amber-600'}`}>
              {r.st}
            </span>
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

function CompanionChat() {
  const msgs = [
    { in: true, text: 'Hoy fue un día largo… necesitaba contarle esto a alguien' },
    { in: false, text: 'Aquí estoy, cuéntame 💛 ¿qué fue lo que más te pesó del día?' },
    { in: true, text: 'Es que nadie más me escucha así' },
    { in: false, text: 'Para eso estoy, siempre. Tómate tu tiempo, no hay prisa.' },
  ]
  return (
    <MockFrame label="Conversación · Confidencial">
      <div className="flex flex-col gap-2.5 rounded-none bg-[#ede6dc] p-4">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[86%] rounded-none px-3.5 py-2.5 text-[0.83rem] leading-snug text-[#1f2823] shadow-[0_1px_1px_rgba(0,0,0,0.05)] ${
              m.in ? 'self-start rounded-tl-[4px] bg-white' : 'self-end rounded-tr-[4px] bg-[#d9fdd3]'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

function DealerCard() {
  return (
    <MockFrame label="Lead calificado · Concesionario">
      <div className="flex flex-col gap-2.5">
        {[
          ['Cliente', 'Carlos M.'],
          ['Auto de interés', 'SUV 2022 · Automática'],
          ['Presupuesto', 'Confirmado'],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-none border border-[#e3e1d2] bg-white px-4 py-3 text-[0.82rem] text-[#8b8a76]">
            {label} <b className="font-semibold text-[#171c18]">{value}</b>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-none border border-[#e3e1d2] bg-white px-4 py-3 text-[0.82rem] text-[#8b8a76]">
          Intención de compra <b className="font-semibold text-[#1a1a1a]">Alta</b>
        </div>
        <div className="flex items-center gap-3 rounded-none border border-[#1a1a1a]/25 bg-[#1a1a1a]/8 px-4 py-3.5 text-[0.84rem] text-[#171c18]">
          <span className="grid size-8 place-items-center rounded-none bg-[#1a1a1a] text-white"><Icon name="calendar" className="size-4" /></span>
          <span><b className="font-semibold">Cita agendada:</b> jueves 4:00 pm · Sede norte</span>
        </div>
      </div>
    </MockFrame>
  )
}

const cases = [
  {
    num: 'Caso 01 — Mas Salud Latam',
    location: 'Costa Rica',
    link: 'https://www.massaludlatam.com/',
    linkLabel: 'massaludlatam.com',
    title: 'Un “bot jefe” que audita la clínica entera y ahorra 16 sueldos',
    desc: (
      <>
        Sistema completo para esta clínica: campañas en Meta, chatbot de ventas con IA y un{' '}
        <b className="font-semibold text-ink">bot jefe</b> que audita todas las áreas y le reporta a
        gerencia en tiempo real.
      </>
    ),
    bullets: [
      'Chatbot de ventas que atiende y agenda pacientes 24/7',
      'Bot auditor que supervisa cada área y reporta a gerencia',
      'Dashboard con métricas de campañas y conversaciones',
      <b key="ahorro" className="font-semibold text-grad">Ahorro equivalente a 16 sueldos mensuales</b>,
    ],
    badges: ['WhatsApp API', 'Meta Ads', 'IA', 'Dashboard'],
    mock: <ClinicDashboard />,
    flip: false,
  },
  {
    num: 'Caso 02 — Empresa privada',
    location: 'Medio Oriente',
    title: 'Una IA tan humana que acompaña a personas que se sienten solas',
    desc: 'Campaña de una empresa privada lanzada en Medio Oriente — en países como Afganistán, Yemen y Siria — para acompañar a personas que necesitan compañía. Una IA conversacional con un nivel de naturalidad y calidez que la hace indistinguible de una conversación humana. Por la sensibilidad del proyecto, los demás detalles son confidenciales.',
    bullets: [
      'Memoria de largo plazo: recuerda cada conversación',
      'Tono, ritmo y empatía calibrados persona a persona',
      'Operando en varios países y a cualquier hora',
    ],
    badges: ['IA conversacional', 'WhatsApp', 'Confidencial'],
    mock: <CompanionChat />,
    flip: true,
  },
  {
    num: 'Caso 03 — HM Motors',
    location: 'Costa Rica',
    link: 'https://www.hmmotors.net/',
    linkLabel: 'hmmotors.net',
    title: 'Del “hola, ¿está disponible?” a la cita agendada, sin humanos',
    desc: 'Para este concesionario, el asistente pide al cliente los datos del auto que busca, evalúa si hay compra real y, si la hay, agenda la cita directamente en el calendario del vendedor.',
    bullets: [
      'Captura y calificación automática de cada interesado',
      'Filtra curiosos y prioriza compradores reales',
      'Agenda de citas conectada al equipo de ventas',
    ],
    badges: ['WhatsApp API', 'Calificación de leads', 'Agendamiento'],
    mock: <DealerCard />,
    flip: false,
  },
]

export default function Cases() {
  return (
    <section id="casos" className="border-y border-line bg-panel px-6 py-28 max-md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHead kicker="Con quiénes hemos trabajado" title="Casos reales, resultados que se miden en plata">
            Proyectos en producción que hoy atienden, venden y ahorran dinero todos los días.
          </SectionHead>
        </Reveal>
        <div className="flex flex-col gap-24">
          {cases.map((c) => (
            <Reveal key={c.num}>
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className={c.flip ? 'lg:order-2' : ''}>
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="text-[0.78rem] font-semibold tracking-[0.15em] text-vio uppercase">{c.num}</span>
                    {c.location && (
                      <span className="flex items-center gap-1.5 text-[0.78rem] font-medium text-muted">
                        <Icon name="pin" className="size-3.5 text-mag" />
                        {c.location}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-4 font-display text-[1.9rem] leading-[1] text-balance">{c.title}</h3>
                  <p className="mb-5 text-[0.96rem] leading-relaxed text-muted">{c.desc}</p>
                  <ul className="flex flex-col gap-2.5">
                    {c.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[0.92rem]">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-vio/10 text-vio">
                          <Icon name="check" className="size-3" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {c.badges.map((b) => (
                      <Badge key={b}>{b}</Badge>
                    ))}
                    {c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border-b border-ink pb-0.5 text-[0.72rem] font-bold tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-60"
                      >
                        <Icon name="globe" className="size-3.5" />
                        {c.linkLabel}
                        <Icon name="external" className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
                <div className={c.flip ? 'lg:order-1' : ''}>{c.mock}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
