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
                    <h1 data-animation="fadeInUp" data-delay=".5s">Academia Industrial</h1>
                    <h3 data-animation="fadeInUp" data-delay=".7s" style={{ color: '#242424', fontWeight: 'bold' }}>Saiba Mais Sobre Nós!</h3>
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
                  <h3>Bem-vindo à Academia Industrial</h3>
                  <p>Academia Industrial Waku, é um Centro de Formação virado ao agronegócio, que se destaca como uma referência no ensino e na formação de profissionais capacitados, para o setor agro e pecúario em Angola</p>
                  <p>Desde 2019, a Academia Industrial Waku tem-se afirmado como uma referência no mercado angolano, promovendo iniciativas inovadoras no setor agro e pecuário. Um dos nossos maiores marcos é o "Projecto Coelho Angola", que se destacou pela realização da maior conferência sobre criação de coelhos em Angola. Este evento, realizado a 5 de maio de 2022, reuniu importantes órgãos institucionais e especialistas do setor, consolidando o nosso compromisso com o desenvolvimento do agronegócio e da agropecuária no país.</p>
                  <p>O <b>Projecto Coelho Angola</b> não apenas fortaleceu o setor agropecuário, mas também abriu novas perspetivas para as famílias angolanas, oferecendo-lhes a oportunidade de gerar rendimentos sustentáveis a partir das suas próprias casas. Esta iniciativa reflete o nosso objetivo de transformar vidas através de soluções acessíveis, sustentáveis e inovadoras, contribuindo para o crescimento económico e social de Angola.</p>
                </div>
                <Link className="btn" to="/contacto">Fale Connosco</Link>
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
                <h1>Sobre Nós</h1>
                <p>Somos um centro de formação profissional dedicado a capacitar jovens empreendedores e profissionais nas áreas de Agro e Pecuária. Com uma abordagem prática e inovadora, promovemos soluções sustentáveis e geramos impacto positivo no mercado de trabalho e na economia local.</p>
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
                  <p>Capacitar profissionais nas áreas de Agro e Pecuária, promovendo competências técnicas, práticas e empreendedoras, e contribuindo para o crescimento sustentável das empresas e a valorização no setor do agronegócios.</p>
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
                  <p>Ser reconhecido como o principal centro de formação profissional no sector do agronegócios em Angola, formando profissionais altamente qualificados e promovendo soluções inovadoras e sustentáveis para o mercado.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="we-works-wrapper text-center mb-30">
                <div className="we-works-icon">
                  <img src="/img/icon/w3.png" alt="" />
                </div>
                <div className="we-works-text">
                  <h3>Valores</h3>
                  <p>Trabalhamos com dedicação para promover qualidade, responsabilidade ambiental, desenvolvimento social e soluções práticas para transformar o setor do agronegócio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
