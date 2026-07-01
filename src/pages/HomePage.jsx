import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import courses from '../data/courses'
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

      <div className="about-area pos-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 d-none">
              <div className="about2-img">
                <img src="/img/files/628-x-893.png" className="rounded" alt="" />
              </div>
            </div>
            <div className="col-12 mb-5">
              <div className="about-2-wrapper text-center">
                <div className="section-title section-title-cap mb-2">
                  <h3>Bem-vindo à Academia Industrial</h3>
                  <p>Academia Industrial Waku, é um Centro de Formação virado ao agronegócio, que se destaca como uma referência no ensino e na formação de profissionais capacitados, para o setor agro e pecúario em Angola</p>
                </div>
                <Link className="btn" to="/sobre">Saiba Mais</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-area pt-4 pb-4 mt-2" style={{ backgroundImage: 'url(/img/files/1920-x-905.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1">
              <div className="video-wrapper text-center mb-3">
                <div className="video-text">
                  <h1 style={{ fontSize: '25px' }}>Somos o Melhor Lugar para Criares a Sua Marca.</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-bg pt-70 pb-50" style={{ backgroundColor: '#00000059' }}>
            <div className="row justify-content-around">
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon">
                    <span className="plus">+</span>
                    <div className="counter-text">
                      <CountUp end={1102} />
                      <span className="textCounter">Formados</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon">
                    <span className="plus">+</span>
                    <div className="counter-text">
                      <CountUp end={116} />
                      <span className="textCounter">Projetos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-area grey1-bg pt-70">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="section-title section-title-cap text-center mb-5">
                <h1>Formações</h1>
                <p>Na Academia Industrial, transformamos conhecimento em oportunidades. Oferecemos formações completas e práticas no universo do agronegócio, capacitando você desde os fundamentos teóricos até a aplicação prática no campo. Aqui, ajudamos a projetar seus sonhos e a executá-los com excelência.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {courses.map((course) => (
              <div key={course.id} className="col-md-4">
                <div className="card course-card">
                  <div className="course-image" style={{ backgroundImage: `url('${course.image}')` }}>
                    <div className="course-overlay"></div>
                    <div className="course-title">{course.title}</div>
                  </div>
                  <div className="course-details">
                    <div className="mb-2"><i className="fas fa-map-marker-alt"></i> {course.type}</div>
                    <div className="mb-2"><i className="fas fa-clock"></i> {course.hours}</div>
                    <div className="mb-2"><i className="fas fa-calendar"></i> {course.duration}</div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <span className="rating">★ {course.rating}</span>
                      <div className="text-right">
                        <div className="old-price">De {course.oldPrice}</div>
                        <div className="new-price">Para {course.newPrice}</div>
                        <div className="installment">{course.installment}</div>
                      </div>
                    </div>
                    <Link to={`/formacoes/${course.id}`} className="btn btn-inscreva mt-3">Inscreva-se</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="service-area pt-70" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="section-title section-title-cap text-center mb-5">
                <h1>Pulvieto</h1>
                <p>O Projecto Pulvieto, uma iniciativa integrada à Academia Industrial, oferece serviços especializados no setor agropecuário</p>
              </div>
            </div>
          </div>
          <ServicesCarousel />
        </div>
      </div>

      <div className="product-area pos-relative pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title section-title-cap text-center mb-3">
                <h1>Nossos Produtos</h1>
                <p>Dê uma olhada na nossa loja!</p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.racao.slice(0, 4).map((product, i) => (
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
                  <a href="https://www.youtube.com/channel/UC9jScpWkVi5gBsxVzh6fkfQ" target="_blank"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <YouTubeSection />
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

function ServicesCarousel() {
  const swiperRef = useRef(null)

  useEffect(() => {
    import('swiper/bundle').then(({ default: Swiper }) => {
      import('swiper/css/bundle')
      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: true,
          pagination: true,
          autoplay: true,
          breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          },
        })
      }
    })
  }, [])

  return (
    <div className="row">
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {services.map((service) => (
            <div key={service.id} className="swiper-slide">
              <div className="service-wrapper text-center mb-30">
                <div className="service-img">
                  <img src={service.image} style={{ width: '200px', borderRadius: '50%' }} alt="" />
                  <span className="service-tag">{service.tag}</span>
                </div>
                <div className="service-text">
                  <h4>{service.title}</h4>
                  <Link className="btn" to={`/pulvieto/${service.id}`}>Saiba Mais</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
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
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="swiper-slide">
              <div className="brand-img text-center">
                <img src="/img/brand/brand1.png" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function YouTubeSection() {
  const [playerReady, setPlayerReady] = useState(false)
  const playerRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const apiKey = 'REVOKED'
    const channelId = 'UC9jScpWkVi5gBsxVzh6fkfQ'
    let player = null
    let videos = []
    let currentVideoIndex = 0

    async function fetchVideos() {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
      const response = await fetch(url)
      const data = await response.json()
      return data.items.filter(item => item.id.videoId).map(item => item.id.videoId)
    }

    async function initPlayer() {
      videos = await fetchVideos()
      if (!containerRef.current || videos.length === 0) return
      player = new window.YT.Player(containerRef.current, {
        videoId: videos[currentVideoIndex],
        playerVars: { autoplay: 1, controls: 1, rel: 0 },
        events: {
          onReady: (event) => { event.target.playVideo(); setPlayerReady(true) },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              currentVideoIndex = (currentVideoIndex + 1) % videos.length
              player.loadVideoById(videos[currentVideoIndex])
            }
          },
        },
      })
    }

    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      tag.onload = () => { window.onYouTubeIframeAPIReady = initPlayer }
      document.body.appendChild(tag)
    } else {
      initPlayer()
    }

    return () => {
      player?.destroy()
    }
  }, [])

  return (
    <div className="row mb-5 mx-auto d-none" style={{ maxWidth: '100%' }}>
      <div className="container mx-auto">
        <div
          ref={containerRef}
          id="playerHide"
          allow="autoplay"
          allowFullScreen
          style={{ border: '1px solid black', margin: '0 auto', padding: 0 }}
        ></div>
      </div>
    </div>
  )
}
