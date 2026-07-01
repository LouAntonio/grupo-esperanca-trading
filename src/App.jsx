import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BrandsPage from './pages/BrandsPage'
import GalleryPage from './pages/GalleryPage'
import StorePage from './pages/StorePage'
import TotoDrinkPage from './pages/TotoDrinkPage'
import TotoFoodPage from './pages/TotoFoodPage'
import FrangoPremiumPage from './pages/FrangoPremiumPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/sobre" element={<Layout><AboutPage /></Layout>} />
      <Route path="/marcas" element={<Layout><BrandsPage /></Layout>} />
      <Route path="/galeria" element={<Layout><GalleryPage /></Layout>} />
      <Route path="/catalogo" element={<Layout><StorePage /></Layout>} />
      <Route path="/marca/toto-drink" element={<Layout><TotoDrinkPage /></Layout>} />
      <Route path="/marca/toto-food" element={<Layout><TotoFoodPage /></Layout>} />
      <Route path="/marca/frango-premium" element={<Layout><FrangoPremiumPage /></Layout>} />
      <Route path="/contacto" element={<Layout><ContactPage /></Layout>} />
    </Routes>
  )
}
