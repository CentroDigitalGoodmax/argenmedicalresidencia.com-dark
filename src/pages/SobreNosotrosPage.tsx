import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const values = [
  {
    icon: Heart,
    title: 'Acompañamiento Real',
    description: 'No somos una simple agencia de trámites. Somos profesionales que ya pasamos por este proceso.'
  },
  {
    icon: Users,
    title: 'Experiencia Comprobada',
    description: 'Más de 4 años de experiencia y más de 300 historias de éxito nos respaldan.'
  },
  {
    icon: Award,
    title: 'Claridad y Honestidad',
    description: 'Te explicamos cada paso con información real y actualizada, sin falsas promesas.'
  },
  {
    icon: Target,
    title: 'Enfoque Personalizado',
    description: 'Cada caso es único. Analizamos tu situación específica para darte la mejor orientación.'
  }
]

const milestones = [
  { year: '2021', title: 'Inicio del Viaje', description: 'Ricardo y su esposa emigran a Argentina con el sueño de crecer profesionalmente.' },
  { year: '2022', title: 'Nace Argen Medical', description: 'De la experiencia personal surge la misión de ayudar a otros profesionales.' },
  { year: '2023', title: '100+ Casos de Éxito', description: 'Alcanzamos nuestros primeros 100 profesionales acompañados exitosamente.' },
  { year: '2024', title: 'Expansión Regional', description: 'Ampliamos servicios a España y Colombia, consolidando nuestra presencia.' },
  { year: '2025', title: '300+ Historias', description: 'Más de 300 médicos y odontólogos han confiado en nuestro acompañamiento.' },
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

export function SobreNosotrosPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ya estuve donde{' '}
                <span className="text-secondary">tú estás.</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground">
                Hoy te acompaño a hacerlo bien
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-110 transition-all"
                >
                  Quiero Mi Asesoría
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hf3MecZXl3wgjnkdLcjnWdqSNzHyp0.png"
                  alt="Ricardo José Dávila López - Fundador de Argen Medical"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hay decisiones que no solo cambian un país.{' '}
                <span className="text-secondary">Cambian una vida.</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-secondary mb-6">Nuestra Historia</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  En 2021, Ricardo José Dávila López, abogado egresado de la Universidad Sergio Arboleda de Santa Marta, vivió una de esas decisiones. Junto a su esposa, médica especialista, dejó su país con una ilusión muy clara: crecer, formarse y ejercer su vocación en Argentina.
                </p>
                <p>
                  Como muchos profesionales de la salud, llegaron con sueños, esfuerzo y preparación. Pero también con preguntas, miedos y una realidad que nadie les había explicado.
                </p>
                <div className="bg-primary/50 rounded-xl p-6 border-l-4 border-secondary">
                  <p className="italic">
                    El proceso fue confuso. La información era contradictoria. Los trámites parecían interminables. Y cada error costaba tiempo, dinero y tranquilidad.
                  </p>
                </div>
                <p>
                  Fue en medio de esa experiencia agotadora, real y profundamente humana cuando entendieron algo esencial: <strong className="text-foreground">el problema no es la falta de talento, es la falta de acompañamiento.</strong>
                </p>
                <p>
                  Acompañamiento real. Claro. Honesto. De principio a fin.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Birth of Argen Medical */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  De ahí nace{' '}
                  <span className="text-secondary">Argén Medical</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    No como una simple agencia de trámites, sino como un <strong className="text-foreground">aliado</strong> para que ningún médico o profesional de la salud tenga que enfrentar solo un proceso que ya de por sí es desafiante.
                  </p>
                  <p>
                    Hoy, después de más de <strong className="text-secondary">4 años de experiencia</strong> y más de <strong className="text-secondary">300 historias de éxito</strong>, Argén Medical acompaña a médicos y odontólogos de Colombia, Venezuela, Ecuador y Bolivia en su camino hacia el ejercicio profesional en Argentina, España y Colombia.
                  </p>
                  <div className="pt-4">
                    <p className="text-foreground font-medium">
                      Porque cuando alguien te guía, te explica y camina contigo, todo cambia.
                    </p>
                    <ul className="mt-4 space-y-2">
                      {['Las dudas se ordenan.', 'La ansiedad disminuye.', 'Y el sueño vuelve a sentirse posible.'].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-secondary">4+</div>
                  <div className="text-sm text-muted-foreground mt-2">Años de Experiencia</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-secondary">300+</div>
                  <div className="text-sm text-muted-foreground mt-2">Historias de Éxito</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-secondary">5</div>
                  <div className="text-sm text-muted-foreground mt-2">Países de Origen</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-secondary">3</div>
                  <div className="text-sm text-muted-foreground mt-2">Países de Destino</div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestros Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                En Argén Medical creemos que emigrar y homologar un título no debería ser una experiencia solitaria.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestro Recorrido
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary/30" />
            
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year}>
                <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-xl p-6"
                    >
                      <span className="text-secondary font-bold text-xl">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Todo gran cambio empieza con una conversación
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Hablemos de tu proceso
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
