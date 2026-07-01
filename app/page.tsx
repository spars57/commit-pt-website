import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Stats from '@/src/components/Stats'
import BenefitsGrid from '@/src/components/BenefitsGrid'
import Features from '@/src/components/Features'
import CommunityProjects from '@/src/components/CommunityProjects'
import SocialProof from '@/src/components/SocialProof'
import ContributorsTeaser from '@/src/components/ContributorsTeaser'
import FAQ from '@/src/components/FAQ'
import FinalCTA from '@/src/components/FinalCTA'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <Stats />
        <BenefitsGrid />
        <Features />
        <CommunityProjects />
        <SocialProof limit={3} />
        <ContributorsTeaser />
        <FAQ limit={3} />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
