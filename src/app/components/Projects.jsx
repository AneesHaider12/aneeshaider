import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="px-3 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="mb-10 text-center sm:mb-16">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal-600 sm:text-xs">
          Selected work
        </span>
        <h2 className="mt-3 text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-5xl">
          Projects
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-10">
        {PROJECTS.map((project, index) => (
          <article
            key={index}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl"
          >
            {/* big hero image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* details */}
            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{project.name}</h3>

              {project.description && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              )}

              {project.technology && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technology.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* link, pinned to the bottom of the card */}
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
              >
                View project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;