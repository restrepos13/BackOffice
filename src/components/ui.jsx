const paths = {
  chat: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  dashboard: (
    <>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  workflow: (
    <>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </>
  ),
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  lock: (
    <>
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  calendar: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  image: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
    </>
  ),
  server: (
    <>
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </>
  ),
  cpu: (
    <>
      <rect width="14" height="14" x="5" y="5" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-2.6-6.4" />
      <path d="M21 3v6h-6" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  external: <path d="M7 17 17 7M9 7h8v8" />,
}

export function Icon({ name, className = 'size-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export function Badge({ children }) {
  return (
    <span className="border border-ink/25 px-2.5 py-1 text-[0.64rem] font-semibold tracking-[0.12em] text-muted uppercase">
      {children}
    </span>
  )
}

export function Overline({ children }) {
  return (
    <span className="mb-5 flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.22em] text-ink uppercase">
      <span className="h-px w-8 bg-ink" />
      {children}
    </span>
  )
}

/* Revela un texto palabra por palabra desde una máscara (requiere un ancestro .reveal).
   `offset` continúa el stagger cuando el título se arma con varios tramos. */
export function WordReveal({ text, className = '', offset = 0 }) {
  const words = String(text).split(' ')
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="wline">
            <span className={`wword ${className}`} style={{ '--w-i': offset + i }}>{w}</span>
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </>
  )
}

export function SectionHead({ kicker, title, children }) {
  return (
    <div className="mb-16 max-w-2xl">
      <Overline>{kicker}</Overline>
      <h2 className="mb-6 font-display text-[2.4rem] leading-[0.98] text-balance md:text-[3.4rem]">
        {typeof title === 'string' ? <WordReveal text={title} /> : title}
      </h2>
      {children && <p className="text-[1.02rem] leading-relaxed text-muted">{children}</p>}
    </div>
  )
}

export function CtaButton({ href, children, ghost = false, className = '', ...props }) {
  const base =
    'inline-flex cursor-pointer items-center justify-center gap-3 px-8 py-4 font-display text-[1.05rem] tracking-[0.04em] transition-[background-color,color,border-color,box-shadow,transform] duration-150 motion-safe:active:scale-[0.98] [&>svg]:transition-transform [&>svg]:duration-200 motion-safe:hover:[&>svg]:translate-x-1'
  const solid = 'bg-ink text-bg hover:bg-black hover:shadow-[6px_6px_0_rgba(26,26,26,0.18)]'
  const outline = 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-bg'
  const cls = `${base} ${ghost ? outline : solid} ${className}`
  if (href)
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
