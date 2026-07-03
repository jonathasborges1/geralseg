import type { LucideIcon } from "lucide-react";
import {
  Camera,
  MessageCircle,
  Navigation,
  Shield,
  Truck,
  Zap,
} from "lucide-react";

export type NavItem = {
  href: `#${string}`;
  label: string;
};

type IconContent = {
  icon: LucideIcon;
  title: string;
};

export type Service = IconContent & {
  eyebrow: string;
  desc: string;
  points: readonly string[];
};

export type ProcessStep = IconContent & {
  num: string;
  text: string;
};

export type Faq = {
  q: string;
  a: string;
};

export const navItems = [
  { href: "#top", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] satisfies readonly NavItem[];

export const services = [
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

export const steps = [
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

export const faqs = [
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

export const aboutFacts = [
  { label: "Fundação", value: "2 de outubro de 2010" },
  { label: "Sede", value: "Caçador, SC" },
  { label: "Atuação", value: "+15 anos no mercado" },
  { label: "Especialidades", value: "Segurança eletrônica e rastreamento" },
] as const;

export const footerTags = [
  "Rastreamento GPS",
  "Frotas",
  "Videomonitoramento",
  "Bloqueio Remoto",
  "24h",
] as const;
