'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  initials: string
  shortBio: string
  fullBio: string[]
  photo?: string
}

const members: TeamMember[] = [
  {
    name: 'Bruno Moisão',
    role: 'Founder & Software Engineer',
    initials: 'BM',
    shortBio:
      'Software Engineer from Portugal with over 4 years of experience building products for international companies. Founded CommitPT to help developers learn, grow, and ship together.',
    fullBio: [
      'Bruno Moisão is a Software Engineer from Portugal with over 4 years of professional experience building software products for international companies and global audiences.',
      "He holds a Bachelor's degree in Computer Science Engineering from the Autonomous University of Lisbon and has worked in international environments alongside teams distributed across different countries and cultures. Throughout his career, he has contributed to modern web applications, large-scale products, and fast-growing technology companies.",
      'Alongside his professional career, Bruno founded CommitPT with the goal of creating a place where aspiring and experienced developers can learn, share knowledge, and grow together. Through the community, he regularly shares insights from real-world software engineering, career development, interviews, and the challenges of working in the tech industry.',
      'His mission is simple: help developers accelerate their growth by learning from practical experience, building meaningful connections, and developing the skills needed to succeed in a competitive global market.',
    ],
  },
]

function MemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
      {/* Photo */}
      <div className="mx-auto w-full max-w-[280px] lg:mx-0">
        {member.photo ? (
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border">
            <Image src={member.photo} alt={member.name} fill className="object-cover" />
          </div>
        ) : (
          <div className="flex aspect-square w-full items-center justify-center rounded-lg border border-border bg-ink-light">
            <span className="font-mono text-5xl font-bold text-git-add">{member.initials}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-text-primary">{member.name}</h3>
          <p className="mt-1 font-mono text-sm text-git-amber">{member.role}</p>
        </div>

        <div className="space-y-3 text-muted">
          {expanded ? (
            member.fullBio.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          ) : (
            <p>{member.shortBio}</p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-git-add transition-colors"
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={15} />
              </>
            ) : (
              <>
                Read more <ChevronDown size={15} />
              </>
            )}
          </button>

          <a
            href="#hero"
            className="group inline-flex items-center gap-2 rounded-md border border-git-add px-4 py-2 text-sm font-semibold text-git-add hover:bg-git-add hover:text-ink transition-colors"
          >
            Get in touch
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="border-t border-border bg-ink-light">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-sm font-bold text-git-amber">04 // The Team</span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            The people behind CommitPT.
          </h2>
          <p className="mt-4 text-muted">
            Built by developers, for developers. Here&apos;s who&apos;s driving this forward.
          </p>
        </div>

        <div className="space-y-16">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
