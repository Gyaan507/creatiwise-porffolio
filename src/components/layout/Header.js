import { useState } from "react";

export default function Header() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <header className="bg-black relative z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Mo.</div>

          {/* Navbar */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </nav>

          {/* Hire‑Me button (desktop & mobile) */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-full px-6 py-2"
          >
            HIRE ME
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-zinc-900 text-white p-6 rounded-lg w-full max-w-sm relative shadow-xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <p className="mb-2"><strong>Mobile:</strong> 8434392525</p>
            <p className="mb-4"><strong>Email:</strong> kumargyan89@gmail.com</p>

            <a
              href="/Gyaneshwar_Kumar.pdf"
              download
              className="inline-block bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
