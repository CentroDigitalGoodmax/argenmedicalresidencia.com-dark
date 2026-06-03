import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { GraduationCap, FileCheck, Calendar, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  'Análisis personalizado de tu situación académica y profesional',
  'Orientación sobre homologación o reconocimiento de título',
  'Revisión detallada de tu documentación antes de enviarla',
  'Asesoría paso a paso para completar la inscripción oficial',
  'Seguimiento de plazos y recordatorios de fechas clave',
  'Resolución de dudas administrativas durante todo el proceso'
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

export function ExamenResidenciaPage() {
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
              <GraduationCap className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Inscripción al Examen de{' '}
              <span className="text-secondary">Residencia</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Te guiamos en requisitos, documentación, fechas y proceso de inscripción para que no pierdas convocatorias importantes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                El acceso a las residencias médicas en Argentina
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Se realiza a través de procesos de selección regulados por las autoridades sanitarias nacionales y provinciales. Para 2026, la evaluación y adjudicación de plazas se realizará a través de exámenes provinciales.
                </p>
                <p className="text-foreground font-medium">
                  Nuestro objetivo es acompañarte en este proceso para que puedas postularte de manera ordenada, segura y sin errores administrativos que puedan poner en riesgo tu inscripción.
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
                Qué incluye nuestro servicio
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 glass rounded-xl p-6"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{service}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              No pierdas tu oportunidad de inscribirte
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Te acompañamos para que transites este camino con tranquilidad, claridad y organización
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
