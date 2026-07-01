import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const galleryImages = [
  { src: '/img/gallery/gallery1.jpg', alt: 'gallery 1', cat: 'cat2' },
  { src: '/img/gallery/gallery2.jpg', alt: 'gallery 2', cat: 'cat3' },
  { src: '/img/gallery/gallery3.jpg', alt: 'gallery 3', cat: 'cat2' },
  { src: '/img/gallery/gallery4.jpg', alt: 'gallery 4', cat: 'cat2' },
  { src: '/img/gallery/gallery5.jpg', alt: 'gallery 5', cat: 'cat3' },
  { src: '/img/gallery/gallery6.jpg', alt: 'gallery 6', cat: 'cat3' },
]

const filters = [
  { key: '*', label: 'Todas' },
  { key: 'cat2', label: 'Eventos' },
  { key: 'cat3', label: 'Formações' },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('*')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered = activeFilter === '*'
    ? galleryImages
    : galleryImages.filter((img) => img.cat === activeFilter)

  return (
    <>
      <div className="breadcrumb-area breadcrumb-margin pt-260 pb-180 d-none" style={{ backgroundImage: 'url(/img/bg/bg15.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Galeria</h1>
                <ul className="breadcrumb-menu">
                  <li><a href="/">home</a></li>
                  <li><span>Galeria</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio" className="gallery-area pb-90 pt-115" style={{ backgroundImage: 'url(/img/bg/bg3.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center mb-65">
                <h1>Nossa galeria</h1>
                <p>Veja imagens de nossos eventos, notícias, e muito mais...</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1">
              <div className="portfolio-menu mb-50 text-center">
                {filters.map((f) => (
                  <button
                    key={f.key}
                    className={activeFilter === f.key ? 'active' : ''}
                    onClick={() => setActiveFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid">
            {filtered.map((img, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 grid-item">
                <div className="gallery-wrapper mb-30">
                  <div className="gallery-img">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setLightboxIndex(i)
                        setLightboxOpen(true)
                      }}
                    >
                      <img src={img.src} alt={img.alt} />
                    </a>
                    <div className="gallery-text">
                      <span>Organic Food</span>
                      <h3><a href="#">special meat</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={galleryImages.map((img) => ({ src: img.src }))}
      />
    </>
  )
}
