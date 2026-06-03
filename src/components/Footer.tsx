import { motion } from 'framer-motion'
import { Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  servicios: [
    { name: 'Homologación Médica', href: '/servicios/homologacion-medicina' },
    { name: 'Homologación Odontología', href: '/servicios/homologacion-odontologia' },
    { name: 'Visado y Residencia', href: '/servicios/visado-residencia' },
    { name: 'Examen MIR', href: '/servicios/examen-mir' },
  ],
  paises: [
    { name: 'Argentina', href: '/paises/argentina' },
    { name: 'España', href: '/paises/espana' },
    { name: 'Colombia', href: '/paises/colombia' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Testimonios', href: '/testimonios' },
    { name: 'Contacto', href: '/contacto' },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, oklch(0.75 0.18 65) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <img src="/logo-white.png" alt="Logo" className="w-50 h-auto" />
              { /* <div className="relative">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-2xl">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-sm border-2 border-card" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground tracking-tight">ARGEN</span>
                <span className="text-2xl font-bold text-secondary tracking-tight"> MEDICAL</span>
              </div> */ }
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-6 max-w-md leading-relaxed"
            >
              Acompañamos a profesionales médicos en su proceso de homologación de títulos para ejercer en el extranjero. Tu sueño, nuestro compromiso.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <a href="mailto:argenmedical.residencia@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                <span>argenmedical.residencia@gmail.com</span>
              </a>
              <a href="tel:+541137929908" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+54 11 3792 9908</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Jean Jaures 863, Buenos Aires, Argentina</span>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 3) }}
            >
              <h3 className="text-foreground font-semibold mb-4 capitalize">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Argen Medical. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <motion.a
              href="https://instagram.com/argenmedical"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-muted/80 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://tiktok.com/@argenmedical"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-muted/80 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
