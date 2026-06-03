import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-background" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 lg:p-16 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-6"
              >
                Contáctanos
              </motion.span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Todo gran cambio empieza con una
                <span className="text-gradient"> conversación</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Hablemos de tu proceso. Sabemos que este paso genera muchas dudas. Te escuchamos, evaluamos tu caso y te orientamos para que tomes decisiones con seguridad.
              </p>

              {/* Contact Options */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href="mailto:contacto@argenmedical.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <span>contacto@argenmedical.com</span>
                </motion.a>

                <motion.a
                  href="tel:+5491137929908"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <span>+54 123 456 7890</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/5491137929908"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span>WhatsApp directo</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Solicita tu asesoría gratuita
              </h3>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      placeholder="Tu apellido"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    País de origen
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all">
                    <option value="">Selecciona tu país</option>
                    <option value="CO">Colombia</option>
                    <option value="VE">Venezuela</option>
                    <option value="EC">Ecuador</option>
                    <option value="PE">Perú</option>
                    <option value="MX">México</option>
                    <option value="BO">Bolivia</option>
                    <option value="OTHER">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all glow-amber"
                >
                  Enviar mensaje
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
