import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-background" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(oklch(0.5 0.02 250) 1px, transparent 1px),
                          linear-gradient(90deg, oklch(0.5 0.02 250) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground">Homologaciones y Servicios Complementarios</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">{"¡No estás solo!"}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed"
            >
              Dar el paso de ejercer tu profesión en otro país puede generar
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-foreground font-semibold mb-8"
            >
              Dudas, miedos e incertidumbre
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass p-6 rounded-2xl mb-8"
            >
              <p className="text-lg text-foreground leading-relaxed">
                En <span className="text-secondary font-semibold">Argen Medical</span>, estamos contigo desde el primer momento. La homologación de tu título es el requisito clave para continuar tu formación profesional.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contacto"
                className="group px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full flex items-center justify-center gap-2 hover:brightness-110 transition-all glow-amber"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comenzar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#nosotros"
                className="group px-8 py-4 border border-border text-foreground font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-muted/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Conoce más
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="glass rounded-3xl p-8 pb-0 relative overflow-hidden">
                {/* Decorative gradient */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative hidden lg:block"
                >
                  <div className="absolute inset-0 bg-gradient-gold rounded-full blur-3xl opacity-30 animate-glow-pulse" />
                  <img
                    src="/foto-hero-inicio.png"
                    alt="Profesional médico"
                    className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl -mb-4"
                  />
                </motion.div>

                
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
                
                
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -left-4 glass px-4 py-2 rounded-full"
            >
              <span className="text-sm font-medium text-secondary">🎓 Argentina</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full"
            >
              <span className="text-sm font-medium text-secondary">🌎 España</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 10] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-secondary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
