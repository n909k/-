'use client'

import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { previews } from '@/lib/report'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const options = [
  { id: 'before', label: 'قبل التطوير', caption: 'الثيم السابق', url: previews.before },
  { id: 'after', label: 'بعد التطوير', caption: 'ثيم ريسبون بعد التخصيص', url: previews.after },
] as const

type OptionId = (typeof options)[number]['id']

export function BeforeAfter() {
  const [active, setActive] = useState<OptionId>('after')
  const current = options.find((o) => o.id === active) ?? options[1]

  return (
    <section id="before-after" aria-labelledby="before-after-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-3 text-sm font-medium text-sand">
            <span aria-hidden="true" className="h-px w-8 bg-sand" />
            المقارنة
          </p>
          <h2 id="before-after-title" className="font-serif text-3xl font-bold md:text-5xl">
            {'قبل التطوير × بعد التطوير'}
          </h2>
          <p className="max-w-2xl leading-relaxed text-primary-foreground/75">
            معاينة فعلية للمتجر على الثيم السابق، وعلى ثيم ريسبون بعد التطوير والتخصيص.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {options.map((option) => (
            <div
              key={option.id}
              className={cn(
                'flex flex-col gap-5 rounded-2xl border p-6 transition-colors',
                option.id === active ? 'border-sand bg-primary-foreground/10' : 'border-primary-foreground/20',
              )}
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm text-sand">{option.caption}</span>
                <h3 className="font-serif text-2xl font-bold">{option.label}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActive(option.id)}
                  aria-pressed={option.id === active}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand',
                    option.id === active
                      ? 'bg-sand text-foreground'
                      : 'border border-primary-foreground/30 hover:bg-primary-foreground/10',
                  )}
                >
                  {option.id === active ? 'معروضة أدناه' : 'عرض المعاينة'}
                </button>
                <a
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
                >
                  فتح في نافذة جديدة
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only">({option.label})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <figure className="overflow-hidden rounded-2xl border border-primary-foreground/20 bg-background text-foreground shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border bg-muted px-4 py-3">
            <div aria-hidden="true" className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-sand" />
              <span className="size-2.5 rounded-full bg-sand/70" />
              <span className="size-2.5 rounded-full bg-sand/40" />
            </div>
            <figcaption className="flex-1 truncate text-center text-sm font-medium">{current.label}</figcaption>
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              <span className="sr-only">فتح {current.label} في نافذة جديدة</span>
            </a>
          </div>
          <iframe
            key={current.id}
            src={current.url}
            title={`معاينة المتجر — ${current.label}`}
            loading="lazy"
            className="h-[70vh] min-h-[480px] w-full bg-card"
          />
        </figure>
        <p className="text-sm text-primary-foreground/70">
          في حال عدم ظهور المعاينة داخل الصفحة، يمكن فتحها مباشرة عبر زر «فتح في نافذة جديدة».
        </p>
      </div>
    </section>
  )
}
