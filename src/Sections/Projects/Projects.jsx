import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";



const mosaicPlacement = {
  "01": "lg:[grid-area:1/1/5/5]",
  "02": "lg:[grid-area:1/5/3/10]",
  "03": "lg:[grid-area:1/10/5/13]",
  "04": "lg:[grid-area:3/5/5/10]",
  "05": "lg:[grid-area:5/1/7/5]",
  "06": "lg:[grid-area:5/5/7/13]",
};

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-20 md:py-30 bg-[#101426] font-[Montserrat,sans-serif]"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-6">
        <header data-aos="fade-up" className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <h2
            id="projects-title"
            className="m-0 text-[28px] leading-tight font-semibold text-[#F0E9FA] sm:text-4xl"
          >
            Galeria de <span className="text-[#A999ED]">projetos</span>
          </h2>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-[#F0E9FA]/65">
            Uma seleção de interfaces que conectam design, código e experiências digitais.
          </p>
        </header>

        <div
          id="projects-gallery"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(6,clamp(64px,6vw,96px))]"
        >
          {projects.map((project, index) => (
            <a
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`sm:max-lg:nth-[3n+1]:min-h-90 lg:h-full lg:min-h-0 ${mosaicPlacement[project.id]} min-w-0 min-h-65 group relative isolate block overflow-hidden rounded-[14px] bg-[#14192C] text-[#F0E9FA] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A999ED]`}
              aria-labelledby={`project-${project.id}`}
            >
              <picture>
                {project.mobileImage && (
                  <source media="(width < 40rem)" srcSet={project.mobileImage} />
                )}
                <img
                  className={`absolute inset-x-0 w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none ${project.id === "06" ? "object-center" : "object-top"} ${project.id === "05" ? "-top-6 h-[calc(100%+1.5rem)]" : "top-0 h-full"}`}
                  src={project.image}
                  alt=""
                  loading="lazy"
                />
              </picture>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#050710]/95 via-[#050710]/10 to-transparent" />
              <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#F0E9FA]/15"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div className="min-w-0">
                  <h3
                    id={`project-${project.id}`}
                    className="m-0 mb-1 text-xl leading-tight font-semibold sm:text-2xl"
                  >
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="m-0 text-sm text-[#F0E9FA]/80">
                      {[project.description, project.category].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
                <span
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#F0E9FA]/70 transition-colors group-hover:border-[#A999ED] group-hover:bg-[#A999ED] group-hover:text-[#101426]"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
