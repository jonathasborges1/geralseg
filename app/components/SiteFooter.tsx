import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "../site";
import { footerTags, navItems } from "../content";
import { WaIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="gs-footer">
      <div className="gs-footer-inner">
        <div>
          <Image
            src={siteConfig.logo}
            alt="GeralSeg Segurança Eletrônica"
            className="gs-footer-logo"
            width={2241}
            height={485}
          />
          <p className="gs-footer-desc">
            Soluções em rastreamento veicular, monitoramento de frotas e videomonitoramento
            para empresas e pessoas físicas em todo o Brasil.
          </p>
          <div className="gs-footer-tags">
            {footerTags.map((t) => (
              <span key={t} className="gs-footer-tag">{t}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="gs-footer-col-title">Navegação</p>
          <ul className="gs-footer-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="gs-footer-col-title">Contato</p>
          <div className="gs-footer-contact-item">
            <WaIcon size={15} />
            <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
          </div>
          <div className="gs-footer-contact-item">
            <MapPin size={15} />
            <span>Atendimento nacional</span>
          </div>
          <div className="gs-footer-contact-item">
            <Clock size={15} />
            <span>Suporte 24h por dia</span>
          </div>
        </div>

        <div className="gs-footer-divider">
          <p className="gs-footer-copy">
            © 2026 GeralSeg Rastreamento Veicular. Todos os direitos reservados.
          </p>
          <p className="gs-footer-luma">
            Desenvolvido por{" "}
            <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
              Luma Sites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
