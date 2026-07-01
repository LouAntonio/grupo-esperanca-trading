import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import PulvietoPage from './pages/PulvietoPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import GalleryPage from './pages/GalleryPage'
import StorePage from './pages/StorePage'
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
      <Route path="/formacoes" element={<Layout><CoursesPage /></Layout>} />
      <Route path="/formacoes/:slug" element={<Layout><CourseDetailPage /></Layout>} />
      <Route path="/pulvieto" element={<Layout><PulvietoPage /></Layout>} />
      <Route path="/pulvieto/:slug" element={<Layout><ServiceDetailPage /></Layout>} />
      <Route path="/galeria" element={<Layout><GalleryPage /></Layout>} />
      <Route path="/loja" element={<Layout><StorePage /></Layout>} />
      <Route path="/contacto" element={<Layout><ContactPage /></Layout>} />
    </Routes>
  )
}
