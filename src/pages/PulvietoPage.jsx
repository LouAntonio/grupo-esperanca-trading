import { useState, useEffect, useRef } from 'react'
import services from '../data/services'

export default function PulvietoPage() {
  const [activeFilter, setActiveFilter] = useState('cat1')

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

  const categories = [
    { key: 'cat1', label: 'ASSISTÊNCIA TÉCNICA ESPECIALIZADA' },
    { key: 'cat2', label: 'Consultória em Piscultura' },
    { key: 'cat3', label: 'CONSULTORIA PARA PROJETOS AGRÍCOLAS E PECUÁRIOS' },
  ]

  return (
    <>
      <div className="slider-area slider-margin" style={{ marginTop: 0 }}>
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh', backgroundImage: 'url(/img/files/Pulvieto-1920-x-1080.png)' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <div className="slider-content text-center">
                    <div className="slider-video-icon"></div>
                    <h1 data-animation="fadeInUp" data-delay=".5s">PULVIETO</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title section-title-cap text-center mb-70">
                <div className="section-icon">
                  <img src="/img/icon/icon2.png" alt="" />
                </div>
                <h1>Pulvieto</h1>
                <p>O Projecto Pulvieto, uma iniciativa integrada à Academia Industrial, oferece serviços especializados no setor agropecuário</p>
              </div>
            </div>
          </div>
          <div className="row d-none">
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
                        <a className="btn" href="#">Saiba Mais</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="gallery-area" style={{ backgroundImage: 'url(/img/bg/bg3.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="portfolio-menu mb-50 text-center mx-0">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={activeFilter === cat.key ? 'active' : ''}
                    onClick={() => setActiveFilter(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            {activeFilter === 'cat1' && (
              <div className="col-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe suscipit, sint, facilis sed fugit veniam quo quis dolorum itaque cum, perferendis inventore blanditiis reiciendis voluptate accusantium ratione culpa corporis? Obcaecati?</p>
              </div>
            )}
            {activeFilter === 'cat2' && (
              <div className="col-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eius aliquam laboriosam vel cupiditate eaque suscipit maiores velit laudantium rem voluptas, voluptatum obcaecati voluptatem repudiandae possimus. Sit, modi earum?</p>
              </div>
            )}
            {activeFilter === 'cat3' && (
              <div className="col-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eius aliquam laboriosam vel cupiditate eaque suscipit maiores velit laudantium rem voluptas, voluptatum obcaecati voluptatem repudiandae possimus. Sit, modi earum?</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
