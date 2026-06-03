import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Plane, FileCheck, Building, CreditCard, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const visaTypes = [
  {
    icon: Plane,
    title: 'Visa de Estudio',
    description: 'Una visa de estudiante es un permiso que permite a un extranjero vivir en un país para estudiar y en algunos casos te permitirá trabajar para que puedas generar una remuneración económica y así solventar los gastos de permanencia.'
  },
  {
    icon: Building,
    title: 'Visa de Trabajo',
    description: 'Las visas de trabajo pueden ser temporales, estacionales o de intercambio de inmigrante, por lo que los requisitos y el proceso para obtenerlas varían según el tipo de visa y el país donde se solicita.'
  },
  {
    icon: FileCheck,
    title: 'Residencia Temporaria y Permanente',
    description: 'La otorgación de una residencia ya sea temporaria o permanente es la admisión de permanecer en el país que la otorga por un tiempo determinado y de esta manera gozar de los beneficios como trabajar, estudiar, atención médica, etc.'
  }
]

const benefits = [
  'Analizamos tu perfil profesional y objetivo',
  'Indicamos qué visado corresponde a tu caso',
  'Te explicamos cómo tramitarlo correctamente',
  'Evitamos errores que retrasen tu proyecto',
  'Información real y actualizada de cada país'
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

export function VisadoResidenciaPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Visado y Residencia{' '}
              <span className="text-secondary">Migratoria</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Te acompañamos paso a paso para que puedas ejercer tu profesión sin errores, sin confusión y con total claridad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Elegir el visado correcto es uno de los pasos más importantes y más confusos del proceso migratorio
                  </h2>
                  <p className="text-lg text-secondary font-medium">Lo sabemos porque nosotros también estuvimos en tu lugar</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  El tipo de visado o residencia que necesitas para realizar tu especialidad médica u odontológica depende del país al que deseas emigrar, ya que cada uno tiene leyes migratorias, requisitos y tiempos distintos.
                </p>
                <p className="text-foreground font-medium">
                  Un error en esta etapa puede retrasar meses tu proyecto o incluso obligarte a empezar de nuevo.
                </p>
                <p>
                  En ARGEN MEDICAL te acompañamos desde el inicio para que tomes decisiones claras y seguras, sin improvisaciones.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sabemos lo que se siente no entender el proceso
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Por eso te explicamos cada paso con claridad, con información real y actualizada
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <AnimatedSection key={visa.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-8 h-full"
                >
                  <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                    <visa.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{visa.title}</h3>
                  <p className="text-muted-foreground">{visa.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                En ARGEN MEDICAL te acompañamos desde el inicio
              </h2>
              <p className="text-muted-foreground mb-8">
                Analizamos tu perfil profesional, tu país de destino y tu objetivo (estudiar, rendir exámenes o ejercer) para indicarte qué visado corresponde y cómo tramitarlo correctamente.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <motion.li
                    key={benefit}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass rounded-2xl p-8 text-center">
                <Plane className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Conoce tu opción de visado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Te ayudamos a identificar el visado correcto para tu situación específica
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-110 transition-all"
                >
                  Solicitar Asesoría
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
              Para que puedas ejercer y formarte de manera legal
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Es fundamental contar con el visado y la residencia migratoria adecuados
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
