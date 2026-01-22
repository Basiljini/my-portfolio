import { FaLinkedin,FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="Contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

        <p className="text-gray-700 mb-10">
          I’m open to job opportunities, collaborations, and meaningful projects.
          If you have something concrete, reach out.
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center gap-8 text-3xl">
          {/* Email */}
          <a
            href="mailto:basiljini02@gmail.com"
            aria-label="Email"
            className="text-gray-700 hover:text-black transition"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/basil-jini/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
