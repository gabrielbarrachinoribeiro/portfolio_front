const tags = ['Sites institucionais', 'Plataformas digitais', 'Dashboards', 'E-commerce', 'Apps']

const experiences = [
    {
        year: '2024',
        period: '2024 - ATUAL',
        title: 'Becoders',
        role: 'Sócio / Desenvolvedor Front-end',
        description: 'Desenvolvimento de interfaces, aplicações web, sites, plataformas digitais e soluções personalizadas.',
    },
    {
        year: '2023',
        period: '2023 - 2024',
        title: 'Imóvel Guide',
        role: 'Estagiário Front-end',
        description: 'Desenvolvimento e manutenção de interfaces, implementação de layouts e funcionalidades web.',
    },
    {
        year: '2021',
        period: '2021 - 2025',
        title: 'Engenharia de Software',
        role: 'Faculdade Estácio',
        description: 'Desenvolvimento e manutenção de interfaces, implementação de layouts e funcionalidades web.',
    },
    {
        year: '2019',
        period: '2019 - 2021',
        title: 'ADS',
        role: 'Faculdade Anhanguera',
        description: 'Desenvolvimento e manutenção de interfaces, implementação de layouts e funcionalidades web.',
    },
]

export default function Experience() {
    return (
        <section id="experiencias" aria-label="Experiências profissionais e formação" className="section-spacing border-y border-[#F0E9FA]/15 bg-[#14192C] font-[Montserrat,sans-serif]">
            <div className="container mx-auto px-6">
                <ol className="m-0 list-none divide-y divide-[#F0E9FA]/15 p-0">
                    {experiences.map((experience) => (
                        <li key={experience.year} className="group grid grid-cols-1 items-center gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] md:gap-10 md:py-16 md:first:pt-0 md:last:pb-0 xl:grid-cols-[max-content_minmax(0,480px)_340px] xl:justify-between xl:gap-x-12">
                            <div>
                                <p className="m-0 mb-2 font-[Aclonica,sans-serif] text-[clamp(56px,6.5vw,80px)] leading-none text-transparent [-webkit-text-stroke:2px_#F0E9FA] transition-[color,-webkit-text-stroke-color] duration-300 group-hover:text-[#A999ED] group-hover:[-webkit-text-stroke-color:#A999ED]">
                                    {experience.year}
                                </p>
                                <p className="m-0 text-base text-[#9699AD]">{experience.period}</p>
                            </div>
                            <div className="min-w-0">
                                <h2 className="m-0 mb-1 text-2xl sm:text-[28px] leading-tight font-semibold text-[#F0E9FA]">{experience.title}</h2>
                                <p className="m-0 text-sm text-[#A999ED]">{experience.role}</p>
                                <p className="m-0 mt-3 text-base leading-tight text-[#9699AD]">{experience.description}</p>
                            </div>
                            <ul aria-label={`Áreas de atuação — ${experience.title}`} className="m-0 flex list-none flex-wrap gap-2 p-0 md:col-start-2 xl:col-start-auto">
                                {tags.map((tag) => (
                                    <li key={tag} className="rounded-md border border-[#9699AD]/80 px-2 py-1 text-sm leading-tight text-[#9699AD]">{tag}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
