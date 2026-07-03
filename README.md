# GeraSeg

Site institucional da GeraSeg — Rastreamento Veicular & Monitoramento de Frotas. Landing page em Next.js com seções de soluções, sobre, processo de contratação, FAQ e contato via WhatsApp.

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
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção            |
| `npm run start` | Sobe o build de produção            |
| `npm run lint`  | Roda o linter                       |

## Estrutura

```
app/
  layout.tsx   # metadata, fontes (Barlow / Barlow Condensed)
  page.tsx     # página única com todas as seções do site
public/        # assets estáticos (imagens, og-image, etc.)
```

## Configuração

- Número de WhatsApp usado nos CTAs está definido em `app/page.tsx` (`WA_NUMBER`).
- Metadata de SEO/Open Graph está em `app/layout.tsx`.
