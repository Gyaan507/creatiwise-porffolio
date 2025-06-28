import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-12">
          <span className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <span>I AM A</span>
            <div className="w-20 h-12 md:w-32 md:h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/images/one.png" alt="One" className="w-full h-full object-cover" />
          </div>
            <span>FREELANCE</span>
          </span>
          <span className="flex flex-wrap items-center justify-center gap-4">
            <span>DESIGNER</span>
            <div className="w-20 h-12 md:w-32 md:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/images/two.png" alt="Two" className="w-full h-full object-cover" />
            </div>
            <span>FROM</span>
          </span>
          <span className="block mt-4">SAN FRANCISCO</span>
        </h1>
      </div>

      <div className="flex items-center justify-between w-full max-w-6xl mx-auto mt-16">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg">doradesign</span>
          </div>
          <div className="text-lg font-bold">4th wave</div>
          <div className="text-lg font-bold">SIMILA</div>
        </div>

        <div className="max-w-md text-right">
          <p className="text-gray-300 leading-relaxed">
            Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of
            distinctive branding and web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
}
