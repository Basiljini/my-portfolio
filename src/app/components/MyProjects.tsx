import Image from "next/image";
import React from "react";

export default function MyProjects() {
  const projects = [
    {
      Image: "/images/projects/ekart.png",
      title: "E-Kart",
      description: "An online shopping platform built with React and Redux for state management.",
      tech: "React, Redux, Node.js, Express.js, MongoDB",
      link: "https://e-cart-redux-five.vercel.app/",
    },
    {
      Image: "/images/projects/mediaplayer.png",
      title: "Media Player",
      description: "An online video player built with React and Nodejs where users can add and play videos manage playlists.",
      tech: "React, Node.js, Express.js, MongoDB",
      link: "https://mediaplayer07.netlify.app/",
    },
    {
      Image: "/images/projects/weatherapp.png",
      title: "Weather Details Search",
      description: "A web application that provides weather information and forecasts.",
      tech: "React, Node.js, Postman API",
      link: "https://weatherdetailssearch.netlify.app/",
    },
    {
      Image: "/images/projects/bmi.png",
      title: "BMI Calculator",
      description: "A simple BMI calculator that helps users determine their body mass index.",
      tech: "React, Node.js, CSS Modules",
      link: "https://bmi-health.netlify.app/",
    },
    {
      Image: "/images/projects/luminousqa.png",
      title: "Luminous",
      description: "A freelance project for Electrical and Mechanical services company based in UAE.",
      tech: "NextJs, Node.js, Tailwind CSS",
      link: "https://www.luminousqa.com/",
    },
    {
      Image: "/images/projects/pukkasilver.png",
      title: "Pukka Silver",
      description: "A freelance project for a Silver jewelry company based in UAE.",
      tech: "NextJs, Node.js, Tailwind CSS",
      link: "https://pukkasilver.com/",
    },
     {
      Image: "/images/projects/charwood.png",
      title: "CharWood Trading Company",
      description: "A freelance project for a dealer company that supplies charcoal, wood, and furniture based in UAE.",
      tech: "NextJs, Node.js, Tailwind CSS",
      link: "https://charwoodksa.com/",
    },
  ];
  return (
    <section id="MyProjects" className="text-center max-w-4xl mx-auto my-16 p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-blue-500 hover:ring-2 hover:ring-blue-800 transition-shadow duration-400">
            <Image src={project.Image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-gray-500 text-sm mb-2">{project.tech}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}