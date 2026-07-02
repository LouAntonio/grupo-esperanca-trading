import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import products from '../data/products';

export default function TotoFoodPage() {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState('legumes_congelados');

	const tabs = [
		{ key: 'legumes_congelados', label: t('toto_food_tab_legumes') },
		{ key: 'quitutes', label: t('toto_food_tab_quitutes') },
	];

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/files/Loja-1920-x-1080.png)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">{t('toto_food_hero_title')}</h1>
					<p className="page-hero-subtitle">{t('toto_food_hero_subtitle')}</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="brand-showcase" style={{ marginBottom: '60px' }}>
						<div className="brand-showcase-img">
							<img src="/img/marcas/totofood.png" alt="Toto Food" />
						</div>
						<div className="brand-showcase-text">
							<span className="s-eyebrow">{t('toto_food_brand_eyebrow')}</span>
							<h2 className="s-title">{t('toto_food_hero_title')}</h2>
							<p className="brand-tagline-inline">{t('toto_food_hero_subtitle')}</p>
							<p>{t('toto_food_desc_1')}</p>
							<p style={{ marginTop: '16px' }}>{t('toto_food_desc_2')}</p>
							<Link className="s-btn s-btn-primary" to="/catalog">
								{t('toto_food_catalog_btn')}
							</Link>
						</div>
					</div>

					<div className="s-header">
						<span className="s-eyebrow">{t('toto_food_products_eyebrow')}</span>
						<h2 className="s-title">{t('toto_food_products_title')}</h2>
						<p className="s-sub">{t('toto_food_products_subtitle')}</p>
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
											{t('store_buy_btn')}
										</a>
									</div>
								))
							) : (
								<div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0' }}>
									<p style={{ fontSize: '16px', color: 'var(--color-muted)' }}>
										{t('store_coming_soon')}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
