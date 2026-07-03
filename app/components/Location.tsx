import { ChevronRight, MapPin } from "lucide-react";
import { siteConfig } from "../site";

export function Location() {
  return (
    <section className="gs-section" id="sede" aria-labelledby="gs-sede-h2">
      <div className="gs-wrap">
        <p className="gs-section-label gs-reveal">Nossa sede</p>
        <h2 className="gs-h2 gs-reveal gs-d1" id="gs-sede-h2">
          Presença local,<br />atendimento nacional
        </h2>
        <div className="gs-divider gs-reveal gs-d1" />

        <div className="gs-location-panel gs-reveal gs-d2">
          <div className="gs-location-card">
            <div className="gs-location-head">
              <span className="gs-location-icon" aria-hidden="true">
                <MapPin size={18} />
              </span>
              <div>
                <p className="gs-location-kicker">GeralSeg em Caçador</p>
                <p className="gs-location-address">{siteConfig.address}</p>
              </div>
            </div>
            <p className="gs-about-text">
              A sede reforça a origem e a estrutura da operação. O atendimento pode ser feito
              em todo o Brasil, com foco em rastreamento, monitoramento e suporte.
            </p>
            <a
              href={siteConfig.mapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="gs-location-link"
            >
              Abrir no Google Maps
              <ChevronRight size={14} />
            </a>
          </div>
          <iframe
            className="gs-location-map"
            title="Mapa da sede da GeralSeg em Caçador, SC"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={siteConfig.mapsEmbedUrl}
          />
        </div>
      </div>
    </section>
  );
}
