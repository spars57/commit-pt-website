import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const BASE_URL = 'https://www.commitpt.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'CommitPT — Comunidade de Programadores em Portugal',
    template: '%s | CommitPT',
  },
  description:
    'Junta-te à comunidade de programadores em Portugal. Code reviews, projetos reais, eventos ao vivo e networking com devs portugueses. Aprende mais rápido, faz ship mais cedo.',
  keywords: [
    // brand
    'commitpt',
    'commit pt',
    'commit-pt',
    'bruno moisao',
    'bruno moisão',
    // core intent
    'comunidade programadores portugal',
    'comunidade programação portugal',
    'comunidade de programadores',
    'comunidade programacao',
    'comunidade programadores',
    'comunidade tech portugal',
    'comunidade online programadores',
    'dev community portugal',
    'tech community portugal',
    // learning
    'aprender a programar',
    'aprender programação',
    'aprender programacao',
    'aprender a programar do zero',
    'como aprender a programar',
    'como começar a programar',
    'programação para iniciantes',
    'programacao para iniciantes',
    'curso programação portugal',
    'curso programacao portugal',
    'bootcamp programação portugal',
    'aprender desenvolvimento web',
    'aprender react',
    'aprender javascript',
    'aprender typescript',
    'aprender python',
    'aprender nodejs',
    'aprender node js',
    // career
    'carreira programação',
    'carreira programacao',
    'crescimento carreira tech',
    'carreira desenvolvedor',
    'carreira desenvolvedor junior',
    'primeiro emprego programação',
    'primeiro emprego ti',
    'como arranjar emprego programação',
    'transição carreira programação',
    'engenheiro software junior',
    'engenheiros software portugal',
    // people / roles
    'programador portugal',
    'programadores portugueses',
    'developer portugal',
    'developers portugal',
    'programação em portugal',
    // activities
    'code review',
    'code review portugal',
    'accountability programadores',
    'build in public',
    'construir em publico',
    'side projects',
    'projetos pessoais programação',
    'projetos portfolio programador',
    'networking programadores',
    'networking tech portugal',
    'discord programadores',
    'discord programação',
    'discord programacao',
  ],
  authors: [{ name: 'Bruno Moisão', url: 'https://www.linkedin.com/in/brunomoisao' }],
  creator: 'Bruno Moisão',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'CommitPT — Comunidade de Programadores em Portugal',
    description:
      'Code reviews, projetos reais e networking com devs portugueses. Para de programar sozinho, começa a fazer ship.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommitPT — Comunidade de Programadores em Portugal',
    description:
      'Code reviews, projetos reais e networking com devs portugueses. Para de programar sozinho.',
    images: ['/commit_3.png'],
  },
  icons: {
    icon: '/commit_icon.png',
    apple: '/commit_icon.png',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-ink text-text-primary antialiased`}
      >
        {/* Ambient gradient orbs — fixed, behind everything */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="orb-1 absolute -left-64 -top-64 h-[800px] w-[800px] rounded-full bg-git-add/[0.055] blur-[140px]" />
          <div className="orb-2 absolute -right-80 top-[35%] h-[700px] w-[700px] rounded-full bg-git-add/[0.04] blur-[120px]" />
          <div className="orb-3 absolute bottom-[-10%] left-[15%] h-[600px] w-[600px] rounded-full bg-git-add/[0.045] blur-[100px]" />
        </div>
        {children}
      </body>
    </html>
  )
}
