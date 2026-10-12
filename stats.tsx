import { stats } from '@/lib/report'
import { SectionHeading } from './section-heading'

export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-10">
        <SectionHeading
          id="stats-title"
          eyebrow="الأرقام والإنجازات"
          title="الأرقام الموثقة"
          description="الأرقام الواردة في التقرير فقط."
        />
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={index === 0 ? 'flex flex-col gap-3 bg-primary p-6 text-primary-foreground' : 'flex flex-col gap-3 bg-card p-6'}
            >
              <dd
                dir="ltr"
                className="text-right font-serif text-5xl font-bold leading-none tabular-nums"
              >
                {stat.value}
              </dd>
              <dt className="font-medium">{stat.label}</dt>
              {'hint' in stat ? (
                <p className="text-sm leading-relaxed text-muted-foreground">{stat.hint}</p>
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
