import { useState } from 'react'

export default function ContactPage() {
  const [visitForm, setVisitForm] = useState({
    nome: '', telefone: '', email: '', local: '',
    tipo_servico: [], mensagem: '', data_inicio: '',
  })
  const [contactForm, setContactForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  const handleVisitSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(visitForm),
      })
      if (res.ok) alert('Pedido enviado com sucesso!')
      else alert('Erro ao enviar pedido.')
    } catch {
      alert('Erro de conexão.')
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(contactForm),
      })
      if (res.ok) alert('Mensagem enviada com sucesso!')
      else alert('Erro ao enviar mensagem.')
    } catch {
      alert('Erro de conexão.')
    }
  }

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <div className="slider-area slider-margin" style={{ marginTop: 0 }}>
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh', backgroundImage: 'url(/img/files/Apoio-ao-Cliente-1920-x-1080.png)' }}>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63076.487027613286!2d13.228634743289762!3d-8.85346217621027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f144602345c1%3A0x76c38c44c0e8a910!2sIndustrial%20Academy!5e0!3m2!1spt-PT!2sao!4v1736763872382!5m2!1spt-PT!2sao"
        width="600" height="450"
        style={{ border: 0, width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>

      <section id="faq" className="faq-area pt-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center mb-70">
                <div className="section-icon">
                  <img src="/img/icon/icon2.png" alt="" />
                </div>
                <h1 className="text-capitalize">Perguntas Frequentes</h1>
                <p>Encontre aqui respostas para as dúvidas mais comuns sobre nossos serviços</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="faq-box">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <a
                          href="#"
                          className={`btn-link ${openFaq !== 'faq1' ? 'collapsed' : ''}`}
                          onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === 'faq1' ? null : 'faq1') }}
                        >
                          Pergunta aqui
                        </a>
                      </h5>
                    </div>
                    <div id="collapseOne" className={`collapse ${openFaq === 'faq1' ? 'show' : ''}`}>
                      <div className="card-body">
                        <p>Resposta aqui</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <a
                          href="#"
                          className={`btn-link ${openFaq !== 'faq2' ? 'collapsed' : ''}`}
                          onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === 'faq2' ? null : 'faq2') }}
                        >
                          Pergunta 2 aqui
                        </a>
                      </h5>
                    </div>
                    <div id="collapseTwo" className={`collapse ${openFaq === 'faq2' ? 'show' : ''}`}>
                      <div className="card-body">
                        <p>Resposta 2 aqui</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <a
                          href="#"
                          className={`btn-link ${openFaq !== 'faq3' ? 'collapsed' : ''}`}
                          onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === 'faq3' ? null : 'faq3') }}
                        >
                          Agende uma Visita Técnica
                        </a>
                      </h5>
                    </div>
                    <div id="collapseThree" className={`collapse ${openFaq === 'faq3' ? 'show' : ''}`}>
                      <div className="card-body">
                        <div className="contact-area pt-3 pb-3">
                          <div className="container">
                            <div className="row">
                              <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                                <div className="section-title section-title-cap text-center mb-50">
                                  <span>Agende Connosco!</span>
                                  <h3>Está a precisar de apoio técnico ou quer desenvolver melhor o seu projeto?</h3>
                                  <p>A nossa equipa está pronta para oferecer soluções práticas e personalizadas para o seu negócio rural. Preencha o formulário abaixo com os dados necessários, e entraremos em contacto o mais breve possível!</p>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 mb-30">
                                <div className="row">
                                  <div className="col-xl-12">
                                    <form onSubmit={handleVisitSubmit} className="contact-form">
                                      <div className="row">
                                        <div className="col-xl-6 col-md-6">
                                          <input name="nome" placeholder="Nome Completo (Pessoal ou Empresa)" type="text" required
                                            onChange={(e) => setVisitForm({ ...visitForm, nome: e.target.value })} />
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                          <input name="telefone" placeholder="Telefone" type="text" required
                                            onChange={(e) => setVisitForm({ ...visitForm, telefone: e.target.value })} />
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                          <input name="email" placeholder="Endereço de Email" type="email" required
                                            onChange={(e) => setVisitForm({ ...visitForm, email: e.target.value })} />
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                          <input name="local" placeholder="Local Exato (fazenda, bairro, comuna, etc.)" type="text" required
                                            onChange={(e) => setVisitForm({ ...visitForm, local: e.target.value })} />
                                        </div>
                                        <div className="col-xl-12 col-md-12">
                                          <label htmlFor="tipo_servico">Que tipo de consultoria você precisa?</label><br />
                                          <select name="tipo_servico" id="tipo_servico" className="form-control outline-none box-shadow-none" style={{ outline: 0 }} required multiple
                                            onChange={(e) => {
                                              const options = [...e.target.options].filter(o => o.selected).map(o => o.value)
                                              setVisitForm({ ...visitForm, tipo_servico: options })
                                            }}>
                                            <option value="" disabled>Selecione uma ou mais...</option>
                                            <option value="Agricultura">Agricultura</option>
                                            <option value="Pecuária">Pecuária</option>
                                            <option value="Piscicultura">Piscicultura</option>
                                            <option value="Assistência Técnica">Assistência Técnica</option>
                                          </select>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                          <textarea name="mensagem" cols="30" rows="5" placeholder="Descreva brevemente o seu projeto, desafio ou necessidade atual" required
                                            onChange={(e) => setVisitForm({ ...visitForm, mensagem: e.target.value })}></textarea>
                                        </div>
                                        <div className="col-md-12">
                                          <label htmlFor="data_inicio">Qual a melhor data nosso contacto ou visita técnica?</label>
                                          <input type="date" id="data_inicio" name="data_inicio" required
                                            onChange={(e) => setVisitForm({ ...visitForm, data_inicio: e.target.value })} />
                                        </div>
                                        <div className="col-md-12">
                                          <button className="btn" type="submit">Enviar Pedido</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-area pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title section-title-cap text-center mb-50">
                <span>Ainda tem dúvidas?</span>
                <h3>Entre em Contacto para mais Detalhes</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="contact-adddress-wrapper">
                <ul className="contact-list-address">
                  <li>
                    <div className="contact-icon">
                      <i className="dripicons-location"></i>
                    </div>
                    <div className="contact-address-text">
                      <h5>Localização</h5>
                      <p>Fábrica de Tijolos, Golf 2, Luanda - Angola</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="dripicons-phone"></i>
                    </div>
                    <div className="contact-address-text">
                      <h5>Suporte</h5>
                      <p>+244 912 345 678<br /></p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="dripicons-mail"></i>
                    </div>
                    <div className="contact-address-text">
                      <h5>email</h5>
                      <p>info@academiaindustrial.net <br /></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 mb-30">
              <div className="row">
                <div className="col-xl-12">
                  <form onSubmit={handleContactSubmit}>
                    <div className="row">
                      <div className="col-xl-6 col-md-6">
                        <input name="name" placeholder="Nome" type="text"
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} />
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <input name="email" placeholder="Email" type="email"
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <input name="phone" placeholder="Telefone" type="text"
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} />
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <input name="subject" placeholder="Assunto" type="text"
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} />
                      </div>
                      <div className="col-md-12">
                        <textarea name="message" cols="30" rows="10" placeholder="Mensagem"
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}></textarea>
                        <button className="btn" type="submit">Enviar Mensagem</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
