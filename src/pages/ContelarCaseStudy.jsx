import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { contelar as project } from "../data/contelar";
import { projects } from "../data/projects";
import { Reveal, SectionHeading } from "../components/projects/CaseSection";
import ColorPalette from "../components/projects/ColorPalette";
import ProjectFooter from "../components/projects/ProjectFooter";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6F568]";

export default function ContelarCaseStudy() {
  const nextProject =
    projects[
      (projects.findIndex((item) => item.id === "02") + 1) % projects.length
    ];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contelar — Case de projeto";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main
      id="topo"
      tabIndex={-1}
      className="min-h-dvh overflow-x-clip bg-[#090B0F] font-sans text-[#F5F7FA] selection:bg-[#B6F568] selection:text-[#090B0F]"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <div style={{ fontFamily: project.typography.family }}>
        <nav
          aria-label="Navegação do projeto"
          className="container mx-auto flex items-center justify-between gap-4 px-6 py-7"
        >
          <a
            href="/#projetos"
            className={`group inline-flex items-center gap-2 text-xs text-[#F5F7FA]/65 transition-colors hover:text-[#B6F568] ${focus}`}
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Voltar aos projetos
          </a>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F7FA]/40">
            Portfolio / Case 02
          </span>
        </nav>

        <header className="container mx-auto px-6 pb-14 pt-10 sm:pt-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#B6F568]">
            <span className="size-1.5 rounded-full bg-[#B6F568]" />
            Design & desenvolvimento
          </div>
          <div className="mt-5 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <h1 className="text-balance text-[clamp(4.5rem,11vw,10rem)] font-medium leading-[0.95] tracking-[-0.075em]">
              {project.title}
              <span className="text-[#B6F568]">.</span>
            </h1>
            <p className="text-pretty max-w-sm text-lg leading-relaxed tracking-tight text-[#F5F7FA]/65 sm:text-xl lg:pb-2">
              {project.description}
            </p>
          </div>
          <div className="mt-9 flex flex-col justify-between gap-6 border-t border-[#F5F7FA]/10 pt-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#F5F7FA]/50">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-[#B6F568] hover:underline ${focus}`}
              >
                Acessar projeto
                <ArrowUpRight size={16} />
              </a>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 hover:text-[#B6F568] ${focus}`}
                >
                  <Github size={15} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-[#F5F7FA]/35">
                  <Github size={15} />
                  Repositório em breve
                </span>
              )}
            </div>
          </div>
          <div className="mt-9 overflow-hidden rounded-xl border border-[#F5F7FA]/5 bg-[#12171D]">
            <img
              src={project.cover}
              alt="Visão geral do Contelar com saldo, receitas, despesas e gráficos financeiros"
              fetchPriority="high"
              className="h-auto w-full"
            />
          </div>
        </header>

        <div className="container mx-auto space-y-16 px-6 pb-16 sm:space-y-24 sm:pb-24">
          <Reveal>
            <section
              aria-labelledby="about-contelar"
              className="grid gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <h2
                id="about-contelar"
                className="text-balance text-2xl font-medium tracking-tight lg:col-span-4"
              >
                Sobre o <span className="text-[#B6F568]">projeto</span>
              </h2>
              <div className="lg:col-span-8">
                <p className="text-pretty max-w-3xl text-lg leading-relaxed text-[#F5F7FA]/70 sm:text-xl">
                  {project.about}
                </p>
                <dl className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {[
                    ["Minha função", project.role],
                    ["Tecnologias", project.technologies.join(" · ")],
                    ["Aplicação", project.type],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="mb-2 text-xs uppercase tracking-widest text-white/40">
                        {label}
                      </dt>
                      <dd className="text-pretty text-sm leading-relaxed">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section aria-label="Identidade visual">
              <SectionHeading
                title="Uma identidade que dá"
                highlight="clareza."
              >
                Contraste para organizar. Verde para destacar o que faz o
                dinheiro se mover.
              </SectionHeading>
              <ColorPalette colors={project.palette} />
              <div className="mt-9 grid gap-8 border-b border-white/10 pb-9 md:grid-cols-2 md:gap-16">
                <div>
                  <p className="text-pretty text-xs uppercase tracking-widest text-white/40">
                    Tipografia / {project.typography.name}
                  </p>
                  <div className="mt-4 flex items-baseline gap-6">
                    <span className="text-7xl font-medium tracking-tighter sm:text-8xl">
                      Aa
                    </span>
                    <div>
                      <p className="text-pretty text-xl">{project.typography.name}</p>
                      <p className="text-pretty mt-2 text-xs text-white/40">
                        {project.typography.weights}
                      </p>
                    </div>
                  </div>
                  <p className="text-pretty mt-4 wrap-break-word font-mono text-xs leading-relaxed tracking-widest text-white/40">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    <br />
                    abcdefghijklmnopqrstuvwxyz · 0123456789
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-pretty text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    {project.typography.sample}
                  </p>
                  <p className="text-pretty mt-4 max-w-md text-sm leading-relaxed text-white/55">
                    Acompanhe o presente. Planeje o futuro. Uma interface que
                    deixa os números falarem com simplicidade.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs text-[#B6F568]">
                    Seu próximo passo começa aqui
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section aria-label="Interface e experiência">
              <SectionHeading title="Do detalhe à" highlight="visão geral." />
              <div className="space-y-6">
                {project.gallery.map((item) => (
                  <img
                    key={item.id}
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-auto w-full rounded-xl border border-[#F5F7FA]/5"
                  />
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section aria-label="Desenvolvimento">
              <SectionHeading title="Por trás da" highlight="interface." />
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                <div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#B6F568]/[0.07] px-3 py-1.5 text-xs text-[#B6F568]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-pretty max-w-xl text-sm leading-7 text-white/60">
                    {project.implementation}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/75"
                      >
                        <ArrowRight
                          size={14}
                          className="mt-1 shrink-0 text-[#B6F568]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={challenge.title}
                      className="border-t border-white/10 pt-5"
                    >
                      <h3 className="text-balance text-base flex items-center font-medium">
                        <span className="mr-3 font-mono text-xs text-[#B6F568]">
                          0{index + 1}
                        </span>
                        {challenge.title}
                      </h3>
                      <p className="text-pretty mt-3 text-sm leading-7 text-white/55">
                        {challenge.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <a
              href={nextProject.href}
              className={`group grid items-center gap-8 border-t border-white/15 pt-9 sm:grid-cols-2 ${focus}`}
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Próximo projeto
                </span>
                <div className="mt-4 flex items-center gap-5">
                  <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-5xl">
                    {nextProject.name || nextProject.title}
                  </h2>
                  <ArrowUpRight className="size-8 text-[#B6F568] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <p className="text-pretty mt-4 text-sm text-white/45">
                  {nextProject.description} · {nextProject.category}
                </p>
              </div>
              <img
                src={nextProject.image}
                alt={`Prévia de ${nextProject.name || nextProject.title}`}
                loading="lazy"
                className="aspect-[2.8/1] w-full rounded-sm object-cover object-top transition-opacity group-hover:opacity-80"
              />
            </a>
          </Reveal>
        </div>
        <ProjectFooter />
      </div>
    </main>
  );
}
