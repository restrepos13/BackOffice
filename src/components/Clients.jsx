const clients = ['MAS SALUD LATAM', 'HM MOTORS', 'PROYECTO CONFIDENCIAL', 'LOTES ANCESTRAL']

export default function Clients() {
  return (
    <div className="bg-navy px-6 py-9">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-4 max-md:justify-center">
        <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-sky/60 uppercase">
          Confían en nosotros
        </span>
        {clients.map((c) => (
          <span key={c} className="font-display text-[0.95rem] font-bold tracking-[0.08em] whitespace-nowrap text-white/55">
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
