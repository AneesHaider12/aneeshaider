import gemini from "@/app/public/gemini.png"
import pppp from "@/app/public/pppp.png"
import logo1 from "@/app/public/lablab.png"
import deloitte_logo from "@/app/public/deloitte.png"
import law from "@/app/public/law.png"
import data from "@/app/public/data.jpeg"
import anthropic from "@/app/public/anthropic.jpg"
import aspire from "@/app/public/Aspire_Pakistan_certificate.jpg"
export const PROJECTS = [
    {
    name: "AI Lawyer Assistant",
    image: law,
    url: "https://github.com/AneesHaider12/AI_Lawyer_Assistant",
    description:
      "An AI-powered legal assistant that helps users find relevant case law, generate legal documents, and get answers to legal questions.",
    technology: ["LangChain", "FastAPI", "RAG", "Generative AI", "Numpy","LLMs"],
  },
  {
    name: "AI Data Analyst",
    image: data,
    url: "https://github.com/AneesHaider12/ai_data_analyst",
    description:
      "An AI-powered data analyst that helps users analyze and visualize data, generate reports, and gain insights from their data.",
    technology: ["LangChain", "Streamlit", "FastAPI", "RAG", "Generative AI", "Numpy","LLMs"],
  },

  {
    name: "Gemini.ai Clone",
    image: gemini,
    url: "https://github.com/AneesHaider12/Gemini",
    description:
      "A full-stack clone of Google's Gemini AI chat interface, featuring real-time conversational AI, message history, and a responsive chat experience built from the ground up.",
    technology: ["Next.js", "Generative AI", "Tailwind CSS", "API Integration"],
  },
  {
    name: "Realestate Webapp",
    image: pppp,
    url: "https://github.com/AneesHaider12/Realestate_App",
    description:
      "A property listing platform where users can browse, filter, and search real estate listings with detailed property pages, images, and location-based search.",
    technology: ["React.js", "Node.js", "MongoDB", "REST API"],
  },
  
]

export const SKILLS = [
  "Nextjs, AgenticAI, Generative AI",
  "Python , Scikit-learn, Pandas, Numpy, Matplotlib, Seaborn",
  "Reactjs, Nodejs,Laravel, Django, FastAPI",
  "PostgreSQL, MongoDB, Zod",
  "Claude Code, Supabase",
]

export const HEADLINE = ["Nice to Meet you"]
export const CERTIFICATIONS = [
  {
    issuer: "ASPIRE Pakistan",
    title: "Generative AI Developer",
    date: "2025",
    logo: aspire,
    description:"Focused on designing and deploying generative AI applications, including prompt engineering, retrieval-augmented generation (RAG), and agentic workflows. Built practical experience integrating large language models into production-ready systems.",
  },
  {
    issuer: "Anthropic",
    title: "AI Capabilities and Limitations",
    date: "2026",
    logo: anthropic,
    description:"Gained a deep understanding of the capabilities and limitations of AI systems, including ethical considerations and real-world applications.",
  },
]
export const ACHIEVEMENTS = [
  {
    title: "Harvard CS50X Puzzle Day Winner",
    date: "2025",
    description: "Won the prestigious Harvard CS50X Puzzle Day, showcasing exceptional problem-solving skills and creativity in tackling complex puzzles under time constraints.",
  },
  {
    title: "Dramatic Society Competitioin Winner",
    date: "2026",
    description: "Secured first place in the PILAC Dramatic Society Competition, demonstrating outstanding performance and creativity in theatrical arts, captivating audiences with compelling storytelling and stage presence.",
  },
]
export const EXPERIENCES = [
  {
    img: logo1,
    Year: "2024 -Present",
    role: "Ai Developer ",
    Company: "lablab.ai",
    description: "Actively Participated in Hackathons as a Full Stack Developer. ",
    technology: ["LangChain", "Nextjs", "Django", "FastAPI", "Agentic Ai", "Communication"],
  },
  {
    img: deloitte_logo,
    Year: "2025",
    role: "Data Analyst Intern",
    Company: "Deloitte",
    description:
      "Interned as a Data Analytics intern at Table au Deloitte, where I designed and developed interactive dashboards and data visualizations using Power BI / Tableau. Transformed raw business data into clear, actionable insights that supported data-driven decision-making across teams. Gained hands-on experience in translating complex datasets into visually compelling reports for stakeholders",
    technology: ["Tableau", "ProjectManagement", "Networking", "FastAPI", "Agentic Ai"],
  },
]