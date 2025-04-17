import Hero from "@/components/hero"
import PortfolioSection from "@/components/portfolio-section"
import AboutSection from "@/components/about-section"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <ContactCTA />
    </main>
  )
}

