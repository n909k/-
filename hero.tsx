import { keyFacts } from '@/lib/report'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to left, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-sand/40 px-3 py-1 text-sm text-sand">
            توثيق مراحل التطوير والتخصيص
          </p>
          <h1 id="hero-title" className="font-serif text-5xl font-bold leading-[1.15] text-balance md:text-7xl">
            تطوير متجر مزارع عالية المدينة
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            يوثق هذا الملف مراحل تطوير وتخصيص المتجر منذ بدء مناقشة التطوير، مرورًا بنشر الثيم الجديد وربطه بالمتجر،
            وحتى اكتمال الأعمال.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand/25 bg-sand/25 md:grid-cols-4">
          {keyFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-2 bg-primary p-5 md:p-6">
              <dt className="text-sm text-sand">{fact.label}</dt>
              <dd className="text-3xl font-semibold tabular-nums md:text-4xl" dir="ltr" style={{ textAlign: 'right' }}>
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
