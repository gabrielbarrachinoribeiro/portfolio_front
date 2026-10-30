import { ArrowRight } from 'lucide-react'
import projectImage from '../../assets/projeto1.jpg'

// Substitua as imagens e os links conforme cada projeto estiver pronto.
const projects = [
    { id: '01', title: 'Projeto', category: 'Plataforma saas', desktop: projectImage, href: null },
    { id: '02', title: 'Projeto', category: 'Plataforma saas', desktop: projectImage, href: null },
    { id: '03', title: 'Projeto', category: 'Plataforma saas', desktop: projectImage, href: null },
]

export default function Projects() {
    return (
        <>
        <section id="projetos" className="relative isolate scroll-mt-0" aria-label="Projetos selecionados">
            {projects.map((project, index) => (
                <article key={project.id} className={`sticky top-0 flex h-svh items-center overflow-clip py-8 max-[600px]:h-dvh max-[600px]:pt-9 max-[600px]:pb-0 ${index === 1 ? "bg-[#14192C]" : "bg-[#101426]"}`} style={{ zIndex: index + 1 }} aria-labelledby={`project-${project.id}`}>
                    <div className="flex h-full w-full flex-col justify-center max-[600px]:min-h-0 max-[600px]:justify-start">
                        <header className="container mx-auto mb-6 flex items-center justify-between gap-6 px-6 max-[600px]:shrink-0 max-[600px]:flex-wrap max-[600px]:gap-4.5">
                            <div className="flex items-center gap-4 max-[600px]:gap-3">
                                <span className="font-[Aclonica,sans-serif] text-[clamp(44px,6.5vw,72px)] leading-none text-transparent [-webkit-text-stroke:2px_#F0E9FA]" aria-hidden="true">{project.id}</span>
                                <div>
                                    <h2 id={`project-${project.id}`} className="m-0 font-[Aclonica,sans-serif] text-[clamp(28px,4.2vw,48px)] leading-[1.15]">{project.title}<span className="sr-only"> {project.id}</span></h2>
                                    <p className="m-0 text-sm text-[#9699AD]">{project.category}</p>
                                </div>
                            </div>
                            {project.href ? (
                                <a className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-md border border-[#AAA6B7] px-2.5 py-2 text-xs text-[#F0E9FA] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED] disabled:cursor-default" href={project.href}>Conhecer projeto <ArrowRight size={16} aria-hidden="true" /></a>
                            ) : (
                                <button className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-md border border-[#AAA6B7] px-2.5 py-2 text-xs text-[#F0E9FA] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED] disabled:cursor-default" type="button" disabled title="Link do projeto em breve">Conhecer projeto <ArrowRight size={16} aria-hidden="true" /></button>
                            )}
                        </header>
                        <div className="relative h-[min(65vw,calc(100svh_-_180px))] min-h-0 shrink max-[600px]:h-auto max-[600px]:flex-1">
                            <img className="block h-full w-full object-cover object-top" src={project.desktop} alt={`Visualização desktop do projeto ${project.id}`} loading="lazy" />
                        </div>
                    </div>
                </article>
            ))}
        </section>
        <div className="projects-footer flex justify-center bg-[#101426] px-6 pt-12">
            <a href="/projetos" className="inline-flex items-center justify-center gap-4 rounded-xl bg-white px-8 py-5 text-[clamp(16px,2vw,20px)] font-bold text-[#101426] no-underline shadow-[0_8px_30px_#ffffff15] transition-[background-color,box-shadow] duration-180 hover:bg-[#F0E9FA] hover:shadow-[0_8px_36px_#ffffff30] focus-visible:outline-3 focus-visible:outline-offset-6 focus-visible:outline-[#A999ED]">
                Ver todos os projetos
                <ArrowRight size={22} aria-hidden="true" />
            </a>
        </div>
        </>
    )
}

