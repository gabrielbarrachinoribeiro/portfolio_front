import aboutImage from '../../assets/sobre.jpeg'

const highlights = [
    { value: '+50', label: 'Projetos finalizados' },
    { value: '+5', label: 'Anos na área' },
    { value: '100%', label: 'Projetos responsivos' },
]

export default function About() {
    return (
        <section id="sobre-mim" className="section-spacing bg-[#101426] font-[Montserrat,sans-serif]" aria-labelledby="about-title">
            <div className="container mx-auto grid grid-cols-1 items-center gap-[clamp(32px,5.7vw,80px)] px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
                <img
                    data-aos="fade-right"
                    className="block aspect-339/416 w-full rounded-[14px] object-cover object-center max-lg:mx-auto max-lg:max-h-120 max-lg:max-w-120"
                    src={aboutImage}
                    alt="Gabriel Barrachino"
                    loading="lazy"
                />
                <div data-aos="fade-up" data-aos-delay="150" className="min-w-0">
                    <h2 id="about-title" className="m-0 mb-4.5 text-[28px] sm:text-4xl leading-tight font-semibold text-[#F0E9FA]">
                        Interfaces são a parte do produto que todo mundo <span className="text-[#A999ED]">toca.</span>
                    </h2>
                    <div className="grid gap-4.5 text-base leading-normal text-[#9699AD] [&_p]:m-0 [&_strong]:font-bold [&_strong]:text-[#F0E9FA]">
                        <p>
                            Sou <strong>Gabriel Barrachino, desenvolvedor front-end</strong>, com experiência na criação de produtos digitais que conectam tecnologia, design e experiência do usuário. Acredito que uma boa interface vai além da aparência: ela precisa ser intuitiva, funcional e atender às necessidades reais de quem a utiliza.
                        </p>
                        <p>
                            Minha atuação envolve <strong>desenvolvimento web, UI/UX Design, prototipação, arquitetura de componentes, integração de APIs e otimização de interfaces</strong>. Busco compreender cada etapa da experiência do usuário, desde a organização das informações até as interações que tornam a navegação mais natural e eficiente.
                        </p>
                        <p>
                            Trabalho com tecnologias como <strong>React, JavaScript, HTML, CSS, Tailwind CSS e Vite</strong>, além de ferramentas como Git, GitHub e Figma. Também utilizo bibliotecas de animação e recursos interativos, sempre considerando boas práticas de desenvolvimento, performance, acessibilidade, responsividade e SEO.
                        </p>
                        <p>
                            Ao longo da minha trajetória, desenvolvi projetos para diferentes segmentos, incluindo sites institucionais, landing pages, e-commerces, dashboards, plataformas e sistemas web. Busco constantemente ampliar meus conhecimentos e explorar novas tecnologias para construir soluções escaláveis e visualmente consistentes.
                        </p>
                        <p>
                            <strong>Fui sócio e desenvolvedor front-end da BeCoders</strong>, onde ampliei minha experiência em gestão de projetos, tomada de decisões e relacionamento com clientes. Durante esse período, participei de todo o ciclo de desenvolvimento, desde o levantamento de requisitos e planejamento até a criação, implementação, publicação e manutenção de produtos digitais.
                        </p>
                    </div>
                    <dl className="mt-6 grid grid-cols-1 gap-5 min-[400px]:grid-cols-3 md:gap-4 [&_dd]:m-0 [&_dd]:text-xl [&_dd]:text-[#9699AD]">
                        {highlights.map((highlight, index) => (
                            <div key={index}>
                                <dt className="mb-1 text-[32px] leading-tight font-bold text-[#A999ED]">{highlight.value}</dt>
                                <dd>{highlight.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
