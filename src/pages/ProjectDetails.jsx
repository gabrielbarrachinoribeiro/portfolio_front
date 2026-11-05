import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import ProjectFooter from '../components/projects/ProjectFooter'

export default function ProjectDetails({ project }) {
  return (
    <main id="topo" tabIndex={-1} className="flex min-h-dvh flex-col bg-[#101426] font-[Montserrat,sans-serif] text-[#F0E9FA]">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:py-20">
        <a href="/#projetos" className="inline-flex items-center gap-2 text-sm text-[#A999ED] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED]">
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar aos projetos
        </a>
        <h1 className="mt-12 text-3xl font-semibold sm:text-5xl">
          {project ? project.name || project.title : 'Projeto não encontrado'}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#F0E9FA]/80">
          {project ? 'Texto de teste. Em breve, você encontrará aqui mais informações sobre este projeto.' : 'Este projeto não está disponível. Volte à galeria para conhecer os outros projetos.'}
        </p>
        {project?.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#A999ED] px-5 py-3 font-semibold text-[#101426] transition-colors hover:bg-[#BBAEF5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED]">
            Acessar projeto
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
      </div>
      <ProjectFooter />
    </main>
  )
}
