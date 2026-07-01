import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<footer className="s-footer">
			<div className="footer-grid">
				<div>
					<div className="footer-desc">{t('footer_description')}</div>
					<div className="footer-social">
						<a
							href="https://www.facebook.com/share/1bXnS9Mmdz"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f" />
						</a>
						<a
							href="https://www.instagram.com/totodrink.ao"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram" />
						</a>
						<a
							href="https://wa.me/946222900"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="WhatsApp"
						>
							<i className="fab fa-whatsapp" />
						</a>
					</div>
				</div>

				<div>
					<h4 className="footer-title">{t('footer_brands_title')}</h4>
					<ul className="footer-links">
						<li>
							<Link to="/brand/toto-drink">{t('footer_brand_toto_drink')}</Link>
						</li>
						<li>
							<Link to="/brand/toto-food">{t('footer_brand_toto_food')}</Link>
						</li>
						<li>
							<Link to="/brand/frango-premium">{t('footer_brand_frango')}</Link>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="footer-title">{t('footer_contacts_title')}</h4>
					<ul className="footer-address">
						<li>
							<strong>{t('footer_phone_label')}</strong>
							<a href="tel:946222900">946 222 900</a> / <a href="tel:946222708">946 222 708</a>
						</li>
						<li>
							<strong>{t('footer_email_label')}</strong>
							<a href="mailto:geral@grupoesperanca.com">geral@grupoesperanca.com</a>
						</li>
						<li>
							<strong>{t('footer_address_label')}</strong>
							{t('footer_address_text')}
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="footer-bottom-inner">
					<p>{t('footer_copyright', { year })}</p>
					<p>{t('footer_credits')}</p>
				</div>
			</div>
		</footer>
	);
}
