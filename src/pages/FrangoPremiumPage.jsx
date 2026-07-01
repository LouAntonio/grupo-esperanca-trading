import { useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

const tabs = [
  { key: 'frango_premium', label: 'Frango Premium' },
]

export default function FrangoPremiumPage() {
  const [activeTab, setActiveTab] = useState('frango_premium')

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(/img/files/Loja-1920-x-1080.png)' }}>
        <div className="page-hero-content">
          <h1 className="page-hero-title">Frango Premium</h1>
          <p className="page-hero-subtitle">Frango grelhado e assado, com acompanhamentos típicos</p>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="brand-showcase" style={{ marginBottom: '60px' }}>
            <div className="brand-showcase-img">
              <img src="/img/files/628-x-893.png" alt="Frango Premium" />
            </div>
            <div className="brand-showcase-text">
              <span className="s-eyebrow">Marca</span>
              <h2 className="s-title">Frango Premium</h2>
              <p className="brand-tagline-inline">Frango grelhado e assado, com acompanhamentos típicos</p>
              <p>Frango grelhado ou assado, servido com kiquanga, banana-pão frita ou batata — uma proposta gastronómica que une qualidade premium ao sabor tradicional angolano, ideal para o dia a dia ou para eventos especiais.</p>
              <p style={{ marginTop: '16px' }}>Cada refeição é preparada com ingredientes seleccionados e temperos tradicionais, garantindo uma experiência que combina o melhor da culinária angolana com o rigor e a qualidade que a marca Frango Premium representa.</p>
              <Link className="s-btn s-btn-primary" to="/catalogo">Ver Catálogo Completo</Link>
            </div>
          </div>

          <div className="s-header">
            <span className="s-eyebrow">Produtos</span>
            <h2 className="s-title">Os Nossos Produtos</h2>
            <p className="s-sub">Conheça a linha completa de produtos Frango Premium</p>
          </div>

          <div className="s-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`s-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="home-page">
            <div className="products-grid">
              {products[activeTab]?.length > 0 ? (
                products[activeTab].map((product, i) => (
                  <div key={i} className="prod-card">
                    <div className="prod-img">
                      <a href="#"><img src={product.image} alt={product.name} /></a>
                    </div>
                    <h4 className="prod-name"><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{product.name}</a></h4>
                    <span className="prod-price">{product.price}</span>
                    <a className="prod-btn" href="#">COMPRAR</a>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0' }}>
                  <p style={{ fontSize: '16px', color: 'var(--color-muted)' }}>Em breve</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
