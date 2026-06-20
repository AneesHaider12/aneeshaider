import Image from "next/image";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-50 px-3 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-slate-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal-600 sm:text-xs">
            Verified skills
          </span>
          <h2 className="mt-3 text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-5xl">
            Certifications
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl sm:flex-row sm:items-center sm:gap-8 sm:p-10"
            >
              <div className="flex items-center gap-4 sm:flex-none sm:flex-col sm:items-center sm:gap-3 sm:text-center">
                <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:h-28 sm:w-28">
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 sm:hidden">
                  <p className="truncate text-sm font-semibold uppercase tracking-wide text-teal-600">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-slate-500">{cert.date}</p>
                </div>
              </div>

              <div className="my-5 h-px w-full bg-slate-100 sm:hidden" />
              <div className="hidden h-24 w-px flex-none bg-slate-100 sm:block" />

              <div className="min-w-0 flex-1">
                <div className="hidden items-baseline justify-between gap-2 sm:flex">
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-slate-500">{cert.date}</p>
                </div>

                <h3 className="mt-1 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                  {cert.title}
                </h3>

                {cert.description && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;