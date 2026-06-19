import { Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#hero" className="font-mono text-lg font-bold text-text-primary">
            <span className="text-git-add">~/</span>CommitPT
          </a>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="hover:text-git-add">
              Benefits
            </a>
            <a href="#features" className="hover:text-git-add">
              How it works
            </a>
            <a href="#platform" className="hover:text-git-add">
              Platform
            </a>
            <a href="#team" className="hover:text-git-add">
              About
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted hover:text-git-add" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted hover:text-git-add" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} CommitPT. Built for devs who ship.
        </p>
      </div>
    </footer>
  )
}
