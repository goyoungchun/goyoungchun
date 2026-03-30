import { siteConfig } from '@/content/site'

export function ContactBlock() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-4 max-w-prose text-base leading-7 text-muted">
        For product questions, support requests, or privacy-related inquiries, please contact the studio
        using the email below.
      </p>
      <a className="mt-6 inline-block text-base font-medium text-accent" href={`mailto:${siteConfig.contactEmail}`}>
        {siteConfig.contactEmail}
      </a>
    </div>
  )
}
