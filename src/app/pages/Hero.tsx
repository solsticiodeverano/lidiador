const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900"
    >
      <h1 className="text-5xl font-extrabold mb-4">
Lidiador      </h1>
      <h2 className="text-2xl text-lime-400 mb-6">
        Fullstack Developer & Digital Artist
      </h2>
      <div className="space-x-4">
        <a
          href="#projects"
          className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded"
        >
          View Projects
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          className="px-4 py-2 border border-lime-400 rounded hover:bg-lime-400 hover:text-black"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
