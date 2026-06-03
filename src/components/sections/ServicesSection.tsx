import { motion } from 'framer-motion'
import { Stethoscope, FileCheck, Plane, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Homologación de Título Médico',
    description: 'Sabemos que la homologación puede ser un proceso complejo, lleno de requisitos, tiempos y documentación. Te guiamos en cada paso.',
    features: ['Evaluación de requisitos', 'Gestión de documentos', 'Seguimiento continuo', 'Preparación de exámenes'],
    color: 'secondary',
    href: '#homologacion-medica',
    backgroundImage: '/service/servicio-01.png',
  },
  {
    icon: FileCheck,
    title: 'Homologación de Título Odontología',
    description: 'Homologar tu título en otro país es una oportunidad para crecer a nivel profesional, personal y familiar.',
    features: ['Proceso especializado', 'Apoyo integral', 'Documentación completa', 'Asesoría experta'],
    color: 'blue',
    href: '#homologacion-odontologia',
    backgroundImage: '/service/servicio-02.png',
  },
  {
    icon: Plane,
    title: 'Visado y Residencia Migratoria',
    description: 'Para que puedas ejercer y formarte de manera legal en otro país, es fundamental contar con el visado y la residencia adecuados.',
    features: ['Análisis de caso', 'Tipos de visado', 'Trámites migratorios', 'Acompañamiento legal'],
    color: 'emerald',
    href: '#visado',
    backgroundImage: '/service/servicio-03.png',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function ServicesSection() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary/30 hover:border-secondary',
        glow: 'group-hover:shadow-secondary/20',
      },
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-500/30 hover:border-blue-500',
        glow: 'group-hover:shadow-blue-500/20',
      },
      emerald: {
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        border: 'border-emerald-500/30 hover:border-emerald-500',
        glow: 'group-hover:shadow-emerald-500/20',
      },
    }
    return colors[color] || colors.secondary
  }

  return (
    <section id="servicios" className="relative py-24 bg-card">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, oklch(0.75 0.18 65) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4"
          >
            Nuestros Servicios
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluciones completas para tu
            <br />
            <span className="text-gradient">carrera médica internacional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Servicios diseñados para profesionales de la salud que buscan nuevas oportunidades
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const colors = getColorClasses(service.color)
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* Imagen de fondo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                />
                
                {/* Overlay oscuro para las letras */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm group-hover:bg-black/50 transition-all duration-300" />
                
                {/* Contenido */}
                <div className={`relative glass rounded-3xl p-8 h-full border ${colors.border} transition-all duration-300 group-hover:shadow-2xl ${colors.glow} bg-transparent`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}
                  >
                    <service.icon className={`w-8 h-8 ${colors.text}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:${colors.text} transition-colors`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-200">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')} ${colors.text}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href={service.href}
                    className={`inline-flex items-center gap-2 ${colors.text} font-semibold hover:gap-3 transition-all`}
                    whileHover={{ x: 5 }}
                  >
                    Conocer más
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass inline-block rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              ¿No sabes cuál servicio necesitas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Sabemos que este proceso genera muchas dudas. Te escuchamos, evaluamos tu caso y te orientamos paso a paso.
            </p>
            <motion.a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-110 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar asesoría gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
