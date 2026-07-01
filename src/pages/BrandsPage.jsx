import { Link } from 'react-router-dom'

export default function BrandsPage() {
  return (
    <>
      <div className="slider-area slider-margin" style={{ marginTop: 0 }}>
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh', backgroundImage: 'url(/img/files/Pulvieto-1920-x-1080.png)' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <div className="slider-content text-center">
                    <h1 data-animation="fadeInUp" data-delay=".5s">As Nossas Marcas</h1>
                    <h3 data-animation="fadeInUp" data-delay=".7s" style={{ color: '#242424', fontWeight: 'bold' }}>Toto Drink · Toto Food · Frango Premium</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pos-relative pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about2-img">
                <img src="/img/files/628-x-893.png" className="rounded" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-wrapper about-2-wrapper">
                <div className="section-title section-title-cap mb-35">
                  <h3>Toto Drink</h3>
                  <p className="mb-2" style={{ fontSize: '1.1rem', fontWeight: 500, color: '#4caf50' }}>Sumos naturais, 100% orgânicos, sem conservantes</p>
                  <p>Produzidos a partir de frutas locais cuidadosamente seleccionadas, os sumos Toto Drink trazem o sabor genuíno de Angola directamente para a sua mesa. Sem aditivos químicos, sem conservantes — apenas fruta, frescura e qualidade em cada garrafa.</p>
                </div>
                <Link className="btn" to="/loja">Ver Produtos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="we-works-area pt-120 pb-95" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-wrapper about-2-wrapper">
                <div className="section-title section-title-cap mb-35">
                  <h3>Toto Food</h3>
                  <p className="mb-2" style={{ fontSize: '1.1rem', fontWeight: 500, color: '#4caf50' }}>Linha alimentar tradicional africana</p>
                  <p>Uma linha centrada em pratos e conservas típicas africanas, que preserva o sabor autêntico e as características nutricionais dos alimentos angolanos. Toto Food é a forma de manter viva a tradição alimentar do nosso país, com qualidade industrial e confiança de mesa.</p>
                </div>
                <Link className="btn" to="/loja">Ver Produtos</Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about2-img">
                <img src="/img/files/628-x-893.png" className="rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pos-relative pt-120 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about2-img">
                <img src="/img/files/628-x-893.png" className="rounded" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-wrapper about-2-wrapper">
                <div className="section-title section-title-cap mb-35">
                  <h3>Frango Premium</h3>
                  <p className="mb-2" style={{ fontSize: '1.1rem', fontWeight: 500, color: '#4caf50' }}>Frango grelhado e assado, com acompanhamentos típicos</p>
                  <p>Frango grelhado ou assado, servido com kiquanga, banana-pão frita ou batata — uma proposta gastronómica que une qualidade premium ao sabor tradicional angolano, ideal para o dia a dia ou para eventos especiais.</p>
                </div>
                <Link className="btn" to="/loja">Ver Produtos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area pt-70 pb-70" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title section-title-cap text-center mb-5">
                <h1>Todos os Serviços</h1>
                <p>Da produção à entrega, soluções alimentares completas para famílias, empresas e eventos</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered table-hover" style={{ background: '#fff' }}>
                  <thead className="thead-dark">
                    <tr>
                      <th>Serviço / Produto</th>
                      <th>Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Sumo Natural Sem Conservantes</strong></td>
                      <td>Produção de sumos 100% naturais, feitos a partir de fruta fresca angolana, sem qualquer tipo de conservante ou aditivo químico.</td>
                    </tr>
                    <tr>
                      <td><strong>Linha Detox & Energéticos</strong></td>
                      <td>Sumos funcionais desenvolvidos para apoiar a hidratação, a energia e o bem-estar do dia a dia, mantendo o compromisso 100% natural da marca.</td>
                    </tr>
                    <tr>
                      <td><strong>Venda para Empresas e Eventos</strong></td>
                      <td>Fornecimento de sumos naturais para empresas, festas, conferências e eventos privados, com opções de quantidade e personalização.</td>
                    </tr>
                    <tr>
                      <td><strong>Legumes Congelados</strong></td>
                      <td>Ervilha, quiabo, fumbua, kizaca e outros legumes tradicionais, congelados para preservar frescura, sabor e valor nutricional.</td>
                    </tr>
                    <tr>
                      <td><strong>Quitutes Engarrafados</strong></td>
                      <td>Gindungo em pó, jindungo preparado e outros quitutes tradicionais angolanos, prontos a usar na sua cozinha.</td>
                    </tr>
                    <tr>
                      <td><strong>Frango Premium</strong></td>
                      <td>Venda de frango grelhado e assado, com acompanhamentos tradicionais como kiquanga, banana-pão frita ou batata.</td>
                    </tr>
                    <tr>
                      <td><strong>Serviço para Eventos</strong></td>
                      <td>Disponibilizamos sumos naturais, quitutes e Frango Premium para eventos corporativos, festas privadas e celebrações. Soluções personalizadas conforme a dimensão e as necessidades do seu evento.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
