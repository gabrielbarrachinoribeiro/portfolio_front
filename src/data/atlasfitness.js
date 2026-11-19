import cover from "../assets/atlasProjeto.png";
import modalities from "../assets/atlasProjeto2.png";

export const atlasfitness = {
  title: "Atlas Fitness",
  description: "Uma landing page para conhecer a academia e encontrar uma modalidade de treino.",
  category: "Landing page · Marketing",
  year: "2026",
  cover,
  coverAlt: "Abertura do site da Atlas Fitness com fotografia da academia e chamadas para começar a treinar",
  theme: { "--case-accent": "#8EC5FF" },
  about: "A página da Atlas Fitness apresenta a academia, suas modalidades e seus planos. A abertura oferece caminhos para quem já quer começar e para quem prefere conhecer o espaço e explorar as opções de treino primeiro.",
  role: "Design de interface & Front-end",
  type: "Landing page de academia",
  technologies: ["Interface web", "Design responsivo"],
  identity: {
    title: "Uma identidade de",
    highlight: "alto contraste.",
    description: "O azul-marinho faz a base para as fotografias da academia. O azul vivo destaca as chamadas principais, enquanto o branco e o azul-claro ajudam a organizar títulos, textos e detalhes.",
  },
  palette: [
    { name: "Azul principal", hex: "#2B7FFF", dark: true, className: "bg-[#2B7FFF]" },
    { name: "Azul-marinho", hex: "#0D213C", className: "bg-[#0D213C]" },
    { name: "Branco", hex: "#FFFFFF", dark: true, className: "bg-[#FFFFFF]" },
    { name: "Azul-claro", hex: "#8EC5FF", dark: true, className: "bg-[#8EC5FF]" },
  ],
  typography: {
    name: "Inter",
    family: "Inter, ui-sans-serif, system-ui, sans-serif",
    weights: "Regular / Medium / Semibold",
    sample: "Supere seus limites. Descubra sua força.",
    description: "Títulos em destaque marcam as seções, enquanto os textos e os links mantêm uma leitura direta.",
  },
  gallery: [
    {
      id: "modalidades",
      src: modalities,
      alt: "Seção de modalidades com cartões de musculação, funcional, cross training e spinning",
    },
  ],
  implementation: "A navegação reúne os atalhos para conhecer a academia, explorar modalidades, consultar planos e entrar em contato. Na seção de modalidades, cada cartão combina uma fotografia, o nome do treino e uma descrição curta.",
  features: [
    "Abertura com fotografia da academia e chamadas para começar ou conhecer o espaço",
    "Cartões de musculação, funcional, cross training e spinning",
    "Acesso aos planos na navegação e ao final da seção de modalidades",
  ],
  challenges: [
    {
      title: "Manter o texto legível sobre as fotos",
      solution: "Uma camada escura dá contraste aos títulos e botões da abertura e às descrições dos cartões.",
    },
    {
      title: "Facilitar a escolha de uma modalidade",
      solution: "Os cartões seguem a mesma estrutura para que o visitante consiga percorrer as opções e seguir para os planos.",
    },
  ],
};
