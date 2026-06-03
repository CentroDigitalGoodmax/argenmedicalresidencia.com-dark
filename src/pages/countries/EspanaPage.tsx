import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { CheckCircle, ArrowRight, GraduationCap, DollarSign, Globe, Heart, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  'Apostillas y legalizaciones',
  'Organización de documentos',
  'Pago de la tasa',
  'Carga de documentación en sistema',
  'Seguimiento del proceso de convalidación / homologación'
]

const whySpain = [
  { icon: GraduationCap, text: 'Educación gratuita' },
  { icon: DollarSign, text: 'Otorgan remuneración a los residentes' },
  { icon: Globe, text: 'Realizas tu residencia en español' },
  { icon: Heart, text: 'Educación reconocida a nivel mundial' },
  { icon: Sun, text: 'Título válido para la mayoría de países de la Unión Europea' }
]

const benefits = [
  'Accede a universidades de prestigio internacional con programas de alta calidad respaldados por una larga tradición académica',
  'Aprovecha la ubicación estratégica de España como puente entre Europa, África y América',
  'Sistema de salud avanzado con profesionales altamente cualificados y tecnología médica de vanguardia',
  'Excelente calidad de vida con clima agradable, rica cultura y amplia oferta de actividades'
]

function AnimatedSection({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function EspanaPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C60B1E]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC400]/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🇪🇸</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-secondary">España</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              España ofrece un sistema educativo de prestigio, sólidas oportunidades laborales y un entorno cultural diverso y enriquecedor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Homologate */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 text-center">
              <p className="text-muted-foreground text-lg">
                Realizar la homologación te permite ejercer tu profesión, continuar tu formación y desarrollarte legalmente, con reconocimiento oficial y proyección a largo plazo dentro del país y de la Unión Europea.
              </p>
              <p className="text-foreground font-semibold mt-4">
                Dar este paso es invertir en tu carrera, en tu estabilidad y en un nuevo comienzo lleno de posibilidades.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qué Ofrecemos
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 glass rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{service}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spain */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por Qué España
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whySpain.map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beneficios de realizar una Residencia en España
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 glass rounded-xl p-6"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#C60B1E]/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comienza tu camino hacia España
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Te acompañamos en cada paso del proceso
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-110 transition-all"
            >
              Solicitar Asesoría
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
