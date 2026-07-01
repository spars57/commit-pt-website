import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import SocialProof from '@/src/components/SocialProof'

export const metadata: Metadata = {
  title: 'Reviews & Testemunhos — O Que Dizem os Membros da CommitPT',
  description:
    'Lê os testemunhos de programadores que entraram na CommitPT e aceleraram a sua carreira. Resultados reais de engenheiros reais — em Portugal e além.',
  alternates: { canonical: 'https://www.commitpt.com/reviews' },
  openGraph: {
    type: 'website',
    url: 'https://www.commitpt.com/reviews',
    title: 'Reviews & Testemunhos — CommitPT',
    description:
      'O que acontece quando os programadores param de programar sozinhos. Testemunhos reais de membros da CommitPT.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reviews & Testemunhos — CommitPT',
    description: 'Resultados reais de engenheiros reais. O que dizem os membros da CommitPT.',
    images: ['/commit_3.png'],
  },
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <span className="font-mono text-sm font-bold text-git-amber">{'// Reviews'}</span>
            <h1 className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl">
              Engenheiros reais. Resultados reais.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Não acredites só na nossa palavra. É isto que acontece quando os programadores param
              de programar sozinhos.
            </p>
          </div>
        </section>
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}
