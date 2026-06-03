import { HeroSection } from '../components/sections/HeroSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CTASection } from '../components/sections/CTASection'

export function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
