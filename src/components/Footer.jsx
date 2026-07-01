import { Link } from 'react-router-dom';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="s-footer">
			<div className="footer-grid">
				<div>
					<div className="footer-desc">
						O Grupo Esperança Trading, Lda é uma empresa angolana de transformação alimentar, detentora das
						marcas Toto Drink, Toto Food e Frango Premium, comprometida com a produção de alimentos naturais
						e orgânicos.
					</div>
					<div className="footer-social">
						<a href="https://www.instagram.com/totodrink.ao" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
							<i className="fab fa-instagram" />
						</a>
						<a href="https://wa.me/946222900" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
							<i className="fab fa-whatsapp" />
						</a>
					</div>
				</div>

				<div>
					<h4 className="footer-title">Marcas</h4>
					<ul className="footer-links">
						<li>
							<Link to="/marca/toto-drink">Toto Drink — Sumos Naturais</Link>
						</li>
						<li>
							<Link to="/marca/toto-food">Toto Food — Linha Tradicional</Link>
						</li>
						<li>
							<Link to="/marca/frango-premium">Frango Premium</Link>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="footer-title">Contactos</h4>
					<ul className="footer-address">
						<li>
							<strong>Endereço</strong>
							Golf 2. Quintalão do Petro, entre o Banco Sol e Fábrica de Blocos.
						</li>
						<li>
							<strong>Telefone</strong>
							<a href="tel:946222900">946 222 900</a> / <a href="tel:946222708">946 222 708</a>
						</li>
						<li>
							<strong>Email</strong>
							<a href="mailto:geral@grupoesperanca.com">geral@grupoesperanca.com</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="footer-bottom-inner">
					<p>
						Copyright &copy; {year} <a href="#">Grupo Esperança Trading, Lda</a>. Todos os Direitos
						Reservados.
					</p>
					<p>
						Desenvolvido por{' '}
						<a href="https://louantonio.me" target="_blank" rel="noopener noreferrer">
							LouAntonio
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
