import { policies } from '@/content/policies'

export function getPolicies() {
  return policies
}

export function getPolicyBySlug(slug: string) {
  return policies.find((policy) => policy.slug === slug)
}
