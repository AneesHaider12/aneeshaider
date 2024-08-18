import React from 'react'
import { SKILLS } from '../constants'

const Skills = () => {
  return (
    <div className='mt-20'>
        <div className='flex flex-col items-center justify-center'>
           <h2 className='my-12 text-center text-2xl sm:text-5xl font-semibold uppercase tracking-wide text-slate-900'>Skills</h2>
              <ul>
                {
                    SKILLS.map((skill,index)=>(
                        <li key={index}
                        className='m-10 border-b border-slate-900 text-slate-900 py-2 text-2xl tracking-normal lg:py-10 lg:text-4xl'>
                          {
                            skill
                          }
                        </li>
                    ))
                }
              </ul>
        </div>
    </div>
  )
}

export default Skills