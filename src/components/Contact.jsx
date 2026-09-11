import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { Icon, Overline, WordReveal } from './ui.jsx'

// Formulario sin backend vía FormSubmit (https://formsubmit.co).
// El PRIMER envío dispara un correo de FormSubmit para ACTIVAR el formulario
// (llega a la casilla del endpoint); el campo _cc manda copia simultánea al segundo correo.
const FORM_ENDPOINT = 'https://formsubmit.co/restrepos591@gmail.com'
const CC_EMAIL = 'danielloaiza609@gmail.com'

const phones = [
  { label: '+57 310 879 0168', wa: 'https://wa.me/573108790168' },
  { label: '+57 316 235 6084', wa: 'https://wa.me/573162356084' },
]
const emails = ['restrepos591@gmail.com', 'danielloaiza609@gmail.com']

const points = [
  { icon: 'zap', title: 'Respuesta en menos de 24 h', desc: 'Leemos cada mensaje personalmente.' },
  { icon: 'target', title: 'Propuesta a tu medida', desc: 'Sin paquetes genéricos: cada negocio es distinto.' },
  { icon: 'lock', title: 'Confidencialidad total', desc: 'Tu idea y tus datos quedan entre nosotros.' },
]

const inputCls =
  'w-full rounded-none border border-line bg-panel px-4 py-3 text-[0.92rem] text-ink outline-none transition placeholder:text-muted/50 focus:border-vio/60 focus:ring-2 focus:ring-vio/15'
const labelCls = 'flex flex-col gap-1.5 text-[0.8rem] font-semibold text-ink'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error()
      e.target.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden px-6 py-28 max-md:py-20">
      
      <div className="relative mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Overline>Hablemos</Overline>
          <h2 className="mb-4 font-display text-[2.4rem] leading-[0.98] text-balance md:text-[3.2rem]">
            <WordReveal text="Cuéntanos tu idea y te decimos cómo automatizarla" />
          </h2>
          <p className="mb-9 text-[1.02rem] leading-relaxed text-muted">
            Escríbenos qué quieres lograr. Te respondemos con una propuesta concreta: qué automatizar,
            cómo y cuánto te ahorra.
          </p>
          <div className="flex flex-col gap-5">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-none border border-line bg-card text-vio">
                  <Icon name={p.icon} className="size-4.5" />
                </div>
                <div>
                  <b className="block text-[0.95rem] font-semibold">{p.title}</b>
                  <span className="text-[0.86rem] text-muted">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-ink/20 pt-8">
            <span className="mb-3 block text-[0.68rem] font-semibold tracking-[0.2em] text-muted uppercase">
              WhatsApp directo
            </span>
            <div className="mb-6 flex flex-col gap-2">
              {phones.map((p) => (
                <a
                  key={p.label}
                  href={p.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit font-display text-[1.3rem] tracking-[0.03em] text-ink transition-opacity hover:opacity-60"
                >
                  {p.label}
                </a>
              ))}
            </div>
            <span className="mb-3 block text-[0.68rem] font-semibold tracking-[0.2em] text-muted uppercase">
              Correo
            </span>
            <div className="flex flex-col gap-1.5">
              {emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="w-fit border-b border-ink/40 pb-0.5 text-[0.92rem] text-ink transition-opacity hover:opacity-60"
                >
                  {e}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4.5 rounded-none border border-line bg-card p-9 shadow-[0_40px_80px_-32px_rgba(16,18,35,0.15)] max-md:p-6"
          >
            <input type="hidden" name="_subject" value="Nuevo lead desde la web BackOffice" />
            <input type="hidden" name="_cc" value={CC_EMAIL} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-4 md:grid-cols-2">
              <label className={labelCls}>
                Nombre
                <input className={inputCls} type="text" name="Nombre" placeholder="Tu nombre" required />
              </label>
              <label className={labelCls}>
                WhatsApp
                <input className={inputCls} type="tel" name="WhatsApp" placeholder="+57 300 000 0000" required />
              </label>
            </div>
            <label className={labelCls}>
              Correo
              <input className={inputCls} type="email" name="Correo" placeholder="tucorreo@ejemplo.com" required />
            </label>
            <label className={labelCls}>
              ¿Qué necesitas?
              <select className={`${inputCls} appearance-none`} name="Servicio" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                <option>Plataforma para agencias — Starter</option>
                <option>Plataforma para agencias — Growth</option>
                <option>Plataforma para agencias — Scale</option>
                <option>Plataforma para agencias — Enterprise</option>
                <option>Automatizar WhatsApp con IA</option>
                <option>Cotizar mi suscripción</option>
                <option>Modelos IA hiperrealistas</option>
                <option>Chatbot de ventas + dashboard</option>
                <option>Campañas con Meta Ads</option>
                <option>Automatización de Telegram</option>
                <option>Landing page</option>
                <option>Automatización con N8N (sin IA)</option>
                <option>Todavía no lo tengo claro</option>
              </select>
            </label>
            <label className={labelCls}>
              Cuéntanos tu idea
              <textarea
                className={`${inputCls} min-h-28 resize-y`}
                name="Mensaje"
                placeholder="Ej: tengo una clínica y quiero que un bot agende las citas y me reporte todo…"
                required
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-1 inline-flex cursor-pointer items-center justify-center gap-3 bg-ink px-6 py-4 font-display text-[1.05rem] tracking-[0.04em] text-bg transition-[background-color,box-shadow,opacity,transform] duration-150 hover:bg-black hover:shadow-[6px_6px_0_rgba(26,26,26,0.18)] disabled:opacity-60 motion-safe:active:scale-[0.98]"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              {status !== 'sending' && <Icon name="arrow" className="size-4" />}
            </button>
            {status === 'sent' && (
              <div className="rounded-none border border-vio/40 bg-vio/10 p-3.5 text-center text-[0.9rem] font-medium text-vio">
                ¡Mensaje enviado! Te contactamos en menos de 24 horas.
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-none border border-red-400/40 bg-red-400/10 p-3.5 text-center text-[0.9rem] font-medium text-red-400">
                Hubo un problema al enviar. Escríbenos directo por WhatsApp.
              </div>
            )}
            <p className="text-center text-[0.76rem] text-muted">
              Al enviar aceptas que te contactemos por correo o WhatsApp. Cero spam.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
