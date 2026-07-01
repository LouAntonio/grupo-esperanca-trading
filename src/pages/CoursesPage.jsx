import { useState } from 'react'
import { Link } from 'react-router-dom'
import courses from '../data/courses'

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('cards')

  return (
    <>
      <div className="pricing-area grey1-bg pb-90 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title section-title-cap text-center mb-5">
                <div className="section-icon section1-icon">
                  <img src="/img/icon/icon3.png" alt="" />
                </div>
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

          <div className="row d-none">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="pricing-wrapper mb-30">
                <div className="pricing-top">
                  <h3>Agronegócio</h3>
                  <div className="price-count">
                    <h3><span className="usd">$</span> Sob Consulta</h3>
                  </div>
                  <div className="pricing-text">
                    <h4>Duração</h4>
                  </div>
                  <div className="pricing-icon">
                    <img src="/img/files/Agronegocios-250-x-250.png" style={{ width: '200px', borderRadius: '50%' }} alt="" />
                  </div>
                </div>
                <ul className="pricing-list">
                  <li><h5>Conteúdo Programático:</h5></li>
                  <li><i className="dripicons-checkmark"></i>Agricultura Orgânica</li>
                  <li><i className="dripicons-checkmark"></i>Agricultura de Precisão</li>
                  <li><i className="dripicons-checkmark"></i>Gestão de Projectos Agrícolas</li>
                  <li><i className="dripicons-checkmark"></i>Logística Agríclola</li>
                  <li><i className="dripicons-checkmark"></i>Marketing Rural</li>
                </ul>
                <div className="pricing-button">
                  <a className="btn" href="#">Saiba Mais</a>
                  <a className="btn" href="#">Inscrever-se</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="pricing-wrapper mb-30">
                <div className="pricing-top">
                  <h3>Pecuária</h3>
                  <div className="price-count">
                    <h3><span className="usd">$</span> Sob Consulta</h3>
                  </div>
                  <div className="pricing-text">
                    <h4>Duração</h4>
                  </div>
                  <div className="pricing-icon">
                    <img src="/img/files/Agropecuaria-250-x-250.png" style={{ width: '200px', borderRadius: '50%' }} alt="" />
                  </div>
                </div>
                <ul className="pricing-list">
                  <li><h5>Conteúdo Programático:</h5></li>
                  <li><i className="dripicons-checkmark"></i>Zootecnia</li>
                  <li><i className="dripicons-checkmark"></i>Veterinária</li>
                  <li><i className="dripicons-checkmark"></i>Produção de Ração</li>
                  <li><i className="dripicons-checkmark"></i>Criações Suinocultura e Avicultura</li>
                  <li><i className="dripicons-checkmark"></i>Caprinocultura e Cunicultura</li>
                  <li><i className="dripicons-checkmark"></i>Marketing e Vendas no setor agropecuário</li>
                </ul>
                <div className="pricing-button">
                  <a className="btn" href="#">Saiba Mais</a>
                  <a className="btn" href="#">Inscrever-se</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-area pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="team-content pb-0" style={{ backgroundImage: 'url(/img/bg/bg2.png)' }}>
                <div className="section-title mb-65">
                  <div className="section-icon">
                    <img src="/img/icon/icon5.png" alt="" />
                  </div>
                  <h2>Nossos Formadores</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna minim veniam</p>
                  <p>Consectetur adipisicing elit sed eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-wrapper mb-30">
                    <div className="team-img">
                      <img src="/img/team/team1.jpg" alt="" />
                      <div className="team-text">
                        <h4>Morris V. Vasquez</h4>
                        <span>Organic Farmers</span>
                        <div className="team-social-icon">
                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                          <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="#"><i className="fab fa-linkedin-in"></i></a>
                          <a href="#"><i className="fab fa-youtube"></i></a>
                          <a href="#"><i className="fab fa-behance"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-wrapper mb-30">
                    <div className="team-img">
                      <img src="/img/team/team2.jpg" alt="" />
                      <div className="team-text">
                        <h4>Morris V. Vasquez</h4>
                        <span>Organic Farmers</span>
                        <div className="team-social-icon">
                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                          <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="#"><i className="fab fa-linkedin-in"></i></a>
                          <a href="#"><i className="fab fa-youtube"></i></a>
                          <a href="#"><i className="fab fa-behance"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="team-content pb-0" style={{ backgroundImage: 'url(/img/bg/bg2.png)' }}>
                <div className="section-title mb-65">
                  <h2>Infraestrutura e Prática</h2>
                  <p>Nossos cursos são realizados em ambientes que simulam condições reais de trabalho. A prática é desenvolvida em fazendas parceiras, garantindo aos alunos uma experiência completa e alinhada às necessidades do mercado.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="team-content pb-0" style={{ backgroundImage: 'url(/img/bg/bg2.png)' }}>
                <div className="section-title mb-65">
                  <h2>Diferenciais</h2>
                  <ol>
                    <li><ion-icon name="checkbox-outline"></ion-icon> Equipa formada por engenheiros agrónomos e especialistas licenciados;</li>
                    <li><ion-icon name="checkbox-outline"></ion-icon> Cursos com abordagem teórica e prática, orientados para resultados;</li>
                    <li><ion-icon name="checkbox-outline"></ion-icon> Infraestrutura moderna e parcerias com fazendas e empresas do setor agro e pecuário;</li>
                    <li><ion-icon name="checkbox-outline"></ion-icon> Suporte técnico e consultoria para alunos e parceiros.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="team-content pb-0" style={{ backgroundImage: 'url(/img/bg/bg2.png)' }}>
                <div className="section-title mb-65">
                  <h2>Impacto</h2>
                  <p>O Centro de Formação Agroindustrial tem um impacto significativo na economia angolana, ao capacitar profissionais que promovem inovação e sustentabilidade no setor do agronegócios. Nosso trabalho não apenas transforma carreiras, mas também contribui para a melhoria da qualidade de vida e para o fortalecimento das comunidades locais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
