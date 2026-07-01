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

  const faqs = [
    { id: 'faq1', question: 'Os vossos sumos têm conservantes?', answer: 'Não. Todos os sumos Toto Drink são 100% naturais, produzidos sem qualquer tipo de conservante ou aditivo químico. Apenas fruta fresca angolana cuidadosamente seleccionada.' },
    { id: 'faq2', question: 'Como posso fazer uma encomenda?', answer: 'Pode fazer a sua encomenda preenchendo o formulário abaixo, ou entrando em contacto connosco através do telefone ou email disponíveis nesta página. Entregamos directamente à sua porta.' },
    { id: 'faq3', question: 'Fazem entregas para eventos e empresas?', answer: 'Sim! Oferecemos fornecimento de sumos naturais, quitutes e Frango Premium para empresas, festas, conferências e eventos privados. Temos opções de quantidade e personalização conforme a dimensão do seu evento.' },
  ]

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(/img/files/Apoio-ao-Cliente-1920-x-1080.png)' }} />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63076.487027613286!2d13.228634743289762!3d-8.85346217621027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f144602345c1%3A0x76c38c44c0e8a910!2sIndustrial%20Academy!5e0!3m2!1spt-PT!2sao!4v1736763872382!5m2!1spt-PT!2sao"
        width="600" height="450"
        style={{ border: 0, width: '100%', display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />

      <section id="faq" className="s-section-alt">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Dúvidas</span>
            <h2 className="s-title">Perguntas Frequentes</h2>
            <p className="s-sub">Encontre aqui respostas para as dúvidas mais comuns sobre os nossos produtos e encomendas</p>
          </div>

          <div className="s-faq">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openFaq === faq.id ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  {faq.question}
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Pedidos</span>
            <h2 className="s-title">Faça a sua Encomenda</h2>
            <p className="s-sub">Preencha o formulário abaixo com os seus dados e os produtos que deseja. Entraremos em contacto o mais breve possível para confirmar a sua encomenda e combinar a entrega!</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleOrderSubmit} className="s-form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input name="nome" placeholder="Nome Completo" type="text" required
                  onChange={(e) => setOrderForm({ ...orderForm, nome: e.target.value })} />
                <input name="telefone" placeholder="Telefone" type="text" required
                  onChange={(e) => setOrderForm({ ...orderForm, telefone: e.target.value })} />
                <input name="email" placeholder="Endereço de Email" type="email" required
                  onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })} />
                <input name="local" placeholder="Local de Entrega (bairro, comuna, etc.)" type="text" required
                  onChange={(e) => setOrderForm({ ...orderForm, local: e.target.value })} />
              </div>

              <label htmlFor="produtos">Que produtos deseja encomendar?</label>
              <select name="produtos" id="produtos" required multiple
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

              <textarea name="mensagem" rows="4" placeholder="Detalhes adicionais sobre a sua encomenda (quantidades, preferências, etc.)" required
                onChange={(e) => setOrderForm({ ...orderForm, mensagem: e.target.value })} />

              <label htmlFor="data_entrega">Qual a data desejada para a entrega?</label>
              <input type="date" id="data_entrega" name="data_entrega" required
                onChange={(e) => setOrderForm({ ...orderForm, data_entrega: e.target.value })} />

              <button className="s-btn s-btn-primary" type="submit">Enviar Pedido</button>
            </form>
          </div>
        </div>
      </section>

      <section className="s-section-alt">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Contactos</span>
            <h2 className="s-title">Ainda tem dúvidas?</h2>
            <p className="s-sub">Entre em contacto connosco para mais detalhes</p>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-card" style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
              <div className="ci-icon" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(193,36,42,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '22px', color: 'var(--color-red)' }}>
                <i className="fas fa-map-marker-alt" />
              </div>
              <h5>Localização</h5>
              <p>Fábrica de Tijolos, Golf 2, Luanda — Angola</p>
            </div>
            <div className="contact-info-card" style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
              <div className="ci-icon" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(193,36,42,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '22px', color: 'var(--color-red)' }}>
                <i className="fas fa-phone-alt" />
              </div>
              <h5>Suporte</h5>
              <p>+244 912 345 678</p>
            </div>
            <div className="contact-info-card" style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
              <div className="ci-icon" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(193,36,42,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '22px', color: 'var(--color-red)' }}>
                <i className="fas fa-envelope" />
              </div>
              <h5>Email</h5>
              <p>geral@academiaindustrial.net</p>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '48px auto 0' }}>
            <form onSubmit={handleContactSubmit} className="s-form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input name="name" placeholder="Nome" type="text"
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} />
                <input name="email" placeholder="Email" type="email"
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
                <input name="phone" placeholder="Telefone" type="text"
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} />
                <input name="subject" placeholder="Assunto" type="text"
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} />
              </div>
              <textarea name="message" rows="5" placeholder="Mensagem"
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} />
              <button className="s-btn s-btn-primary" type="submit">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
