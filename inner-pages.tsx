import { FileText } from 'lucide-react'
import { innerPages } from '@/lib/report'
import { SectionHeading } from './section-heading'

export function InnerPages() {
  return (
    <section id="pages" aria-labelledby="pages-title" className="border-y border-border bg-muted/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:px-8 md:py-28">
        <SectionHeading id="pages-title" eyebrow="الصفحات" title="الصفحات والمحتوى الداخلي" />
        <ul className="grid gap-4 md:grid-cols-2">
          {innerPages.map((page) => (
            <li key={page.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <FileText className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{page.title}</h3>
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground">
                    {page.status}
                  </span>
                </div>
                <p className="leading-relaxed text-muted-foreground">{page.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
