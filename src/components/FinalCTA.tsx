import { ArrowRight, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="border-t border-border bg-ink-light">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
        <span className="font-mono text-sm text-git-amber">{'// Pronto para começar?'}</span>
        <h2 className="mt-3 text-3xl font-bold text-text-primary">Dá hoje o primeiro passo.</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Junta-te às mais de 250 pessoas que já fazem parte da comunidade.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://whop.com/commitpt-709e/commit-plus"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-git-add px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-git-add-hover"
          >
            Adere já
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://discord.gg/yGAbprCBrT"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-ink px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-git-add hover:text-git-add"
          >
            <MessageCircle size={16} />
            Experimenta o Discord Grátis
          </a>
        </div>
      </div>
    </section>
  )
}
