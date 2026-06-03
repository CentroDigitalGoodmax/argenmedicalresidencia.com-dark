import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Stethoscope, FileSearch, MessageSquare, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'
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

export function HomologacionMedicinaPage() {
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
              <Stethoscope className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Homologación de Título de{' '}
              <span className="text-secondary">Medicina</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              El acceso a las residencias médicas en Argentina se realiza a través de procesos de selección regulados por las autoridades sanitarias nacionales y provinciales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 border-l-4 border-secondary">
              <p className="text-muted-foreground leading-relaxed">
                Históricamente, este ingreso se centralizaba mediante el Examen Único Nacional, sin embargo, para este 2026 esta modalidad cambiará toda vez que la evaluación y adjudicación de plazas se realizará a través de exámenes provinciales.
              </p>
              <p className="text-foreground font-semibold mt-4">
                Nuestro objetivo es acompañarte en este proceso para que puedas postularte de manera ordenada, segura y sin errores administrativos que puedan poner en riesgo tu inscripción.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Evita Errores */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Evita errores, avanza con respaldo profesional
              </h2>
              <p className="text-muted-foreground mb-6">
                Detrás de cada título hay años de esfuerzo, sacrificio y vocación. Nuestro objetivo es que todo ese camino no se pierda por desinformación o errores evitables.
              </p>
              <p className="text-foreground font-medium">
                Te acompañamos con claridad y criterio profesional para que avances con seguridad desde el primer paso.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-secondary">300+</div>
                  <div className="text-sm text-muted-foreground mt-2">Médicos acompañados</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-secondary">4+</div>
                  <div className="text-sm text-muted-foreground mt-2">Años de experiencia</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-secondary">3</div>
                  <div className="text-sm text-muted-foreground mt-2">Países de destino</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground mt-2">Compromiso</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
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

      {/* Message */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Homologar medicina no solo es un trámite
              </h2>
              <p className="text-muted-foreground mb-6">
                Es normal sentirse perdido. Cada país tiene requisitos distintos, plazos poco claros y documentos que, si se presentan mal, pueden retrasar todo el proceso.
              </p>
              <p className="text-lg text-secondary font-medium mb-8">
                En Argen Medical ya pasamos por esto y por eso hoy te guiamos con calma, claridad y honestidad
              </p>
              
              <div className="bg-primary/50 rounded-xl p-6 text-left">
                <p className="text-foreground font-medium">
                  No somos solo una empresa de trámites. Somos profesionales que ya pasamos por este proceso y hoy te guiamos para que no cometas los errores que nosotros ya conocemos.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Inicia tu homologación
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Da el primer paso hacia tu futuro profesional
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
