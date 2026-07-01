import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
	const { t } = useTranslation();

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/files/Quem-Somos-1920-x-1080.png)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">{t('about_hero_title')}</h1>
					<p className="page-hero-subtitle">{t('about_hero_subtitle')}</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div
						className="home-page about-grid"
						style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}
					>
						<div className="about-text-col">
							<span className="s-eyebrow">{t('about_about_eyebrow')}</span>
							<h2
								className="s-title"
								style={{ position: 'relative', paddingBottom: '16px', marginBottom: '20px' }}
							>
								{t('about_about_title')}
							</h2>
							<p
								className="about-body"
								style={{
									fontSize: '15px',
									lineHeight: '1.8',
									color: 'var(--color-muted)',
									marginBottom: '20px',
								}}
							>
								{t('about_about_body_1')}
							</p>
							<p
								className="about-body"
								style={{
									fontSize: '15px',
									lineHeight: '1.8',
									color: 'var(--color-muted)',
									marginBottom: '20px',
								}}
							>
								<strong style={{ color: 'var(--color-dark)' }}>{t('about_hero_subtitle')}</strong>{' '}
								{t('about_about_body_2')}
							</p>
							<Link className="s-btn s-btn-primary" to="/brands">
								{t('about_about_btn')}
							</Link>
						</div>
						<div className="about-img-col" style={{ display: 'flex', justifyContent: 'center' }}>
							<div
								className="about-frame"
								style={{
									position: 'relative',
									borderRadius: 'var(--radius-lg)',
									overflow: 'hidden',
									boxShadow: 'var(--shadow-card)',
								}}
							>
								<img
									src="/img/files/628-x-893.png"
									alt="Grupo Esperança Trading"
									style={{ display: 'block', width: '100%', height: '380px', objectFit: 'cover' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="s-section-alt">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">{t('about_purpose_eyebrow')}</span>
						<h2 className="s-title">{t('about_purpose_title')}</h2>
					</div>
					<div className="mission-grid">
						<div
							className="why-card"
							style={{
								background: '#fff',
								borderRadius: 'var(--radius-md)',
								padding: '32px 28px',
								boxShadow: 'var(--shadow-card)',
								textAlign: 'left',
							}}
						>
							<div
								className="why-icon"
								style={{
									width: '52px',
									height: '52px',
									borderRadius: '50%',
									background: 'rgba(134,186,9,0.1)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: '16px',
									fontSize: '22px',
									color: 'var(--color-green)',
								}}
							>
								<i className="fas fa-bullseye" />
							</div>
							<h3
								className="why-title"
								style={{
									fontFamily: "'Rubik', sans-serif",
									fontSize: '18px',
									fontWeight: 600,
									color: 'var(--color-dark)',
									margin: '0 0 8px',
								}}
							>
								{t('about_mission_title')}
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								{t('about_mission_text')}
							</p>
						</div>
						<div
							className="why-card"
							style={{
								background: '#fff',
								borderRadius: 'var(--radius-md)',
								padding: '32px 28px',
								boxShadow: 'var(--shadow-card)',
								textAlign: 'left',
							}}
						>
							<div
								className="why-icon"
								style={{
									width: '52px',
									height: '52px',
									borderRadius: '50%',
									background: 'rgba(134,186,9,0.1)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: '16px',
									fontSize: '22px',
									color: 'var(--color-green)',
								}}
							>
								<i className="fas fa-eye" />
							</div>
							<h3
								className="why-title"
								style={{
									fontFamily: "'Rubik', sans-serif",
									fontSize: '18px',
									fontWeight: 600,
									color: 'var(--color-dark)',
									margin: '0 0 8px',
								}}
							>
								{t('about_vision_title')}
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								{t('about_vision_text')}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">{t('about_values_eyebrow')}</span>
						<h2 className="s-title">{t('about_values_title')}</h2>
					</div>
					<div
						className="home-page why-grid"
						style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}
					>
						<div
							className="why-card"
							style={{
								background: '#fff',
								borderRadius: 'var(--radius-md)',
								padding: '32px 28px',
								boxShadow: 'var(--shadow-card)',
								border: '1px solid transparent',
								transition: 'transform 0.3s, box-shadow 0.3s',
							}}
						>
							<div
								className="why-icon"
								style={{
									width: '52px',
									height: '52px',
									borderRadius: '50%',
									background: 'rgba(134,186,9,0.1)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: '16px',
									fontSize: '22px',
									color: 'var(--color-green)',
								}}
							>
								<i className="fas fa-seedling" />
							</div>
							<h3
								className="why-title"
								style={{
									fontFamily: "'Rubik', sans-serif",
									fontSize: '18px',
									fontWeight: 600,
									color: 'var(--color-dark)',
									margin: '0 0 8px',
								}}
							>
								{t('about_value_title_1')}
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								{t('about_value_text_1')}
							</p>
						</div>
						<div
							className="why-card"
							style={{
								background: '#fff',
								borderRadius: 'var(--radius-md)',
								padding: '32px 28px',
								boxShadow: 'var(--shadow-card)',
								border: '1px solid transparent',
								transition: 'transform 0.3s, box-shadow 0.3s',
							}}
						>
							<div
								className="why-icon"
								style={{
									width: '52px',
									height: '52px',
									borderRadius: '50%',
									background: 'rgba(134,186,9,0.1)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: '16px',
									fontSize: '22px',
									color: 'var(--color-green)',
								}}
							>
								<i className="fas fa-industry" />
							</div>
							<h3
								className="why-title"
								style={{
									fontFamily: "'Rubik', sans-serif",
									fontSize: '18px',
									fontWeight: 600,
									color: 'var(--color-dark)',
									margin: '0 0 8px',
								}}
							>
								{t('about_value_title_2')}
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								{t('about_value_text_2')}
							</p>
						</div>
						<div
							className="why-card"
							style={{
								background: '#fff',
								borderRadius: 'var(--radius-md)',
								padding: '32px 28px',
								boxShadow: 'var(--shadow-card)',
								border: '1px solid transparent',
								transition: 'transform 0.3s, box-shadow 0.3s',
							}}
						>
							<div
								className="why-icon"
								style={{
									width: '52px',
									height: '52px',
									borderRadius: '50%',
									background: 'rgba(134,186,9,0.1)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: '16px',
									fontSize: '22px',
									color: 'var(--color-green)',
								}}
							>
								<i className="fas fa-users" />
							</div>
							<h3
								className="why-title"
								style={{
									fontFamily: "'Rubik', sans-serif",
									fontSize: '18px',
									fontWeight: 600,
									color: 'var(--color-dark)',
									margin: '0 0 8px',
								}}
							>
								{t('about_value_title_3')}
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								{t('about_value_text_3')}
							</p>
						</div>
						<div
							className="why-card"
							style={{
								background: '#fff',
								borderRadius: 'var(--radius-md)',
								padding: '32px 28px',
								boxShadow: 'var(--shadow-card)',
								border: '1px solid transparent',
								transition: 'transform 0.3s, box-shadow 0.3s',
							}}
						>
							<div
								className="why-icon"
								style={{
									width: '52px',
									height: '52px',
									borderRadius: '50%',
									background: 'rgba(134,186,9,0.1)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: '16px',
									fontSize: '22px',
									color: 'var(--color-green)',
								}}
							>
								<i className="fas fa-chart-line" />
							</div>
							<h3
								className="why-title"
								style={{
									fontFamily: "'Rubik', sans-serif",
									fontSize: '18px',
									fontWeight: 600,
									color: 'var(--color-dark)',
									margin: '0 0 8px',
								}}
							>
								{t('about_value_title_4')}
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								{t('about_value_text_4')}
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
