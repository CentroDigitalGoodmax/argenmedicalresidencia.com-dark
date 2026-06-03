import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ismael Malaver',
    role: 'Médico UCC Santa Marta COL',
    avatar: '/testimonials/FOTO-ISMAEL-150x150.jpg',
    rating: 4.5,
    text: 'Estoy agradecido con el equipo de Argen Medical porque gracias a ellos hoy en día he podido hacer mi sueño realidad de cursar una residencia médica y en el área que me gusta. Definitivamente es la mejor agencia que los médicos pueden elegir.',
    country: 'Colombia',
  },
  {
    name: 'Duberlys Zuleta',
    role: 'Médico Romulo Gallego VEN',
    avatar: '/testimonials/FOTO-DUBERLYS-298x300.jpg',
    rating: 4.5,
    text: 'Debido a la falta de oportunidad que existe en Venezuela yo tomé la decisión de emigrar a Argentina y es la mejor opción que he tomado en mi vida porque aquí se me ha dado la oportunidad de cumplir mis sueños de hacer una residencia médica.',
    country: 'Venezuela',
  },
  {
    name: 'Emily Velandia',
    role: 'Médico Univ. Libre COL',
    avatar: '/testimonials/FOTO-EMILY-150x150.jpg',
    rating: 5,
    text: 'Lo más importante es tener decisión y yo escogí Argentina para especializarme porque es un país donde te van a abrir las puertas y te van a brindar opciones para que seas especialista ya que en Colombia esa posibilidad no existe por la falta de oportunidad.',
    country: 'Colombia',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'text-secondary fill-secondary'
            : i < rating
            ? 'text-secondary fill-secondary/50'
            : 'text-muted-foreground'
        }`}
      />
    ))
  }

  return (
    <section id="testimonios" className="relative py-24 bg-card overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-full h-full border border-border/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-full h-full border border-border/10 rounded-full"
        />
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
            Testimonios
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ellos confiaron en nosotros
          </h2>
          <p className="text-xl text-muted-foreground">
            <span className="text-gradient font-semibold">{"¡Testimonios de nuestros clientes!"}</span>
          </p>
        </motion.div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 h-full border border-border/50 hover:border-secondary/50 transition-all relative">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                  {`"${testimonial.text}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-lg"
                  >
                    {/* Avatar */}
                    <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-lg">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Country badge */}
                <div className="absolute top-6 left-6 px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                  {testimonial.country}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="glass rounded-3xl p-8 border border-border/50"
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20" />

            {/* Country badge */}
            <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-4">
              {testimonials[currentIndex].country}
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            {/* Quote */}
            <p className="text-muted-foreground leading-relaxed mb-8 italic">
              {`"${testimonials[currentIndex].text}"`}
            </p>


            {/* Author */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-lg">
                <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-foreground hover:text-secondary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-secondary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-foreground hover:text-secondary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
