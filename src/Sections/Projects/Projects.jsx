import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import projectImage from '../../assets/projeto1.jpg'
import contelarImage from '../../assets/contelar.png'
import folhetoImage from '../../assets/folheto.png'
import './Projects.css'

// Troque a imagem e o endereço de exemplo de cada projeto pelos definitivos.
const projects = [
    { id: '01', title: 'Projeto 01', category: 'UX/UI', description: 'Plataforma SaaS', image: projectImage, href: '/projetos/projeto-01' },
    { id: '02', title: 'Projeto 02', category: 'Branding', description: 'Identidade visual', image: contelarImage, href: '/projetos/projeto-02' },
    { id: '03', title: 'Projeto 03', category: 'Marketing', description: 'Site institucional', image: projectImage, href: '/projetos/projeto-03' },
    { id: '04', title: 'Projeto 04', category: 'UX/UI', description: 'Produto digital', image: projectImage, href: '/projetos/projeto-04' },
    { id: '05', title: 'Projeto 05', category: 'Acadêmico', description: 'Aplicação web', image: folhetoImage, href: '/projetos/projeto-05' },
]

const filters = ['Todos', ...new Set(projects.map((project) => project.category))]

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('Todos')
    const visibleProjects = activeFilter === 'Todos'
        ? projects
        : projects.filter((project) => project.category === activeFilter)

    return (
        <section id="projetos" className="section-spacing bg-[#101426] font-[Montserrat,sans-serif]" aria-labelledby="projects-title">
            <div className="container mx-auto px-6">
                <header className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">
                    <h2 id="projects-title" className="m-0 text-[28px] leading-tight font-semibold text-[#F0E9FA] sm:text-4xl">
                        Galeria de <span className="text-[#A999ED]">projetos</span>
                    </h2>
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                aria-pressed={activeFilter === filter}
                                aria-controls="projects-gallery"
                                onClick={() => setActiveFilter(filter)}
                                className={`cursor-pointer rounded-md border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED] ${activeFilter === filter ? 'border-[#A999ED] bg-[#A999ED] text-[#101426]' : 'border-[#9699AD]/60 text-[#F0E9FA] hover:border-[#A999ED] hover:bg-[#A999ED]/10'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </header>

                <p className="sr-only" role="status">{visibleProjects.length} projetos exibidos.</p>
                <div id="projects-gallery" className={`projects-gallery ${activeFilter === 'Todos' ? 'projects-gallery--mosaic' : ''}`}>
                    {visibleProjects.map((project) => (
                        <a
                            key={project.id}
                            href={project.href}
                            className={`project-card project-card--${project.id} group relative isolate block overflow-hidden rounded-[14px] bg-[#14192C] text-[#F0E9FA] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED]`}
                            aria-labelledby={`project-${project.id}`}
                        >
                            <img
                                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                                src={project.image}
                                alt=""
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050710]/95 via-[#050710]/10 to-transparent" />
                            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#F0E9FA]/15" aria-hidden="true" />
                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                                <div className="min-w-0">
                                    <h3 id={`project-${project.id}`} className="m-0 mb-1 text-xl leading-tight font-semibold sm:text-2xl">{project.title}</h3>
                                    <p className="m-0 text-sm text-[#F0E9FA]/80">{project.description} · {project.category}</p>
                                </div>
                                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#F0E9FA]/70 transition-colors group-hover:border-[#A999ED] group-hover:bg-[#A999ED] group-hover:text-[#101426]" aria-hidden="true">
                                    <ArrowUpRight size={18} />
                                </span>
                            </div>
                        </a>
                    ))}
                    <a href="/projetos" className="projects-gallery-more group relative isolate flex items-center justify-center gap-4 overflow-hidden rounded-[14px] border border-[#A999ED]/25 bg-[#14192C] p-6 text-center text-base font-semibold text-[#F0E9FA] no-underline transition-colors hover:border-[#A999ED] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED] sm:text-xl">
                        <img src={projectImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none" />
                        <div className="pointer-events-none absolute inset-0 bg-[#050710]/75" aria-hidden="true" />
                        <span className="relative">Ver todos os projetos</span>
                        <span className="relative inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#A999ED]/70 text-[#A999ED]" aria-hidden="true"><ArrowRight size={18} /></span>
                    </a>
                </div>
            </div>
        </section>
    )
}
