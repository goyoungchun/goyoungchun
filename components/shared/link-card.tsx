import Link from 'next/link'

export function LinkCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="block rounded-3xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
    >
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Link>
  )
}
