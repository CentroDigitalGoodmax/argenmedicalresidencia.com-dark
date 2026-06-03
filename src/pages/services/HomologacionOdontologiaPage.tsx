import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Smile, FileSearch, MessageSquare, Users, Award, ArrowRight, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: FileSearch,
    title: 'Revisión personalizada de tu caso',
    description: 'Analizamos tu situación específica para orientarte según tu perfil y objetivos.'
  },
  {
    icon: MessageSquare,
    title: 'Asesoría completa antes de iniciar el trámite',
    description: 'Te explicamos todo lo que necesitas saber antes de comenzar, para que avances con seguridad.'
  },
  {
    icon: Users,
    title: 'Acompañamiento durante todo el proceso',
    description: 'No estarás solo: te guiamos paso a paso hasta finalizar tu trámite.'
  },
  {
    icon: MessageSquare,
    title: 'Comunicación clara y sin tecnicismos',
    description: 'Información sencilla, directa y fácil de entender en todo momento.'
  },
  {
    icon: Award,
    title: 'Experiencia real en procesos de homologación',
    description: 'Contamos con conocimiento práctico y experiencia directa en este tipo de trámites.'
  }
]

const countries = [
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'España', flag: '🇪🇸' },
  { name: 'Colombia', flag: '🇨🇴' }
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

export function HomologacionOdontologiaPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-8">
              <Smile className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Homologación de Título de{' '}
              <span className="text-secondary">Odontología</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Te acompañamos paso a paso para que puedas ejercer tu profesión sin errores, sin confusión y con total claridad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Your Career Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tu carrera merece un proceso bien guiado
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sabemos que detrás de tu título de odontólogo hay años de estudio, esfuerzo y vocación, y que emigrar implica volver a empezar en muchos sentidos.
                </p>
                <p>
                  La homologación no debería ser un proceso confuso ni solitario. Por eso te acompañamos con información clara, orientación honesta y un enfoque humano, para que puedas avanzar con seguridad, evitando errores que retrasen tu objetivo de volver a ejercer.
                </p>
                <p className="text-foreground font-medium">
                  Nuestro propósito es que recuperes tu práctica profesional con tranquilidad, confianza y un camino bien definido desde el inicio.
                </p>
              </div>
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
                Qué incluye el servicio
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Te ofrecemos un acompañamiento integral y personalizado, desde la revisión detallada de tu caso hasta la finalización del trámite.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-6 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tu título puede abrirte puertas más allá de tu país de origen
              </h2>
              <p className="text-muted-foreground mb-6">
                La homologación es el primer paso para ejercer legalmente y avanzar profesionalmente en un nuevo destino. Te acompañamos en todo el proceso de homologación guiándote paso a paso para que tomes decisiones informadas, seguras y sin improvisaciones.
              </p>
              <p className="text-muted-foreground mb-8">
                Cada país tiene requisitos, tiempos y normativas diferentes, por eso analizamos tu caso de manera personalizada y diseñamos una ruta clara para ti.
              </p>

              <div className="flex flex-wrap gap-4">
                {countries.map((country) => (
                  <div key={country.name} className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-foreground font-medium">{country.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass rounded-2xl p-8 text-center">
                <Globe className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Da el primer paso hacia tu futuro profesional
                </h3>
                <p className="text-muted-foreground mb-6">
                  Si estás listo para expandir tu carrera, crecer profesionalmente y ejercer en un nuevo país, este es el momento de comenzar.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-110 transition-all"
                >
                  Homologa tu Título
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Homologar tu título en otro país es una oportunidad
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Para crecer a nivel profesional, personal y familiar
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-110 transition-all"
            >
              Contactar Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
