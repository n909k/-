type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <p className="flex items-center gap-3 text-sm font-medium text-primary">
        <span aria-hidden="true" className="h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif text-3xl font-bold leading-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  )
}
