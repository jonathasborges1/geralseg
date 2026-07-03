"use client";

import { useEffect, useState } from "react";
import { createWhatsAppUrl } from "../site";
import { WaIcon } from "./icons";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className={`gs-wa-float${visible ? " visible" : ""}`}
      aria-label="Falar pelo WhatsApp"
    >
      <WaIcon size={26} />
    </a>
  );
}
