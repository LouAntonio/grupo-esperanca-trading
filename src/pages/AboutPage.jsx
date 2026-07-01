import { Link } from 'react-router-dom';

export default function AboutPage() {
	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/files/Quem-Somos-1920-x-1080.png)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">Grupo Esperança Trading, Lda</h1>
					<p className="page-hero-subtitle">Da terra angolana para a sua mesa</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div
						className="home-page about-grid"
						style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}
					>
						<div className="about-text-col">
							<span className="s-eyebrow">Sobre Nós</span>
							<h2
								className="s-title"
								style={{ position: 'relative', paddingBottom: '16px', marginBottom: '20px' }}
							>
								Quem Somos
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
								O Grupo Esperança Trading, Lda é uma empresa angolana de transformação alimentar,
								comprometida com o desenvolvimento industrial e a promoção da saúde através da
								alimentação. Detentora das marcas Toto Drink e Toto Food, a empresa actua na produção de
								sumos naturais sem conservantes e alimentos africanos tradicionais, valorizando os
								produtos da terra e impulsionando o consumo orgânico em Angola e além-fronteiras.
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
								<strong style={{ color: 'var(--color-dark)' }}>
									Da terra angolana para a sua mesa
								</strong>{' '}
								— Cada produto nasce do compromisso com a terra, com os agricultores locais e com a
								saúde de quem nos escolhe. Produzimos com respeito pela origem natural dos ingredientes,
								sem aditivos químicos e sem conservantes.
							</p>
							<Link className="s-btn s-btn-primary" to="/marcas">
								Conheça as Nossas Marcas
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
						<span className="s-eyebrow">Propósito</span>
						<h2 className="s-title">Missão & Visão</h2>
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
								Missão
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								Promover a boa saúde através de uma alimentação saudável, investindo na indústria
								alimentar orgânica e na transformação de produtos sem aditivos químicos.
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
								Visão
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								Transformar Angola e África em referências industriais, capazes de combater a
								insuficiência alimentar e reduzir a pobreza extrema, formando jovens em transformação,
								conservação e certificação de produtos locais.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">Fundamentos</span>
						<h2 className="s-title">Valores e Objectivos</h2>
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
								Fomentar o espírito empreendedor jovem
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								Acreditamos no potencial da juventude angolana como motor de transformação do sector
								alimentar.
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
								Criar pequenas e médias indústrias locais sustentáveis
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								Impulsionar o desenvolvimento industrial local com modelos de negócio sustentáveis e
								replicáveis.
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
								Reduzir o êxodo juvenil
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								Gerar emprego e capacitação técnica para fixar os jovens nas suas comunidades de origem.
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
								Contribuir para o crescimento económico e social
							</h3>
							<p
								className="why-text"
								style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-muted)', margin: 0 }}
							>
								Gerar impacto positivo em Angola e em África através da produção alimentar de qualidade.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
