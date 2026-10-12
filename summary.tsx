import {
  Brush,
  Code2,
  FileText,
  Globe,
  House,
  LayoutGrid,
  Link2,
  Network,
  Palette,
  PenLine,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { summaryItems } from '@/lib/report'
import { SectionHeading } from './section-heading'

const icons: Record<(typeof summaryItems)[number]['key'], LucideIcon> = {
  design: Brush,
  structure: Network,
  sections: LayoutGrid,
  home: House,
  pages: FileText,
  buttons: Link2,
  content: PenLine,
  policies: ShieldCheck,
  identity: Palette,
  code: Code2,
  publish: Rocket,
  domain: Globe,
}

export function Summary() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <SectionHeading id="overview-title" eyebrow="نظرة عامة" title="ملخص التطوير" />
          <div className="flex flex-col gap-4 border-r-2 border-primary pr-5 text-base leading-relaxed text-muted-foreground">
            <p>
              خلال تنفيذ التعديلات على الثيم المعتمد سابقًا، اتضح أنه لا يوفر مستوى التخصيص والاحترافية المطلوب، فتم
              اعتماد شراء <strong className="font-semibold text-foreground">ثيم ريسبون</strong> والبدء في إنشاء وتطوير
              المتجر عليه من الصفر بما يتناسب مع هوية مزارع عالية المدينة والتجربة المستهدفة للعميل.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {summaryItems.map((item) => {
            const Icon = icons[item.key]
            return (
              <li
                key={item.key}
                className="group flex flex-col gap-6 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-medium leading-snug">{item.title}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
