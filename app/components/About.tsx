import { aboutFacts } from "../content";

export function About() {
  return (
    <section className="gs-section alt" id="sobre" aria-labelledby="gs-sobre-h2">
      <div className="gs-wrap">
        <p className="gs-section-label gs-reveal">Quem somos</p>
        <div className="gs-about-grid">
          <div>
            <h2 className="gs-h2 gs-reveal gs-d1" id="gs-sobre-h2">
              Quem Somos
            </h2>
            <div className="gs-divider gs-reveal gs-d1" />

            <p className="gs-about-text gs-reveal gs-d2">
              Fundada em <strong>2 de outubro de 2010</strong>, na cidade de{" "}
              <strong>Caçador (SC)</strong>, a GeralSeg consolidou-se como referência no setor
              de segurança. Com uma trajetória de mais de 15 anos de dedicação, evoluímos para
              oferecer soluções completas que vão além das estruturas físicas.
            </p>
            <p className="gs-about-text gs-reveal gs-d3">
              Hoje, somos especialistas não apenas em segurança eletrônica residencial e
              comercial, mas também em <strong>rastreamento veicular e telemetria por
              videomonitoramento</strong>, garantindo que seu patrimônio esteja protegido
              onde quer que ele esteja.
            </p>
            <p className="gs-about-text gs-reveal gs-d4">
              Nossa missão é entregar tranquilidade através de serviços de alta qualidade e
              produtos que se destacam pela durabilidade. Na GeralSeg,{" "}
              <strong>o compromisso com o cliente é a base de cada solução tecnológica
              que entregamos.</strong>
            </p>

            <div className="gs-about-info-grid gs-reveal gs-d4">
              {aboutFacts.map((c) => (
                <div key={c.label} className="gs-about-info-card">
                  <div className="gs-about-info-label">{c.label}</div>
                  <div className="gs-about-info-value">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
