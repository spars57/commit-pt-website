import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import FAQ from '@/src/components/FAQ'

export const metadata: Metadata = {
  title: 'FAQ — Perguntas Frequentes Sobre a CommitPT',
  description:
    'Tens dúvidas sobre a CommitPT? Descobre como funciona a comunidade, o que está incluído na membership, se é para o teu nível e como entrar no Discord gratuitamente.',
  alternates: { canonical: 'https://www.commitpt.com/faq' },
  openGraph: {
    type: 'website',
    url: 'https://www.commitpt.com/faq',
    title: 'FAQ — Perguntas Frequentes Sobre a CommitPT',
    description:
      'Tudo o que precisas de saber sobre a CommitPT antes de entrares — desde o que está incluído até como cancelar.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Perguntas Frequentes Sobre a CommitPT',
    description: 'Tens dúvidas sobre a CommitPT? Temos respostas.',
    images: ['/commit_3.png'],
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <span className="font-mono text-sm font-bold text-git-amber">{'// FAQ'}</span>
            <h1 className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl">
              Tens dúvidas. Temos respostas.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Se tens alguma questão antes de entrares, é provável que esteja aqui.
            </p>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
