import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import NextPage from './components/NextPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Komunitas from './pages/Komunitas.jsx'
import Contact from './pages/Contact.jsx'

const TITLES = {
  '/': 'Algi Zaif — Portfolio',
  '/about': 'About — Algi Zaif',
  '/portfolio': 'Portfolio — Algi Zaif',
  '/komunitas': 'Komunitas — Algi Zaif',
  '/contact': 'Contact — Algi Zaif',
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[pathname] || 'Algi Zaif — Portfolio'
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <NextPage />
      <Footer />
    </>
  )
}