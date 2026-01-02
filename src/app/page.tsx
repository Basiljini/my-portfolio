import Image from "next/image";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
export default function HomePage() {
  return (
    <main>
     <div className="flex flex-col-reverse md:flex-row justify-around min-h-screen sm:mt-20">
      <div className="flex-col items-center md:items-start bg-gray-50 sm:mt-20">
         <p className="text-center font-bold text-6xl text-black-500 ">Hi, I'm<span className="text-blue-800"> Basil👋🏻</span></p>
        <h1 className="font-medium text-center md:text-left sm:text-2xl md:text-4xl text-black-500 mt-8">Software Developer {"  "}</h1>
        <h1 className="font-medium text-center md:text-left sm:text-2xl md:text-4xl text-black-500">Aspiring Cloud Engineer & AI Enthusiast</h1>
        <div className="flex justify-center space-x-20 text-lg mt-20 sm:mb-20">
          <a href="https://github.com/BasilJini"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 transition"
              target="_blank"
             rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/basil-jini/"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 transition"
            target="_blank"
             rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div>
        <Image src="/images/cover.png" alt="Profile Picture" className=""  width={500} height={500} priority />
      </div>
     </div>
      <About />
      <MyProjects />
      <Skills />
      <Experience />
      <Achievements />

    </main>
  );
}
