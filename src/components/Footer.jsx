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
                  <h4>Sobre</h4>
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
                  <h4>Serviços</h4>
                </div>
                <ul className="fotter-list">
                  <li><h5><a href="#">Consultoria Agrária e Pecuária</a></h5></li>
                  <li><h5><a href="#">Consultoria em Psicultura</a></h5></li>
                  <li><h5><a href="#">Gestão de Projetos Agrícolas</a></h5></li>
                  <li><h5><a href="#">Assistência Técnica</a></h5></li>
                  <li><h5><a href="#">Marketing Rural</a></h5></li>
                  <li><h5><a href="#">Venda de Materiais</a></h5></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-wrapper pl-45 mb-30">
                <div className="footer-title">
                  <h4>Formações</h4>
                </div>
                <ul className="foter-list">
                  <li><h5><a href="#">Agricultura Orgânica</a></h5></li>
                  <li><h5><a href="#">Avicultura</a></h5></li>
                  <li><h5><a href="#">Suinicultura</a></h5></li>
                  <li><h5><a href="#">Caprinocultura</a></h5></li>
                  <li><h5><a href="#">Agronegócios</a></h5></li>
                  <li><h5><a href="#">Agropecuária</a></h5></li>
                  <li><h5><a href="#">Produção de Ração</a></h5></li>
                  <li><h5><a href="#">Produção de Sabão e Perfume</a></h5></li>
                  <li><h5><a href="#">Marketing Rural</a></h5></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-border mt-30 pt-20 pb-25">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="copyright">
                  <p> Copyright <i className="far fa-copyright"></i> {year} <a href="#">Academia Industrial</a> <br />Todos os Direitos Reservados <br /> Desenvolvido por <a href="https://caxinda.com" target="_blank">Caxinda Divulga</a> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
