"use client"
import Image from "next/image"
import Link from "next/link"
import {FaDownload} from "react-icons/fa6"
import profilepic from "@/app/public/egfgsd.jpg"
import { motion } from "framer-motion"

const Profile = () => {
    // const headline="Nice to Meet You";
  return (
    <div className="my-24">
      <motion.div 
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}
        className="flex flex-col items-center justify-center gap-3">
          <Image
          src={profilepic}
          width={210}
          height={110}
          alt="profilepic"
          className="rounded-full border-2  border-slate-600 "/>     
          <h1 className="text-2xl font-bold text-slate-800">Anees Haider</h1>
          <p className="tracking-tighter font-bold text-slate-800">
            Khushab,Punjab
          </p>
          <Link href="/anees.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center gap-x-2 rounded-full bg-gray-300
           px-3 py-2 text-sm font-semibold tracking-tight text-slate-950
           hover:text-teal-900">
            Download Resume
            <FaDownload/>
        
        </Link>
        <div className="flex items-center flex-col justify-center p-8 mx-5">

        
        <p className="flex items-center justify-center flex-wrap my-10 text-center text-6xl font-semibold tracking-wide lg:tracking-wider lg:text-[10rem] pb-5 pt-3   text-slate-900">
        خوش آمدید    
        </p>
            <span className="my-2 text-center text-5xl font-semibold tracking-normal lg:text-[10rem]  text-slate-900 ">👋</span>
        </div>
        <p className="mb-10 max-w-2xl p-1 text-center text-xl tracking-tight text-slate-500 lg:text-3xl">
          I am a passionate{" "}
          <span className="border-b border-slate-800 font-bold text-slate-900">
            Reactjs/Nextjs Developer
          </span>{" "}
          with a knack of creating seamless, responsive web applications.I specialize in both{" "}
          <span className=" border-b border-slate-800 font-bold text-slate-900">front-end</span>
          and{" "}
          <span className=" border-b border-slate-800 font-bold text-slate-900">back-end</span>{" "}
          development,ensuring a cohesive and  efficient user experience from start to end.
        </p>

    </motion.div>
    </div>
  )
}

export default Profile