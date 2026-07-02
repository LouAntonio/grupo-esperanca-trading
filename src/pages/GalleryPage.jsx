import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const galleryImages = [
	{ src: '/img/catalogo/rama.png', alt: 'Sumo Natural de Manga', cat: 'cat2' },
	{ src: '/img/catalogo/detox.png', alt: 'Sumo Detox Verde', cat: 'cat2' },
	{ src: '/img/catalogo/ananas.png', alt: 'Sumo Natural de Ananás', cat: 'cat2' },
	{ src: '/img/catalogo/quiabo.png', alt: 'Quiabo Congelado', cat: 'cat2' },
	{ src: '/img/slider/Imagem-1.png', alt: 'Grupo Esperança Trading', cat: 'cat3' },
	{ src: '/img/slider/Imagem-2.png', alt: 'Produtos Naturais', cat: 'cat3' },
];

export default function GalleryPage() {
	const { t } = useTranslation();
	const [activeFilter, setActiveFilter] = useState('*');
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const filters = [
		{ key: '*', label: t('gallery_filter_all') },
		{ key: 'cat2', label: t('gallery_filter_products') },
		{ key: 'cat3', label: t('gallery_filter_events') },
	];

	const filtered = activeFilter === '*' ? galleryImages : galleryImages.filter((img) => img.cat === activeFilter);

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg3.jpg)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">{t('gallery_hero_title')}</h1>
					<p className="page-hero-subtitle">{t('gallery_hero_subtitle')}</p>
				</div>
			</section>

			<section className="s-section-alt">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">{t('gallery_eyebrow')}</span>
						<h2 className="s-title">{t('gallery_title')}</h2>
					</div>

					<div className="s-tabs">
						{filters.map((f) => (
							<button
								key={f.key}
								className={`s-tab ${activeFilter === f.key ? 'active' : ''}`}
								onClick={() => setActiveFilter(f.key)}
							>
								{f.label}
							</button>
						))}
					</div>

					<div className="gallery-grid">
						{filtered.map((img, i) => (
							<div
								key={i}
								className="gallery-card"
								onClick={() => {
									setLightboxIndex(i);
									setLightboxOpen(true);
								}}
							>
								<img src={img.src} alt={img.alt} />
								<div className="gallery-card-overlay">
									<span>{t('gallery_overlay_text')}</span>
									<h3>{img.alt}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Lightbox
				open={lightboxOpen}
				close={() => setLightboxOpen(false)}
				index={lightboxIndex}
				slides={galleryImages.map((img) => ({ src: img.src }))}
			/>
		</>
	);
}
