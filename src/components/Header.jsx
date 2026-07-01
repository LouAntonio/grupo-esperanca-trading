import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
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
	}, [location]);

	return (
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
						<div className="col-xl-9 col-lg-9 row" style={{ justifyContent: 'end', alignItems: 'center' }}>
							<div className="main-menu" style={{ textAlign: 'right' }}>
								<nav id="mobile-menu">
									<ul>
										<li className={pathname === '/' ? 'active' : ''}>
											<Link to="/">Home</Link>
										</li>
										<li className={pathname === '/sobre' ? 'active' : ''}>
											<Link to="/sobre">Sobre</Link>
										</li>
										<li className={pathname.startsWith('/marca') ? 'active' : ''}>
											<Link to="/marcas">Marcas</Link>
										</li>
										<li className={pathname === '/catalogo' ? 'active' : ''}>
											<Link to="/catalogo">Catálogo</Link>
										</li>
										<li className={pathname === '/galeria' ? 'active' : ''}>
											<Link to="/galeria">Galeria</Link>
										</li>
										<li className={pathname === '/contacto' ? 'active' : ''}>
											<Link to="/contacto">Contacto</Link>
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
	);
}
