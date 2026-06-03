import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: 'Jean Jaures 863',
    subcontent: 'Ciudad Autónoma de Buenos Aires, Argentina'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+54 11 3792 9908',
    href: 'tel:+541137929908'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'argenmedical.residencia@gmail.com',
    href: 'mailto:argenmedical.residencia@gmail.com'
  }
]

const stats = [
  { value: '80%', label: 'Procesos estructurados y acompañados de principio a fin' },
  { value: '70%', label: 'Orientación en requisitos, tiempos y documentación' },
  { value: '75%', label: 'Asesoría clara para avanzar sin errores migratorios' },
  { value: '70%', label: 'Seguimiento continuo y revisión de tu caso en cada etapa' }
]

const faqs = [
  {
    question: '¿Puedo iniciar mi proceso de homologación si aún no me he graduado?',
    answer: 'Depende del país y del tipo de trámite. En muchos casos puedes adelantar documentación, pero el título final será obligatorio para completar el proceso.'
  },
  {
    question: '¿Ustedes garantizan la aprobación de la homologación?',
    answer: 'Ninguna empresa puede garantizar un resultado final, ya que depende de las autoridades del país. Lo que sí garantizamos es una preparación correcta, revisión experta y acompañamiento durante todo el trámite.'
  },
  {
    question: '¿Me ayudan a inscribirme al MIR o a exámenes de residencia?',
    answer: 'Sí. Te guiamos en requisitos, documentación, fechas y proceso de inscripción para que no pierdas convocatorias importantes.'
  },
  {
    question: '¿Cuánto tiempo tarda una homologación médica?',
    answer: 'Los tiempos varían según el país y la entidad evaluadora. Puede tomar desde varios meses hasta más de un año. Nosotros te orientamos para evitar retrasos por errores en documentos.'
  },
  {
    question: '¿También ayudan con visa y residencia?',
    answer: 'Sí. Asesoramos en procesos migratorios relacionados con tu objetivo profesional, incluyendo visados y permisos de residencia.'
  },
  {
    question: '¿Cómo sé si mi título es homologable?',
    answer: 'Realizamos una revisión personalizada de tu caso académico para indicarte viabilidad, pasos a seguir y posibles escenarios.'
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

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      className="glass rounded-xl overflow-hidden"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-muted-foreground">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
              Impulsa tu carrera médica{' '}
              <span className="text-secondary">en el extranjero</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Te acompañamos en tu homologación de medicina u odontología, procesos de visa y residencia migratoria, e inscripción a exámenes como MIR y residencias médicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Resultados que respaldan nuestro acompañamiento
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada proceso es único, pero nuestra experiencia en homologaciones médicas, trámites migratorios e inscripción a exámenes internacionales nos permite guiar a profesionales de la salud con seguridad, orden y claridad.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contáctanos</h2>
                <p className="text-muted-foreground mb-8">
                  No somos solo una empresa de trámites. Somos profesionales que ya pasamos por este proceso y hoy te guiamos para que no cometas los errores que nosotros ya conocemos.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.title}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.title}</p>
                        {info.href ? (
                          <a href={info.href} className="text-muted-foreground hover:text-secondary transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <>
                            <p className="text-muted-foreground">{info.content}</p>
                            {info.subcontent && (
                              <p className="text-sm text-muted-foreground">{info.subcontent}</p>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://instagram.com/argenmedical"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://tiktok.com/@argenmedical"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Envíanos un mensaje</h3>
                <p className="text-muted-foreground mb-6">
                  Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">Mensaje enviado</h4>
                    <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nombre *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/50 border border-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/50 border border-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Asunto *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/50 border border-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Asunto del mensaje"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Mensaje *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/50 border border-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                        placeholder="Cuéntanos sobre tu caso..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensaje
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-muted-foreground">
                Resolvemos las dudas más comunes sobre homologación médica, trámites migratorios e inscripción a exámenes internacionales.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prefiere hablar directamente?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contáctanos por WhatsApp para una respuesta más rápida
            </p>
            <motion.a
              href="https://wa.me/5491137929908"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Chatear por WhatsApp
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
