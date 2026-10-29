import aboutImage from '../../assets/sobre.jpeg'
import AboutWords from './AboutWords.jsx'

// Valores da referência visual; ajuste conforme sua experiência.
const highlights = [
    { value: '+100', label: 'Projetos finalizados' },
    { value: '+5', label: 'Anos na área' },
    { value: '+5', label: 'Anos na área' },
]

export default function About() {
    return (
        <section id="sobre-mim" className="bg-[#101426] py-[clamp(56px,7vw,104px)] font-[Montserrat,sans-serif]" aria-labelledby="about-title">
            <div className="container mx-auto grid grid-cols-1 items-center gap-[clamp(32px,5.7vw,80px)] px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
                <img
                    className="block aspect-339/416 w-full rounded-[14px] object-cover object-center max-lg:mx-auto max-lg:max-h-120 max-lg:max-w-120"
                    src={aboutImage}
                    alt="Gabriel Barrachino"
                    loading="lazy"
                />
                <div className="min-w-0">
                    <h2 id="about-title" className="m-0 mb-4.5 text-[28px] sm:text-4xl leading-tight font-semibold text-[#F0E9FA]">
                        Interfaces são a parte do produto que todo mundo <span className="text-[#A999ED]">toca.</span>
                    </h2>
                    <div className="grid gap-4.5 text-base leading-normal text-[#9699AD] [&_p]:m-0 [&_strong]:font-bold [&_strong]:text-[#F0E9FA]">
                        <p>
                            Sou <strong>Gabriel Barrachino</strong>, <strong>desenvolvedor front-end</strong> apaixonado por transformar ideias em experiências digitais. Acredito que uma boa interface vai além da aparência: ela precisa ser intuitiva, funcional e criar uma conexão real entre pessoas e produtos.
                        </p>
                        <p>
                            Meu trabalho une <strong>desenvolvimento e design</strong> para construir soluções que não apenas funcionam, mas também proporcionam uma experiência agradável em cada interação. Gosto de pensar em como cada elemento se comporta, como as informações são apresentadas e como pequenos detalhes podem fazer toda a diferença na experiência de quem utiliza o produto.
                        </p>
                        <p>
                            Trabalho com <strong>React</strong>, <strong>JavaScript</strong> e <strong>Tailwind CSS</strong>, desenvolvendo desde sites institucionais e landing pages até plataformas, dashboards e sistemas mais completos. Busco sempre criar interfaces responsivas, organizadas e acessíveis, equilibrando estética, desempenho e usabilidade.
                        </p>
                        <p>
                            Além do desenvolvimento, também participo do processo criativo dos projetos, explorando ideias, construindo layouts e buscando soluções para diferentes necessidades. Como sócio da BeCoders, tenho a oportunidade de acompanhar projetos desde o planejamento até a entrega, unindo minha visão técnica ao cuidado com o design.
                        </p>
                        <p>
                            Estou sempre explorando novas tecnologias, aprimorando minhas habilidades e procurando maneiras de tornar a web mais interessante, acessível e fácil de usar. Para mim, cada projeto é uma oportunidade de <strong>aprender, experimentar</strong> e transformar uma boa ideia em algo que realmente faça sentido para as pessoas.
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
            <AboutWords />
        </section>
    )
}
