import { ExternalLink } from 'lucide-react'

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
      'O website que estás a ver agora — construído e mantido por contribuidores da comunidade.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    status: 'live',
    githubUrl: 'https://github.com/commit-pt/commit-pt-website',
  },
  {
    name: 'DevTracker',
    description:
      'Ferramenta para acompanhar o progresso de aprendizagem, commit streaks e metas semanais.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    status: 'em desenvolvimento',
  },
  {
    name: 'Interview Prep Kit',
    description:
      'Repositório colaborativo com perguntas de entrevistas técnicas, respostas e dicas de membros.',
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

export default function CommunityProjects() {
  return (
    <section className="border-b border-border bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-sm font-bold text-git-amber">
            03 // Projetos da Comunidade
          </span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            Construído por membros. Para toda a gente.
          </h2>
          <p className="mt-4 text-muted">
            Uma das maiores provas de que a Commit funciona: projetos reais, construídos por membros
            reais.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-lg border border-border bg-ink p-6 hover:border-git-add transition-colors"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
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
              <p className="mb-4 flex-1 text-sm text-muted">{project.description}</p>
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

        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center rounded-md border border-border bg-ink-light px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-git-add hover:text-git-add"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  )
}
