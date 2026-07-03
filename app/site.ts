export const siteConfig = {
  name: "GeralSeg",
  title: "GeralSeg - Rastreamento Veicular & Monitoramento de Frotas",
  description:
    "Rastreamento GPS em tempo real, monitoramento de frotas e videomonitoramento veicular para empresas e pessoas em todo o Brasil.",
  url: "https://geralseg.com.br",
  logo: "/images/geralseg-logo.png",
  ogImage: "/images/og-image.jpg",
  clientAreaUrl: "https://www.itrack.com.br/geralseg",
  whatsappNumber: "5549988010695",
  defaultWhatsappMessage:
    "Olá, GeralSeg! Gostaria de saber mais sobre rastreamento veicular.",
  address:
    "Rua Dr. Altamiro Guimarães, 26, Sala 02 - Centro, Caçador - SC, 89500-025.",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Dr.%20Altamiro%20Guimaraes%2026%20Sala%2002%20Centro%20Cacador%20SC%2089500-025",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rua%20Dr.%20Altamiro%20Guimaraes%2026%20Sala%2002%20Centro%20Cacador%20SC%2089500-025&output=embed",
} as const;

export function createWhatsAppUrl(
  message: string = siteConfig.defaultWhatsappMessage,
) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
