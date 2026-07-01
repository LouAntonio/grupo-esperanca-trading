import { useState } from 'react'

export default function ContactPage() {
  const [orderForm, setOrderForm] = useState({
    nome: '', telefone: '', email: '', local: '',
    produtos: [], mensagem: '', data_entrega: '',
  })
  const [contactForm, setContactForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  const handleOrderSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(orderForm),
      })
      if (res.ok) alert('Pedido enviado com sucesso! Entraremos em contacto em breve.')
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
                <p>Encontre aqui respostas para as dúvidas mais comuns sobre os nossos produtos e encomendas</p>
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
                          Os vossos sumos têm conservantes?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseOne" className={`collapse ${openFaq === 'faq1' ? 'show' : ''}`}>
                      <div className="card-body">
                        <p>Não. Todos os sumos Toto Drink são 100% naturais, produzidos sem qualquer tipo de conservante ou aditivo químico. Apenas fruta fresca angolana cuidadosamente seleccionada.</p>
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
                          Como posso fazer uma encomenda?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseTwo" className={`collapse ${openFaq === 'faq2' ? 'show' : ''}`}>
                      <div className="card-body">
                        <p>Pode fazer a sua encomenda preenchendo o formulário abaixo, ou entrando em contacto connosco através do telefone ou email disponíveis nesta página. Entregamos directamente à sua porta.</p>
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
                          Fazem entregas para eventos e empresas?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseThree" className={`collapse ${openFaq === 'faq3' ? 'show' : ''}`}>
                      <div className="card-body">
                        <p>Sim! Oferecemos fornecimento de sumos naturais, quitutes e Frango Premium para empresas, festas, conferências e eventos privados. Temos opções de quantidade e personalização conforme a dimensão do seu evento.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <a
                          href="#"
                          className={`btn-link ${openFaq !== 'faq4' ? 'collapsed' : ''}`}
                          onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === 'faq4' ? null : 'faq4') }}
                        >
                          Faça a sua Encomenda
                        </a>
                      </h5>
                    </div>
                    <div id="collapseFour" className={`collapse ${openFaq === 'faq4' ? 'show' : ''}`}>
                      <div className="card-body">
                        <div className="contact-area pt-3 pb-3">
                          <div className="container">
                            <div className="row">
                              <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                                <div className="section-title section-title-cap text-center mb-50">
                                  <span>Peça já!</span>
                                  <h3>Faça a sua encomenda de produtos frescos e naturais</h3>
                                  <p>Preencha o formulário abaixo com os seus dados e os produtos que deseja. Entraremos em contacto o mais breve possível para confirmar a sua encomenda e combinar a entrega!</p>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 mb-30">
                                <div className="row">
                                  <div className="col-xl-12">
                                    <form onSubmit={handleOrderSubmit} className="contact-form">
                                      <div className="row">
                                        <div className="col-xl-6 col-md-6">
                                          <input name="nome" placeholder="Nome Completo" type="text" required
                                            onChange={(e) => setOrderForm({ ...orderForm, nome: e.target.value })} />
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                          <input name="telefone" placeholder="Telefone" type="text" required
                                            onChange={(e) => setOrderForm({ ...orderForm, telefone: e.target.value })} />
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                          <input name="email" placeholder="Endereço de Email" type="email" required
                                            onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })} />
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                          <input name="local" placeholder="Local de Entrega (bairro, comuna, etc.)" type="text" required
                                            onChange={(e) => setOrderForm({ ...orderForm, local: e.target.value })} />
                                        </div>
                                        <div className="col-xl-12 col-md-12">
                                          <label htmlFor="produtos">Que produtos deseja encomendar?</label><br />
                                          <select name="produtos" id="produtos" className="form-control outline-none box-shadow-none" style={{ outline: 0 }} required multiple
                                            onChange={(e) => {
                                              const options = [...e.target.options].filter(o => o.selected).map(o => o.value)
                                              setOrderForm({ ...orderForm, produtos: options })
                                            }}>
                                            <option value="" disabled>Selecione um ou mais...</option>
                                            <option value="Sumo Natural">Sumo Natural</option>
                                            <option value="Linha Detox">Linha Detox & Energéticos</option>
                                            <option value="Legumes Congelados">Legumes Congelados</option>
                                            <option value="Quitutes">Quitutes Engarrafados</option>
                                            <option value="Frango Premium">Frango Premium</option>
                                            <option value="Serviço Eventos">Serviço para Eventos</option>
                                          </select>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                          <textarea name="mensagem" cols="30" rows="5" placeholder="Detalhes adicionais sobre a sua encomenda (quantidades, preferências, etc.)" required
                                            onChange={(e) => setOrderForm({ ...orderForm, mensagem: e.target.value })}></textarea>
                                        </div>
                                        <div className="col-md-12">
                                          <label htmlFor="data_entrega">Qual a data desejada para a entrega?</label>
                                          <input type="date" id="data_entrega" name="data_entrega" required
                                            onChange={(e) => setOrderForm({ ...orderForm, data_entrega: e.target.value })} />
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
                      <p>geral@academiaindustrial.net <br /></p>
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
