export type PolicySection = {
  title: string
  body: string
  titleEn?: string
  bodyEn?: string
}

export type PrivacyPolicy = {
  slug: string
  productName: string
  effectiveDate: string
  contactEmail: string
  sections: PolicySection[]
}
