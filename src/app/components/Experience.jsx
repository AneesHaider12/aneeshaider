import { EXPERIENCES } from "../constants"
import Image from "next/image"
const Experience = () => {
  return (
    <div className="bg-slate-200 rounded-3xl p-4">
      <h2 className="my-12 text-center text-2xl lg:text-5xl font-semibold uppercase
      tracking-wide text-slate-900">
        Experience
      </h2>
         <div>
            {
             EXPERIENCES.map((experience,index)=>(
                <div
                key={index}
                className="flex flex-wrap items-center p-4 lg:mb-24 lg:justify-center">
                    <div className="mx-4">
                        <Image
                        src={experience.img}
                        alt="company"
                        width={80}
                        height={80}
                        className="mb-2 mr-2 rounded-full border border-slate-400"/>
                    </div>
                    <div className="w-full max-w-full lg:w-3/4 text-slate-950 font-semibold">
                    <p className="mb-2 text-sm">
                        {experience.Year}
                    </p>
                    <h6>
                        <span className="text-sm">
                            {experience.Company}
                        </span>
                        <p className="my-4">
                            {experience.description}
                        </p>
                        <div className="flex flex-wrap ">
                         {experience.technology.map((tech,index)=>(
                            <span key={index}
                             className="mr-2 mt-4 rounded-full border border-slate-400 px-2 py-1 font-semibold bg-teal-200 ">
                              {tech}
                            </span>
                        ))} 
                          </div>
   
                    </h6>

                    </div>
                </div>
             ))
            }
        </div>
    </div>
  )
}

export default Experience