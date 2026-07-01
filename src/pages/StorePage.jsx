import { useState } from 'react'
import products from '../data/products'

const tabs = [
  { key: 'sumo_natural', label: 'Sumo Natural' },
  { key: 'detox', label: 'Detox & Energéticos' },
  { key: 'legumes_congelados', label: 'Legumes Congelados' },
  { key: 'quitutes', label: 'Quitutes' },
  { key: 'frango_premium', label: 'Frango Premium' },
]

export default function StorePage() {
  const [activeTab, setActiveTab] = useState('sumo_natural')

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'url(/img/files/Loja-1920-x-1080.png)' }}>
        <div className="page-hero-content">
          <h1 className="page-hero-title">Loja</h1>
          <p className="page-hero-subtitle">Produtos naturais, frescos e feitos com cuidado</p>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="s-header">
            <span className="s-eyebrow">Produtos</span>
            <h2 className="s-title">Os Nossos Produtos</h2>
            <p className="s-sub">Produtos naturais, frescos e feitos com cuidado — da terra angolana para a sua mesa</p>
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

          <div className="home-page products-grid">
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
      </section>
    </>
  )
}
