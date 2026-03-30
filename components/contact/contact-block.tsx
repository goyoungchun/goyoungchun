import { siteConfig } from '@/content/site'

export function ContactBlock() {
  return (
    <div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-4 max-w-prose text-base leading-7 text-muted">For product questions, support requests, or privacy-related inquiries, please contact the studio using the email below.</p>
      <a className="mt-6 inline-block text-base font-medium text-accent" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
    </div>
  )
}
