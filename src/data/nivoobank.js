import cover from "../assets/nivooProjeto.png";
import interfaceImage from "../assets/nivooProjeto2.png";

export const nivoobank = {
  id: "01",
  title: "Nivoobank",
  description: "O futuro do seu dinheiro começa aqui.",
  category: "Site institucional · Banco digital fictício",
  year: "2026",
  liveUrl: "https://nivoobank.vercel.app/",
  githubUrl: "https://github.com/gabrielbarrachinoribeiro/nivoobank",
  cover,
  coverAlt: "Página inicial da Nivoobank, com apresentação da conta digital e benefícios da marca fictícia",
  theme: {
    "--case-accent": "#B9F45D",
    "--case-background": "#101426",
    "--case-white": "#F8F9F5",
    "--case-muted": "#B4CEC5",
    "--case-surface": "#14192C",
  },
  about: "A Nivoobank é uma marca fictícia de banco digital, criada para explorar uma experiência financeira simples, próxima e contemporânea. O site apresenta a proposta da marca, seus benefícios e os caminhos para conhecer a conta digital. Um projeto conceitual que une identidade visual e interface para comunicar confiança e liberdade no dia a dia.",
  role: "Design de interface & Front-end",
  type: "Site de apresentação de marca",
  technologies: ["Interface web", "Design responsivo"],
  identity: {
    title: "Uma identidade que inspira",
    highlight: "confiança.",
    description: "Verde profundo como base. Um tom vibrante para destacar novas possibilidades.",
  },
  palette: [
    { name: "Verde destaque", hex: "#B9F45D", dark: true, className: "bg-[#B9F45D]" },
    { name: "Verde escuro", hex: "#0C2924", className: "bg-[#0C2924]" },
    { name: "Branco", hex: "#F8F9F5", dark: true, className: "bg-[#F8F9F5]" },
    { name: "Verde secundário", hex: "#367B5C", className: "bg-[#367B5C]" },
  ],
  typography: {
    name: "Poppins",
    family: "Poppins, ui-sans-serif, system-ui, sans-serif",
    stylesheetUrl: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
    weights: "Regular / Medium / Semibold",
    sample: "Mais liberdade para seus planos.",
    description: "Uma apresentação com títulos expressivos, textos diretos e espaço para conhecer a proposta da marca com tranquilidade.",
  },
  gallery: [{ id: "interface", src: interfaceImage, alt: "Detalhes da apresentação visual da Nivoobank, marca fictícia de banco digital" }],
  implementation: "A apresentação organiza a mensagem da marca em uma sequência de leitura clara: proposta, benefícios e convite para conhecer a conta. Cards, áreas de destaque e chamadas para ação compartilham a mesma linguagem visual, aproximando a identidade da Nivoobank de sua experiência na web.",
  features: [
    "Apresentação de uma marca fictícia de banco digital",
    "Benefícios em destaque, como conta digital, Pix e cartão",
    "Chamadas para ação com contraste e hierarquia visual",
  ],
  challenges: [
    { title: "Comunicar confiança e proximidade", solution: "A combinação de verdes, textos diretos e elementos visuais humanizados apresenta o universo financeiro de forma acessível." },
    { title: "Destacar o que importa", solution: "Títulos amplos e cards de benefícios ajudam a conduzir a leitura, enquanto o verde vibrante destaca as ações principais." },
  ],
};
