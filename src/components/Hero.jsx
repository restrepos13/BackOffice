import { CtaButton, Icon } from './ui.jsx'

const chat = [
  { in: true, text: 'Hola! Vi su página, ¿tienen disponibilidad para este sábado?', time: '10:42', delay: '0.7s' },
  { in: false, text: '¡Hola! Claro que sí 😊 Para el sábado tenemos espacio a las 10:00 am y a las 3:30 pm, ¿cuál te queda mejor?', time: '10:42', delay: '1.5s' },
  { in: true, text: 'La de las 10 está perfecta', time: '10:43', delay: '2.3s' },
  { in: false, text: 'Listo, quedaste agendado para el sábado a las 10:00 am ✅ Un día antes te envío un recordatorio por aquí.', time: '10:43', delay: '3.1s' },
]

function Tick() {
  return (
    <svg viewBox="0 0 16 10" className="inline size-3 text-[#53bdeb]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m1 5 3 3 5-7" />
      <path d="m7 8 1 1 6-8" />
    </svg>
  )
}

function ChatBubble({ msg }) {
  return (
    <div
      className={`msg-anim max-w-[84%] rounded-none px-3 py-2 text-[0.82rem] leading-snug text-[#1f2823] shadow-[0_1px_1px_rgba(0,0,0,0.06)] ${
        msg.in ? 'self-start rounded-tl-[4px] bg-white' : 'self-end rounded-tr-[4px] bg-[#d9fdd3]'
      }`}
      style={{ animationDelay: msg.delay }}
    >
      {msg.text}
      <span className="mt-0.5 flex items-center justify-end gap-1 text-[0.6rem] text-[#8b9389]">
        {msg.time} {!msg.in && <Tick />}
      </span>
    </div>
  )
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between bg-[#f7f8fa] px-7 pt-3 pb-1 text-[0.68rem] font-semibold text-[#171c18]">
      <span className="w-16">9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[1.5px]">
          <i className="h-[4px] w-[2.5px] rounded-[1px] bg-[#171c18]" />
          <i className="h-[6px] w-[2.5px] rounded-[1px] bg-[#171c18]" />
          <i className="h-[8px] w-[2.5px] rounded-[1px] bg-[#171c18]" />
          <i className="h-[10px] w-[2.5px] rounded-[1px] bg-[#171c18]/35" />
        </span>
        <span className="text-[0.58rem] font-bold">5G</span>
        <span className="relative h-[11px] w-[21px] rounded-[3.5px] border border-[#171c18]/35">
          <i className="absolute inset-[2px] right-[6px] rounded-[1.5px] bg-[#171c18]" />
          <i className="absolute top-1/2 -right-[3px] h-[4px] w-[1.5px] -translate-y-1/2 rounded-r-sm bg-[#171c18]/35" />
        </span>
      </span>
    </div>
  )
}

function PhoneMock() {
  return (
    <div className="rise-phone relative mx-auto w-[330px]" style={{ '--rise-delay': '250ms' }}>
      {/* Botones físicos del marco */}
      <i className="absolute top-[104px] -left-[2px] h-6 w-[3px] rounded-l-md bg-[#4a4d55]" />
      <i className="absolute top-[146px] -left-[2px] h-11 w-[3px] rounded-l-md bg-[#4a4d55]" />
      <i className="absolute top-[202px] -left-[2px] h-11 w-[3px] rounded-l-md bg-[#4a4d55]" />
      <i className="absolute top-[170px] -right-[2px] h-16 w-[3px] rounded-r-md bg-[#4a4d55]" />

      <div className="rounded-[56px] bg-gradient-to-b from-[#585c66] via-[#33363e] to-[#585c66] p-[3px] shadow-[0_40px_80px_-24px_rgba(16,18,35,0.45)]">
        <div className="rounded-[53px] bg-black p-[6px]">
          <div className="relative overflow-hidden rounded-[47px] bg-[#ede6dc]">
            {/* Dynamic Island */}
            <div className="absolute top-[9px] left-1/2 z-20 flex h-[25px] w-[95px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2.5">
              <i className="size-[7px] rounded-full bg-[#1a2436]" />
            </div>
            <StatusBar />
            <div className="flex items-center gap-3 bg-[#f7f8fa] px-4 pt-1.5 pb-3">
              <div className="bg-grad grid size-9 place-items-center rounded-full text-white">
                <Icon name="chat" className="size-4" />
              </div>
              <div className="leading-tight">
                <b className="block text-[0.85rem] font-semibold text-[#171c18]">Tu negocio</b>
                <small className="flex items-center gap-1 text-[0.7rem] text-[#0b7a46]">
                  <span className="dot-pulse size-1.5 rounded-full bg-[#0b7a46]" /> en línea
                </small>
              </div>
            </div>
            <div className="relative flex min-h-[350px] flex-col gap-2 px-3 pt-4 pb-8 [background-image:radial-gradient(rgba(17,21,15,0.035)_1px,transparent_1px)] [background-size:18px_18px]">
              <span className="mx-auto mb-1 rounded-none bg-white/80 px-2.5 py-1 text-[0.62rem] font-medium text-[#8b9389] shadow-sm">HOY</span>
              {chat.map((msg, i) => (
                <ChatBubble key={i} msg={msg} />
              ))}
              <div className="msg-anim inline-flex gap-1 self-start rounded-none rounded-tl-[4px] bg-white px-3.5 py-3 shadow-[0_1px_1px_rgba(0,0,0,0.06)]" style={{ animationDelay: '3.9s' }}>
                <i className="typing-dot size-1.5 rounded-full bg-[#8b9389]" />
                <i className="typing-dot size-1.5 rounded-full bg-[#8b9389] [animation-delay:0.15s]" />
                <i className="typing-dot size-1.5 rounded-full bg-[#8b9389] [animation-delay:0.3s]" />
              </div>
              {/* Indicador de home */}
              <i className="absolute bottom-2 left-1/2 h-[4px] w-28 -translate-x-1/2 rounded-full bg-black/25" />
            </div>
          </div>
        </div>
      </div>

      <div className="msg-anim absolute -left-24 -top-5 hidden items-center gap-2.5 rounded-none border border-line bg-card px-4 py-3 shadow-[0_18px_40px_-10px_rgba(16,18,35,0.18)] lg:flex" style={{ animationDelay: '3.7s' }}>
        <span className="grid size-8 place-items-center rounded-none bg-vio/10 text-vio"><Icon name="calendar" className="size-4" /></span>
        <div className="leading-tight">
          <b className="block text-[0.78rem] font-semibold">Cita agendada</b>
          <span className="text-[0.7rem] text-muted">sin intervención humana</span>
        </div>
      </div>
      <div className="msg-anim absolute -right-16 -bottom-5 hidden items-center gap-2.5 rounded-none border border-line bg-card px-4 py-3 shadow-[0_18px_40px_-10px_rgba(16,18,35,0.18)] lg:flex" style={{ animationDelay: '4.4s' }}>
        <span className="grid size-8 place-items-center rounded-none bg-mag/10 text-mag"><Icon name="zap" className="size-4" /></span>
        <div className="leading-tight">
          <b className="block text-[0.78rem] font-semibold">Respuesta inmediata</b>
          <span className="text-[0.7rem] text-muted">24 horas, 7 días</span>
        </div>
      </div>

      <div className="msg-anim absolute top-32 -right-28 hidden w-56 flex-col gap-2.5 rounded-none border border-line bg-card p-4 shadow-[0_18px_40px_-10px_rgba(16,18,35,0.18)] xl:flex" style={{ animationDelay: '5s' }}>
        <span className="text-[0.62rem] font-bold tracking-[0.14em] text-muted uppercase">Asistente de ventas</span>
        <p className="text-[0.76rem] leading-snug text-ink">Atiende, califica y agenda con automatización inteligente.</p>
        <div className="flex flex-wrap gap-1.5">
          {['Ventas', 'Citas', 'Seguimiento'].map((t) => (
            <span key={t} className="rounded-none border border-line bg-card2 px-2 py-0.5 text-[0.62rem] font-semibold tracking-wide text-muted uppercase">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Doodle() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      stroke="#b9afa2"
      strokeWidth="22"
      strokeLinecap="round"
      className="pointer-events-none absolute top-1/2 left-1/2 w-[640px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-70 max-lg:w-[440px]"
      aria-hidden="true"
    >
      <path d="M203 38 C300 33 366 108 361 202 C356 300 288 366 193 361 C98 356 37 288 41 194 C45 98 106 43 203 38 Z" />
      <path d="M150 148 C153 168 151 184 148 198" />
      <path d="M256 146 C258 166 257 182 254 195" />
      <path d="M118 252 C160 300 248 303 289 250" />
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden px-6 pt-44 pb-28 max-md:pt-32">
      <div className="relative mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative">
          <Doodle />
          <div className="relative">
            <span className="rise mb-7 inline-block text-[0.7rem] leading-relaxed font-semibold tracking-[0.22em] text-ink uppercase">
              Automatización con IA<br />
              <span className="text-muted">Modelo de suscripción · WhatsApp · Meta</span>
            </span>
            <h1 className="rise mb-8 font-display text-[3.4rem] leading-[0.92] md:text-[5.2rem]" style={{ '--rise-delay': '60ms' }}>
              Tu WhatsApp puede<br />
              <span className="text-grad text-[0.82em]">vender solo.</span>
            </h1>
            <p className="rise mb-10 max-w-[500px] text-[1.05rem] leading-relaxed text-muted" style={{ '--rise-delay': '120ms' }}>
              Asistentes con IA que responden, agendan y venden como tu mejor empleado — las 24 horas,
              sin vacaciones y <b className="font-semibold text-ink">sin sonar a robot</b>. Por una
              suscripción mensual, sin sorpresas.
            </p>
            <div className="rise flex flex-wrap items-center gap-4" style={{ '--rise-delay': '180ms' }}>
              <CtaButton href="#contacto">
                Automatizar mi negocio <Icon name="arrow" className="size-4" />
              </CtaButton>
              <CtaButton href="#suscripcion" ghost>La suscripción</CtaButton>
            </div>
            <div className="rise mt-16 flex max-w-[560px] divide-x divide-ink/20 border-t border-ink/20 pt-8" style={{ '--rise-delay': '240ms' }}>
              {[
                { n: '8+', label: 'años de experiencia combinada' },
                { n: '24/7', label: 'atención automática sin descanso' },
                { n: '×16', label: 'sueldos ahorrados a un solo cliente' },
              ].map((s, i) => (
                <div key={s.label} className={i === 0 ? 'pr-8' : 'px-8 last:pr-0'}>
                  <b className="block font-display text-[1.9rem] leading-none">{s.n}</b>
                  <span className="mt-1 block text-[0.78rem] leading-snug text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PhoneMock />
      </div>
    </header>
  )
}
