export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 py-16 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-lime-400">Contact</h2>
      <p className="text-center mb-6 text-gray-300">
        Let’s work together! Send me an email and I’ll get back to you soon.
      </p>
      <div className="text-center">
        <a
          href="mailto:alejo@example.com"
          className="inline-block px-6 py-3 bg-violet-600 rounded hover:bg-violet-700 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
