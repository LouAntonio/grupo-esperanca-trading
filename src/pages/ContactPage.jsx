import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const initialContactForm = {
	nome: '',
	email: '',
	telefone: '',
	assunto: '',
	mensagem: '',
};

export default function ContactPage() {
	const { t } = useTranslation();
	const [contactForm, setContactForm] = useState(initialContactForm);
	const [contactStatus, setContactStatus] = useState(null);
	const [openFaq, setOpenFaq] = useState(null);

	const showFeedback = (type, message) => {
		setContactStatus({ type, message });
		setTimeout(() => setContactStatus(null), 6000);
	};

	const handleContactSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('/api/mail.php', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(contactForm),
			});
			if (res.ok) {
				showFeedback('success', t('contact_success_message'));
				setContactForm(initialContactForm);
			} else {
				showFeedback('error', t('contact_error_message'));
			}
		} catch {
			showFeedback('error', t('contact_error_connection'));
		}
	};

	const faqs = [
		{
			id: 'faq1',
			question: t('contact_faq_1_question'),
			answer: t('contact_faq_1_answer'),
		},
		{
			id: 'faq2',
			question: t('contact_faq_2_question'),
			answer: t('contact_faq_2_answer'),
		},
		{
			id: 'faq3',
			question: t('contact_faq_3_question'),
			answer: t('contact_faq_3_answer'),
		},
	];

	return (
		<>
			<section
				className="page-hero"
				style={{ backgroundImage: 'url(/img/files/Apoio-ao-Cliente-1920-x-1080.png)' }}
			>
				<div className="page-hero-content">
					<h1 className="page-hero-title">{t('contact_hero_title')}</h1>
					<p className="page-hero-subtitle">{t('contact_hero_subtitle')}</p>
				</div>
			</section>

			<section className="s-section">
				<div className="s-container">
					<div className="contact-info-grid">
						<div className="contact-info-card">
							<div className="ci-icon">
								<i className="fas fa-map-marker-alt" />
							</div>
							<h5>{t('contact_location_title')}</h5>
							<p>{t('contact_location_text')}</p>
						</div>
						<div className="contact-info-card">
							<div className="ci-icon">
								<i className="fas fa-phone-alt" />
							</div>
							<h5>{t('contact_support_title')}</h5>
							<p>
								<a href="tel:946222900">946 222 900</a> / <a href="tel:946222708">946 222 708</a>
							</p>
						</div>
						<div className="contact-info-card">
							<div className="ci-icon">
								<i className="fas fa-envelope" />
							</div>
							<h5>{t('contact_email_title')}</h5>
							<p>
								<a href="mailto:geral@grupoesperanca.com">geral@grupoesperanca.com</a>
							</p>
						</div>
						<div className="contact-info-card">
							<div className="ci-icon" style={{ background: 'rgba(24,119,242,0.1)', color: '#1877f2' }}>
								<i className="fas fa-share-alt" />
							</div>
							<h5>{t('contact_social_title')}</h5>
							<p style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '20px' }}>
								<a
									href="https://www.facebook.com/share/1bXnS9Mmdz"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Facebook"
									style={{ color: '#1877f2' }}
								>
									<i className="fab fa-facebook-f" />
								</a>
								<a
									href="https://www.instagram.com/totodrink.ao"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									style={{ color: '#e4405f' }}
								>
									<i className="fab fa-instagram" />
								</a>
								<a
									href="https://wa.me/946222900"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="WhatsApp"
									style={{ color: '#25d366' }}
								>
									<i className="fab fa-whatsapp" />
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="s-section-alt">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">{t('contact_eyebrow')}</span>
						<h2 className="s-title">{t('contact_title')}</h2>
						<p className="s-sub">{t('contact_subtitle')}</p>
					</div>

					<div className="contact-form-box" style={{ maxWidth: '600px', margin: '0 auto' }}>
						<form onSubmit={handleContactSubmit} className="s-form">
							<div>
								<label htmlFor="contact-nome">{t('contact_form_name_label')}</label>
								<input
									id="contact-nome"
									name="nome"
									placeholder={t('contact_form_name_placeholder')}
									type="text"
									value={contactForm.nome}
									onChange={(e) => setContactForm({ ...contactForm, nome: e.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="contact-email">{t('contact_form_email_label')}</label>
								<input
									id="contact-email"
									name="email"
									placeholder={t('contact_form_email_placeholder')}
									type="email"
									value={contactForm.email}
									onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="contact-telefone">{t('contact_form_phone_label')}</label>
								<input
									id="contact-telefone"
									name="telefone"
									placeholder={t('contact_form_phone_placeholder')}
									type="text"
									value={contactForm.telefone}
									onChange={(e) => setContactForm({ ...contactForm, telefone: e.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="contact-assunto">{t('contact_form_subject_label')}</label>
								<input
									id="contact-assunto"
									name="assunto"
									placeholder={t('contact_form_subject_placeholder')}
									type="text"
									value={contactForm.assunto}
									onChange={(e) => setContactForm({ ...contactForm, assunto: e.target.value })}
								/>
							</div>
							<label htmlFor="contact-mensagem">{t('contact_form_message_label')}</label>
							<textarea
								id="contact-mensagem"
								name="mensagem"
								rows="5"
								placeholder={t('contact_form_message_placeholder')}
								value={contactForm.mensagem}
								onChange={(e) => setContactForm({ ...contactForm, mensagem: e.target.value })}
							/>
							<button className="s-btn s-btn-primary" type="submit" style={{ width: '100%' }}>
								{t('contact_form_submit_btn')}
							</button>

							<div
								className={`form-feedback ${contactStatus ? 'show' : ''} ${contactStatus?.type || ''}`}
							>
								{contactStatus?.message}
							</div>
						</form>
					</div>
				</div>
			</section>

			<section id="faq" className="s-section">
				<div className="s-container">
					<div className="s-header">
						<span className="s-eyebrow">{t('contact_faq_eyebrow')}</span>
						<h2 className="s-title">{t('contact_faq_title')}</h2>
						<p className="s-sub">{t('contact_faq_subtitle')}</p>
					</div>

					<div className="s-faq">
						{faqs.map((faq) => (
							<div key={faq.id} className={`faq-item ${openFaq === faq.id ? 'open' : ''}`}>
								<button
									className="faq-question"
									onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
								>
									{faq.question}
								</button>
								<div className="faq-answer">
									<p>{faq.answer}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="s-section-alt" style={{ paddingBottom: 0 }}>
				<div className="s-header">
					<span className="s-eyebrow">{t('contact_visit_eyebrow')}</span>
					<h2 className="s-title">{t('contact_visit_title')}</h2>
					<p className="s-sub">{t('contact_visit_subtitle')}</p>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63076.487027613286!2d13.228634743289762!3d-8.85346217621027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f144602345c1%3A0x76c38c44c0e8a910!2sIndustrial%20Academy!5e0!3m2!1spt-PT!2sao!4v1736763872382!5m2!1spt-PT!2sao"
					width="600"
					height="400"
					style={{ border: 0, width: '100%', display: 'block' }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Localização Grupo Esperança Trading, Luanda"
				/>
			</section>
		</>
	);
}
