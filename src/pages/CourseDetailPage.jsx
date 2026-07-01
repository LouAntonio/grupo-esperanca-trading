import { useParams, Link } from 'react-router-dom'
import courses from '../data/courses'

export default function CourseDetailPage() {
  const { slug } = useParams()
  const course = courses.find((c) => c.id === slug) || courses[0]

  return (
    <>
      <div className="breadcrumb-area breadcrumb-margin pt-260 pb-180" style={{ backgroundImage: 'url(/img/bg/bg15.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Detalhes da Formação</h1>
                <ul className="breadcrumb-menu">
                  <li><Link to="/">home</Link></li>
                  <li><Link to="/formacoes">formações</Link></li>
                  <li><span>{course.title}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-layout-area pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="gallery-layout-wrapper">
                <div className="gallery-layout-img">
                  <img src="/img/bg/bg2.jpg" alt="" />
                </div>
                <div className="row mb-20">
                  <div className="col-xl-4 col-lg-4 mb-30">
                    <div className="col-12 mb-30">
                      <div className="gallery2-layout-bg">
                        <div className="gallery-layout-info">
                          <span>Curso:</span>
                          <h5>{course.title}</h5>
                        </div>
                        <div className="gallery-layout-info">
                          <span>Duração</span>
                          <h5>{course.duration}</h5>
                        </div>
                        <div className="gallery-layout-info">
                          <span>Tipo</span>
                          <h5>{course.type}</h5>
                        </div>
                        <div className="gallery-layout-info">
                          <span>Preço</span>
                          <h5>{course.newPrice}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-30">
                      <div className="gallery2-layout-bg">
                        <div className="gallery-layout-info">
                          <h3>Conteúdo Programático</h3>
                        </div>
                        <ul className="services-link">
                          {course.topics.map((topic, i) => (
                            <li key={i}><a href="#"><i className="far fa-file-word"></i>{topic}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 cl-lg-8 mb-30">
                    <div className="gallery2-layout-text">
                      <h1>{course.title}</h1>
                      <p>{course.description}</p>
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
