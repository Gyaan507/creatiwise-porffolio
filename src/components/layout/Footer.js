export default function Footer() {
  const scrollingText = "WEBFLOW • FIGMA • DESIGNER • DEVELOPER • ";

  return (
    <footer className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="overflow-hidden mb-16">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex text-6xl md:text-8xl font-bold text-white/10">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="mr-8">
                  {scrollingText}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">LET'S TALK!</h2>
          <a
            href="mailto:kumargyan89@gmail.com"
            className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2"
          >
            kumargyan89@gmail.com
            <span className="text-2xl">↗</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-400 mb-4 md:mb-0">© Gyaneshwar Kumar - 2025</div>

          <div className="flex gap-8">
            <a href="https://github.com/Gyaan507" className="text-white hover:text-gray-300 transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/gyaneshwar-kumar-8b6250228/" className="text-white hover:text-gray-300 transition-colors">Linkdin</a>
            <a href="https://x.com/gyaan507" className="text-white hover:text-gray-300 transition-colors">Twitter</a>
            <a href="https://www.instagram.com/gyaan507/" className="text-white hover:text-gray-300 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
