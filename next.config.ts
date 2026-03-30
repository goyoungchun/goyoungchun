import type { NextConfig } from 'next'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.NODE_ENV === 'production'
const repoName = 'goyoungchun'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
}

export default nextConfig
