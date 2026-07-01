import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const languages = [
	{ code: 'pt', label: 'lang_pt' },
	{ code: 'en', label: 'lang_en' },
	{ code: 'fr', label: 'lang_fr' },
];

export default function Header() {
	const { t, i18n } = useTranslation();
	const { pathname } = useLocation();
	const isHome = pathname === '/';
	const headerRef = useRef(null);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const el = headerRef.current;
			if (!el) return;
			if (window.scrollY < 100) {
				el.classList.remove('sticky');
			} else {
				el.classList.add('sticky');
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
	}, [pathname]);

	return (
		<>
			<header className={`header-transparent${!isHome ? ' header-light' : ''}`}>
				<div ref={headerRef} id="sticky-header" className="main-menu-area mt-20">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-3 d-flex align-items-center">
								<div className="logo">
									<Link to="/">
										<img src="/img/logo/newLogo.png" width="200" alt="Grupo Esperança Trading" />
									</Link>
								</div>
							</div>
							<div
								className="col-xl-9 col-lg-9 row"
								style={{ justifyContent: 'end', alignItems: 'center' }}
							>
								<div className="main-menu" style={{ textAlign: 'right' }}>
									<nav id="mobile-menu">
										<ul>
											<li className={pathname === '/' ? 'active' : ''}>
												<Link to="/">{t('header_home')}</Link>
											</li>
											<li className={pathname === '/about' ? 'active' : ''}>
												<Link to="/about">{t('header_about')}</Link>
											</li>
											<li className={pathname.startsWith('/brand') ? 'active' : ''}>
												<Link to="/brands">{t('header_brands')}</Link>
											</li>
											<li className={pathname === '/catalog' ? 'active' : ''}>
												<Link to="/catalog">{t('header_catalog')}</Link>
											</li>
											<li className={pathname === '/gallery' ? 'active' : ''}>
												<Link to="/gallery">{t('header_gallery')}</Link>
											</li>
											<li className={pathname === '/contact' ? 'active' : ''}>
												<Link to="/contact">{t('header_contact')}</Link>
											</li>
										</ul>
									</nav>
								</div>
								<div className="mobile-menu"></div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="lang-sidebar">
				{languages.map((lang) => (
					<button
						key={lang.code}
						className={`lang-sidebar-btn ${i18n.language === lang.code ? 'active' : ''}`}
						onClick={() => i18n.changeLanguage(lang.code)}
						title={t(lang.label)}
					>
						{lang.code.toUpperCase()}
					</button>
				))}
			</div>
		</>
	);
}
