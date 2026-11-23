import contelarImage from "../assets/contelarProjeto.png";
import contelarInterface from "../assets/contelarProjeto2.png";

// Conteúdo inicial do case: ajuste os textos e as escolhas técnicas conforme o projeto.
export const contelar = {
  id: "02",
  theme: {
    "--case-accent": "#B6F568", "--case-background": "#090B0F",
    "--case-white": "#F5F7FA", "--case-surface": "#12171D", "--case-muted": "#9FA3AA",
  },
  coverAlt: "Visão geral do Contelar com saldo, receitas, despesas e gráficos financeiros",
  identity: { title: "Uma identidade que dá", highlight: "clareza.", description: "Contraste para organizar. Verde para destacar o que faz o dinheiro se mover." },
  title: "Contelar",
  description:
    "Uma visão clara do seu dinheiro. Mais espaço para os seus planos.",
  category: "Aplicação web · Finanças pessoais",
  year: "2026",
  liveUrl: "https://contelar.vercel.app/visao-geral",
  githubUrl: "https://github.com/gabrielbarrachinoribeiro/contelar",
  cover: contelarImage,
  about:
    "O Contelar reúne saldo, movimentações e metas em uma visão organizada das finanças pessoais. A proposta é transformar números dispersos em informações fáceis de acompanhar, ajudando a entender para onde o dinheiro vai e a planejar os próximos passos.",
  role: "Design de interface & Front-end",
  type: "Dashboard financeiro",
  technologies: ["React", "JavaScript", "Tailwind CSS"],
  palette: [
    {
      name: "Verde principal",
      hex: "#B6F568",
      dark: true,
      className: "bg-[#B6F568]",
    },
    { name: "Fundo", hex: "#090B0F", className: "bg-[#090B0F]" },
    { name: "Superfície", hex: "#191F28", className: "bg-[#191F28]" },
    { name: "Texto", hex: "#F5F7FA", dark: true, className: "bg-[#F5F7FA]" },
  ],
  typography: {
    name: "Inter",
    description: "Acompanhe o presente. Planeje o futuro. Uma interface que deixa os números falarem com simplicidade.",
    family: "Inter, ui-sans-serif, system-ui, sans-serif",
    weights: "Regular / Medium / Semibold",
    sample: "Clareza em cada escolha.",
  },
  gallery: [
    {
      id: "interface",
      src: contelarInterface,
      alt: "Interface do Contelar com detalhes da organização financeira",
    },
  ],
  implementation:
    "Uma interface organizada em componentes reutilizáveis, com hierarquia entre indicadores, gráficos e movimentações. A mesma linguagem visual conecta a navegação, os dados e as ações principais.",
  features: [
    "Visão geral de saldo, receitas e despesas",
    "Organização de transações por categoria",
    "Acompanhamento de metas financeiras",
  ],
  challenges: [
    {
      title: "Dar clareza aos dados",
      solution:
        "Indicadores em destaque, cores com funções definidas e gráficos acompanhados de rótulos para facilitar a leitura.",
    },
    {
      title: "Adaptar a densidade da interface",
      solution:
        "Grades que se reorganizam em telas menores e uma ordem de leitura que mantém o resumo financeiro em primeiro lugar.",
    },
  ],
};
