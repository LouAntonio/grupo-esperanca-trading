import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import services from '../data/services';

export default function BrandsPage() {
	const { t } = useTranslation();

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/files/Pulvieto-1920-x-1080.png)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">{t('brands_hero_title')}</h1>
					<p className="page-hero-subtitle">{t('brands_hero_subtitle')}</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="brand-showcase">
						<div className="brand-showcase-img">
							<img src="/img/marcas/totodrink.png" alt="Toto Drink" />
						</div>
						<div className="brand-showcase-text">
							<span className="s-eyebrow">{t('brands_brand_eyebrow')}</span>
							<h2 className="s-title">Toto Drink</h2>
							<p className="brand-tagline-inline">{t('brands_toto_tagline')}</p>
							<p>{t('brands_toto_desc')}</p>
							<Link className="s-btn s-btn-primary" to="/brand/toto-drink">
								{t('brands_toto_btn')}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="s-section-alt">
				<div className="s-container">
					<div className="brand-showcase reverse">
						<div className="brand-showcase-img">
							<img src="/img/marcas/totofood.png" alt="Toto Food" />
						</div>
						<div className="brand-showcase-text">
							<span className="s-eyebrow">{t('brands_brand_eyebrow')}</span>
							<h2 className="s-title">Toto Food</h2>
							<p className="brand-tagline-inline">{t('brands_tofood_tagline')}</p>
							<p>{t('brands_tofood_desc')}</p>
							<Link className="s-btn s-btn-primary" to="/brand/toto-food">
								{t('brands_tofood_btn')}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="brand-showcase">
						<div className="brand-showcase-img">
							<img src="/img/marcas/frangopremium.png" alt="Frango Premium" />
						</div>
						<div className="brand-showcase-text">
							<span className="s-eyebrow">{t('brands_brand_eyebrow')}</span>
							<h2 className="s-title">Frango Premium</h2>
							<p className="brand-tagline-inline">{t('brands_frango_tagline')}</p>
							<p>{t('brands_frango_desc')}</p>
							<Link className="s-btn s-btn-primary" to="/brand/frango-premium">
								{t('brands_frango_btn')}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="s-section-alt">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">{t('brands_services_eyebrow')}</span>
						<h2 className="s-title">{t('brands_services_title')}</h2>
						<p className="s-sub">{t('brands_services_subtitle')}</p>
					</div>
					<div className="services-grid">
						{services.map((s, i) => (
							<div
								key={s.id}
								className="service-card"
								style={{
									background: '#fff',
									borderRadius: 'var(--radius-md)',
									padding: '32px 24px',
									boxShadow: 'var(--shadow-card)',
									transition: 'transform 0.3s, box-shadow 0.3s',
									textAlign: 'left',
									border: '1px solid transparent',
								}}
							>
								<div
									className="service-card-icon"
									style={{
										width: '48px',
										height: '48px',
										borderRadius: '50%',
										background: 'rgba(134,186,9,0.1)',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: '16px',
										fontSize: '20px',
										color: 'var(--color-green)',
									}}
								>
									<i className={`fas ${i % 2 === 0 ? 'fa-leaf' : 'fa-apple-alt'}`} />
								</div>
								<h3
									style={{
										fontFamily: "'Rubik', sans-serif",
										fontSize: '17px',
										fontWeight: 600,
										color: 'var(--color-dark)',
										margin: '0 0 8px',
									}}
								>
									{t(s.titleKey)}
								</h3>
								<p
									style={{
										fontSize: '14px',
										lineHeight: '1.7',
										color: 'var(--color-muted)',
										margin: 0,
									}}
								>
									{t(s.descriptionKey)}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
