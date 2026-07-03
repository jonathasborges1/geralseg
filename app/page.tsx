import { About } from "./components/About";
import { CtaFinal } from "./components/CtaFinal";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { ProcessSteps } from "./components/ProcessSteps";
import { ScrollReveal } from "./components/ScrollReveal";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function GeralSegPage() {
  return (
    <div className="gs-page" id="gs-root">
      <ScrollReveal />
      <SiteHeader />
      <Hero />
      <Services />
      <About />
      <Location />
      <ProcessSteps />
      <Faq />
      <CtaFinal />
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
