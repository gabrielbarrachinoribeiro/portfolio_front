import auraImage from "../assets/aura.png";
import auraMobileImage from "../assets/auraMobile.png";
import nivoobankImage from "../assets/nivoobank.png";
import contelarImage from "../assets/contelar.png";
import contelarMobileImage from "../assets/contelarMobile.png";
import folhetoImage from "../assets/folheto.png";
import folhetoMobileImage from "../assets/folhetoMobile.png";
import imovelleveImage from "../assets/imovelleve.png";
import imovelMobileImage from "../assets/imovelMobile.png";
import atlasImage from "../assets/atlas.png";
import atlasMobileImage from "../assets/atlasMobile.png";

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
    mobileImage: contelarMobileImage,
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
    mobileImage: auraMobileImage,
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
    mobileImage: imovelMobileImage,
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
    mobileImage: folhetoMobileImage,
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
    mobileImage: atlasMobileImage,
    href: "/projetos/projeto-06",
    name: "Atlas Fitness",
    liveUrl: "https://atlasfitness-rho.vercel.app/",
    githubUrl: "https://github.com/gabrielbarrachinoribeiro/atlasfitness",
  },
];
