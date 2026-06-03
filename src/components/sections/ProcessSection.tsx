import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Search, Send, CheckCircle, MessageCircle, Award } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Asesoría inicial',
    description: 'Evaluamos tu caso, escuchamos tus dudas y te orientamos sobre las mejores opciones para tu situación.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Análisis de requisitos',
    description: 'Identificamos los documentos necesarios y te guiamos en la preparación de tu expediente.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Gestión documental',
    description: 'Nos encargamos de la traducción, legalización y apostilla de todos tus documentos.',
  },
  {
    icon: Send,
    number: '04',
    title: 'Presentación oficial',
    description: 'Realizamos la presentación formal ante las autoridades competentes del país destino.',
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Seguimiento continuo',
    description: 'Monitoreamos tu proceso y te mantenemos informado de cada avance hasta la resolución.',
  },
  {
    icon: Award,
    number: '06',
    title: 'Homologación exitosa',
    description: '¡Celebramos contigo! Tu título homologado te abre las puertas a nuevas oportunidades.',
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="proceso" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4"
          >
            Nuestro Proceso
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Cómo trabajamos
            <br />
            <span className="text-gradient">contigo paso a paso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro y transparente para lograr tu homologación
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-secondary to-secondary/50"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-6 border border-border/50 hover:border-secondary/50 transition-colors"
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0"
                        >
                          <step.icon className="w-7 h-7 text-secondary" />
                        </motion.div>
                        <div>
                          <span className="text-secondary font-bold text-sm">Paso {step.number}</span>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="hidden lg:flex w-2/12 justify-center"
                  >
                    <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg border-4 border-background z-10">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Empty space for layout */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
