import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const tabs = [
	{ key: 'sumo_natural', label: 'Sumo Natural' },
	{ key: 'detox', label: 'Detox & Energéticos' },
];

export default function TotoDrinkPage() {
	const [activeTab, setActiveTab] = useState('sumo_natural');

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/files/Loja-1920-x-1080.png)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">Toto Drink</h1>
					<p className="page-hero-subtitle">Sumos naturais, 100% orgânicos, sem conservantes</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="brand-showcase" style={{ marginBottom: '60px' }}>
						<div className="brand-showcase-img">
							<img src="/img/files/628-x-893.png" alt="Toto Drink" />
						</div>
						<div className="brand-showcase-text">
							<span className="s-eyebrow">Marca</span>
							<h2 className="s-title">Toto Drink</h2>
							<p className="brand-tagline-inline">Sumos naturais, 100% orgânicos, sem conservantes</p>
							<p>
								Produzidos a partir de frutas locais cuidadosamente seleccionadas, os sumos Toto Drink
								trazem o sabor genuíno de Angola directamente para a sua mesa. Sem aditivos químicos,
								sem conservantes — apenas fruta, frescura e qualidade em cada garrafa.
							</p>
							<p style={{ marginTop: '16px' }}>
								Cada variedade é pensada para oferecer uma experiência única de sabor, aproveitando o
								que de melhor a terra angolana tem para oferecer. Da manga doce ao maracujá tropical,
								passando pelo ananás refrescante e a goiaba aromática, a Toto Drink é a escolha natural
								para quem valoriza saúde e sabor.
							</p>
							<Link className="s-btn s-btn-primary" to="/catalogo">
								Ver Catálogo Completo
							</Link>
						</div>
					</div>

					<div className="s-header">
						<span className="s-eyebrow">Produtos</span>
						<h2 className="s-title">Os Nossos Produtos</h2>
						<p className="s-sub">Conheça a linha completa de sumos Toto Drink</p>
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
											<a href="#">
												<img src={product.image} alt={product.name} />
											</a>
										</div>
										<h4 className="prod-name">
											<a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
												{product.name}
											</a>
										</h4>
										<span className="prod-price">{product.price}</span>
										<a className="prod-btn" href="#">
											COMPRAR
										</a>
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
	);
}
