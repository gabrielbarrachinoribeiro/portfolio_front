import auraImage from "../assets/aura.png";
import nivoobankImage from "../assets/nivoobank.png";
import contelarImage from "../assets/contelar.png";
import folhetoImage from "../assets/folheto.png";
import imovelleveImage from "../assets/imovelleve.png";
import atlasImage from "../assets/atlas.png";

export const projects = [
  {
    id: "01",
    title: "Projeto 01",
    category: "UX/UI",
    description: "Banco digital fictício",
    image: nivoobankImage,
    href: "/projetos/nivoobank",
    name: "Nivoobank",
    liveUrl: "https://nivoobank.vercel.app/",
  },
  {
    id: "02",
    title: "Projeto 02",
    category: "Branding",
    description: "Identidade visual",
    image: contelarImage,
    href: "/projetos/contelar",
    name: "Contelar",
    liveUrl: "https://contelar.vercel.app/visao-geral",
  },
  {
    id: "03",
    title: "Projeto 03",
    category: "Marketing",
    description: "Landing page de perfume",
    image: auraImage,
    href: "/projetos/projeto-03",
    name: "Aura.skin",
    liveUrl: "https://auraskin-self.vercel.app/",
    githubUrl: "https://github.com/gabrielbarrachinoribeiro/auraskin",
  },
  {
    id: "04",
    title: "Projeto 04",
    category: "UX/UI",
    description: "Plataforma de imóveis",
    image: imovelleveImage,
    href: "/projetos/imovelleve",
    name: "Imóvel Leve",
    liveUrl: "https://imovelleve.vercel.app/",
  },
  {
    id: "05",
    title: "Projeto 05",
    category: "Acadêmico",
    description: "Leitura de quadrinhos, mangás e webtoons",
    image: folhetoImage,
    href: "/projetos/folheto",
    name: "Folheto",
    liveUrl: "https://folheto.vercel.app/",
  },
  {
    id: "06",
    title: "Projeto 06",
    category: "Marketing",
    description: "Landing page de academia",
    image: atlasImage,
    href: "/projetos/projeto-06",
    name: "Atlas Fitness",
    liveUrl: "https://atlasfitness-rho.vercel.app/",
    githubUrl: "https://github.com/gabrielbarrachinoribeiro/atlasfitness",
  },
];
