import Link from "next/link"
import Image from "next/image"
import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className=''>
        <h2 className='my-12 text-center text-2xl lg:text-5xl font-semibold uppercase tracking-wide text-slate-900'>
          Projects
        </h2>
    <div className=" flex flex-wrap items-center justify-center gap-4 object-cover">
        {
            PROJECTS.map((project,index)=>(
               <Link 
               key={index}
               href={project.url}
               target="_blank"
                >
                    <Image 
                    src={project.image}
                    alt="project"
                    width={300}
                    className="rounded-3xl border border-slate-400 "/>
                </Link>
            ))
        }

    </div>

    </div>
  )
}

export default Projects