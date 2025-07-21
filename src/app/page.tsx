import Image from "next/image";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Proyects";
import Skills from "./pages/Skills";
import Header from "./pages/Header";
import { FaBiohazard } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section
          id="hero"
          className="relative flex items-center justify-between h-screen overflow-hidden px-10"
        >
          {/* LEFT: Logo & Name */}
          <div className="z-10 flex flex-col gap-2 text-left">
            <div className="flex items-center gap-3">
              <FaBiohazard size={48} className="text-lime-400" />
              <h1 className="text-6xl font-extrabold tracking-tight">
                LIDIADOR
              </h1>
            </div>
            <h2 className="text-2xl text-gray-400 tracking-wider ml-2">
              Alejo Fraile
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-md">
              Fullstack Developer & Digital Artist. Innovation in experiences digitales.
            </p>
            <a
              href="#projects"
              className="inline-block mt-6 px-6 py-3 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-500 transition duration-300"
            >
              See my work
            </a>
          </div>

          {/* RIGHT: Gradient Background Visual */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="w-full h-full bg-gradient-to-bl from-lime-400/30 via-violet-500/20 to-transparent blur-3xl" />
          </div>
        </section>

        {/* OTHER SECTIONS */}
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
