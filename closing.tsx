import { CheckCircle2, MessageSquareText, Scale } from 'lucide-react'
import { EDIT_REQUEST_EMAIL, EDIT_REQUEST_URL, finalOutcomes } from '@/lib/report'
import { SectionHeading } from './section-heading'

export function FinalResult() {
  return (
    <section id="result" aria-labelledby="result-title" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading id="result-title" eyebrow="الخلاصة" title="النتيجة النهائية" />
          <p className="text-lg leading-loose text-pretty">
            انتقل متجر مزارع عالية المدينة خلال فترة التطوير من الاعتماد على قالب بخصائص محدودة إلى متجر مطور على{' '}
            <strong className="font-semibold text-primary">ثيم ريسبون</strong> تم العمل عليه وتخصيصه بما يتناسب مع
            هوية العلامة، ثم تمت عملية التخصيص والتطوير وإجراء التعديلات النهائية حتى الوصول إلى النسخة النهائية
            المعتمدة من المتجر.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {finalOutcomes.map((item) => (
            <li key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-[15px] leading-relaxed">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ProjectStatus() {
  return (
    <section aria-labelledby="status-title" className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="grid overflow-hidden rounded-3xl border border-primary bg-card md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-6 bg-primary p-8 text-primary-foreground md:p-12">
          <h2 id="status-title" className="text-sm font-medium text-sand">
            حالة المشروع
          </h2>
          <p className="flex flex-wrap items-baseline gap-4">
            <span className="font-serif text-5xl font-bold md:text-6xl">مكتمل</span>
            <span dir="ltr" className="font-serif text-5xl font-bold tabular-nums text-sand md:text-6xl">
              100%
            </span>
          </p>
          <div className="h-2 overflow-hidden rounded-full bg-primary-foreground/15" role="presentation">
            <div className="h-full w-full rounded-full bg-sand" />
          </div>
        </div>
        <dl className="flex flex-col justify-center gap-6 p-8 md:p-12">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
            <dt className="text-muted-foreground">تاريخ نشر الثيم</dt>
            <dd className="text-2xl font-semibold tabular-nums">7/10</dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
            <dt className="text-muted-foreground">تاريخ اكتمال الأعمال</dt>
            <dd className="text-2xl font-semibold tabular-nums text-primary">12/10</dd>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            استمرت التخصيصات والتعديلات البرمجية بعد نشر الثيم بتاريخ 7/10، حتى اكتمال الأعمال بتاريخ 12/10.
          </p>
        </dl>
      </div>
    </section>
  )
}

export function LegalNote() {
  return (
    <section aria-labelledby="legal-title" className="border-t border-border bg-muted/50">
      <div className="mx-auto flex max-w-3xl flex-col gap-5 px-5 py-16 md:px-8">
        <h2 id="legal-title" className="flex items-center gap-3 text-lg font-semibold">
          <Scale className="size-5 text-primary" aria-hidden="true" />
          ملاحظة إدارية وقانونية
        </h2>
        <div className="flex flex-col gap-3 leading-loose text-muted-foreground">
          <p>
            تم إنشاء هذه الصفحة بواسطة نواف، ولا تمثل متجر مزارع عالية المدينة، وإنما أُنشئت لغرض الاستطلاع من قبل
            إدارة المتجر للاطلاع على ما تم إنجازه ومراحل التطوير التي تم تلخيصها في هذه الصفحة.
          </p>
          <p className="font-medium text-foreground">هذه الصفحة صالحة للعرض لمدة سبعة أيام فقط.</p>
          <p>في حال طلب تمديد مدة العرض، يرجى التواصل مع نواف.</p>
        </div>
      </div>
    </section>
  )
}

export function EditRequest() {
  const buttonClass =
    'inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

  return (
    <section id="edit-request" aria-labelledby="edit-title" className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-card p-8">
        <h2 id="edit-title" className="font-serif text-2xl font-bold">
          طلب تعديل أو ملاحظة
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          لإبداء ملاحظة أو طلب تعديل على ما ورد في هذا التوثيق، يمكن استخدام الزر التالي.
        </p>
        <a href={EDIT_REQUEST_URL} className={buttonClass}>
          <MessageSquareText className="size-4" aria-hidden="true" />
          إرسال طلب تعديل
        </a>
        <p className="text-sm text-muted-foreground">
          أو عبر البريد:{' '}
          <a href={EDIT_REQUEST_URL} dir="ltr" className="font-medium text-foreground underline underline-offset-4">
            {EDIT_REQUEST_EMAIL}
          </a>
        </p>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-medium text-foreground">تطوير متجر مزارع عالية المدينة</p>
        <a href="#edit-request" className="underline-offset-4 hover:text-foreground hover:underline">
          طلب تعديل أو ملاحظة
        </a>
      </div>
    </footer>
  )
}
