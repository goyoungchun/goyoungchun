import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'daily-journal',
    name: 'AI Diary',
    tagline: 'A Korean-first private diary app where talking with AI becomes a saved daily journal.',
    summary: 'AI Diary lowers the friction of journaling by letting users talk through their day, then turning that conversation into a structured private diary entry they can edit, save, and revisit later.',
    description:
      'AI Diary is a Korean-first private diary app designed for people who want to record their day but struggle to start from a blank page. Instead of asking users to write everything alone, the app uses short AI-guided conversation to help organize events, emotions, and meaning into a saved diary entry. As entries accumulate, users can return to them through archive views and weekly reflection features that make their records feel more valuable over time.',
    status: 'in-progress',
    category: 'Journaling',
    platforms: ['iOS', 'Android'],
    featured: true,
    privacySlug: 'daily-journal',
    features: [
      'Start with conversation instead of a blank page, so journaling feels easier on low-energy days.',
      'Generate an editable diary draft with title, body, and emotional framing after a short chat.',
      'Revisit saved entries later and build long-term value through weekly reflection over accumulated records.',
    ],
    audience: [
      'People who want to keep a private journal but often fail to continue because writing feels burdensome.',
      'Korean-speaking users who want a natural, warm AI diary experience focused on reflection rather than productivity pressure.',
    ],
  },
  {
    slug: 'routine-companion',
    name: 'Routine Companion',
    tagline: 'A simple tool for keeping lightweight routines visible.',
    summary: 'Organize recurring personal routines with a clean and supportive structure.',
    description:
      'Routine Companion is a placeholder project for testing a multi-product studio structure with another product type.',
    status: 'beta',
    category: 'Productivity',
    platforms: ['iOS', 'Web'],
    featured: true,
    privacySlug: 'routine-companion',
    features: [
      'Track recurring routines in a lightweight checklist format.',
      'Keep progress visible without turning the product into a heavy planner.',
      'Use flexible prompts to maintain consistency.',
    ],
    audience: [
      'Users building small personal routines.',
      'People who want a simpler alternative to full planning apps.',
    ],
  },
  {
    slug: 'focus-notes',
    name: 'Focus Notes',
    tagline: 'A note-taking concept built around clarity and shorter sessions.',
    summary: 'Collect small notes and ideas in a focused environment with fewer distractions.',
    description:
      'Focus Notes is a placeholder product example used to validate project card density, detail templates, and policy linking.',
    status: 'live',
    category: 'Notes',
    platforms: ['iOS'],
    featured: false,
    privacySlug: 'focus-notes',
    features: [
      'Capture short notes quickly.',
      'Organize ideas in a cleaner, less overwhelming interface.',
      'Keep note-taking fast and intentional.',
    ],
    audience: [
      'Users who prefer shorter writing sessions.',
      'People who want a simpler note utility for everyday use.',
    ],
  },
]
