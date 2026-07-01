import { useState } from 'react'
import products from '../data/products'

const tabs = [
  { key: 'diversos', label: 'Diversos' },
  { key: 'legumes', label: 'Legumes' },
  { key: 'animais', label: 'Animais' },
  { key: 'racao', label: 'Ração' },
  { key: 'medicamento', label: 'Medicamentos' },
  { key: 'materiais', label: 'Materiais' },
  { key: 'maquinas', label: 'Máquinas' },
]

export default function StorePage() {
  const [activeTab, setActiveTab] = useState('racao')

  return (
    <>
      <div className="breadcrumb-area breadcrumb-margin pt-260 pb-180" style={{ backgroundImage: 'url(/img/files/Loja-1920-x-1080.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Loja</h1>
                <ul className="breadcrumb-menu">
                  <li><a href="/">home</a></li>
                  <li><span>Loja</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-area pos-relative pt-110 pb-120 fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs" id="productTab" role="tablist">
                {tabs.map((tab) => (
                  <li key={tab.key} className="nav-item">
                    <a
                      className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); setActiveTab(tab.key) }}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="productTabContent">
                {tabs.map((tab) => (
                  <div
                    key={tab.key}
                    className={`tab-pane fade ${activeTab === tab.key ? 'show active' : ''}`}
                  >
                    <div className="row">
                      {products[tab.key]?.length > 0 ? (
                        products[tab.key].map((product, i) => (
                          <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                            <div className="product-wrapper text-center mb-30">
                              <div className="product-img">
                                <a href="#"><img src={product.image} alt={product.name} /></a>
                              </div>
                              <div className="product-text">
                                <h4><a href="#">{product.name}</a></h4>
                                <div className="pro-price"><span>{product.price}</span></div>
                                <br />
                                <a className="btn px-2 py-2" href="#">COMPRAR</a>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-12 text-center py-5">
                          <p>Em breve</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
