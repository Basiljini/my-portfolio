    export default function About() {
      return (
        // About Me Section
        <section className="py-20 ml-3 mr-3 bg-gray-200 mt-10"  id="About">
          <h2 className="text-center text-4xl font-bold mb-10">About Me</h2>

          {/* grid layout for text sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-base text-gray-700">
            <div>
              <p>
                I &apos;m a software developer with a strong foundation in Cloud Applications.
                I love working with the latest technologies and frameworks to create
                seamless user experiences. With hands-on experience in full-stack development and a recently completed Master &apos;s focusing in Cloud Computing, I offer a strong mix of technical expertise and cloud-focused strategy.
              </p>
            </div>

            <div>
              <p>
                With almost two years of industry experience, I &apos;ve honed my skills across the full stack,
              delivering robust applications leveraging key technologies such as <span className="font-bold">React.js</span>, <span className="font-bold">Next.js</span>,
              <span className="font-bold">Node.js</span>, and <span className="font-bold">Express.js</span>. My expertise also extends to database management with both
              <span className="font-bold">MySQL</span> and <span className="font-bold">MongoDB</span>, allowing me to build comprehensive and scalable solutions from front to back.
              Beyond development, I bring cloud migration expertise with <span className="font-bold">AWS</span> and <span className="font-bold">Azure</span>—designing secure, scalable, and cost-efficient solutions. This blend of software development and cloud specialization enables me to contribute to both product delivery and digital transformation.
             </p>
             </div>
            
          </div>

          {/* Download Section */}
          <div className="mt-10 text-center flex justify-center ">
            <a href="/Basil-CV.docx" download="Basil-CV.docx"
            className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >Download CV
            <svg className="ml-3 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 9.586V4a1 1 0 011-1z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg></a>
          </div>
        </section>
      );
    }
