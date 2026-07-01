import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-area footer1 pt-60" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-wrapper mb-30">
                <div className="footer-title">
                  <h4>Grupo Esperança Trading</h4>
                </div>
                <ul className="footer-address">
                  <li>
                    <strong>Endereço:</strong>
                    <p>Av. Pedro de Castro Van-Dúnem Loy, Golf 2 Quintalão do Petro Juntos a Fábrica de Tijolos antes da Polícia</p>
                  </li>
                  <li>
                    <strong>Telefone:</strong>
                    <p>912 345 678 / 910 234 567</p>
                  </li>
                  <li>
                    <strong>Email:</strong>
                    <p>geral@academiaindustrial.net <br />academiaindustrual.ao@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-wrapper pl-45 mb-30">
                <div className="footer-title">
                  <h4>As Nossas Marcas</h4>
                </div>
                <ul className="fotter-list">
                  <li><h5><Link to="/marcas">Toto Drink — Sumos Naturais</Link></h5></li>
                  <li><h5><Link to="/marcas">Toto Food — Linha Tradicional</Link></h5></li>
                  <li><h5><Link to="/marcas">Frango Premium</Link></h5></li>
                  <li><h5><Link to="/loja">Loja Online</Link></h5></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-wrapper pl-45 mb-30">
                <div className="footer-title">
                  <h4>Serviços</h4>
                </div>
                <ul className="foter-list">
                  <li><h5><Link to="/marcas">Sumo Natural Sem Conservantes</Link></h5></li>
                  <li><h5><Link to="/marcas">Linha Detox & Energéticos</Link></h5></li>
                  <li><h5><Link to="/marcas">Legumes Congelados</Link></h5></li>
                  <li><h5><Link to="/marcas">Quitutes Engarrafados</Link></h5></li>
                  <li><h5><Link to="/marcas">Frango Premium</Link></h5></li>
                  <li><h5><Link to="/marcas">Serviço para Eventos</Link></h5></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-border mt-30 pt-20 pb-25">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="copyright">
                  <p> Copyright <i className="far fa-copyright"></i> {year} <a href="#">Grupo Esperança Trading, Lda</a> <br />Todos os Direitos Reservados <br /> Desenvolvido por <a href="https://caxinda.com" target="_blank">Caxinda Divulga</a> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
