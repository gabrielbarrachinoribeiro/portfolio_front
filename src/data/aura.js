import cover from '../assets/auraProjeto.png'
import products from '../assets/auraProjeto2.png'

export const aura = {
  title: 'Aura.skin',
  description: 'O cuidado diário como um momento para si.',
  category: 'Landing page · Marketing',
  year: '2026',
  cover,
  coverAlt: 'Abertura da Aura.skin com uma fotografia de produto entre folhagens',
  theme: { '--case-accent': '#A999ED' },
  about: 'A Aura.skin apresenta uma linha de cuidados com a pele em uma landing page inspirada em rituais cotidianos. A abertura introduz a proposta da marca, enquanto a seleção de produtos ajuda a entender o papel de cada item na rotina.',
  role: 'Design de interface & Front-end',
  type: 'Landing page de produto',
  technologies: ['Interface web', 'Design responsivo'],
  identity: {
    title: 'Uma identidade de',
    highlight: 'inspiração botânica.',
    description: 'O marfim dá espaço às fotografias e os tons de verde retomam as folhagens e embalagens da marca.',
  },
  palette: [
    { name: 'Marfim', hex: '#F8F6F1', dark: true, className: 'bg-[#F8F6F1]' },
    { name: 'Verde escuro', hex: '#283B32', className: 'bg-[#283B32]' },
    { name: 'Verde musgo', hex: '#53695F', className: 'bg-[#53695F]' },
    { name: 'Verde sálvia', hex: '#A8B5A2', dark: true, className: 'bg-[#A8B5A2]' },
  ],
  typography: {
    name: 'Serif e Segoe UI',
    family: 'Montserrat, ui-sans-serif, system-ui, sans-serif',
    stylesheetUrl: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
    specimenFamily: '"Segoe UI", system-ui, sans-serif',
    sampleFamily: 'serif',
    weights: 'Títulos em serif e textos em Segoe UI',
    sample: 'Sua pele. Seu momento.',
    description: 'A serif dá um ritmo editorial aos títulos. Segoe UI facilita a leitura das descrições, preços e links de navegação.',
  },
  gallery: [{ id: 'produtos', src: products, alt: 'Seleção Aura.skin com gel de limpeza, sérum, hidratante e protetor solar' }],
  implementation: 'A página conduz da apresentação da marca à seleção de produtos. Cada item reúne fotografia, nome, preço e uma descrição breve para facilitar a comparação.',
  features: [
    'Abertura com fotografia e chamada para explorar os produtos',
    'Seleção de quatro produtos com imagens, preços e descrições',
    'Composição responsiva para leitura em telas de diferentes tamanhos',
  ],
  challenges: [
    { title: 'Conectar a marca à seleção de produtos', solution: 'A chamada na abertura leva à seleção, onde cada item é apresentado pelo papel que cumpre na rotina de cuidados.' },
    { title: 'Organizar as informações de cada produto', solution: 'A hierarquia separa nome, preço e descrição para facilitar a leitura entre os itens.' },
  ],
}
