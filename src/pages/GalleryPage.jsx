import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const galleryImages = [
	{ src: '/img/gallery/gallery1.jpg', alt: 'Produtos Toto Drink', cat: 'cat2' },
	{ src: '/img/gallery/gallery2.jpg', alt: 'Frango Premium', cat: 'cat3' },
	{ src: '/img/gallery/gallery3.jpg', alt: 'Sumos Naturais', cat: 'cat2' },
	{ src: '/img/gallery/gallery4.jpg', alt: 'Legumes Congelados', cat: 'cat2' },
	{ src: '/img/gallery/gallery5.jpg', alt: 'Eventos', cat: 'cat3' },
	{ src: '/img/gallery/gallery6.jpg', alt: 'Quitutes', cat: 'cat3' },
];

const filters = [
	{ key: '*', label: 'Todas' },
	{ key: 'cat2', label: 'Produtos' },
	{ key: 'cat3', label: 'Eventos' },
];

export default function GalleryPage() {
	const [activeFilter, setActiveFilter] = useState('*');
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const filtered = activeFilter === '*' ? galleryImages : galleryImages.filter((img) => img.cat === activeFilter);

	return (
		<>
			<section className="page-hero" style={{ backgroundImage: 'url(/img/bg/bg3.jpg)' }}>
				<div className="page-hero-content">
					<h1 className="page-hero-title">Galeria</h1>
					<p className="page-hero-subtitle">Veja imagens dos nossos produtos, eventos e muito mais...</p>
				</div>
			</section>

			<section className="s-section-alt">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">Fotos</span>
						<h2 className="s-title">A Nossa Galeria</h2>
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
									<span>Grupo Esperança Trading</span>
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
