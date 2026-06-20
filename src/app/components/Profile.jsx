"use client"
import Image from "next/image"
import Link from "next/link"
import {FaDownload} from "react-icons/fa6"
import pfp from "@/app/public/fpf.png"
import { motion } from "framer-motion"

const Profile = () => {
    const headline="Nice to Meet You";
  return (
    <div className="my-24">
      <motion.div 
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}
        className="flex flex-col items-center justify-center gap-4">
          <Image
          src={pfp}
          width={210}
          height={110}
          alt="profilepic"
          className="rounded-full border-2  border-slate-600 "/>     
          <h1 className="text-2xl font-bold text-slate-800">Anees Haider</h1>
          <p className="tracking-tighter font-bold text-slate-800">
            Lahore,Punjab
          </p>
          <a href="/Anees_Haider.pdf"
  download="Anees_Haider_Resume.pdf"
  className="flex items-center gap-x-2 rounded-full bg-gray-300
   px-3 py-2 text-sm font-semibold tracking-tight text-slate-950
   hover:text-teal-900">
    Download Resume
    <FaDownload/>
</a>
    
        <p className="mb-10 max-w-2xl p-1 text-center text-xl tracking-tight text-slate-500 lg:text-3xl">
  I am a passionate{" "}
  <span className="border-b border-slate-800 font-bold text-slate-900">
    AI Engineer
  </span>{" "}
  and{" "}
  <span className="border-b border-slate-800 font-bold text-slate-900">
    Generative AI Developer
  </span>{" "}
  with a knack for building{" "}
  <span className="border-b border-slate-800 font-bold text-slate-900">
    RAG-based applications
  </span>{" "}
  that deliver accurate, context-aware intelligence. I specialize in both{" "}
  <span className="border-b border-slate-800 font-bold text-slate-900">front-end</span>{" "}
  and{" "}
  <span className="border-b border-slate-800 font-bold text-slate-900">back-end</span>{" "}
  development, ensuring a cohesive and efficient experience from start to end.
</p>
    </motion.div>
    </div>
  )
}

export default Profile
