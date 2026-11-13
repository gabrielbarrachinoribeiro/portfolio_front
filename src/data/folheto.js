import cover from "../assets/folhetoProjeto.png";
import interfaceImage from "../assets/folhetoProjeto2.png";

export const folheto = {
  id: "05",
  title: "Folheto",
  description: "Entre páginas e novos universos. Sua próxima história começa aqui.",
  category: "Aplicação web · Leitura digital",
  year: "2026",
  liveUrl: "https://folheto.vercel.app/",
  githubUrl: "https://github.com/gabrielbarrachinoribeiro/folheto",
  cover,
  coverAlt: "Visão geral da plataforma de leitura Folheto",
  theme: {
    "--case-accent": "#ffd230",
    "--case-background": "#101017",
    "--case-white": "#faf9f6",
    "--case-muted": "#7f8ca0",
    "--case-surface": "#101017",
  },
  about: "O Folheto é um espaço para quem gosta de descobrir histórias e se perder em novos universos. Quadrinhos, mangás, webtoons e outros formatos se encontram em uma experiência visual que coloca as obras em primeiro plano. A proposta é tornar o caminho entre encontrar uma história e começar a ler mais simples, convidativo e cheio de possibilidades.",
  role: "Design de interface & Front-end",
  type: "Plataforma de leitura",
  technologies: ["React", "JavaScript", "Tailwind CSS"],
  identity: {
    title: "Uma identidade que desperta",
    highlight: "curiosidade.",
    description: "Amarelo para descobrir. Um fundo escuro para deixar cada história brilhar.",
  },
  palette: [
    { name: "Amarelo principal", hex: "#ffd230", dark: true, className: "bg-[#ffd230]" },
    { name: "Fundo", hex: "#101017", className: "bg-[#101017]" },
    { name: "Textos", hex: "#7f8ca0", dark: true, className: "bg-[#7f8ca0]" },
    { name: "Branco", hex: "#faf9f6", dark: true, className: "bg-[#faf9f6]" },
  ],
  typography: {
    name: "Inter",
    family: "Inter, ui-sans-serif, system-ui, sans-serif",
    weights: "Regular / Medium / Semibold",
    sample: "Toda página abre um universo.",
    description: "Descubra novos traços, conheça outros mundos e encontre histórias que dão vontade de continuar. A próxima página está esperando.",
  },
  gallery: [{ id: "interface", src: interfaceImage, alt: "Detalhes da interface de leitura e descoberta de histórias do Folheto" }],
  implementation: "A interface foi pensada como uma porta de entrada para a leitura: capas em destaque, títulos fáceis de identificar e uma navegação com hierarquia clara. Componentes reutilizáveis conectam as diferentes seções e mantêm a mesma linguagem visual ao explorar o catálogo.",
  features: [
    "Uma experiência dedicada a quadrinhos, mangás e webtoons",
    "Apresentação visual das obras com destaque para suas capas",
    "Layout adaptável para explorar histórias em diferentes telas",
  ],
  challenges: [
    { title: "Dar espaço às histórias", solution: "Uma base visual discreta e áreas bem delimitadas deixam as ilustrações assumir o protagonismo, enquanto o amarelo orienta a atenção para as ações principais." },
    { title: "Equilibrar descoberta e leitura", solution: "Tipografia legível, espaçamento consistente e uma hierarquia simples ajudam a explorar o conteúdo com tranquilidade, do primeiro contato com uma obra até a próxima página." },
  ],
};
