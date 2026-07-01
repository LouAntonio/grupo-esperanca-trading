import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <>
      <div className="slider-area slider-margin" style={{ marginTop: 0 }}>
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh', backgroundImage: 'url(/img/files/Quem-Somos-1920-x-1080.png)' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <div className="slider-content text-center">
                    <div className="slider-video-icon"></div>
                    <h1 data-animation="fadeInUp" data-delay=".5s">Grupo Esperança Trading, Lda</h1>
                    <h3 data-animation="fadeInUp" data-delay=".7s" style={{ color: '#242424', fontWeight: 'bold' }}>Da terra angolana para a sua mesa</h3>
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
                  <h3>Quem Somos</h3>
                  <p>O Grupo Esperança Trading, Lda é uma empresa angolana de transformação alimentar, comprometida com o desenvolvimento industrial e a promoção da saúde através da alimentação. Detentora das marcas Toto Drink e Toto Food, a empresa actua na produção de sumos naturais sem conservantes e alimentos africanos tradicionais, valorizando os produtos da terra e impulsionando o consumo orgânico em Angola e além-fronteiras.</p>
                  <p><strong>Da terra angolana para a sua mesa</strong></p>
                  <p>Cada produto nasce do compromisso com a terra, com os agricultores locais e com a saúde de quem nos escolhe. Produzimos com respeito pela origem natural dos ingredientes, sem aditivos químicos e sem conservantes.</p>
                </div>
                <Link className="btn" to="/marcas">Conheça as Nossas Marcas</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="we-works-area pt-120 pb-95 mt-3" style={{ backgroundImage: 'url(/img/bg/bg16.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title text-center section-title-cap mb-90">
                <h1>Missão & Visão</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="we-works-wrapper text-center mb-30">
                <div className="we-works-icon">
                  <img src="/img/icon/w1.png" alt="" />
                </div>
                <div className="we-works-text">
                  <h3>Missão</h3>
                  <p>Promover a boa saúde através de uma alimentação saudável, investindo na indústria alimentar orgânica e na transformação de produtos sem aditivos químicos.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="we-works-wrapper text-center mb-30">
                <div className="we-works-icon">
                  <img src="/img/icon/w2.png" alt="" />
                </div>
                <div className="we-works-text">
                  <h3>Visão</h3>
                  <p>Transformar Angola e África em referências industriais, capazes de combater a insuficiência alimentar e reduzir a pobreza extrema, formando jovens em transformação, conservação e certificação de produtos locais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pos-relative pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center section-title-cap mb-5">
                <h1>Valores e Objectivos</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start p-4" style={{ background: '#f9f9f9', borderRadius: 10, height: '100%' }}>
                <div style={{ fontSize: 30, color: '#4caf50', marginRight: 15 }}>
                  <i className="fas fa-seedling"></i>
                </div>
                <div>
                  <h5>Fomentar o espírito empreendedor jovem</h5>
                  <p className="mb-0">Acreditamos no potencial da juventude angolana como motor de transformação do sector alimentar.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start p-4" style={{ background: '#f9f9f9', borderRadius: 10, height: '100%' }}>
                <div style={{ fontSize: 30, color: '#4caf50', marginRight: 15 }}>
                  <i className="fas fa-industry"></i>
                </div>
                <div>
                  <h5>Criar pequenas e médias indústrias locais sustentáveis</h5>
                  <p className="mb-0">Impulsionar o desenvolvimento industrial local com modelos de negócio sustentáveis e replicáveis.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start p-4" style={{ background: '#f9f9f9', borderRadius: 10, height: '100%' }}>
                <div style={{ fontSize: 30, color: '#4caf50', marginRight: 15 }}>
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h5>Reduzir o êxodo juvenil</h5>
                  <p className="mb-0">Gerar emprego e capacitação técnica para fixar os jovens nas suas comunidades de origem.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start p-4" style={{ background: '#f9f9f9', borderRadius: 10, height: '100%' }}>
                <div style={{ fontSize: 30, color: '#4caf50', marginRight: 15 }}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h5>Contribuir para o crescimento económico e social</h5>
                  <p className="mb-0">Gerar impacto positivo em Angola e em África através da produção alimentar de qualidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
