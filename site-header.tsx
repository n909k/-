const navItems = [
  { href: '#overview', label: 'نظرة عامة' },
  { href: '#phases', label: 'المراحل' },
  { href: '#works', label: 'الأعمال' },
  { href: '#pages', label: 'الصفحات' },
  { href: '#before-after', label: 'قبل وبعد' },
  { href: '#result', label: 'النتيجة النهائية' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-3 md:flex-row md:items-center md:justify-between md:gap-6 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-foreground">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-primary" />
          <span className="text-sm md:text-base">تطوير متجر مزارع عالية المدينة</span>
        </a>
        <nav aria-label="التنقل الداخلي" className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
          <ul className="flex w-max items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
