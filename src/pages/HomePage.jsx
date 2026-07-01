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

      <div className="video-area pt-4 pb-4" style={{ backgroundImage: 'url(/img/files/1920-x-905.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1">
              <div className="video-wrapper text-center mb-3">
                <div className="video-text">
                  <h1 style={{ fontSize: '35px' }}>Grupo Esperança Trading, Lda</h1>
                  <h3 style={{ fontSize: '20px', fontWeight: 300 }}>Da terra angolana para a sua mesa</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-bg pt-70 pb-50" style={{ backgroundColor: '#00000059' }}>
            <div className="row justify-content-around">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon">
                    <span className="plus">+</span>
                    <div className="counter-text">
                      <CountUp end={3} />
                      <span className="textCounter">Marcas</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon">
                    <span className="plus">+</span>
                    <div className="counter-text">
                      <CountUp end={100} />
                      <span className="textCounter">% Orgânico</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon">
                    <span className="plus">+</span>
                    <div className="counter-text">
                      <CountUp end={0} />
                      <span className="textCounter">Conservantes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pos-relative pt-70">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="about-2-wrapper text-center">
                <div className="section-title section-title-cap mb-2">
                  <h3>Quem Somos</h3>
                  <p>O Grupo Esperança Trading, Lda é uma empresa angolana de transformação alimentar, comprometida com o desenvolvimento industrial e a promoção da saúde através da alimentação. Detentora das marcas Toto Drink e Toto Food, a empresa actua na produção de sumos naturais sem conservantes e alimentos africanos tradicionais, valorizando os produtos da terra e impulsionando o consumo orgânico em Angola e além-fronteiras.</p>
                  <p><strong>Da terra angolana para a sua mesa</strong> — Cada produto nasce do compromisso com a terra, com os agricultores locais e com a saúde de quem nos escolhe. Produzimos com respeito pela origem natural dos ingredientes, sem aditivos químicos e sem conservantes.</p>
                </div>
                <Link className="btn" to="/sobre">Saiba Mais</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area pt-70 pb-70" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="section-title section-title-cap text-center mb-5">
                <h1>As Nossas Marcas</h1>
                <p>Três marcas, um compromisso: levar o melhor da terra angolana até si</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: 10, height: '100%' }}>
                <div style={{ fontSize: 50, color: '#4caf50', marginBottom: 15 }}>
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Toto Drink</h4>
                <p style={{ fontStyle: 'italic' }}>Sumos naturais, 100% orgânicos, sem conservantes</p>
                <p>Produzidos a partir de frutas locais cuidadosamente seleccionadas, os sumos Toto Drink trazem o sabor genuíno de Angola directamente para a sua mesa.</p>
                <Link className="btn" to="/marcas">Saber Mais</Link>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: 10, height: '100%' }}>
                <div style={{ fontSize: 50, color: '#8d6e63', marginBottom: 15 }}>
                  <i className="fas fa-utensils"></i>
                </div>
                <h4>Toto Food</h4>
                <p style={{ fontStyle: 'italic' }}>Linha alimentar tradicional africana</p>
                <p>Uma linha centrada em pratos e conservas típicas africanas, que preserva o sabor autêntico e as características nutricionais dos alimentos angolanos.</p>
                <Link className="btn" to="/marcas">Saber Mais</Link>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: 10, height: '100%' }}>
                <div style={{ fontSize: 50, color: '#ff7043', marginBottom: 15 }}>
                  <i className="fas fa-drumstick-bite"></i>
                </div>
                <h4>Frango Premium</h4>
                <p style={{ fontStyle: 'italic' }}>Frango grelhado e assado, com acompanhamentos típicos</p>
                <p>Frango grelhado ou assado, servido com kiquanga, banana-pão frita ou batata — qualidade premium ao sabor tradicional angolano.</p>
                <Link className="btn" to="/marcas">Saber Mais</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-area pos-relative pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title section-title-cap text-center mb-5">
                <h1>Porque Nos Escolher</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="text-center p-3">
                <div style={{ fontSize: 40, color: '#4caf50', marginBottom: 10 }}>
                  <i className="fas fa-globe-africa"></i>
                </div>
                <h5>100% Origem Angolana</h5>
                <p>Ingredientes colhidos directamente da terra angolana, valorizando produtores e tradições locais.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-3">
                <div style={{ fontSize: 40, color: '#4caf50', marginBottom: 10 }}>
                  <i className="fas fa-ban"></i>
                </div>
                <h5>Sem Conservantes</h5>
                <p>Produção natural, sem aditivos químicos, preservando o sabor genuíno e os benefícios nutricionais.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-3">
                <div style={{ fontSize: 40, color: '#4caf50', marginBottom: 10 }}>
                  <i className="fas fa-truck"></i>
                </div>
                <h5>Entrega à Sua Porta</h5>
                <p>Faça a sua encomenda e receba directamente em casa, com rapidez e confiança.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-3">
                <div style={{ fontSize: 40, color: '#4caf50', marginBottom: 10 }}>
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h5>Compra Online Facilitada</h5>
                <p>Realize a sua compra directamente nas nossas plataformas digitais, de forma simples e segura.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area pt-70 pb-70" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="section-title section-title-cap text-center mb-5">
                <h1>Nossos Produtos</h1>
                <p>Conheça a nossa linha de produtos naturais</p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.sumo_natural.slice(0, 4).map((product, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                <div className="product-wrapper text-center mb-30">
                  <div className="product-img">
                    <a href="#"><img src={product.image} alt={product.name} /></a>
                  </div>
                  <div className="product-text">
                    <h4><a href="#">{product.name}</a></h4>
                    <div className="pro-price"><span>{product.price}</span></div>
                    <br />
                    <a className="btn px-2 py-2" href="#">COMPRAR</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product-button product1-button mt-30 text-center">
                <Link className="btn" to="/loja">Veja Mais</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pos-relative pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Faça já a sua encomenda</h2>
              <p className="mb-4" style={{ fontSize: 18 }}>Da terra angolana para a sua mesa — produtos naturais, frescos e feitos com cuidado.</p>
              <Link className="btn" to="/contacto">Encomendar Agora</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-area pt-5">
        <div className="container">
          <div className="brand-bg pb-50">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-7">
                <BrandsCarousel />
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="bottom-social-icon text-md-right">
                  <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                  <a href="#" target="_blank"><i className="fab fa-whatsapp"></i></a>
                </div>
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

  return <h1 className="counter textCounter" ref={ref}>{count}</h1>
}

function BrandsCarousel() {
  const swiperRef = useRef(null)

  useEffect(() => {
    import('swiper/bundle').then(({ default: Swiper }) => {
      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          slidesPerView: 1,
          navigation: true,
          autoplay: true,
          breakpoints: {
            768: { slidesPerView: 1 },
            992: { slidesPerView: 3 },
          },
        })
      }
    })
  }, [])

  return (
    <div className="brand-wrapper">
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {['Toto Drink', 'Toto Food', 'Frango Premium'].map((name, i) => (
            <div key={i} className="swiper-slide">
              <div className="brand-img text-center">
                <h3 style={{ padding: '40px 0', color: '#333' }}>{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
