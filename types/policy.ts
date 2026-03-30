export type PolicySection = {
  title: string
  body: string
}

export type PrivacyPolicy = {
  slug: string
  productName: string
  effectiveDate: string
  contactEmail: string
  sections: PolicySection[]
}
