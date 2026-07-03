import { MapPin } from "lucide-react";
import { createWhatsAppUrl } from "../site";
import { WaIcon } from "./icons";

export function CtaFinal() {
  return (
    <section className="gs-cta-final" id="contato" aria-labelledby="gs-cta-h2">
      <div className="gs-cta-final-inner">
        <p className="gs-cta-eyebrow gs-reveal">Proteja agora</p>
        <h2 className="gs-reveal gs-d1" id="gs-cta-h2">
          Controle total.<br />
          Custo que cabe no <em>orçamento.</em>
        </h2>
        <p className="gs-cta-final-sub gs-reveal gs-d2">
          Fale com nossa equipe, descreva sua necessidade e receba um diagnóstico
          gratuito com a solução ideal para seus veículos ou sua frota.
        </p>
        <div className="gs-reveal gs-d3">
          <a
            href={createWhatsAppUrl("Olá, GeralSeg! Gostaria de solicitar um diagnóstico gratuito para minha frota.")}
            target="_blank"
            rel="noreferrer"
            className="gs-btn-primary gs-inline-center"
          >
            <WaIcon size={20} />
            Solicitar diagnóstico gratuito
          </a>
        </div>
        <div className="gs-cta-final-loc gs-reveal gs-d4">
          <MapPin size={14} />
          Atendimento em todo o Brasil
        </div>
      </div>
    </section>
  );
}
