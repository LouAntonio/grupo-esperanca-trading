import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const tabs = [
	{ key: 'legumes_congelados', label: 'Legumes Congelados' },
	{ key: 'quitutes', label: 'Quitutes' },
];

export default function TotoFoodPage() {
	const [activeTab, setActiveTab] = useState('legumes_congelados');

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/files/Loja-1920-x-1080.png)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">Toto Food</h1>
					<p className="page-hero-subtitle">Linha alimentar tradicional africana</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="brand-showcase" style={{ marginBottom: '60px' }}>
						<div className="brand-showcase-img">
							<img src="/img/files/628-x-893.png" alt="Toto Food" />
						</div>
						<div className="brand-showcase-text">
							<span className="s-eyebrow">Marca</span>
							<h2 className="s-title">Toto Food</h2>
							<p className="brand-tagline-inline">Linha alimentar tradicional africana</p>
							<p>
								Uma linha centrada em pratos e conservas típicas africanas, que preserva o sabor
								autêntico e as características nutricionais dos alimentos angolanos. Toto Food é a forma
								de manter viva a tradição alimentar do nosso país, com qualidade industrial e confiança
								de mesa.
							</p>
							<p style={{ marginTop: '16px' }}>
								De legumes congelados tradicionais como ervilha, quiabo, fumbua e kizaca, a quitutes
								engarrafados como gindungo em pó e jindungo preparado — a Toto Food traz o paladar de
								Angola para todas as refeições, com a praticidade que o dia a dia exige.
							</p>
							<Link className="s-btn s-btn-primary" to="/catalogo">
								Ver Catálogo Completo
							</Link>
						</div>
					</div>

					<div className="s-header">
						<span className="s-eyebrow">Produtos</span>
						<h2 className="s-title">Os Nossos Produtos</h2>
						<p className="s-sub">Conheça a linha completa de produtos Toto Food</p>
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
