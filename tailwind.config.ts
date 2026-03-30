import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f8f7f4',
        foreground: '#171717',
        muted: '#6b6b6b',
        border: '#dfdbd2',
        surface: '#ffffff',
        accent: '#1f6feb',
        accentSoft: '#eaf2ff'
      },
      maxWidth: {
        content: '72rem',
        prose: '48rem'
      }
    }
  },
  plugins: []
}

export default config
