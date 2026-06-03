import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Instagram } from 'lucide-react'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { 
    name: 'Servicios', 
    href: '/servicios',
    children: [
      { name: 'Visado y Residencia Migratoria', href: '/servicios/visado-residencia' },
      { name: 'Homologación de Medicina', href: '/servicios/homologacion-medicina' },
      { name: 'Homologación de Odontología', href: '/servicios/homologacion-odontologia' },
      { name: 'Inscripción Examen de Residencia', href: '/servicios/examen-residencia' },
      { name: 'Inscripción Examen MIR', href: '/servicios/examen-mir' },
    ]
  },
  { 
    name: '¿Países donde Homologar?', 
    href: '/paises',
    children: [
      { name: 'Argentina', href: '/paises/argentina' },
      { name: 'España', href: '/paises/espana' },
      { name: 'Colombia', href: '/paises/colombia' },
    ]
  },
  { name: 'Testimonios', href: '/testimonios' },
  { name: 'Contacto', href: '/contacto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMobileDropdown(null)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass py-3' 
          : 'bg-background/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-sm border-2 border-background" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-foreground tracking-tight">ARGEN</span>
                <span className="text-xl font-bold text-secondary tracking-tight"> MEDICAL</span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 group ${
                    location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                      ? 'text-secondary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <motion.span whileHover={{ y: -2 }}>
                    {item.name}
                  </motion.span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 glass rounded-xl p-2 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <motion.a
              href="https://instagram.com/argenmedical"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://argenmedical.loyverse.store"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-110 transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Sesion
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden glass mt-4 mx-4 rounded-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-4 space-y-1">
              {navItems.map((item, i) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {mobileDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.a
                href="https://argenmedical.loyverse.store"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="block px-4 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg text-center mt-4"
              >
                Iniciar Sesion
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
