import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Star, Quote, Play, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    name: 'Ismael Malaver',
    role: 'Médico UCC Santa Marta COL',
    rating: 4.5,
    content: 'Estoy agradecido con el equipo de Argén Medical porque gracias a ellos hoy en día he podido hacer mi sueño realidad de cursar una residencia médica y en el área que me gusta. Definitivamente es la mejor agencia que los médicos pueden elegir.',
    avatar: 'IM'
  },
  {
    name: 'Duberlys Zuleta',
    role: 'Médico Romulo Gallego VEN',
    rating: 4.5,
    content: 'Debido a la falta de oportunidad que existe en Venezuela yo tomé la decisión de emigrar a Argentina y es la mejor opción que he tomado en mi vida porque aquí se me ha dado la oportunidad de cumplir mis sueños de hacer una residencia médica.',
    avatar: 'DZ'
  },
  {
    name: 'Emily Velandia',
    role: 'Médico Univ. Libre COL',
    rating: 5,
    content: 'Lo más importante es tener decisión y yo escogí Argentina para especializarme porque es un país donde te van a abrir las puertas y te van a brindar opciones para que seas especialista ya que en Colombia esa posibilidad no existe por la falta de oportunidad.',
    avatar: 'EV'
  },
  {
    name: 'Carolina Viver',
    role: 'Doctora',
    rating: 5,
    content: 'Realicé el trámite de homologación profesional con Argén Medical. El proceso migratorio fue claro y el acompañamiento excelente. Hoy puedo decir que tomar la decisión de especializarme fue la mejor elección de mi vida.',
    avatar: 'CV'
  },
  {
    name: 'Eliana Valderrama',
    role: 'Médica Colombiana - Univ. Libre de Barranquilla',
    rating: 5,
    content: 'Como médica colombiana valoro mucho recibir una asesoría clara y humana en cada etapa del proceso. Me sentí acompañada, orientada y con la tranquilidad de estar tomando decisiones correctas.',
    avatar: 'EV'
  }
]

const videoTestimonials = [
  { id: 1, title: 'Testimonio de médico colombiano', thumbnail: '/video-thumb-1.jpg' },
  { id: 2, title: 'Experiencia de homologación', thumbnail: '/video-thumb-2.jpg' },
  { id: 3, title: 'Mi vida en Argentina', thumbnail: '/video-thumb-3.jpg' },
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`}
        />
      ))}
    </div>
  )
}

export function TestimoniosPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Testimonios de Nuestros{' '}
              <span className="text-secondary">Clientes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestros asesorados han tenido la oportunidad de contar sus vivencias, destacando los resultados positivos obtenidos y el impacto que ha tenido nuestra colaboración en su desarrollo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Historias reales de profesionales que confiaron en nuestro acompañamiento
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-4 left-4 w-16 h-16 text-secondary/20" />
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4"
                      >
                        <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                      </motion.button>
                      <p className="text-muted-foreground">Ver testimonio en video</p>
                    </div>
                  </div>
                </div>
                <div>
                  <StarRating rating={5} />
                  <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                    La Doctora realizó el trámite de homologación profesional con Argén Medical, y en esta entrevista nos cuenta cómo fue el proceso migratorio, cómo es vivir en Argentina y por qué tomó la decisión de especializarse.
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground text-lg">Carolina Viver</p>
                    <p className="text-secondary">Doctora</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-6 h-full flex flex-col"
                >
                  <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                  <p className="text-muted-foreground flex-grow leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="mt-6 pt-6 border-t border-muted/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-semibold">{testimonial.avatar}</span>
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Síguenos en Instagram
              </h2>
              <p className="text-muted-foreground">
                Más testimonios y contenido en @argenmedical
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.a
                key={item}
                href="https://instagram.com/argenmedical"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl bg-muted/50 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors flex items-center justify-center">
                  <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.a
              href="https://instagram.com/argenmedical"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Ver más en Instagram
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tu historia también puede ser un éxito
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a los más de 300 profesionales que ya confiaron en nosotros
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
