import { ChevronDown, Info } from 'lucide-react'
import { flow, phases, type Phase } from '@/lib/report'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

function FlowStrip() {
  return (
    <ol
      aria-label="التسلسل الزمني المختصر"
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0"
    >
      {flow.map((step, index) => (
        <li key={step.label} className="relative flex lg:flex-col">
          <div
            className={cn(
              'flex w-full flex-col gap-2 rounded-xl border p-4 lg:rounded-none lg:border-y lg:border-l-0 lg:first:rounded-r-xl lg:last:rounded-l-xl',
              index === 0 && 'lg:rounded-r-xl',
              index === flow.length - 1 && 'lg:rounded-l-xl lg:border-l',
              step.highlight ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card',
              !step.date && 'border-dashed bg-transparent',
            )}
          >
            <span
              className={cn(
                'text-xs font-medium',
                step.highlight ? 'text-sand' : 'text-muted-foreground',
              )}
            >
              {step.date ? `الخطوة ${index + 1}` : 'بعد النشر'}
            </span>
            <span className="text-2xl font-semibold tabular-nums">{step.date ?? '...'}</span>
            <span className={cn('text-sm leading-snug', step.highlight ? 'text-primary-foreground/85' : 'text-muted-foreground')}>
              {step.label}
            </span>
          </div>
        </li>
      ))}
    </ol>
  )
}

function PhaseItems({ items }: { items: NonNullable<Phase['blocks'][number]['items']> }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) =>
        typeof item === 'string' ? (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ) : (
          <li key={item.label} className="flex gap-3 leading-relaxed">
            <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
            <div className="flex flex-col gap-2">
              <span>{item.label}</span>
              <ul className="flex flex-wrap gap-2">
                {item.children.map((child) => (
                  <li key={child} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                    {child}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ),
      )}
    </ul>
  )
}

function PhaseCard({ phase, defaultOpen }: { phase: Phase; defaultOpen: boolean }) {
  const isMilestone = Boolean(phase.milestone)
  return (
    <li className="relative pr-10 md:pr-16">
      <span
        aria-hidden="true"
        className={cn(
          'absolute right-[11px] top-6 flex size-3 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-background md:right-[27px]',
          isMilestone ? 'size-4 bg-primary right-[9px] md:right-[25px]' : 'bg-sand',
        )}
      />
      <details
        open={defaultOpen}
        className={cn(
          'group rounded-2xl border bg-card transition-colors',
          isMilestone ? 'border-primary/50' : 'border-border',
        )}
      >
        <summary className="flex cursor-pointer items-start gap-4 rounded-2xl p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:p-6">
          <span className="font-serif text-3xl font-bold leading-none text-sand tabular-nums md:text-4xl">
            {phase.number}
          </span>
          <span className="flex flex-1 flex-col gap-2">
            <span className="text-lg font-semibold leading-snug md:text-xl">{phase.title}</span>
            <span className="flex flex-wrap items-center gap-2 text-sm">
              {phase.date ? (
                <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium tabular-nums text-foreground">
                  {phase.date}
                </span>
              ) : null}
              {phase.dateNote ? <span className="text-muted-foreground">{phase.dateNote}</span> : null}
              {phase.milestone === 'publish' ? (
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-primary-foreground">نشر الثيم</span>
              ) : null}
              {phase.milestone === 'complete' ? (
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-primary-foreground">اكتمال الأعمال</span>
              ) : null}
            </span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
          />
        </summary>
        <div className="flex flex-col gap-5 border-t border-border px-5 pb-6 pt-5 text-[15px] text-foreground/90 md:px-6">
          {phase.blocks.map((block, i) => (
            <div key={i} className="flex flex-col gap-3">
              {block.intro ? <p className="leading-relaxed">{block.intro}</p> : null}
              {block.items ? <PhaseItems items={block.items} /> : null}
            </div>
          ))}
          {phase.milestone === 'publish' ? (
            <p className="flex gap-3 rounded-xl bg-accent p-4 text-sm leading-relaxed text-accent-foreground">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                تاريخ 7/10 هو تاريخ نشر الثيم الجديد، وليس تاريخ انتهاء المشروع؛ فقد استمرت أعمال التخصيص والتعديلات
                البرمجية بعد النشر حتى اكتمال الأعمال بتاريخ 12/10.
              </span>
            </p>
          ) : null}
          {phase.note ? (
            <div className="flex flex-col gap-1.5 rounded-xl border border-sand bg-muted p-4 text-sm leading-relaxed">
              <p className="font-semibold">{phase.note.title}</p>
              <p className="text-muted-foreground">{phase.note.text}</p>
            </div>
          ) : null}
        </div>
      </details>
    </li>
  )
}

export function Timeline() {
  return (
    <section id="phases" aria-labelledby="phases-title" className="border-y border-border bg-muted/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="phases-title"
          eyebrow="المراحل الزمنية"
          title="رحلة المشروع من البداية حتى اكتمال الأعمال"
          description="تفاصيل كل مرحلة كما وردت في التقرير. اضغط على أي مرحلة لعرض تفاصيلها أو إخفائها."
        />

        <FlowStrip />

        <ol className="relative flex flex-col gap-4">
          <span aria-hidden="true" className="absolute bottom-6 right-4 top-6 w-px bg-border md:right-8" />
          {phases.map((phase, index) => (
            <PhaseCard key={phase.number} phase={phase} defaultOpen={index === 0} />
          ))}
        </ol>
      </div>
    </section>
  )
}
