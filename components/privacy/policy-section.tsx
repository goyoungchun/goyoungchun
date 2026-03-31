export function PolicySection({ title, body, titleEn, bodyEn }: { title: string; body: string; titleEn?: string; bodyEn?: string }) {
  return (
    <section className="rounded-[2rem] border border-border/80 bg-white/92 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.03)]">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-4 text-base leading-8 text-muted">{body}</p>
        </div>
        {titleEn && bodyEn ? (
          <div className="border-t border-border/70 pt-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground/90">{titleEn}</h3>
            <p className="mt-4 text-base leading-8 text-muted">{bodyEn}</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
