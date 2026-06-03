import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BookOpen, FileCheck, Calendar, Users, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const eligibility = [
  'Médicos graduados en universidades españolas',
  'Médicos formados en el extranjero con título homologado o reconocido en España',
  'Profesionales que cumplan con los requisitos establecidos por el Ministerio de Sanidad'
]

const steps = [
  { step: 1, title: 'Publicación de convocatoria', description: 'El Ministerio de Sanidad establece cada año los plazos y requisitos' },
  { step: 2, title: 'Inscripción electrónica', description: 'Se realiza a través de la sede digital oficial del Ministerio de Sanidad' },
  { step: 3, title: 'Carga de documentación', description: 'Incluye datos personales, académicos y comprobantes de título médico' },
  { step: 4, title: 'Pago de tasas', description: 'Es obligatorio abonar el arancel administrativo correspondiente' },
  { step: 5, title: 'Validación de requisitos', description: 'La autoridad competente verifica que el aspirante cumpla las condiciones' },
  { step: 6, title: 'Realización del examen', description: 'Se rinde en fecha única a nivel nacional en distintas sedes de España' },
  { step: 7, title: 'Adjudicación de plazas', description: 'Según el puntaje obtenido, el aspirante elige especialidad y hospital' }
]

const services = [
  'Análisis personalizado de tu situación académica y profesional',
  'Orientación sobre homologación o reconocimiento de título (si aplica)',
  'Revisión detallada de tu documentación antes de enviarla',
  'Asesoría paso a paso para completar la inscripción oficial',
  'Seguimiento de plazos y recordatorios de fechas clave',
  'Resolución de dudas administrativas durante todo el proceso'
]

const timeline = [
  { period: 'Septiembre - Octubre', event: 'Apertura de inscripción' },
  { period: 'Noviembre - Diciembre', event: 'Cierre y revisión de documentación' },
  { period: 'Enero - Febrero', event: 'Realización del examen MIR' },
  { period: 'Febrero - Marzo', event: 'Publicación de resultados y adjudicación de plazas' }
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

export function ExamenMIRPage() {
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
              <BookOpen className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Examen{' '}
              <span className="text-secondary">MIR</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              El examen MIR (Médico Interno Residente) es el mecanismo oficial de acceso a la formación médica especializada en España
            </p>
          </motion.div>
        </div>
      </section>

      {/* About MIR */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12">
              <p className="text-muted-foreground mb-6">
                A través de esta prueba nacional, los médicos compiten por plazas de residencia en hospitales acreditados del Sistema Nacional de Salud.
              </p>
              <p className="text-foreground font-medium">
                El MIR es un proceso altamente competitivo que combina exigencia académica con trámites administrativos rigurosos. Por esta razón, contar con acompañamiento profesional resulta clave para evitar errores formales que puedan impedir tu postulación.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quiénes pueden presentarse al MIR
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {eligibility.map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 glass rounded-xl p-6"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Para médicos formados fuera de España, el requisito central suele ser la homologación del título médico.
              </p>
              <p className="text-secondary font-medium mt-2">
                Nuestro equipo analiza tu situación académica y te orienta sobre los pasos necesarios.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proceso de inscripción al MIR
              </h2>
              <p className="text-muted-foreground">Paso a paso</p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block" />
              
              {steps.map((item, index) => (
                <AnimatedSection key={index}>
                  <div className="flex gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-secondary font-bold text-xl">{item.step}</span>
                    </div>
                    <div className="glass rounded-xl p-6 flex-grow">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qué incluye nuestro servicio de inscripción al MIR
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

          <AnimatedSection>
            <div className="mt-12 text-center">
              <p className="text-lg text-secondary font-medium">
                Nuestro objetivo es que transites este camino con tranquilidad, claridad y organización.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cronograma orientativo del MIR
              </h2>
              <p className="text-muted-foreground">Aunque las fechas cambian cada año, el esquema habitual es:</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {timeline.map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 flex items-center gap-4"
                >
                  <Clock className="w-8 h-8 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary">{item.period}</p>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-center text-muted-foreground mt-8">
              Te mantenemos informado para que no pierdas ninguna instancia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prepárate para el MIR con acompañamiento profesional
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              No dejes que los trámites administrativos sean un obstáculo
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
