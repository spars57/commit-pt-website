import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export const metadata: Metadata = {
  title: 'Eventos — CommitPT | Workshops, Sessões ao Vivo e Meetups de Programadores',
  description:
    'Calendário de eventos da CommitPT: workshops técnicos, sessões de co-working ao vivo e meetups de programadores portugueses. Aprende, constrói e faz networking.',
  alternates: { canonical: 'https://www.commitpt.com/events' },
  openGraph: {
    type: 'website',
    url: 'https://www.commitpt.com/events',
    title: 'Eventos — CommitPT | Workshops e Meetups de Programadores',
    description:
      'Workshops, sessões ao vivo e meetups organizados pela comunidade CommitPT para programadores portugueses.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventos — CommitPT | Workshops e Meetups de Programadores',
    description: 'Workshops, sessões ao vivo e meetups de programadores portugueses.',
    images: ['/commit_3.png'],
  },
}

interface PastEvent {
  name: string
  date: string
  type: 'workshop' | 'sessão ao vivo' | 'meetup'
  description: string
}

const pastEvents: PastEvent[] = [
  {
    name: 'Workshop: Code Review Best Practices',
    date: 'Março 2025',
    type: 'workshop',
    description:
      'Sessão prática sobre como dar e receber feedback de código de forma construtiva e eficaz.',
  },
  {
    name: 'Build in Public: Lança o teu projeto',
    date: 'Fevereiro 2025',
    type: 'sessão ao vivo',
    description:
      'Membros partilharam os seus projetos em diferentes fases — desde ideia até MVP lançado.',
  },
  {
    name: 'Meetup Lisboa: Networking de Developers',
    date: 'Janeiro 2025',
    type: 'meetup',
    description:
      'Primeiro encontro presencial da comunidade em Lisboa. Networking, demos e muito mais.',
  },
]

function typeBadge(type: PastEvent['type']) {
  const styles: Record<PastEvent['type'], string> = {
    workshop: 'border-syntax-purple/30 bg-syntax-purple/10 text-syntax-purple',
    'sessão ao vivo': 'border-git-add/30 bg-git-add/10 text-git-add',
    meetup: 'border-syntax-blue/30 bg-syntax-blue/10 text-syntax-blue',
  }
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs ${styles[type]}`}
    >
      {type}
    </span>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <span className="font-mono text-sm font-bold text-git-amber">{'// Eventos'}</span>
            <h1 className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl">
              Aprende. Constrói. Faz ship.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Sessões ao vivo, workshops e meetups — organizados e liderados por membros da
              comunidade.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-ink-light">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <h2 className="mb-8 text-2xl font-bold text-text-primary">Próximos Eventos</h2>
            <div className="rounded-lg border border-border bg-ink p-8 text-center">
              <p className="text-muted">Nenhum evento agendado de momento.</p>
              <p className="mt-3 text-sm text-muted">
                Segue o{' '}
                <a
                  href="https://discord.gg/yGAbprCBrT"
                  target="_blank"
                  rel="noreferrer"
                  className="text-git-add hover:underline"
                >
                  Discord
                </a>{' '}
                para seres o primeiro a saber.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <h2 className="mb-8 text-2xl font-bold text-text-primary">Eventos Passados</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <div
                key={event.name}
                className="flex flex-col rounded-lg border border-border bg-ink-light p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  {typeBadge(event.type)}
                  <span className="font-mono text-xs text-muted">{event.date}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">{event.name}</h3>
                <p className="text-sm text-muted">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
