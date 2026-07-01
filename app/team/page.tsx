import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import ContributorCard, { type Contributor } from '@/src/components/ContributorCard'
import contributorsData from '@/src/contributors.json'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Equipa & Contribuidores — CommitPT',
  description:
    'Conhece os programadores por trás da CommitPT. Contribuidores, mentores e builders que constroem em público e tornam a comunidade possível.',
  alternates: { canonical: 'https://www.commitpt.com/team' },
  openGraph: {
    type: 'website',
    url: 'https://www.commitpt.com/team',
    title: 'Equipa & Contribuidores — CommitPT',
    description:
      'Os programadores por trás da CommitPT. Contribuidores que constroem em público todos os dias.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipa & Contribuidores — CommitPT',
    description: 'Os programadores por trás da CommitPT — contribuidores e builders.',
    images: ['/commit_3.png'],
  },
}

const contributors: Contributor[] = contributorsData

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <span className="font-mono text-sm font-bold text-git-amber">
              {'// Equipa & Contribuidores'}
            </span>
            <h1 className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl">
              As pessoas por trás da CommitPT.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Contribuidores, mentores e builders que tornam a comunidade possível. Cada um deles
              construiu em público dentro da CommitPT.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.githubUsername} contributor={contributor} />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-ink-light">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
            <span className="font-mono text-sm font-bold text-git-amber">
              {'// Junta-te a nós'}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
              Queres aparecer aqui?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Entra na comunidade e começa a contribuir. Simples assim.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://whop.com/commitpt-709e/commit-plus"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-git-add px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#4bc45d]"
              >
                Entrar no Whop
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://discord.gg/yGAbprCBrT"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-git-add hover:text-git-add"
              >
                Entrar no Discord
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
