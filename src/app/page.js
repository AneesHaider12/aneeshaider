import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden bg-slate-200">
        <Profile />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Achievements />
        <Footer />
      </div>
    </>
  );
}