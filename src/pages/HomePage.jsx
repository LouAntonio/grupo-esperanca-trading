import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import services from '../data/services'
import products from '../data/products'

export default function HomePage() {
  const splide1Ref = useRef(null)
  const splide2Ref = useRef(null)

  useEffect(() => {
    let splide1, splide2
    async function initSplide() {
      const Splide = (await import('@splidejs/splide')).default
      const AutoScroll = (await import('@splidejs/splide-extension-auto-scroll')).default

      if (splide1Ref.current) {
        splide1 = new Splide(splide1Ref.current, {
          type: 'loop',
          drag: 'free',
          focus: 'center',
          autoWidth: true,
          autoScroll: { speed: 1 },
          pagination: false,
          arrows: false,
        })
        splide1.mount({ AutoScroll })
      }

      if (splide2Ref.current) {
        splide2 = new Splide(splide2Ref.current, {
          type: 'loop',
          drag: 'free',
          focus: 'center',
          autoWidth: true,
          autoScroll: { speed: -1 },
          pagination: false,
          arrows: false,
        })
        splide2.mount({ AutoScroll })
      }
    }
    initSplide()
    return () => {
      splide1?.destroy()
      splide2?.destroy()
    }
  }, [])

  useEffect(() => {
    const splideCss = document.createElement('link')
    splideCss.rel = 'stylesheet'
    splideCss.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/css/splide.min.css'
    document.head.appendChild(splideCss)
  }, [])

  return (
    <>
      <div className="slider-area slider-margin sliderMargin">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh', backgroundImage: 'url(/img/files/1920-x-1080.pn)' }}>
            <div className="w-100">
              <section className="splide" ref={splide1Ref} id="carrossel1">
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/1.png" alt="" /></a></li>
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/2.png" alt="" /></a></li>
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/3.png" alt="" /></a></li>
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/4.png" alt="" /></a></li>
                  </ul>
                </div>
              </section>
              <section className="splide mt-3" ref={splide2Ref} id="carrossel2">
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/5.png" alt="" /></a></li>
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/6.png" alt="" /></a></li>
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/7.png" alt="" /></a></li>
                    <li className="splide__slide"><a href="#1"><img src="/img/files/slider/8.png" alt="" /></a></li>
                  </ul>
                </div>
              </section>
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
          loop: true,
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
