"use client";
export default function Experience() {
    return (
      // Experience Section
      <section id="Experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12">
            My Experience
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {/*CrowdAfrik Ltd*/}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md  hover:border-blue-500 hover:ring-2 hover:ring-blue-800 transition-shadow duration-400 ">
              <h3 className="text-xl font-bold mb-2 text-center">Full Stack Developer Intern</h3>
              <p className="text-slate-700 font-semibold">CrowdAfrik Ltd</p>
              <p className="text-slate-600">London, UK (March 2025 - Dec 2025)</p>
              <div className="mt-4">
                <ul>
                    <li>
                     - Developed and deployed full‑stack applications using React, Next.js, Node.js, and MongoDB.
                    </li>
                    <li>
                     - Improved backend stability by reducing API failures by 20%.
                    </li>
                    <li>
                     - Built automated CI/CD pipelines using GitHub workflows.
                    </li>
                    <li>
                     - Collaborated in Agile sprints and contributed to code reviews.
                    </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-5">
            {/*POTS*/}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md  hover:border-blue-500 hover:ring-2 hover:ring-blue-800 transition-shadow duration-400">
              <h3 className="text-xl font-bold mb-2 text-center">Network Administrator</h3>
              <p className="text-slate-700 font-semibold">POTS</p>
              <p className="text-slate-600">Cochin, India (Jan 2024 - Aug 2024)</p>
              <div className="mt-4">
                <ul>
                    <li>
                     - Monitored and maintained network infrastructure to ensure optimal performance.
                    </li>
                    <li>
                     - Performed server monitoring, LAN/WAN troubleshooting, and firewall configuration..
                    </li>
                    <li>
                     - Ensured secure data handling and reliable cloud‑based backup processes.
                    </li>
                    <li>
                     - Part of technical teams conducting government‑level online entrance examinations.
                    </li>
                    <li>
                     - Minimized downtime and improved infrastructure performance.
                    </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-5">
            {/*Luminar Technolab*/}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md  hover:border-blue-500 hover:ring-2 hover:ring-blue-800 transition-shadow duration-400">
              <h3 className="text-xl font-bold mb-2 text-center">Software Developer Intern</h3>
              <p className="text-slate-700 font-semibold">Luminar Technolab</p>
              <p className="text-slate-600">Cochin, India (May 2023 - Dec 2023)</p>
              <div className="mt-4">
                <ul>
                    <li>
                     - Built optimized React.js interfaces improving page load time by 60% and reducing bounce rate by 15%.
                    </li>
                    <li>
                     - Developed RESTful APIs using Node.js and Express, enhancing data retrieval speed by 30%.
                    </li>
                    <li>
                     - Integrated REST APIs, optimized SQL queries, and followed MVC architecture.
                    </li>
                    <li>
                     - Participated in Agile ceremonies and implemented AI‑assisted automation for documentation.
                    </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </section>
    );
}
