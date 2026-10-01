import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NousServices from './components/NousServices'
import ServiceElectrique from './components/serviceElectrique'
import './App.css'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Accueil',
      '/services': 'Nos services',
      '/services/electrique': 'Génie électrique',
    }
    document.title = `${titles[pathname] ?? 'Accueil'} | H&A Ingénieure`
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main id="accueil">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<NousServices />} />
          <Route path="/services/electrique" element={<ServiceElectrique />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App

