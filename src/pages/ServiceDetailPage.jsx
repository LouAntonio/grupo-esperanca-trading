import { useParams, Link } from 'react-router-dom'
import services from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.id === slug) || services[0]

  return (
    <>
      <div className="breadcrumb-area breadcrumb-margin pt-260 pb-180" style={{ backgroundImage: 'url(/img/bg/bg15.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Detalhes do Serviço</h1>
                <ul className="breadcrumb-menu">
                  <li><Link to="/pulvieto">Pulvieto</Link></li>
                  <li><span>{service.title}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-area grey1-bg pt-120 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="services-sidebar services-padding mb-60">
                <div className="services-title">
                  <h1>Serviços</h1>
                </div>
                <ul className="services-link">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link to={`/pulvieto/${s.id}`}>
                        <i className="fas fa-angle-right"></i>{s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="services-sidebar service-padding mb-60" style={{ backgroundImage: 'url(/img/service/sidebar1.jpg)' }}>
                <div className="services-title">
                  <h1>Downloads</h1>
                </div>
                <ul className="services-link">
                  <li><a href="#"><i className="far fa-file-word"></i>Documento.pdf</a></li>
                  <li><a href="#"><i className="far fa-file-word"></i>Documento 2.pdf</a></li>
                  <li><a href="#"><i className="far fa-file-word"></i>Documento 3.pdf</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="services-details-wrapper mb-30">
                <div className="services-details-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="service-details-img mt-35 mb-40">
                    <img src="/img/service/ser1.jpg" alt="" />
                  </div>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                </div>
                <div className="services-details-content mt-40 mb-30">
                  <h2>Why Needs Organic Food For Health</h2>
                  <p>No one rejects dislikes or avoids pleasure itself because it is pleasure but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                </div>
                <div className="row mb-30">
                  <div className="col-xl-7 col-lg-7 col-md-6 mb-30">
                    <div className="services-details-link">
                      <div className="services-details-icon-img">
                        <img src="/img/service/icon.png" alt="" />
                      </div>
                      <div className="services-details-link-text">
                        <p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod tempor incididunt</p>
                      </div>
                    </div>
                    <div className="services-details-link">
                      <div className="services-details-icon-img">
                        <img src="/img/service/icon.png" alt="" />
                      </div>
                      <div className="services-details-link-text">
                        <p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod tempor incididunt</p>
                      </div>
                    </div>
                    <div className="services-details-link">
                      <div className="services-details-icon-img">
                        <img src="/img/service/icon.png" alt="" />
                      </div>
                      <div className="services-details-link-text">
                        <p>Lorem ipsum dolor sit amet consecte adipisic elit sed do eiusmod tempor incididunt</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6 mb-30">
                    <div className="services-details-link-img">
                      <img src="/img/service/ser2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
