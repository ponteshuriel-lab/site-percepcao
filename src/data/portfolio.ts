export interface Project {
  id: number
  title: string
  category: string
  description: string
  cover: string
  images: string[]
}

export const categories = [
  'Todos',
  'Ensaios',
  'Casamentos',
  'Retratos',
  'Aniversário',
  'Eventos',
] as const

export type Category = (typeof categories)[number]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Crismа Luma',
    category: 'Ensaios',
    description: 'Um momento de fé e luz',
    cover: '/assets/portfolio/crisma-luma/capa.jpg',
    images: [
      '/assets/portfolio/crisma-luma/f1.jpg',
      '/assets/portfolio/crisma-luma/f2.jpg',
      '/assets/portfolio/crisma-luma/f3.jpg',
    ],
  },
  {
    id: 2,
    title: 'Aniversário Kelle',
    category: 'Aniversário',
    description: 'Celebrando mais um ano de vida',
    cover: '/assets/portfolio/aniversario-kelle/capa.jpg',
    images: [
      '/assets/portfolio/aniversario-kelle/f1.jpg',
      '/assets/portfolio/aniversario-kelle/f2.jpg',
      '/assets/portfolio/aniversario-kelle/f3.jpg',
    ],
  },
  {
    id: 3,
    title: 'Doutora Jordana',
    category: 'Retratos',
    description: 'Elegância e profissionalismo',
    cover: '/assets/portfolio/doutora-jordana/capa.jpg',
    images: [
      '/assets/portfolio/doutora-jordana/f1.jpg',
      '/assets/portfolio/doutora-jordana/f2.jpg',
      '/assets/portfolio/doutora-jordana/f3.jpg',
    ],
  },
  {
    id: 4,
    title: 'Rainha Clara',
    category: 'Ensaios',
    description: 'Beleza rainha',
    cover: '/assets/portfolio/rainha-clara/capa.jpeg',
    images: [
      '/assets/portfolio/rainha-clara/f1.jpeg',
      '/assets/portfolio/rainha-clara/f2.jpeg',
      '/assets/portfolio/rainha-clara/f3.jpeg',
    ],
  },
  {
    id: 5,
    title: 'Casamento Daniela & Carlos',
    category: 'Casamentos',
    description: 'O começo de uma história',
    cover: '/assets/portfolio/casamento-daniela-e-carlos/capa.jpg',
    images: [
      '/assets/portfolio/casamento-daniela-e-carlos/f1.jpg',
      '/assets/portfolio/casamento-daniela-e-carlos/f2.jpg',
      '/assets/portfolio/casamento-daniela-e-carlos/f3.jpg',
    ],
  },
  {
    id: 6,
    title: 'Aniversário Luma',
    category: 'Aniversário',
    description: 'Um ano a mais de história',
    cover: '/assets/portfolio/aniversario-luma/capa.jpg',
    images: [
      '/assets/portfolio/aniversario-luma/f1.jpg',
      '/assets/portfolio/aniversario-luma/f2.jpg',
      '/assets/portfolio/aniversario-luma/f3.jpg',
    ],
  },
  {
    id: 7,
    title: 'Aniversário Louise Maria',
    category: 'Aniversário',
    description: 'Momentos que ficam pra sempre',
    cover: '/assets/portfolio/aniversario-louise-maria/capa.jpg',
    images: [
      '/assets/portfolio/aniversario-louise-maria/f1.jpg',
      '/assets/portfolio/aniversario-louise-maria/f2.jpg',
      '/assets/portfolio/aniversario-louise-maria/f3.jpg',
    ],
  },
]