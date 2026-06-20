import { EXPERIENCES } from "../constants";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-50 px-3 py-12 sm:px-8 sm:py-16 lg:py-24">
      {/* ambient backdrop accents — kept subtle, no extra motion */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-slate-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal-600 sm:text-xs">
            Career path
          </span>
          <h2 className="mt-3 text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-5xl">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* the spine — a real timeline, since entries are chronological */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-400 via-slate-300 to-transparent sm:left-[7px]" />

          <div className="space-y-6 sm:space-y-10">
            {EXPERIENCES.map((experience, index) => (
              <div key={index} className="relative flex gap-3 sm:gap-7">
                {/* timeline node — small marker, not the logo */}
                <div className="relative z-10 flex-none pt-1">
                  <div className="h-3 w-3 rounded-full border-2 border-teal-500 bg-white sm:h-4 sm:w-4" />
                </div>

                {/* card */}
                <div className="group min-w-0 flex-1 -mt-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-12 w-16 flex-none items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-1.5 sm:h-16 sm:w-24 sm:p-2">
                        <Image
                          src={experience.img}
                          alt={experience.Company}
                          width={88}
                          height={56}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-bold text-slate-900 sm:text-xl">
                          {experience.Company}
                        </h3>
                        {experience.role && (
                          <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 sm:text-sm">
                            {experience.role}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 sm:self-auto">
                      {experience.Year}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technology.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 transition-colors group-hover:border-teal-300 group-hover:bg-teal-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;