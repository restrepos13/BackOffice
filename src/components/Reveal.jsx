import { useEffect, useRef } from 'react'

/* Aparece al entrar al viewport y se despide al salir (bidireccional).
   En navegadores con scroll-driven animations, el CSS ata la opacidad al
   progreso del scroll (capas .reveal / .reveal-inner); esta clase .visible
   sigue disparando los efectos anidados (palabras, barras, líneas). */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      { threshold: 0.15, rootMargin: '-4% 0px -4% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    >
      <div className="reveal-inner">{children}</div>
    </div>
  )
}
