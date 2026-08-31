# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoas e famílias de Sobral (CE) e região que buscam fotografia profissional premium — casamentos, aniversários, retratos, ensaios religiosos e eventos especiais. O público valoriza qualidade artística, um estilo editorial sofisticado e a experiência de receber um "Smart Album" digital.

## Product Purpose

Apresentar o portfólio do Percepção MD, demonstrar o diferencial do Smart Album, e convencer visitantes a entrarem em contato via WhatsApp ou Instagram para agendar sessões de fotografia.

## Positioning

Fotografia premium com identidade visual marcante e entrega inovadora via Smart Album — "Mais do que registrar. Criamos imagens que permanecem."

## Operating Context

O visitante navega por um site single-page com scroll suave, animações cinematográficas (GSAP), e visualiza o portfólio filtrável por categoria. O contato acontece via WhatsApp ou Instagram, canais externos.

## Capabilities and Constraints

- Site estático (SPA React + Vite), sem backend
- Portfólio com 7 projetos em 6 categorias (Ensaios, Casamentos, Retratos, Aniversário, Eventos)
- Smart Album: funcionalidade de entrega digital interativa via mockup de celular
- Navegação por âncoras (sem React Router)
- Animações pesadas com GSAP + ScrollTrigger
- Suporte a `prefers-reduced-motion`
- Cursor personalizado (desktop only)
- Número do WhatsApp precisa ser atualizado (placeholder atual)
- Idioma: pt-BR

## Brand Commitments

- Nome: Percepção MD
- Tagline: "Mais do que registrar. Criamos imagens que permanecem."
- Identidade visual: preto e branco como linguagem principal
- Paleta escura minimalista (preto #0A0A0A, cinzas, creme #F4F4F1)
- Tipografia editorial: Bebas Neue (display), Playfair Display (serif), Inter (corpo), JetBrains Mono (labels)
- Tom de voz: sofisticado, artístico, intimista

## Evidence on Hand

- 7 projetos fotográficos com imagens em `public/assets/portfolio/`
- Logo SVG (lettermark "P") em `public/assets/logo-p.svg`
- Componentes: Hero, About, Portfolio, PortfolioViewer, SmartAlbum, Process, CTA, Footer
- Deploy configurado no Vercel
- WhatsApp link com número placeholder: `https://wa.me/5500000000000`

## Product Principles

1. A experiência visual deve ser cinematográfica e imersiva
2. O portfólio é o protagonista — o design serve às imagens
3. Entrega inovadora via Smart Album como diferencial competitivo
4. Contato direto e simples (WhatsApp/Instagram)
5. Acessibilidade respeitada (reduced-motion, semantic HTML)

## Accessibility & Inclusion

- Hook `useReducedMotion` implementado
- Animações desabilitadas quando `prefers-reduced-motion: reduce`
- Cursor personalizado oculto em dispositivos touch
