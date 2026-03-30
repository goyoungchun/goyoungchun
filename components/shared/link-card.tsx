import Link from 'next/link'

export function LinkCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="block rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Link>
  )
}
