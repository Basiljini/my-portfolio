import Image from "next/image";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
export default function HomePage() {
  return (
    <main>
     <div className="flex flex-col-reverse md:flex-row justify-around min-h-screen sm:mt-20">
      <div className="flex-col items-center md:items-start bg-gray-50 sm:mt-20">
         <p className="text-center font-bold text-6xl text-black-500 ">Hi, I'm<span className="text-blue-800"> Basil👋🏻</span></p>
        <h1 className="font-medium sm:text-2xl md:text-4xl text-black-500 mt-8">Software Developer {"  "}</h1>
        <h1 className="font-medium sm:text-2xl md:text-4xl text-black-500">Aspiring Cloud Engineer & AI Enthusiast</h1>
      </div>
      <div>
        <Image src="/images/cover.png" alt="Profile Picture" className=""  width={500} height={500} priority />
      </div>
     </div>

      <About />
      <MyProjects />
    </main>
  );
}
