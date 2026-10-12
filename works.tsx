'use client'

import { Check } from 'lucide-react'
import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { workGroups } from '@/lib/report'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function Works() {
  const [active, setActive] = useState(workGroups[0].id)
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const current = workGroups.find((g) => g.id === active) ?? workGroups[0]

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = workGroups.length - 1
    let next: number | null = null
    if (event.key === 'ArrowLeft') next = index === last ? 0 : index + 1
    if (event.key === 'ArrowRight') next = index === 0 ? last : index - 1
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = last
    if (next === null) return
    event.preventDefault()
    setActive(workGroups[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="works" aria-labelledby="works-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-10">
        <SectionHeading
          id="works-title"
          eyebrow="الأعمال والتعديلات"
          title="الأعمال المنفذة مصنفة حسب المجال"
          description="جميع الأعمال الواردة في التقرير، مجمعة في مجموعات لتسهيل المراجعة."
        />

        <div className="grid gap-6 lg:grid-cols-[16rem_1fr]">
          <div
            role="tablist"
            aria-label="مجموعات الأعمال"
            aria-orientation="vertical"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
          >
            {workGroups.map((group, index) => {
              const selected = group.id === active
              return (
                <button
                  key={group.id}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(group.id)}
                  onKeyDown={(e) => onKeyDown(e, index)}
                  className={cn(
                    'flex shrink-0 items-center justify-between gap-4 whitespace-nowrap rounded-xl border px-4 py-3 text-right text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                    selected
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary/40',
                  )}
                >
                  <span>{group.title}</span>
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-xs tabular-nums',
                      selected ? 'bg-primary-foreground/15 text-primary-foreground' : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {group.items.length}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${current.id}`}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="mb-6 font-serif text-2xl font-bold">{current.title}</h3>
            <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
              {current.items.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
