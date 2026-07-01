import {
  FolderGit2,
  GitPullRequest,
  Video,
  Users,
  Briefcase,
  MessageSquare,
  LucideIcon,
} from 'lucide-react'

interface Benefit {
  icon: LucideIcon
  title: string
  desc: string
}

const benefits: Benefit[] = [
  {
    icon: FolderGit2,
    title: 'Projetos Reais',
    desc: 'Colabora em projetos reais com outros membros dentro da comunidade. Praticas trabalho em equipa num ambiente semelhante ao mercado de trabalho.',
  },
  {
    icon: GitPullRequest,
    title: 'Feedback de Código',
    desc: 'Partilha o teu PR ou arquitetura e recebe feedback honesto de engenheiros que já fizeram ship. Aprendes a dar e a receber críticas construtivas.',
  },
  {
    icon: Video,
    title: 'Sessões ao Vivo',
    desc: 'Chamadas regulares onde os membros constroem juntos, discutem desafios técnicos e recebem feedback em tempo real.',
  },
  {
    icon: Users,
    title: 'Networking de Qualidade',
    desc: 'Cria ligações reais com programadores portugueses dentro e fora do país. Colabora, troca ideias e cresce junto com outros.',
  },
  {
    icon: Briefcase,
    title: 'Carreira e Mentorias',
    desc: 'De entrevistas a negociação de salário — abordamos os temas que as faculdades não ensinam e que fazem diferença no mercado.',
  },
  {
    icon: MessageSquare,
    title: 'Comunidade de Suporte',
    desc: 'Tens uma dúvida técnica, um bloqueio ou só queres saber se estás no caminho certo? A comunidade está sempre disponível.',
  },
]

export default function BenefitsGrid() {
  return (
    <section id="about" className="border-y border-border bg-ink-light">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-sm font-bold text-git-amber">
            01 // O Que Vais Encontrar
          </span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            Constrói projetos reais. Com pessoas reais.
          </h2>
          <p className="mt-4 text-muted">
            Não é um servidor de Discord. É o ambiente mais próximo de uma empresa real que vais
            encontrar — onde desenvolves competências técnicas e soft skills em simultâneo.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative rounded-lg border border-border bg-ink p-6 hover:border-git-add transition-colors"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-git-add opacity-0 transition-opacity group-hover:opacity-100" />
              <b.icon className="mb-4 h-6 w-6 text-git-add" />
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{b.title}</h3>
              <p className="text-sm text-muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
