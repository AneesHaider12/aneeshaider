import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-50 px-3 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-slate-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal-600 sm:text-xs">
            Milestones
          </span>
          <h2 className="mt-3 text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-5xl">
            Achievements
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={index}
              className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg sm:p-5"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
                </svg>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {achievement.title}
                  </h3>
                  {achievement.date && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      {achievement.date}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;