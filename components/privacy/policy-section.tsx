export function PolicySection({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-[2rem] border border-border/80 bg-white/92 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.03)]">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted">{body}</p>
    </section>
  )
}
