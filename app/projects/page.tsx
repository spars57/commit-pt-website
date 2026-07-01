import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projetos da Comunidade — CommitPT | Programadores a Construir em Público',
  description:
    'Projetos reais construídos por membros da CommitPT. Aplicações web, ferramentas open source e muito mais — feitos por programadores portugueses a colaborar em equipa.',
  alternates: { canonical: 'https://www.commitpt.com/projects' },
  openGraph: {
    type: 'website',
    url: 'https://www.commitpt.com/projects',
    title: 'Projetos da Comunidade — CommitPT',
    description:
      'Programadores portugueses a construir em público. Projetos reais, código real, equipas reais.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projetos da Comunidade — CommitPT',
    description: 'Projetos reais feitos por membros da CommitPT — a construir em público.',
    images: ['/commit_3.png'],
  },
}

interface Project {
  name: string
  description: string
  tags: string[]
  status: 'live' | 'em desenvolvimento' | 'concluído'
  githubUrl?: string
}

const projects: Project[] = [
  {
    name: 'CommitPT Website',
    description:
      'O website que estás a ver agora — construído e mantido por contribuidores da comunidade. Qualquer membro pode contribuir com melhorias, correções ou novas funcionalidades.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    status: 'live',
    githubUrl: 'https://github.com/commit-pt/commit-pt-website',
  },
  {
    name: 'DevTracker',
    description:
      'Ferramenta para acompanhar o progresso de aprendizagem, commit streaks e metas semanais. Ajuda programadores a manterem consistência e visibilidade sobre o seu crescimento.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    status: 'em desenvolvimento',
  },
  {
    name: 'Interview Prep Kit',
    description:
      'Repositório colaborativo com perguntas de entrevistas técnicas, respostas e dicas de membros que já passaram pelo processo. Cobre desde algoritmos a system design e soft skills.',
    tags: ['Open Source', 'Comunidade'],
    status: 'concluído',
  },
]

function statusBadge(status: Project['status']) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center rounded border border-git-add/30 bg-git-add/10 px-2 py-0.5 font-mono text-xs text-git-add">
        live
      </span>
    )
  }
  if (status === 'em desenvolvimento') {
    return (
      <span className="inline-flex items-center rounded border border-git-amber/30 bg-git-amber/10 px-2 py-0.5 font-mono text-xs text-git-amber">
        em desenvolvimento
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded border border-border bg-ink px-2 py-0.5 font-mono text-xs text-muted">
      concluído
    </span>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <span className="font-mono text-sm font-bold text-git-amber">{'// Projetos'}</span>
            <h1 className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl">
              Construído por membros. Para toda a gente.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Projetos reais, construídos por membros reais. Uma das maiores provas de que a Commit
              funciona.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-lg border border-border bg-ink-light p-6 hover:border-git-add transition-colors"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h2 className="text-xl font-semibold text-text-primary">{project.name}</h2>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub de ${project.name}`}
                      className="shrink-0 text-muted transition-colors hover:text-git-add"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {statusBadge(project.status)}
              </div>
            ))}
          </div>

          <p className="mt-12 text-center font-mono text-sm text-muted">
            Mais projetos serão adicionados em breve. Entra na comunidade para fazeres parte.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
