import { motion } from 'framer-motion'
import { GraduationCap, Banknote, Heart } from 'lucide-react'

const benefits = [
  {
    icon: GraduationCap,
    title: 'Haz crecer tu vocación médica',
    description: 'Homologar tu título médico te abre la puerta a un crecimiento profesional real, con oportunidades concretas de acceder a una plaza de especialidad que ya te está esperando.',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Banknote,
    title: 'Trabaja en condiciones que realmente importan',
    description: 'Durante la residencia médica contarás con una remuneración que te permitirá cubrir tus gastos esenciales, como vivienda, alimentación, transporte y servicios básicos.',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: Heart,
    title: 'Calidad de vida mientras sigues creciendo',
    description: 'Crecer en tu profesión también es vivir mejor. La especialización te acerca a una vida con más equilibrio, tiempo y bienestar para ti y los tuyos.',
    color: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 -right-20 w-80 h-80 border border-border/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 -left-20 w-60 h-60 border border-border/20 rounded-full"
      />

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
            ¿Por qué elegirnos?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitas para ejercer
            <br />
            <span className="text-gradient">y especializarte en otro país</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Con acompañamiento real en cada paso del camino
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full border border-border/50 hover:border-secondary/50 transition-colors">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-b-3xl"
                />
              </div>

              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-secondary text-secondary-foreground font-bold rounded-full flex items-center justify-center text-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
