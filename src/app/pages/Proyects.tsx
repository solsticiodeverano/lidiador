export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-lime-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example Project */}
        <div className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">TilaSalud Platform</h3>
          <p className="mb-2 text-gray-300">Frontend and UI design for a healthcare web app.</p>
          <a
            href="#"
            className="text-lime-400 hover:underline"
          >
            View Project →
          </a>
        </div>
        <div className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition">
          <h3 className="text-xl font-semibold mb-2">Revista Crisis Site</h3>
          <p className="mb-2 text-gray-300">Dynamic magazine site built with React & Next.js.</p>
          <a
            href="#"
            className="text-lime-400 hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </section>
  );
}
