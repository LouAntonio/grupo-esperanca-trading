import { Link } from 'react-router-dom'
import services from '../data/services'

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(/img/files/Pulvieto-1920-x-1080.png)' }}>
        <div className="page-hero-content">
          <h1 className="page-hero-title">As Nossas Marcas</h1>
          <p className="page-hero-subtitle">Toto Drink · Toto Food · Frango Premium</p>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="brand-showcase">
            <div className="brand-showcase-img">
              <img src="/img/files/628-x-893.png" alt="Toto Drink" />
            </div>
            <div className="brand-showcase-text">
              <span className="s-eyebrow">Marca</span>
              <h2 className="s-title">Toto Drink</h2>
              <p className="brand-tagline-inline">Sumos naturais, 100% orgânicos, sem conservantes</p>
              <p>Produzidos a partir de frutas locais cuidadosamente seleccionadas, os sumos Toto Drink trazem o sabor genuíno de Angola directamente para a sua mesa. Sem aditivos químicos, sem conservantes — apenas fruta, frescura e qualidade em cada garrafa.</p>
              <Link className="s-btn s-btn-primary" to="/marca/toto-drink">Ver Produtos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section-alt">
        <div className="s-container">
          <div className="brand-showcase reverse">
            <div className="brand-showcase-img">
              <img src="/img/files/628-x-893.png" alt="Toto Food" />
            </div>
            <div className="brand-showcase-text">
              <span className="s-eyebrow">Marca</span>
              <h2 className="s-title">Toto Food</h2>
              <p className="brand-tagline-inline">Linha alimentar tradicional africana</p>
              <p>Uma linha centrada em pratos e conservas típicas africanas, que preserva o sabor autêntico e as características nutricionais dos alimentos angolanos. Toto Food é a forma de manter viva a tradição alimentar do nosso país, com qualidade industrial e confiança de mesa.</p>
              <Link className="s-btn s-btn-primary" to="/marca/toto-food">Ver Produtos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="brand-showcase">
            <div className="brand-showcase-img">
              <img src="/img/files/628-x-893.png" alt="Frango Premium" />
            </div>
            <div className="brand-showcase-text">
              <span className="s-eyebrow">Marca</span>
              <h2 className="s-title">Frango Premium</h2>
              <p className="brand-tagline-inline">Frango grelhado e assado, com acompanhamentos típicos</p>
              <p>Frango grelhado ou assado, servido com kiquanga, banana-pão frita ou batata — uma proposta gastronómica que une qualidade premium ao sabor tradicional angolano, ideal para o dia a dia ou para eventos especiais.</p>
              <Link className="s-btn s-btn-primary" to="/marca/frango-premium">Ver Produtos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section-alt">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Serviços</span>
            <h2 className="s-title">Todos os Serviços</h2>
            <p className="s-sub">Da produção à entrega, soluções alimentares completas para famílias, empresas e eventos</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.id} className="service-card" style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', transition: 'transform 0.3s, box-shadow 0.3s', textAlign: 'left', border: '1px solid transparent' }}>
                <div className="service-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(134,186,9,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '20px', color: 'var(--color-green)' }}>
                  <i className={`fas ${i % 2 === 0 ? 'fa-leaf' : 'fa-apple-alt'}`} />
                </div>
                <h3 style={{ fontFamily: "'Rubik', sans-serif", fontSize: '17px', fontWeight: 600, color: 'var(--color-dark)', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
