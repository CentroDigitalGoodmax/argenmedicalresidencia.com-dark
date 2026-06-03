import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { HomePage } from './pages/HomePage'
import { SobreNosotrosPage } from './pages/SobreNosotrosPage'
import { TestimoniosPage } from './pages/TestimoniosPage'
import { ContactoPage } from './pages/ContactoPage'
import { VisadoResidenciaPage } from './pages/services/VisadoResidenciaPage'
import { HomologacionMedicinaPage } from './pages/services/HomologacionMedicinaPage'
import { HomologacionOdontologiaPage } from './pages/services/HomologacionOdontologiaPage'
import { ExamenResidenciaPage } from './pages/services/ExamenResidenciaPage'
import { ExamenMIRPage } from './pages/services/ExamenMIRPage'
import { ArgentinaPage } from './pages/countries/ArgentinaPage'
import { EspanaPage } from './pages/countries/EspanaPage'
import { ColombiaPage } from './pages/countries/ColombiaPage'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/testimonios" element={<TestimoniosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        
        {/* Services */}
        <Route path="/servicios/visado-residencia" element={<VisadoResidenciaPage />} />
        <Route path="/servicios/homologacion-medicina" element={<HomologacionMedicinaPage />} />
        <Route path="/servicios/homologacion-odontologia" element={<HomologacionOdontologiaPage />} />
        <Route path="/servicios/examen-residencia" element={<ExamenResidenciaPage />} />
        <Route path="/servicios/examen-mir" element={<ExamenMIRPage />} />
        
        {/* Countries */}
        <Route path="/paises/argentina" element={<ArgentinaPage />} />
        <Route path="/paises/espana" element={<EspanaPage />} />
        <Route path="/paises/colombia" element={<ColombiaPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
