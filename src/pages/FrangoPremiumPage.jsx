import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import products from '../data/products';

export default function FrangoPremiumPage() {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState('frango_premium');

	const tabs = [{ key: 'frango_premium', label: t('frango_tab_frango') }];

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/files/Loja-1920-x-1080.png)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">{t('frango_hero_title')}</h1>
					<p className="page-hero-subtitle">{t('frango_hero_subtitle')}</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="brand-showcase" style={{ marginBottom: '60px' }}>
						<div className="brand-showcase-img">
							<img src="/img/marcas/frangopremium.png" alt="Frango Premium" />
						</div>
						<div className="brand-showcase-text">
							<span className="s-eyebrow">{t('frango_brand_eyebrow')}</span>
							<h2 className="s-title">{t('frango_hero_title')}</h2>
							<p className="brand-tagline-inline">{t('frango_hero_subtitle')}</p>
							<p>{t('frango_desc_1')}</p>
							<p style={{ marginTop: '16px' }}>{t('frango_desc_2')}</p>
							<Link className="s-btn s-btn-primary" to="/catalog">
								{t('frango_catalog_btn')}
							</Link>
						</div>
					</div>

					<div className="s-header">
						<span className="s-eyebrow">{t('frango_products_eyebrow')}</span>
						<h2 className="s-title">{t('frango_products_title')}</h2>
						<p className="s-sub">{t('frango_products_subtitle')}</p>
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
