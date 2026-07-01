import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import Team from '@/src/components/Team'

export const metadata: Metadata = {
  title: 'Sobre a CommitPT — A Comunidade Portuguesa de Programadores',
  description:
    'Conhece a história, missão e valores da CommitPT. Criada por um engenheiro de software português para resolver o isolamento de quem programa sozinho e quer crescer mais rápido.',
  alternates: { canonical: 'https://www.commitpt.com/about' },
  openGraph: {
    type: 'website',
    url: 'https://www.commitpt.com/about',
    title: 'Sobre a CommitPT — A Comunidade Portuguesa de Programadores',
    description:
      'A história, missão e valores da CommitPT — criada por um engenheiro de software que precisava dela e não existia.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre a CommitPT — A Comunidade Portuguesa de Programadores',
    description: 'A história e missão da CommitPT — criada por programadores, para programadores.',
    images: ['/commit_3.png'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <span className="font-mono text-sm font-bold text-git-amber">
              {'// Sobre a CommitPT'}
            </span>
            <h1 className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl">
              A comunidade portuguesa para programadores que fazem ship.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              A CommitPT nasceu da necessidade de criar um espaço onde programadores portugueses
              pudessem crescer juntos — construindo projetos reais, colaborando e evoluindo de forma
              acelerada.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-ink-light">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-ink p-6">
                <h3 className="mb-3 font-mono text-sm font-bold text-git-amber">Missão</h3>
                <p className="text-sm text-muted">
                  Acelerar o crescimento de programadores através de uma comunidade onde aprender,
                  colaborar e construir projetos reais acontece de forma natural.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-ink p-6">
                <h3 className="mb-3 font-mono text-sm font-bold text-git-amber">Visão</h3>
                <p className="text-sm text-muted">
                  Ser a referência da comunidade de programadores em Portugal — onde os melhores
                  engenheiros portugueses começaram.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-ink p-6">
                <h3 className="mb-3 font-mono text-sm font-bold text-git-amber">Valores</h3>
                <ul className="space-y-1 text-sm text-muted">
                  <li>Transparência radical</li>
                  <li>Construção em público</li>
                  <li>Colaboração acima de competição</li>
                  <li>Crescimento contínuo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Team />
      </main>
      <Footer />
    </div>
  )
}
