"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Camera,
  ChevronDown,
  ChevronRight,
  Clock,
  LogIn,
  MapPin,
  MessageCircle,
  Navigation,
  Shield,
  Truck,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "./site";

/* ── constants ─────────────────────────────────────────── */

type NavItem = {
  href: `#${string}`;
  label: string;
};

type IconContent = {
  icon: LucideIcon;
  title: string;
};

type Service = IconContent & {
  eyebrow: string;
  desc: string;
  points: readonly string[];
};

type ProcessStep = IconContent & {
  num: string;
  text: string;
};

type Faq = {
  q: string;
  a: string;
};

const navItems = [
  { href: "#top",      label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#duvidas",  label: "Dúvidas" },
  { href: "#contato",  label: "Contato" },
] satisfies readonly NavItem[];

const services = [
  {
    icon: Navigation,
    eyebrow: "Localização em Tempo Real",
    title: "Rastreamento Veicular",
    desc: "Saiba exatamente onde cada veículo está, a qualquer hora do dia. GPS de alta precisão com posição, velocidade e rota — acessível no celular ou computador.",
    points: [
      "GPS com atualização em tempo real",
      "Histórico completo de percursos",
      "Alertas de saída de área e desvio de rota",
    ],
  },
  {
    icon: Truck,
    eyebrow: "Gestão Operacional",
    title: "Monitoramento de Frotas",
    desc: "Transforme dados de deslocamento em decisões que reduzem custo. Controle combustível, jornada de motoristas e produtividade com relatórios automáticos.",
    points: [
      "Dashboard completo em tempo real",
      "Controle de jornada e comportamento",
      "Relatórios de consumo e eficiência",
    ],
  },
  {
    icon: Camera,
    eyebrow: "Vigilância Ativa",
    title: "Videomonitoramento Veicular",
    desc: "Câmeras embarcadas HD que registram tudo — dentro e fora do veículo. Evidências concretas em acidentes e proteção contra fraudes operacionais.",
    points: [
      "Câmeras HD internas e externas",
      "Gravação em nuvem 24h por dia",
      "Monitoramento ao vivo pelo aplicativo",
    ],
  },
] satisfies readonly Service[];

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Fale com a equipe",
    text: "Descreva sua necessidade pelo WhatsApp — um veículo pessoal, uma frota pequena ou uma operação maior. Respondemos com agilidade e sem enrolação.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Diagnóstico sem custo",
    text: "Avaliamos seu perfil e indicamos a solução ideal: tipo de rastreador, câmeras e plano de monitoramento — tudo adequado à sua realidade.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Instalação e ativação",
    text: "Técnicos especializados instalam o equipamento de forma rápida. Em poucas horas, seu veículo já está monitorado, rastreado e protegido.",
  },
] satisfies readonly ProcessStep[];

const faqs = [
  {
    q: "Como funciona o rastreamento veicular?",
    a: "O rastreador instalado no veículo usa GPS e rede celular (GSM) para transmitir a posição em tempo real para nossa plataforma. Você acessa pelo aplicativo ou computador e visualiza localização, velocidade, rota percorrida e histórico de deslocamentos.",
  },
  {
    q: "Quais tipos de veículos podem ser rastreados?",
    a: "Qualquer veículo com bateria: carros, motos, caminhões, vans, ônibus, máquinas agrícolas e equipamentos pesados. Nossa solução cobre desde um veículo pessoal até frotas de centenas de unidades.",
  },
  {
    q: "O que acontece em caso de roubo ou furto?",
    a: "Em caso de ocorrência, nossa central de atendimento aciona o protocolo de localização e bloqueio remoto do veículo. Atuamos junto às autoridades para maximizar as chances de recuperação.",
  },
  {
    q: "O sistema funciona em qualquer parte do Brasil?",
    a: "Sim. Utilizamos as maiores redes de cobertura celular do país. Em áreas sem sinal, o dispositivo armazena os dados localmente e os envia automaticamente ao recuperar conexão.",
  },
  {
    q: "Posso monitorar minha frota pelo celular?",
    a: "Sim. Nossa plataforma tem versão web responsiva e aplicativo para Android e iOS. Acesse posição, rotas, alertas e relatórios de qualquer lugar, a qualquer hora.",
  },
  {
    q: "Quanto tempo leva a instalação?",
    a: "A instalação leva entre 1 e 2 horas por veículo, realizada por técnicos especializados no local combinado. Para frotas maiores, montamos um cronograma por etapas sem interromper a operação.",
  },
] satisfies readonly Faq[];

const aboutFacts = [
  { label: "Fundação", value: "2 de outubro de 2010" },
  { label: "Sede", value: "Caçador, SC" },
  { label: "Atuação", value: "+15 anos no mercado" },
  { label: "Especialidades", value: "Segurança eletrônica e rastreamento" },
] as const;

const footerTags = [
  "Rastreamento GPS",
  "Frotas",
  "Videomonitoramento",
  "Bloqueio Remoto",
  "24h",
] as const;

/* ── SVG helpers ───────────────────────────────────────── */
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const MenuIcon = ({ open = false }: { open?: boolean }) => (
  <span className={`gs-menu-glyph${open ? " open" : ""}`} aria-hidden="true">
    <span className="gs-mg-top" />
    <span className="gs-mg-bot" />
    <span className="gs-mg-dot" />
  </span>
);

/* ── component ──────────────────────────────────────────── */
export default function GeralSegPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [waVisible, setWaVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setWaVisible(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".gs-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="gs-page" id="gs-root">

        {/* ── nav ── */}
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

        {/* mobile menu */}
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

        {/* ── hero ── */}
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

        {/* ── services ── */}
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

        {/* ── sobre ── */}
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

        {/* ── processo ── */}
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

        <section className="gs-section dark" id="processo" aria-labelledby="gs-processo-h2">
          <div className="gs-wrap">
            <p className="gs-section-label gs-reveal">Como Funciona</p>
            <h2 className="gs-h2 gs-reveal gs-d1 gs-text-white" id="gs-processo-h2">
              Simples de contratar,<br />poderoso na prática
            </h2>
            <div className="gs-divider gs-reveal gs-d2" />
            <p className="gs-lead gs-reveal gs-d2">
              Do primeiro contato à ativação do rastreamento — sem burocracia, sem demora,
              sem dor de cabeça.
            </p>

            <div className="gs-process-grid">
              {steps.map((s, i) => (
                <div key={s.num} className={`gs-step gs-reveal gs-d${i + 1}`}>
                  <div className="gs-step-num" aria-hidden="true">{s.num}</div>
                  <div>
                    <div className="gs-step-icon" aria-hidden="true">
                      <s.icon size={20} />
                    </div>
                    <h3 className="gs-step-title">{s.title}</h3>
                    <p className="gs-step-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── faq ── */}
        <section className="gs-section" id="duvidas" aria-labelledby="gs-faq-h2">
          <div className="gs-wrap">
            <p className="gs-section-label gs-reveal">Dúvidas Frequentes</p>
            <h2 className="gs-h2 gs-reveal gs-d1" id="gs-faq-h2">
              Suas perguntas, respondidas
            </h2>
            <div className="gs-divider gs-reveal gs-d1" />

            <div className="gs-faq-list gs-reveal gs-d2" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`gs-faq-item${openFaq === i ? " open" : ""}`}
                  role="listitem"
                >
                  <button
                    className="gs-faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`gs-faq-answer-${i}`}
                  >
                    <span className="gs-faq-q">{faq.q}</span>
                    <span className="gs-faq-chevron" aria-hidden="true">
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  <div
                    className="gs-faq-answer"
                    id={`gs-faq-answer-${i}`}
                    role="region"
                    aria-hidden={openFaq !== i}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="gs-faq-footer gs-reveal gs-d3">
              <p className="gs-faq-footer-text">
                Ficou com alguma dúvida? Nossa equipe responde.
              </p>
              <a href={createWhatsAppUrl("Olá! Tenho uma dúvida sobre rastreamento veicular.")} target="_blank" rel="noreferrer">
                <WaIcon size={15} />
                Perguntar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── cta final ── */}
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

        {/* ── footer ── */}
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

        {/* ── whatsapp float ── */}
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className={`gs-wa-float${waVisible ? " visible" : ""}`}
          aria-label="Falar pelo WhatsApp"
        >
          <WaIcon size={26} />
        </a>

    </div>
  );
}
