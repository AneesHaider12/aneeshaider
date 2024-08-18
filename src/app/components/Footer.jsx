
import Link from 'next/link'
import {FaWhatsapp,FaGithub ,FaLinkedin } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='mb-8 mt-10 bg-slate-800 rounded-3xl flex flex-col gap-3 sm:items-center sm:justify-center p-2 sm:p-4  '>
        <h1 className='px-10 font-semibold tracking-wider text-3xl lg:text-4xl'>Contact ✍</h1>
        <div className='flex items-center justify-center gap-3 lg:gap-8 '>
            <Link
            href="https://www.linkedin.com/in/anees-haider-b5b648273/"
            target="_blank"
            rel='noopener noreferrer'>
                <FaLinkedin fontSize={25}
                className='opacity:50 hover:opacity-80' 
                width={26}
                height={26}/>
            </Link>

            <Link
            href="https://github.com/AneesHaider12"
            target="_blank"
            rel='noopener noreferrer'>
                <FaGithub
                fontSize={25}
                className='opacity:50 hover:opacity-90 ' 
                width={26}
                height={26}/>
            </Link>

            <Link 
            className='flex items-center gap-2'
            href={"#"}
            target="_blank"
            rel='noopener noreferrer'>
                <FaWhatsapp
                fontSize={25}
                className='opacity:50 hover:opacity-90 ' 
                width={26}
                height={26}/>    
                <h3 className='font-medium'>
                    +92-3177095195
                </h3>
            </Link>

        </div>
    </div>
  )
}

export default Footer