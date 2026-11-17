import cover from "../assets/imovelProjeto.png";
import interfaceImage from "../assets/imovelProjeto2.png";

export const imovelleve = {
  id: "04",
  title: "Imóvel Leve",
  description: "Um novo endereço para os seus planos.",
  category: "Aplicação web · Plataforma de imóveis",
  year: "2026",
  liveUrl: "https://imovelleve.vercel.app/",
  githubUrl: "https://github.com/gabrielbarrachinoribeiro/imovelleve",
  cover,
  coverAlt: "Apresentação da plataforma de imóveis Imóvel Leve",
  theme: {
    "--case-accent": "#FA5700",
    "--case-background": "#0a0d12",
    "--case-white": "#FAF9F6",
    "--case-muted": "#FAF9F6B3",
    "--case-surface": "#0a0d12",
  },
  about: "O Imóvel Leve é uma plataforma de imóveis que aproxima pessoas de novos lugares para viver. A proposta visual coloca os imóveis em destaque e organiza as informações para tornar a descoberta mais clara e convidativa. Uma experiência que combina identidade, conteúdo e navegação para dar leveza à procura de um novo endereço.",
  role: "Design de interface & Front-end",
  type: "Plataforma de imóveis",
  technologies: ["Interface web", "Design responsivo"],
  identity: {
    title: "Uma identidade que abre",
    highlight: "novas portas.",
    description: "Laranja para orientar o próximo passo. Tons neutros para dar espaço aos imóveis e às suas possibilidades.",
  },
  palette: [
    { name: "Laranja", hex: "#FA5700", dark: true, className: "bg-[#FA5700]" },
    { name: "Preto", hex: "#0a0d12", className: "bg-[#0a0d12]" },
    { name: "Off-white", hex: "#FAF9F6", dark: true, className: "bg-[#FAF9F6]" },
    { name: "Laranja claro", hex: "#FF965E", dark: true, className: "bg-[#FF965E]" },
  ],
  typography: {
    name: "Montserrat",
    family: "Montserrat, ui-sans-serif, system-ui, sans-serif",
    stylesheetUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
    weights: "Regular / Medium / Semibold / Bold",
    sample: "Seu próximo lugar começa aqui.",
    description: "Formas geométricas e uma leitura clara aproximam títulos, informações e chamadas para ação em uma linguagem acolhedora e contemporânea.",
  },
  gallery: [{ id: "interface", src: interfaceImage, alt: "Detalhes da interface da plataforma Imóvel Leve" }],
  implementation: "A interface organiza a apresentação dos imóveis com uma hierarquia visual consistente. Imagens, informações e chamadas para ação compartilham a mesma linguagem, criando continuidade entre a descoberta da plataforma e a exploração de um novo lugar para viver.",
  features: [
    "Apresentação visual de imóveis com destaque para as fotografias",
    "Informações organizadas para facilitar a exploração",
    "Identidade consistente em diferentes tamanhos de tela",
  ],
  challenges: [
    { title: "Trazer clareza à procura", solution: "Espaçamentos e uma hierarquia bem definida ajudam a organizar o conteúdo, dando destaque às informações de cada imóvel." },
    { title: "Equilibrar acolhimento e confiança", solution: "A Montserrat e os tons neutros oferecem uma base sóbria, enquanto o laranja traz energia e destaca os próximos passos da navegação." },
  ],
};
