"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { createWhatsAppUrl } from "../site";
import { faqs } from "../content";
import { WaIcon } from "./icons";

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
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
              key={faq.q}
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
  );
}
