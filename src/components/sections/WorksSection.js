import { Sparkles } from "lucide-react";
import Button from "../ui/Button"; 

export default function WorksSection() {
  const projects = [
    {
      title: "Analysis Application",
      description:
        "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      image: "/images/analysis-app.png",
      tags: ["FIGMA", "UX"],
      bgColor: "bg-gradient-to-br from-gray-600 via-gray-500 to-amber-700",
    },
    {
      title: "Fortknox Application",
      description:
        "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      image: "/images/fortknox-app.png",
      tags: ["MOBILE", "WEB"],
      bgColor: "bg-gradient-to-br from-gray-600 via-gray-500 to-amber-700",
    },
  
    {
      title: "Zenocide Application",
      description:
        "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      image: "/images/zenocide-app.png",
      tags: ["APP", "WEB"],
      bgColor: "bg-gradient-to-br from-gray-600 via-gray-500 to-amber-700",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <Sparkles className="w-8 h-8" />
            <h2 className="text-4xl md:text-5xl font-bold">Works</h2>
          </div>
          <a href="#" className="text-white underline hover:text-gray-300">
            view all
          </a>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgColor} rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8`}
            >
              <div className="flex-1">
                <div className="rounded-2xl aspect-video w-full max-w-md overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{project.description}</p>
                <div className="flex gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
