import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="s-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-desc">
            O Grupo Esperança Trading, Lda é uma empresa angolana de transformação alimentar, detentora das marcas Toto Drink, Toto Food e Frango Premium, comprometida com a produção de alimentos naturais e orgânicos.
          </div>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
          </div>
        </div>

        <div>
          <h4 className="footer-title">Marcas</h4>
          <ul className="footer-links">
            <li><Link to="/marcas">Toto Drink — Sumos Naturais</Link></li>
            <li><Link to="/marcas">Toto Food — Linha Tradicional</Link></li>
            <li><Link to="/marcas">Frango Premium</Link></li>
            <li><Link to="/loja">Loja Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Contactos</h4>
          <ul className="footer-address">
            <li>
              <strong>Endereço</strong>
              Av. Pedro de Castro Van-Dúnem Loy, Golf 2, Luanda — Angola
            </li>
            <li>
              <strong>Telefone</strong>
              912 345 678 / 910 234 567
            </li>
            <li>
              <strong>Email</strong>
              geral@academiaindustrial.net
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>Copyright &copy; {year} <a href="#">Grupo Esperança Trading, Lda</a>. Todos os Direitos Reservados.</p>
          <p>Desenvolvido por <a href="https://caxinda.com" target="_blank" rel="noopener noreferrer">Caxinda Divulga</a></p>
        </div>
      </div>
    </footer>
  )
}
