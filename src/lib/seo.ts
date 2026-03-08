/**
 * Central SEO config. Change SITE_URL to match your production domain.
 */
export const SITE = {
  name: 'CommitPT',
  title: 'CommitPT — A programming community',
  description:
    'CommitPT is a programming community. Learn, build, and grow with developers. Resources for interview preparation, programming, and cybersecurity.',
  /** Used for og:image and Twitter card. Prefer 1200×630. */
  image: '/og-image.png',
  twitterHandle: '',
} as const;

export function canonicalUrl(path: string, site: string): string {
  const base = site.replace(/\/$/, '');
  const pathNorm = path.startsWith('/') ? path : `/${path}`;
  return `${base}${pathNorm}`;
}
