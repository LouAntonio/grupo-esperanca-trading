import { useState } from 'react'

const initialContactForm = {
  nome: '', email: '', telefone: '', assunto: '', mensagem: '',
}

export default function ContactPage() {
  const [contactForm, setContactForm] = useState(initialContactForm)
  const [contactStatus, setContactStatus] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  const showFeedback = (type, message) => {
    setContactStatus({ type, message })
    setTimeout(() => setContactStatus(null), 6000)
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(contactForm),
      })
      if (res.ok) {
        showFeedback('success', 'Mensagem enviada com sucesso! Responderemos em breve.')
        setContactForm(initialContactForm)
      } else {
        showFeedback('error', 'Erro ao enviar mensagem. Tente novamente.')
      }
    } catch {
      showFeedback('error', 'Erro de conexão. Verifique a sua internet e tente novamente.')
    }
  }

  const faqs = [
    { id: 'faq1', question: 'Os vossos sumos têm conservantes?', answer: 'Não. Todos os sumos Toto Drink são 100% naturais, produzidos sem qualquer tipo de conservante ou aditivo químico. Apenas fruta fresca angolana cuidadosamente seleccionada.' },
    { id: 'faq2', question: 'Como posso fazer uma encomenda?', answer: 'Pode fazer a sua encomenda entrando em contacto connosco através do telefone ou email disponíveis nesta página. Entregamos directamente à sua porta.' },
    { id: 'faq3', question: 'Fazem entregas para eventos e empresas?', answer: 'Sim! Oferecemos fornecimento de sumos naturais, quitutes e Frango Premium para empresas, festas, conferências e eventos privados. Temos opções de quantidade e personalização conforme a dimensão do seu evento.' },
  ]

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(/img/files/Apoio-ao-Cliente-1920-x-1080.png)' }}>
        <div className="page-hero-content">
          <h1 className="page-hero-title">Fale Connosco</h1>
          <p className="page-hero-subtitle">Estamos aqui para ajudar. Encontre abaixo os nossos contactos ou envie-nos uma mensagem.</p>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="ci-icon"><i className="fas fa-map-marker-alt" /></div>
              <h5>Localização</h5>
              <p>Rua 123, Bairro Industrial, Luanda, Angola</p>
            </div>
            <div className="contact-info-card">
              <div className="ci-icon"><i className="fas fa-phone-alt" /></div>
              <h5>Suporte</h5>
              <p>912 345 678 / 910 234 567</p>
            </div>
            <div className="contact-info-card">
              <div className="ci-icon"><i className="fas fa-envelope" /></div>
              <h5>Email</h5>
              <p>geral@grupoesperanca.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section-alt">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Contacto</span>
            <h2 className="s-title">Envie-nos uma Mensagem</h2>
            <p className="s-sub">Questões gerais, parcerias ou sugestões — estamos a ouvir</p>
          </div>

          <div className="contact-form-box" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleContactSubmit} className="s-form">
              <div>
                <label htmlFor="contact-nome">Nome</label>
                <input id="contact-nome" name="nome" placeholder="O seu nome" type="text"
                  value={contactForm.nome}
                  onChange={(e) => setContactForm({ ...contactForm, nome: e.target.value })} />
              </div>
              <div>
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" placeholder="seu@email.com" type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
              </div>
              <div>
                <label htmlFor="contact-telefone">Telefone</label>
                <input id="contact-telefone" name="telefone" placeholder="+244 900 000 000" type="text"
                  value={contactForm.telefone}
                  onChange={(e) => setContactForm({ ...contactForm, telefone: e.target.value })} />
              </div>
              <div>
                <label htmlFor="contact-assunto">Assunto</label>
                <input id="contact-assunto" name="assunto" placeholder="Assunto da mensagem" type="text"
                  value={contactForm.assunto}
                  onChange={(e) => setContactForm({ ...contactForm, assunto: e.target.value })} />
              </div>
              <label htmlFor="contact-mensagem">Mensagem</label>
              <textarea id="contact-mensagem" name="mensagem" rows="5" placeholder="Escreva a sua mensagem..."
                value={contactForm.mensagem}
                onChange={(e) => setContactForm({ ...contactForm, mensagem: e.target.value })} />
              <button className="s-btn s-btn-primary" type="submit" style={{ width: '100%' }}>Enviar Mensagem</button>

              <div className={`form-feedback ${contactStatus ? 'show' : ''} ${contactStatus?.type || ''}`}>
                {contactStatus?.message}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="s-section">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Dúvidas</span>
            <h2 className="s-title">Perguntas Frequentes</h2>
            <p className="s-sub">Respostas rápidas para as dúvidas mais comuns</p>
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

      <section className="s-section-alt" style={{ paddingBottom: 0 }}>
        <div className="s-header">
          <span className="s-eyebrow">Visite-nos</span>
          <h2 className="s-title">Faça-nos uma Visita</h2>
          <p className="s-sub">Estamos localizados no coração industrial de Luanda</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63076.487027613286!2d13.228634743289762!3d-8.85346217621027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f144602345c1%3A0x76c38c44c0e8a910!2sIndustrial%20Academy!5e0!3m2!1spt-PT!2sao!4v1736763872382!5m2!1spt-PT!2sao"
          width="600" height="400"
          style={{ border: 0, width: '100%', display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Grupo Esperança Trading, Luanda"
        />
      </section>
    </>
  )
}
