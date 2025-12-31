export default function Skills() {
  return (
    // Skills Section
  <section id="skills" className="py-20 bg-gray-200">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-center text-4xl font-bold mb-12">
      My Skills
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Programming</h3>
        <ul className="space-y-2 text-gray-600 text-start">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>C++</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
        <ul className="space-y-2 text-gray-600 text-start">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
          <li>Bootstap</li>
          <li>Redux Toolkit</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
        <ul className="space-y-2 text-gray-600 text-start">
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Docker</li>
          <li>CI/CD</li>
          <li>AWS </li>
          <li>Azure</li>
          <li>GCP(basic)</li>
          <li>Postman</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Databases</h3>
        <ul className="space-y-2 text-gray-600 text-start">
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>MariaDB</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Design</h3>
        <ul className="space-y-2 text-gray-600 text-start">
          <li>Figma</li>
          <li>Canva</li>
        </ul>
      </div>

       <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-4">Networking / IT</h3>
        <ul className="space-y-2 text-gray-600 text-start">
          <li>LAN/WAN</li>
          <li>System Administration</li>
          <li>Infrastructure Monitoring</li>
          <li>Firewalls</li>
        </ul>
      </div>
      
    </div>
  </div>
</section>

  );
}