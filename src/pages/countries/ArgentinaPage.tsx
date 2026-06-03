import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { MapPin, CheckCircle, ArrowRight, DollarSign, BookOpen, Building, Users, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  'Apostillas y legalizaciones de documentos',
  'Asesoría de requerimiento de permiso de ingreso - Visa Consular',
  'Asesoría general presencial en Buenos Aires para proceso migratorio',
  'Solicitud de cita ante migración en su primer viaje a Buenos Aires',
  'Acompañamiento personal para radicación de DNI ante migración',
  'Gestión de DNI DIGITAL',
  'Gestión de clave AFIP',
  'Inicio de convalidación de título',
  'Retiro y envío de DNI a Colombia o domicilio en Buenos Aires',
  'Gestión de certificado digital de habilitación',
  'Inscripción al examen único (5 cupos)',
  'Representación en inscripción presencial para examen único'
]

const whyArgentina = [
  { icon: DollarSign, text: 'Existe remuneración para los residentes' },
  { icon: BookOpen, text: 'Estudias en español' },
  { icon: Users, text: 'Hay más de 5,000 cupos para aplicar a especialidades' },
  { icon: Building, text: 'Diferentes opciones: Universidades, clínicas, hospitales y exámenes nacionales' },
  { icon: Heart, text: 'Puedes trabajar y estudiar al mismo tiempo' }
]

const benefits = [
  'Accede a instituciones reconocidas internacionalmente con programas de alta calidad',
  'Amplia gama de especialidades médicas y áreas de investigación',
  'Cultura vibrante y relación con profesionales de todo el mundo',
  'Mercado laboral dinámico que demanda profesionales cualificados',
  'Experiencia enriquecedora a nivel personal y profesional'
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

export function ArgentinaPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#75AADB]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FCBF49]/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🇦🇷</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Servicio{' '}
              <span className="text-secondary">Argentina</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Argentina ofrece un sistema educativo reconocido, amplias posibilidades laborales y un entorno cultural enriquecedor para quienes deciden apostar por su futuro aquí.
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
                Realizar la homologación te permite ejercer tu profesión, continuar tu formación y desarrollarte legalmente, con respaldo oficial y proyección a largo plazo.
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
              <p className="text-secondary font-medium">Asesoría Argentina</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 glass rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{service}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Argentina */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por Qué Argentina
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyArgentina.map((item, index) => (
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
                Beneficios de hacer una Residencia en Argentina
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
      <section className="py-20 bg-gradient-to-br from-[#75AADB]/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comienza tu camino hacia Argentina
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
