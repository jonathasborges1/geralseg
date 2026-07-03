import { ChevronRight } from "lucide-react";
import { createWhatsAppUrl } from "../site";
import { services } from "../content";
import { WaIcon } from "./icons";

export function Services() {
  return (
    <section className="gs-section" id="solucoes" aria-labelledby="gs-solucoes-h2">
      <div className="gs-wrap">
        <p className="gs-section-label gs-reveal">Nossas Soluções</p>
        <h2 className="gs-h2 gs-reveal gs-d1" id="gs-solucoes-h2">
          Tecnologia completa para<br />quem não pode parar
        </h2>
        <div className="gs-divider gs-reveal gs-d2" />
        <p className="gs-lead gs-reveal gs-d2">
          Rastreamento, gestão e vigilância integrados em uma plataforma. Proteja seus veículos,
          reduza custos operacionais e tome decisões com dados reais.
        </p>

        <div className="gs-services-grid">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`gs-service-card gs-reveal gs-d${(i % 3) + 1}`}
              aria-label={s.title}
            >
              <div className="gs-service-icon" aria-hidden="true">
                <s.icon size={22} />
              </div>
              <p className="gs-service-eyebrow">{s.eyebrow}</p>
              <h3 className="gs-service-title">{s.title}</h3>
              <p className="gs-service-desc">{s.desc}</p>
              <ul className="gs-service-points" aria-label={`Benefícios de ${s.title}`}>
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a
                href={createWhatsAppUrl(`Olá! Tenho interesse em ${s.title}. Podem me dar mais informações?`)}
                target="_blank"
                rel="noreferrer"
                className="gs-service-link"
                aria-label={`Saber mais sobre ${s.title}`}
              >
                Saber mais
                <ChevronRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <div className="gs-services-cta gs-reveal">
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="gs-btn-primary">
            <WaIcon size={18} />
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
