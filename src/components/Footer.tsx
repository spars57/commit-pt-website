import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <a href="#hero" className="font-mono text-lg font-bold text-text-primary">
              <span className="text-git-add">~/</span>CommitPT
            </a>
            <p className="max-w-sm text-sm text-muted">
              A comunidade portuguesa que transforma programadores em engenheiros de topo.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href="https://whop.com/commitpt-709e/commit-plus"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-git-add px-5 py-2.5 text-sm font-semibold text-ink hover:bg-git-add-hover transition-colors"
            >
              Adere já
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://discord.gg/yGAbprCBrT"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-git-add hover:text-git-add transition-colors"
            >
              <MessageCircle size={15} />
              Experimenta o Discord Grátis
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-border pt-8 sm:flex-row">
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-muted">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-muted">Comunidade</span>
              <a href="/about" className="hover:text-git-add transition-colors">
                Sobre
              </a>
              <a href="/team" className="hover:text-git-add transition-colors">
                Equipa
              </a>
              <a href="/contributors" className="hover:text-git-add transition-colors">
                Contribuidores
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-muted">Recursos</span>
              <a href="/projects" className="hover:text-git-add transition-colors">
                Projetos
              </a>
              <a href="/events" className="hover:text-git-add transition-colors">
                Eventos
              </a>
              <a href="/faq" className="hover:text-git-add transition-colors">
                FAQ
              </a>
              <a href="/reviews" className="hover:text-git-add transition-colors">
                Reviews
              </a>
            </div>
          </div>
          <p className="text-xs text-muted sm:self-end">
            © {new Date().getFullYear()} CommitPT. Construído para devs que fazem ship.
          </p>
        </div>
      </div>
    </footer>
  )
}
