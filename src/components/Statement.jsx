import Reveal from './Reveal.jsx'
import { WordReveal } from './ui.jsx'

export default function Statement() {
  return (
    <section className="px-6 py-28 max-md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-[2.2rem] leading-[1.02] text-balance md:text-[3.4rem]">
            <WordReveal text="Cada minuto que tu negocio deja a un cliente" />{' '}
            <WordReveal text="“en visto”," className="text-grad" offset={9} />{' '}
            <WordReveal text="hay otro negocio respondiéndole primero." offset={11} />
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-xl text-lg text-muted">
            Nosotros hacemos que eso no vuelva a pasar: una IA entrenada en tu negocio contesta al
            instante, con calidez y con memoria — y tú solo ves cómo se llena la agenda.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
