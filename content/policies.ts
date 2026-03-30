import type { PrivacyPolicy } from '@/types/policy'

export const policies: PrivacyPolicy[] = [
  {
    slug: 'daily-journal',
    productName: 'AI Diary',
    effectiveDate: '2026-03-30',
    contactEmail: 'goyoungchun1@gmail.com',
    sections: [
      {
        title: 'Overview',
        body: 'AI Diary is a private diary app that helps users record their day through AI-guided conversation and saved journal entries. Because the product handles personal writing, reflection data, and account-related information, privacy and trust are treated as core product requirements from the beginning. This policy explains the categories of information that may be processed, why that information may be used, and how users can contact the operator.',
      },
      {
        title: 'Information We May Collect',
        body: 'Depending on the features a user chooses to use, AI Diary may process account and authentication information such as login provider identifiers, email address, nickname, locale, and timezone. The app may also process conversation content, generated diary drafts, saved diary entries, weekly reflection content, support inquiries, device information, app version, push notification preferences, usage logs, and technical event data needed to maintain reliability, security, and billing or entitlement status.',
      },
      {
        title: 'How Information Is Used',
        body: 'Information may be used to authenticate users, operate the diary experience, generate editable diary drafts from conversation, save and display diary entries, generate weekly reflection features, restore access across sessions and devices, provide customer support, improve product quality, monitor abuse or suspicious activity, measure service reliability, and manage subscription or entitlement status where applicable. AI Diary is intended to help users create and revisit personal records; it is not positioned as a medical, therapy, or diagnostic service.',
      },
      {
        title: 'AI Processing and Sensitive Content',
        body: 'Users may choose to enter deeply personal content into AI Diary, including emotional reflections, memories, and private experiences. That content may be processed for the purpose of generating diary drafts, improving the quality of the journaling experience, and presenting saved entries or reflection outputs back to the user. Because the service is built around private writing, content should be handled with elevated care, and this policy should be updated further once the final production architecture, storage model, encryption approach, and third-party AI providers are fixed.',
      },
      {
        title: 'Retention, Deletion, and Third-Party Services',
        body: 'Information may be retained only as long as reasonably necessary to operate the service, provide account access, maintain security, comply with legal obligations, resolve disputes, or enforce policies. Users may be given controls to edit or delete diary content inside the app, and deletion requests may require a limited retention window for backup, fraud prevention, or legal compliance. The service may rely on third-party providers for infrastructure, authentication, analytics, crash reporting, payments, notifications, or AI processing. If specific providers are added or changed, this policy should be updated to name them more precisely.',
      },
      {
        title: 'Contact',
        body: 'If you have questions about this privacy policy, your personal information, or the handling of content inside AI Diary, please contact goyoungchun1@gmail.com. This version is intended as a real operational draft for MVP release preparation, but it should still be reviewed and refined against the final production implementation before wide release.',
      },
    ],
  },
  {
    slug: 'routine-companion',
    productName: 'Routine Companion',
    effectiveDate: '2026-03-30',
    contactEmail: 'goyoungchun1@gmail.com',
    sections: [
      { title: 'Information We Collect', body: 'Example placeholder text describing data categories relevant to a routine-focused application.' },
      { title: 'Retention', body: 'Example placeholder text describing how long information may be retained and why.' },
      { title: 'Third-Party Services', body: 'Example placeholder text describing analytics, hosting, or other service providers if applicable.' },
    ],
  },
  {
    slug: 'focus-notes',
    productName: 'Focus Notes',
    effectiveDate: '2026-03-30',
    contactEmail: 'goyoungchun1@gmail.com',
    sections: [
      { title: 'Information We Collect', body: 'Example placeholder text describing the information that may be processed when using this product.' },
      { title: 'Purpose of Use', body: 'Example placeholder text describing why the information is used to operate the product.' },
      { title: 'User Rights and Contact', body: 'Example placeholder text describing how users can request help or ask privacy questions.' },
    ],
  },
]
