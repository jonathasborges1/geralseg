# GeralSeg

Site institucional da GeralSeg — Rastreamento Veicular & Monitoramento de Frotas. Landing page em Next.js com seções de soluções, sobre, processo de contratação, FAQ e contato via WhatsApp.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- [lucide-react](https://lucide.dev/) para ícones

## Como rodar

```bash
npm install
npm run dev
```

O site fica disponível em [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descrição                          |
| --------------- | ----------------------------------- |
| `npm run dev`       | Inicia o servidor de desenvolvimento |
| `npm run build`     | Gera o build de produção             |
| `npm run start`     | Sobe o build de produção             |
| `npm run lint`      | Roda o linter (ESLint)               |
| `npm run typecheck` | Gera os tipos de rota e roda `tsc --noEmit` |

## Estrutura

```
app/
  layout.tsx       # metadata, fontes (Barlow / Barlow Condensed)
  page.tsx         # composição das seções (Server Component)
  site.ts          # config do site (WhatsApp, endereço, links, logo)
  content.ts        # dados e tipos das seções (serviços, FAQ, etapas...)
  globals.css       # estilos globais
  components/
    SiteHeader.tsx      # nav + menu mobile (Client Component)
    WhatsAppFloat.tsx    # botão flutuante (Client Component)
    Faq.tsx              # accordion de dúvidas (Client Component)
    ScrollReveal.tsx      # animação on-scroll via IntersectionObserver (Client Component)
    Hero.tsx, Services.tsx, About.tsx, Location.tsx,
    ProcessSteps.tsx, CtaFinal.tsx, SiteFooter.tsx  # seções estáticas (Server Components)
    icons.tsx             # ícones compartilhados (WhatsApp, menu)
public/            # assets estáticos (imagens, og-image, etc.)
```

Apenas os componentes que precisam de estado ou de APIs do browser (scroll, menu, accordion) são Client Components — o restante roda no servidor, reduzindo o JS enviado ao cliente.

## Configuração

- Número de WhatsApp, endereço, links e logo estão centralizados em `app/site.ts`.
- Conteúdo textual das seções (serviços, FAQ, etapas, links de navegação) está em `app/content.ts`.
- Metadata de SEO/Open Graph está em `app/layout.tsx`.
