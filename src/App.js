// src/App.js

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import WorksSection from "./components/sections/WorksSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import BlogSection from "./components/sections/BlogSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import FAQSection from "./components/sections/FAQSection";

import "./index.css" // Tailwind/global styles


// import Footer from './components/layout/Footer';

import './index.css';   // tailwind / global styles

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <WorksSection />
      <ExperienceSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
