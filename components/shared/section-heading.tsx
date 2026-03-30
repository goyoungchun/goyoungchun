export function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-prose">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  )
}
