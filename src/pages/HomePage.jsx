import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

const row1 = ['/img/files/slider/1.png', '/img/files/slider/2.png', '/img/files/slider/3.png', '/img/files/slider/4.png']
const row2 = ['/img/files/slider/5.png', '/img/files/slider/6.png', '/img/files/slider/7.png', '/img/files/slider/8.png']

function MarqueeRow({ images, speed = 0.6, dir }) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const posRef = useRef(dir === 'right' ? -1 : 0)
  const rafRef = useRef(null)
  const setWidthRef = useRef(0)
  const [paused, setPaused] = useState(false)
  const readyRef = useRef(false)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track || track.scrollWidth === 0) return
    setWidthRef.current = track.scrollWidth / 3
    readyRef.current = true
  }, [])

  useEffect(() => {
    measure()
    const imgs = trackRef.current?.querySelectorAll('img') || []
    let count = 0
    const check = () => { count++; if (count === imgs.length) measure() }
    imgs.forEach(img => img.complete ? check() : (img.onload = check))
  }, [measure])

  useEffect(() => {
    const step = () => {
      const sw = setWidthRef.current
      if (readyRef.current && sw > 0 && !paused) {
        if (dir === 'left') {
          posRef.current -= speed
          if (posRef.current <= -sw) posRef.current += sw
        } else {
          posRef.current += speed
          if (posRef.current >= 0) posRef.current -= sw
        }
        trackRef.current.style.transform = `translateX(${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused, speed, dir])

  return (
    <div
      ref={containerRef}
      style={{ overflow: 'hidden', padding: '20px 0' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} style={{ display: 'flex', width: 'max-content' }}>
        {[...images, ...images, ...images].map((src, i) => (
          <img key={i} src={src} alt="" style={{ height: 200, display: 'block' }} />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <div className="slider-area slider-margin sliderMargin">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh', backgroundImage: 'url(/img/files/1920-x-1080.pn)' }}>
            <div className="w-100">
              <MarqueeRow images={row1} dir="left" speed={0.6} />
              <MarqueeRow images={row2} dir="right" speed={0.6} />
            </div>
          </div>
        </div>
      </div>

      <div className="home-page">
      <section className="s-stats">
        <div className="s-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-bar" />
              <div className="stat-value">
                <span className="stat-plus">+</span>
                <CountUp end={3} />
              </div>
              <span className="stat-label">Marcas</span>
            </div>
            <div className="stat-item">
              <div className="stat-bar" />
              <div className="stat-value">
                <span className="stat-plus">+</span>
                <CountUp end={100} />
              </div>
              <span className="stat-label">% Orgânico</span>
            </div>
            <div className="stat-item">
              <div className="stat-bar" />
              <div className="stat-value">
                <span className="stat-plus">+</span>
                <CountUp end={0} />
              </div>
              <span className="stat-label">Conservantes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="s-about">
        <div className="s-container">
          <div className="about-grid">
            <div className="about-text-col">
              <span className="s-eyebrow">Sobre Nós</span>
              <h2 className="s-title">Quem Somos</h2>
              <p className="about-body">
                O Grupo Esperança Trading, Lda é uma empresa angolana de transformação alimentar, comprometida com o desenvolvimento industrial e a promoção da saúde através da alimentação. Detentora das marcas Toto Drink e Toto Food, a empresa actua na produção de sumos naturais sem conservantes e alimentos africanos tradicionais, valorizando os produtos da terra e impulsionando o consumo orgânico em Angola e além-fronteiras.
              </p>
              <p className="about-body">
                <strong>Da terra angolana para a sua mesa</strong> — Cada produto nasce do compromisso com a terra, com os agricultores locais e com a saúde de quem nos escolhe. Produzimos com respeito pela origem natural dos ingredientes, sem aditivos químicos e sem conservantes.
              </p>
              <Link className="about-btn" to="/sobre">Saiba Mais</Link>
            </div>
            <div className="about-img-col">
              <div className="about-frame">
                <img src="/img/about/about.jpg" alt="Grupo Esperança Trading" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section-alt">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Diferenciais</span>
            <h2 className="s-title">Porque Nos Escolher</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-globe-africa" /></div>
              <h3 className="why-title">100% Origem Angolana</h3>
              <p className="why-text">Ingredientes colhidos directamente da terra angolana, valorizando produtores e tradições locais.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-ban" /></div>
              <h3 className="why-title">Sem Conservantes</h3>
              <p className="why-text">Produção natural, sem aditivos químicos, preservando o sabor genuíno e os benefícios nutricionais.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-truck" /></div>
              <h3 className="why-title">Entrega à Sua Porta</h3>
              <p className="why-text">Faça a sua encomenda e receba directamente em casa, com rapidez e confiança.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-shopping-cart" /></div>
              <h3 className="why-title">Compra Online Facilitada</h3>
              <p className="why-text">Realize a sua compra directamente nas nossas plataformas digitais, de forma simples e segura.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Marcas</span>
            <h2 className="s-title">As Nossas Marcas</h2>
            <p className="s-sub">Três marcas, um compromisso: levar o melhor da terra angolana até si</p>
          </div>
          <div className="brands-grid">
            <div className="brand-card">
              <div className="brand-icon"><i className="fas fa-leaf" /></div>
              <h3 className="brand-name">Toto Drink</h3>
              <p className="brand-tagline">Sumos naturais, 100% orgânicos, sem conservantes</p>
              <p className="brand-desc">Produzidos a partir de frutas locais cuidadosamente seleccionadas, os sumos Toto Drink trazem o sabor genuíno de Angola directamente para a sua mesa.</p>
              <Link className="brand-btn" to="/marcas">Saber Mais</Link>
            </div>
            <div className="brand-card">
              <div className="brand-icon"><i className="fas fa-utensils" /></div>
              <h3 className="brand-name">Toto Food</h3>
              <p className="brand-tagline">Linha alimentar tradicional africana</p>
              <p className="brand-desc">Uma linha centrada em pratos e conservas típicas africanas, que preserva o sabor autêntico e as características nutricionais dos alimentos angolanos.</p>
              <Link className="brand-btn" to="/marcas">Saber Mais</Link>
            </div>
            <div className="brand-card">
              <div className="brand-icon"><i className="fas fa-drumstick-bite" /></div>
              <h3 className="brand-name">Frango Premium</h3>
              <p className="brand-tagline">Frango grelhado e assado, com acompanhamentos típicos</p>
              <p className="brand-desc">Frango grelhado ou assado, servido com kiquanga, banana-pão frita ou batata — qualidade premium ao sabor tradicional angolano.</p>
              <Link className="brand-btn" to="/marcas">Saber Mais</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section-alt">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Produtos</span>
            <h2 className="s-title">Nossos Produtos</h2>
            <p className="s-sub">Conheça a nossa linha de produtos naturais</p>
          </div>
          <div className="products-grid">
            {products.sumo_natural.slice(0, 4).map((product, i) => (
              <div key={i} className="prod-card">
                <div className="prod-img">
                  <a href="#"><img src={product.image} alt={product.name} /></a>
                </div>
                <h4 className="prod-name"><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{product.name}</a></h4>
                <span className="prod-price">{product.price}</span>
                <a className="prod-btn" href="#">COMPRAR</a>
              </div>
            ))}
          </div>
          <div className="products-more">
            <Link to="/catalogo">Veja Mais</Link>
          </div>
        </div>
      </section>

      <section className="s-cta">
        <div className="s-container">
          <div className="cta-content">
            <h2 className="cta-title">Faça já a sua encomenda</h2>
            <p className="cta-text">Da terra angolana para a sua mesa — produtos naturais, frescos e feitos com cuidado.</p>
            <Link className="cta-btn" to="/contacto">Encomendar Agora</Link>
          </div>
        </div>
      </section>

      <div className="s-social">
        <div className="s-container">
          <div className="social-layout">
            <BrandsCarousel />
            <div className="social-links">
              <a className="social-link" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
              <a className="social-link" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              <a className="social-link" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

function CountUp({ end }) {
  const ref = useRef(null)
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [counted])

  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!counted) return
    let start = 0
    const duration = 1000
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [counted, end])

  return <h1 className="counter" ref={ref}>{count}</h1>
}

function BrandsCarousel() {
  const brands = [
    { name: 'Toto Drink', icon: 'fa-leaf', color: '#4caf50' },
    { name: 'Toto Food', icon: 'fa-utensils', color: '#8d6e63' },
    { name: 'Frango Premium', icon: 'fa-drumstick-bite', color: '#ff7043' },
  ]
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {brands.map((b, i) => (
        <span key={i} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 20px', borderRadius: '30px',
          background: 'rgba(0,0,0,0.03)', fontSize: '14px',
          fontWeight: 500, fontFamily: "'Rubik', sans-serif", color: '#555',
        }}>
          <i className={`fas ${b.icon}`} style={{ color: b.color }} />
          {b.name}
        </span>
      ))}
    </div>
  )
}
