---
name: Percepção MD
description: Sistema visual preto e branco com personalidade cinematográfica e editorial
colors:
  black-deep: "#0A0A0A"
  black-dark: "#111111"
  black-gray: "#1A1A1A"
  black-mid: "#2A2A2A"
  white-cream: "#F4F4F1"
  white-stone: "#E8E8E3"
  gray-scrollbar: "#333333"
  white-selection: "rgba(244, 244, 241, 0.15)"
typography:
  display:
    fontFamily: "Bebas Neue, Impact, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.05em"
  editorial:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.5rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  none: "0"
  scrollbar: "2px"
spacing:
  section: "120px"
  container: "80px"
  gap-sm: "16px"
  gap-md: "32px"
  gap-lg: "64px"
components: {}
---

# Design System: Percepção MD

## Overview

**Estrela Norte Criativa: "A Galeria Noturna"**

O sistema visual de Percepção MD é um exercício de sobriedade absoluta. A paleta restrita a preto, branco e tons intermediários cria uma atmosfera de galeria noturna — um espaço onde as imagens são as únicas protagonistas e o design recede silenciosamente. A estética é cinematográfica: transições suaves, textos que surgem como cortinas de teatro, e uma sensação de imersão que acompanha o visitante desde o primeiro scroll.

A tipografia opera em dois registros contrastantes: Bebas Neue para títulos de impacto condensed e Playfair editorial para cabelos elegantes. Inter e JetBrains Mono completam o sistema com clareza funcional. O resultado é um equilíbrio entre brutalismo e sofisticação — mas sempre subordinado às imagens.

**Características-Chave:**
- Paleta monocromática absoluta — sem cores de destaque
- Animações cinematográficas com GSAP (clip-path, parallax, blur-to-sharp)
- Cursor personalizado como elemento de interação
- Layout full-viewport com seções intercaladas
- Tipografia condensed para hierarquia vertical

## Colors

A paleta é deliberadamente minimalista: preto profundo para fundo, branco quente para texto, e cinzas intermediários para camadas sutis.

### Primary
- **Preto Profundo** (#0A0A0A): Fundo principal de todas as seções. Cria a atmosfera noturna e permite que as imagens "flutuem" no escuro.
- **Preto Escuro** (#111111): Fundo de cards e containers secundários. Diferencia-se do fundo principal por uma camada mínima.
- **Cinza Profundo** (#1A1A1A): Bordas, separadores e elementos de terceiro nível. Usado para divider sem chamar atenção.

### Secondary
- **Cinza Médio** (#2A2A2A): Hover states, estados ativos e contraste sutil em elementos interativos.

### Neutral
- **Branco Creme** (#F4F4F1): Cor de texto principal. Quente o suficiente para não causar fadiga visual no fundo escuro.
- **Branco Pedra** (#E8E8E3): Cor de texto secundário e labels. Levemente mais quente que o creme principal.

### Named Rules
**A Regra da Restrição.** O branco (#F4F4F1) é usado apenas para texto e elementos essenciais. Nunca para fundos, bordas decorativas ou áreas de preenchimento. Sua raridade mantém a hierarquia visual.

## Typography

**Display Font:** Bebas Neue (com Impact como fallback)
**Body Font:** Inter (com system-ui como fallback)
**Editorial Font:** Playfair Display (com Georgia como fallback)
**Label Font:** JetBrains Mono

**Caráter:** O sistema tipográfico contrasta a brutalidade condensed de Bebas Neue com a elegância serifa de Playfair. Inter funciona como neutralizador em textos corridos, enquanto JetBrains Mono traz precisão técnica em labels e contadores. A combinação é cinematográfica — como letreiros de cinema encontrando manuscritos de editoria.

### Hierarchy
- **Display** (Bebas Neue, 400, clamp(3rem, 8vw, 6rem), line-height: 1): Títulos de seção e hero. impacto vertical com tracking generoso.
- **Editorial** (Playfair Display, 400, clamp(1.5rem, 4vw, 3rem), line-height: 1.2): Títulos de seção alternativos e textos de destaque. Transmite sofisticação.
- **Body** (Inter, 300, 1rem, line-height: 1.7): Texto corrido e descrições. Peso leve para não competir com as imagens.
- **Label** (JetBrains Mono, 400, 0.75rem, letter-spacing: 0.1em, uppercase): Navegação, contadores, categorias. Precisão técnica.

### Named Rules
**A Regra do Peso Leve.** Textos corridos usam sempre peso 300 (light). Pesos médios e bold são reservados para hierarquia visual, não para legibilidade de parágrafos.

## Layout

O layout é full-viewport com seções de altura variável. Não há grid rígido — a composição é ditada pelas imagens e pelo ritmo do scroll. Container widths são generosos (80px de padding lateral em desktop, 20px em mobile). Seções alternam entre fundo preto profundo (#0A0A0A) e preto escuro (#111111) para criar profundidade sem cor. A hierarquia é vertical: cada seção ocupa a tela inteira ou a maior parte dela.

## Elevation & Depth

O sistema não usa sombras. A profundidade é criada por:
1. **Tonal layering:** camadas de preto (0A0A0A → 111111 → 1A1A1A → 2A2A2A)
2. **Blur:** backdrop-filter no header cria separação sem elevação
3. **Parallax:** imagens se movem em velocidade diferente do texto
4. **Transições:** clip-path reveals criam sensação de profundidade temporal

### Named Rules
**A Regra do Plano Único.** Nenhum elemento flutua sobre outro com sombra. Profundidade é sempre horizontal (camadas de fundo) ou temporal (animações), nunca vertical.

## Shapes

Formas são retas e angulares. Não há border-radius em nenhum componente. O único arredondamento existe no scrollbar thumb (2px) e no cursor personalizado (100% circular por natureza). A linguagem visual é brutalista: cantos vivos, bordas nítidas, sem ornamento.

## Components

### Navigation
- **Estilo:** Fixa no topo, transparente que ganha backdrop-blur no scroll
- **Tipografia:** JetBrains Mono, uppercase, tracking generoso
- **Estados:** Transparência → blur + borda inferior sutil
- **Mobile:** Hamburger menu com menu overlay animado (GSAP stagger)

### Portfolio Card
- **Cantos:** Retos (0px radius)
- **Fundo:** Transparente (mostra a imagem)
- **Overlay:** Gradiente de preto que surge no hover
- **Informações:** Título + categoria aparecem com transição suave
- **Interação:** Cursor personalizado mostra "VIEW" no hover

### Portfolio Viewer (Lightbox)
- **Fundo:** Preto absoluto (#0A0A0A)
- **Navegação:** Setas laterais discretas
- **Barra de progresso:** Linha fina na parte inferior
- **Transições:** GSAP fade com clip-path

### Process Timeline
- **Estilo:** Linha vertical animada com 4 etapas
- **Nós:** Círculos preenchidos sequentialmente
- **Texto:** Títulos em Bebas Neue, descrições em Inter light
- **Animação:** Progresso sincronizado com scroll

### CTA Button
- **Estilo:** Ghost/outline — borda branca, fundo transparente
- **Hover:** Preenchimento branco com texto preto
- **Typografia:** JetBrains Mono, uppercase
- **Sem sombra, sem elevação**

### Smart Album Mockup
- **Estilo:** Frame de celular minimalista
- **Conteúdo:** Interface interna com fotos e navegação
- **Propósito:** Demonstrar a funcionalidade de entrega digital

## Do's and Don'ts

### Do:
- **Do** manter a paleta estritamente preto/branco/cinza
- **Do** usar Bebas Neue para títulos que precisam de impacto vertical
- **Do** deixar as imagens serem o protagonista — o design serve a elas
- **Do** usar clip-path e parallax para criar profundidade temporal
- **Do** manter textos em peso light (300) para equilíbrio visual

### Don't:
- **Don't** adicionar cores de destaque — o monocromático é a identidade
- **Don't** usar sombras em nenhum componente
- **Don't** arredondar cantos — a linguagem é brutalista
- **Don't** sobrecarregar com animações — cada movimento tem propósito
- **Don't** usar peso bold em textos corridos
