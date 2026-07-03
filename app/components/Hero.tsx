import Image from "next/image";
import { ChevronDown, Clock, Navigation, Shield } from "lucide-react";
import { createWhatsAppUrl } from "../site";
import { WaIcon } from "./icons";

export function Hero() {
  return (
    <section className="gs-hero" id="top" aria-labelledby="gs-hero-h1">
      <div className="gs-hero-bg" aria-hidden="true" />
      <div className="gs-hero-grid" aria-hidden="true" />

      <div className="gs-hero-inner">
        <div className="gs-hero-copy">
          <div className="gs-hero-eyebrow">
            <span className="gs-hero-eyebrow-dot" />
            Rastreamento · Frotas · Videomonitoramento
          </div>

          <h1 id="gs-hero-h1">
            Tranquilidade para você,<br />
            sua família<br />
            ou seu <em>negócio!</em>
          </h1>

          <p className="gs-hero-sub">
            Rastreamento GPS em tempo real, monitoramento de frotas e videomonitoramento
            veicular para empresas e pessoas que não podem se dar ao luxo de perder o controle
            do que é seu.
          </p>

          <div className="gs-hero-btns">
            <a
              href={createWhatsAppUrl("Olá, GeralSeg! Gostaria de rastrear meus veículos. Podem me ajudar?")}
              target="_blank"
              rel="noreferrer"
              className="gs-btn-primary"
            >
              <WaIcon size={18} />
              Solicitar diagnóstico grátis
            </a>
            <a href="#solucoes" className="gs-btn-outline">
              Ver soluções
              <ChevronDown size={16} />
            </a>
          </div>

          <div className="gs-hero-pills">
            <span className="gs-hero-pill">
              <Navigation size={13} />
              GPS em tempo real
            </span>
            <span className="gs-hero-pill">
              <Shield size={13} />
              Bloqueio remoto
            </span>
            <span className="gs-hero-pill">
              <Navigation size={13} />
              Via satélite
            </span>
            <span className="gs-hero-pill">
              <Clock size={13} />
              Vídeo rastreamento
            </span>
          </div>
        </div>

        <figure className="gs-hero-side" aria-label="Rastreamento e monitoramento de frotas">
          <div className="gs-hero-image-frame">
            <Image
              src="/images/hero-rastreamento-frotas-hq.jpg"
              alt="Caminhão verde em rodovia ao lado de uma tela com sistema de rastreamento e videomonitoramento veicular"
              className="gs-hero-image"
              width={2400}
              height={1462}
              priority
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
