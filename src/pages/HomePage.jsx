import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import products from '../data/products';

const row1 = [
	'/img/files/slider/1.png',
	'/img/files/slider/2.png',
	'/img/files/slider/3.png',
	'/img/files/slider/4.png',
];
const row2 = [
	'/img/files/slider/5.png',
	'/img/files/slider/6.png',
	'/img/files/slider/7.png',
	'/img/files/slider/8.png',
];

function MarqueeRow({ images, speed = 0.6, dir }) {
	const containerRef = useRef(null);
	const trackRef = useRef(null);
	const posRef = useRef(0);
	const rafRef = useRef(null);
	const setWidthRef = useRef(0);
	const [paused, setPaused] = useState(false);
	const readyRef = useRef(false);

	const measure = useCallback(() => {
		const track = trackRef.current;
		if (!track || track.scrollWidth === 0) return;
		setWidthRef.current = track.scrollWidth / 3;
		if (setWidthRef.current > 10) {
			readyRef.current = true;
			if (dir === 'right') {
				posRef.current = -setWidthRef.current;
				track.style.transform = `translateX(${posRef.current}px)`;
			}
		}
	}, []);

	useEffect(() => {
		measure();
		const imgs = trackRef.current?.querySelectorAll('img') || [];
		let count = 0;
		const check = () => {
			count++;
			if (count === imgs.length) measure();
		};
		imgs.forEach((img) => {
			img.onerror = check;
			img.complete ? check() : (img.onload = check);
		});
	}, [measure]);

	useEffect(() => {
		const step = () => {
			const sw = setWidthRef.current;
			if (readyRef.current && sw > 0 && !paused) {
			if (dir === 'left') {
				posRef.current -= speed;
				if (posRef.current <= -sw) posRef.current = 0;
			} else {
				posRef.current += speed;
				if (posRef.current >= 0) posRef.current = -sw;
			}
				trackRef.current.style.transform = `translateX(${posRef.current}px)`;
			}
			rafRef.current = requestAnimationFrame(step);
		};
		rafRef.current = requestAnimationFrame(step);
		return () => cancelAnimationFrame(rafRef.current);
	}, [paused, speed, dir]);

	return (
		<div
			ref={containerRef}
			style={{ overflow: 'hidden', padding: '20px 0' }}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div ref={trackRef} style={{ display: 'flex', width: 'max-content' }}>
				{[...images, ...images, ...images].map((src, i) => (
					<img key={i} src={src} alt="" style={{ height: 200, display: 'block' }} />
				))}
			</div>
		</div>
	);
}

export default function HomePage() {
	const { t } = useTranslation();

	return (
		<>
			<div className="slider-area slider-margin sliderMargin">
				<div className="slider-active">
					<div
						className="single-slider slider-height d-flex align-items-center"
						style={{ height: '100vh', backgroundImage: 'url(/img/files/1920-x-1080.pn)' }}
					>
						<div className="w-100">
							<MarqueeRow images={row1} dir="left" speed={0.6} />
							<MarqueeRow images={row2} dir="right" speed={0.6} />
						</div>
					</div>
				</div>
			</div>

			<div className="home-page">
				<section className="s-stats">
					<div className="s-container">
						<div className="stats-grid">
							<div className="stat-item">
								<div className="stat-bar" />
								<div className="stat-value">
									<span className="stat-plus">+</span>
									<CountUp end={3} />
								</div>
								<span className="stat-label">{t('home_stats_brands')}</span>
							</div>
							<div className="stat-item">
								<div className="stat-bar" />
								<div className="stat-value">
									<span className="stat-plus">+</span>
									<CountUp end={100} />
								</div>
								<span className="stat-label">{t('home_stats_organic')}</span>
							</div>
							<div className="stat-item">
								<div className="stat-bar" />
								<div className="stat-value">
									<span className="stat-plus">+</span>
									<CountUp end={0} />
								</div>
								<span className="stat-label">{t('home_stats_preservatives')}</span>
							</div>
						</div>
					</div>
				</section>

				<section className="s-about">
					<div className="s-container">
						<div className="about-grid">
							<div className="about-text-col">
								<span className="s-eyebrow">{t('home_about_eyebrow')}</span>
								<h2 className="s-title">{t('home_about_title')}</h2>
								<p className="about-body">{t('home_about_body_1')}</p>
								<p className="about-body">
									<strong>{t('about_hero_subtitle')}</strong> {t('home_about_body_2')}
								</p>
								<Link className="about-btn" to="/about">
									{t('home_about_btn')}
								</Link>
							</div>
							<div className="about-img-col">
								<div className="about-frame">
									<img src="/img/about/about.jpg" alt="Grupo Esperança Trading" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="s-section-alt">
					<div className="s-container">
						<div className="s-header">
							<span className="s-eyebrow">{t('home_different_eyebrow')}</span>
							<h2 className="s-title">{t('home_different_title')}</h2>
						</div>
						<div className="why-grid">
							<div className="why-card">
								<div className="why-icon">
									<i className="fas fa-globe-africa" />
								</div>
								<h3 className="why-title">{t('home_why_title_1')}</h3>
								<p className="why-text">{t('home_why_text_1')}</p>
							</div>
							<div className="why-card">
								<div className="why-icon">
									<i className="fas fa-ban" />
								</div>
								<h3 className="why-title">{t('home_why_title_2')}</h3>
								<p className="why-text">{t('home_why_text_2')}</p>
							</div>
							<div className="why-card">
								<div className="why-icon">
									<i className="fas fa-truck" />
								</div>
								<h3 className="why-title">{t('home_why_title_3')}</h3>
								<p className="why-text">{t('home_why_text_3')}</p>
							</div>
							<div className="why-card">
								<div className="why-icon">
									<i className="fas fa-shopping-cart" />
								</div>
								<h3 className="why-title">{t('home_why_title_4')}</h3>
								<p className="why-text">{t('home_why_text_4')}</p>
							</div>
						</div>
					</div>
				</section>

				<section className="s-section">
					<div className="s-container">
						<div className="s-header">
							<span className="s-eyebrow">{t('home_brands_eyebrow')}</span>
							<h2 className="s-title">{t('home_brands_title')}</h2>
							<p className="s-sub">{t('home_brands_subtitle')}</p>
						</div>
						<div className="brands-grid">
							<div className="brand-card">
								<div className="brand-icon">
									<i className="fas fa-leaf" />
								</div>
								<h3 className="brand-name">{t('home_brand_toto_name')}</h3>
								<p className="brand-tagline">{t('home_brand_toto_tagline')}</p>
								<p className="brand-desc">{t('home_brand_toto_desc')}</p>
								<Link className="brand-btn" to="/brands">
									{t('home_brand_toto_btn')}
								</Link>
							</div>
							<div className="brand-card">
								<div className="brand-icon">
									<i className="fas fa-utensils" />
								</div>
								<h3 className="brand-name">{t('home_brand_tofood_name')}</h3>
								<p className="brand-tagline">{t('home_brand_tofood_tagline')}</p>
								<p className="brand-desc">{t('home_brand_tofood_desc')}</p>
								<Link className="brand-btn" to="/brands">
									{t('home_brand_tofood_btn')}
								</Link>
							</div>
							<div className="brand-card">
								<div className="brand-icon">
									<i className="fas fa-drumstick-bite" />
								</div>
								<h3 className="brand-name">{t('home_brand_frango_name')}</h3>
								<p className="brand-tagline">{t('home_brand_frango_tagline')}</p>
								<p className="brand-desc">{t('home_brand_frango_desc')}</p>
								<Link className="brand-btn" to="/brands">
									{t('home_brand_frango_btn')}
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="s-section-alt">
					<div className="s-container">
						<div className="s-header">
							<span className="s-eyebrow">{t('home_products_eyebrow')}</span>
							<h2 className="s-title">{t('home_products_title')}</h2>
							<p className="s-sub">{t('home_products_subtitle')}</p>
						</div>
						<div className="products-grid">
							{products.sumo_natural.slice(0, 4).map((product, i) => (
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
										{t('home_product_buy_btn')}
									</a>
								</div>
							))}
						</div>
						<div className="products-more">
							<Link to="/catalog">{t('home_product_see_more')}</Link>
						</div>
					</div>
				</section>

				<section className="s-cta">
					<div className="s-container">
						<div className="cta-content">
							<h2 className="cta-title">{t('home_cta_title')}</h2>
							<p className="cta-text">{t('home_cta_text')}</p>
							<Link className="cta-btn" to="/contact">
								{t('home_cta_btn')}
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

function CountUp({ end }) {
	const ref = useRef(null);
	const [counted, setCounted] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !counted) {
					setCounted(true);
				}
			},
			{ threshold: 0.5 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [counted]);

	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!counted) return;
		let start = 0;
		const duration = 1000;
		const step = Math.ceil(end / (duration / 16));
		const timer = setInterval(() => {
			start += step;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(start);
			}
		}, 16);
		return () => clearInterval(timer);
	}, [counted, end]);

	return (
		<h1 className="counter" ref={ref}>
			{count}
		</h1>
	);
}
