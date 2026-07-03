"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "../site";
import { navItems } from "../content";
import { MenuIcon, WaIcon } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`gs-nav${scrolled ? " scrolled" : ""}`} aria-label="Navegação principal">
        <div className="gs-nav-inner">
          <a href="#top" className="gs-brand" onClick={closeMenu}>
            <Image
              src={siteConfig.logo}
              alt="GeralSeg Segurança Eletrônica"
              className="gs-brand-logo"
              width={2241}
              height={485}
              priority
            />
          </a>

          <div className="gs-links" role="navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.clientAreaUrl}
              target="_blank"
              rel="noreferrer"
              className="gs-nav-client"
            >
              <LogIn size={13} />
              Área do Cliente
            </a>
            <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="gs-nav-cta">
              <WaIcon size={14} />
              Falar agora
            </a>
          </div>

          <div className="gs-mobile-actions">
            <a
              href={siteConfig.clientAreaUrl}
              target="_blank"
              rel="noreferrer"
              className="gs-nav-client-mobile"
              aria-label="Acessar área do cliente GeralSeg"
            >
              <LogIn size={14} />
              Cliente
            </a>
            <button
              className="gs-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`gs-mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-label="Menu mobile">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a
          href={siteConfig.clientAreaUrl}
          target="_blank"
          rel="noreferrer"
          className="gs-mobile-client"
          onClick={closeMenu}
        >
          <LogIn size={16} />
          Área do Cliente
        </a>
        <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="gs-mobile-wa" onClick={closeMenu}>
          <WaIcon size={18} />
          Falar com especialista
        </a>
      </div>
    </>
  );
}
